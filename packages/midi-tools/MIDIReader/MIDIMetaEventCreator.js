"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MIDIEvents_1 = require("./MIDIEvents");
var buffer_to_string_1 = require("../utils/buffer-to-string");
var variable_length_value_1 = require("../utils/variable-length-value");
var readStringMetaEvent = function (dataView, startIndex) {
    var index = startIndex;
    var _a = variable_length_value_1.fromVariableLengthValue(dataView.buffer, dataView.byteOffset + index), bytesRead = _a[0], stringLength = _a[1];
    index += bytesRead;
    var str = buffer_to_string_1.bufferToString(dataView.buffer, dataView.byteOffset + index, stringLength);
    index = index + stringLength;
    return [
        bytesRead + stringLength,
        str
    ];
};
exports.createMetaEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var index = startIndex;
    var metaEventTypeNum = dataView.getUint8(index);
    index += 1;
    var event;
    if (metaEventTypeNum === 0x00) {
        // Next byte is 0x02--skip it
        index += 1;
        var sequenceNumber = dataView.getUint16(index);
        index += 2;
        event = new MIDIEvents_1.Meta.SequenceNumberEvent({
            sequenceNumber: sequenceNumber,
        });
    }
    else if (metaEventTypeNum === 0x01) {
        var _a = readStringMetaEvent(dataView, index), bytesRead = _a[0], text = _a[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.TextEvent({
            text: text,
        });
    }
    else if (metaEventTypeNum === 0x02) {
        var _b = readStringMetaEvent(dataView, index), bytesRead = _b[0], copyright = _b[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.CopyrightEvent({
            copyright: copyright,
        });
    }
    else if (metaEventTypeNum === 0x03) {
        var _c = readStringMetaEvent(dataView, index), bytesRead = _c[0], name_1 = _c[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.TrackNameEvent({
            name: name_1,
        });
    }
    else if (metaEventTypeNum === 0x04) {
        var _d = readStringMetaEvent(dataView, index), bytesRead = _d[0], name_2 = _d[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.InstrumentNameEvent({
            name: name_2,
        });
    }
    else if (metaEventTypeNum === 0x05) {
        var _e = readStringMetaEvent(dataView, index), bytesRead = _e[0], lyric = _e[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.LyricEvent({
            lyric: lyric,
        });
    }
    else if (metaEventTypeNum === 0x06) {
        var _f = readStringMetaEvent(dataView, index), bytesRead = _f[0], marker = _f[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.MarkerEvent({
            marker: marker,
        });
    }
    else if (metaEventTypeNum === 0x07) {
        var _g = readStringMetaEvent(dataView, index), bytesRead = _g[0], cueText = _g[1];
        index += bytesRead;
        event = new MIDIEvents_1.Meta.CuePointEvent({
            cueText: cueText,
        });
    }
    else if (metaEventTypeNum === 0x20) {
        // Skip next byte since it is a constant
        index += 1;
        var channelNumber = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.ChannelPrefixEvent({
            channelNumber: channelNumber,
        });
    }
    else if (metaEventTypeNum === 0x21) {
        // Skip next byte since it is a constant
        index += 1;
        var portNumber = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.PortPrefixEvent({
            portNumber: portNumber,
        });
    }
    else if (metaEventTypeNum === 0x2F) {
        // End of track event
        index += 1;
    }
    else if (metaEventTypeNum === 0x51) {
        // Next byte is 0x03--skip it
        index += 1;
        var microsecondsPerQuarterNote = dataView.getUint16(index) << 8 + dataView.getUint8(index + 2);
        index += 3;
        event = new MIDIEvents_1.Meta.SetTempoEvent({
            microsecondsPerQuarterNote: microsecondsPerQuarterNote,
        });
    }
    else if (metaEventTypeNum === 0x54) {
        // Skip next byte because it's a constant
        index += 1;
        var hours = dataView.getUint8(index);
        index += 1;
        var minutes = dataView.getUint8(index);
        index += 1;
        var seconds = dataView.getUint8(index);
        index += 1;
        var frames_1 = dataView.getUint8(index);
        index += 1;
        var fractionalFrames = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.SMPTEOffsetEvent({
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            frames: frames_1,
            fractionalFrames: fractionalFrames,
        });
    }
    else if (metaEventTypeNum === 0x58) {
        // Next byte is 0x04--skip it
        index += 1;
        var numerator = dataView.getUint8(index);
        index += 1;
        var denominator = Math.pow(2, dataView.getUint8(index));
        index += 1;
        var clocksPerTick = dataView.getUint8(index);
        index += 1;
        var thirtySecondNotes = dataView.getUint8(index);
        index += 1;
        event = new MIDIEvents_1.Meta.TimeSignatureEvent({
            numerator: numerator,
            denominator: denominator,
            clocksPerTick: clocksPerTick,
            thirtySecondNotes: thirtySecondNotes,
        });
    }
    else if (metaEventTypeNum === 0x59) {
        // Next byte is 0x02--skip it
        index += 1;
        var sharps = dataView.getInt8(index);
        index += 1;
        var isMajor = dataView.getUint8(index) === 0;
        index += 1;
        event = new MIDIEvents_1.Meta.KeySignatureEvent({
            sharps: sharps,
            isMajor: isMajor,
        });
    }
    else if (metaEventTypeNum === 0x7F) {
        var _h = variable_length_value_1.fromVariableLengthValue(dataView.buffer, dataView.byteOffset + index), bytesRead = _h[0], length_1 = _h[1];
        index += bytesRead;
        var data = new Uint8Array(dataView.buffer, dataView.byteOffset + index, length_1);
        var id = data.slice(0, 1);
        if (id[0] === 0) {
            id = data.slice(0, 3);
            data = data.slice(3);
        }
        else {
            data = data.slice(1);
        }
        event = new MIDIEvents_1.Meta.SequencerSpecificEvent({
            id: id,
            data: data,
        });
    }
    else {
        throw new Error("Unknown MIDI meta event type 0x" + metaEventTypeNum.toString(16));
    }
    return [
        index - startIndex,
        event,
    ];
};
