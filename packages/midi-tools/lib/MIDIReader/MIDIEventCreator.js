"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Events = __importStar(require("./MIDIEvents"));
var MIDIMetaEventCreator_1 = require("./MIDIMetaEventCreator");
var variable_length_value_1 = require("../utils/variable-length-value");
var createNoteOffEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var noteNumber = dataView.getUint8(startIndex);
    var release = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.NoteOffEvent({
            channel: channel,
            noteNumber: noteNumber,
            release: release,
        })
    ];
};
var createNoteOnEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var noteNumber = dataView.getUint8(startIndex);
    var velocity = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.NoteOnEvent({
            channel: channel,
            noteNumber: noteNumber,
            velocity: velocity,
        })
    ];
};
var createSysexEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var _a = __read(variable_length_value_1.fromVariableLengthValue(dataView.buffer, dataView.byteOffset + startIndex), 2), bytesRead = _a[0], dataLength = _a[1];
    return [
        bytesRead + dataLength,
        new Events.SysExEvent({
            eventData: new Uint8Array(dataView.buffer, dataView.byteOffset + startIndex, dataLength),
        })
    ];
};
var createProgramChangeEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var programNumber = dataView.getUint8(startIndex);
    return [
        1,
        new Events.ProgramChangeEvent({
            channel: channel,
            programNumber: programNumber,
        })
    ];
};
var createControllerChangeEventFromBytes = function (statusByte, dataView, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var channel = (statusByte & 0xF) + 1;
    var controllerNumber = dataView.getUint8(startIndex);
    var controllerValue = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.ControllerChangeEvent({
            channel: channel,
            controllerNumber: controllerNumber,
            controllerValue: controllerValue,
        })
    ];
};
var createPolyphonicAftertouchEventFromBytes = function (statusByte, dataView, startIndex) {
    var channel = (statusByte & 0xF) + 1;
    var noteNumber = dataView.getUint8(startIndex);
    var pressure = dataView.getUint8(startIndex + 1);
    return [
        2,
        new Events.PolyphonicAftertouchEvent({
            channel: channel,
            noteNumber: noteNumber,
            pressure: pressure,
        })
    ];
};
var createChannelAftertouchEventFromBytes = function (statusByte, dataView, startIndex) {
    var channel = (statusByte & 0xF) + 1;
    var pressure = dataView.getUint8(startIndex + 1);
    return [
        1,
        new Events.ChannelAftertouchEvent({
            channel: channel,
            pressure: pressure,
        })
    ];
};
var createPitchBendEventFromBytes = function (statusByte, dataView, startIndex) {
    var channel = (statusByte & 0xF) + 1;
    var leastSignificantByte = dataView.getUint8(startIndex);
    var mostSignificantByte = dataView.getUint8(startIndex + 1);
    var value = ((mostSignificantByte & 0x7F) << 7) + (leastSignificantByte & 0x7F);
    return [
        2,
        new Events.PitchBendEvent({
            channel: channel,
            value: value,
        })
    ];
};
var getCreateFunction = function (statusByte) {
    if (statusByte >> 4 === 0x8) {
        return createNoteOffEventFromBytes;
    }
    if (statusByte >> 4 === 0x9) {
        return createNoteOnEventFromBytes;
    }
    if (statusByte >> 4 === 0xA) {
        return createPolyphonicAftertouchEventFromBytes;
    }
    if (statusByte >> 4 === 0xB) {
        return createControllerChangeEventFromBytes;
    }
    if (statusByte >> 4 === 0xC) {
        return createProgramChangeEventFromBytes;
    }
    if (statusByte >> 4 === 0xD) {
        return createChannelAftertouchEventFromBytes;
    }
    if (statusByte >> 4 === 0xE) {
        return createPitchBendEventFromBytes;
    }
    if (statusByte === 0xF0) {
        return createSysexEventFromBytes;
    }
    if (statusByte === 0xFF) {
        return MIDIMetaEventCreator_1.createMetaEventFromBytes;
    }
    return null;
};
exports.eventFromBytes = function (dataView, startIndex, previousStatusByte) {
    if (startIndex === void 0) { startIndex = 0; }
    if (previousStatusByte === void 0) { previousStatusByte = null; }
    var statusByte = dataView.getUint8(startIndex);
    var createFunction = getCreateFunction(statusByte);
    var bytesRead = 0;
    if (createFunction === null && previousStatusByte !== null) {
        statusByte = previousStatusByte;
        createFunction = getCreateFunction(statusByte);
    }
    else {
        // The byte at startIndex was the status byte, so skip it in the data
        startIndex += 1;
        bytesRead += 1;
    }
    if (createFunction !== null) {
        var _a = __read(createFunction(statusByte, dataView, startIndex), 2), eventBytesRead = _a[0], event_1 = _a[1];
        bytesRead += eventBytesRead;
        return {
            bytesRead: bytesRead,
            event: event_1,
            statusByte: statusByte,
        };
    }
    return null;
};
//# sourceMappingURL=MIDIEventCreator.js.map