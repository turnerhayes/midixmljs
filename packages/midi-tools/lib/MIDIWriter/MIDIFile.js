"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __importDefault(require("debug"));
var utils_1 = require("../utils");
var debug = debug_1.default("midi-tools:MIDIFile");
var stringToCharCodeArray = function (str) {
    return new Uint8Array(str.split("").map(function (chr) { return chr.charCodeAt(0); }));
};
var mthdString = stringToCharCodeArray("MThd");
var mtrkString = stringToCharCodeArray("MTrk");
var END_OF_TRACK_EVENT = new Uint8Array([0xFF, 0x2F, 0x00]);
var numberToBytes = function (num, minBytes) {
    var bytes = [];
    do {
        bytes.unshift(num & 0xFF);
        num = num >> 8;
    } while (num > 0 || bytes.length < minBytes);
    return new Uint8Array(bytes);
};
var getNoteOnEvent = function (note, channel, velocity) {
    return new Uint8Array([
        144 /* NoteOn */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
var getNoteOffEvent = function (note, channel, velocity) {
    return new Uint8Array([
        128 /* NoteOff */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
var getProgramChangeEvent = function (_a) {
    var channel = _a.channel, program = _a.program;
    return new Uint8Array([
        192 /* ProgramChange */ + (channel - 1),
        program
    ]);
};
var getFileHeader = function (_a) {
    var divisions = _a.divisions, trackCount = _a.trackCount;
    var format = trackCount === 1 ?
        0 :
        1;
    // # of divisions per quarter note (15 bits only)
    var divisionsBytes = numberToBytes(divisions & 0x7FFF, 2);
    var trackCountBytes = numberToBytes(trackCount, 2);
    var totalLength = mthdString.byteLength +
        // 4 bytes for length field  
        4 +
        // 2 bytes for format field
        2 +
        trackCountBytes.byteLength +
        divisionsBytes.byteLength;
    var header = new Uint8Array(totalLength);
    var index = 0;
    header.set(mthdString, index);
    index += mthdString.byteLength;
    // Length field, MSB first
    header.set(Uint8Array.of(0, 0, 0, 6), index);
    index += 4;
    header.set(Uint8Array.of(0, format), index);
    index += 2;
    header.set(trackCountBytes, index);
    index += trackCountBytes.byteLength;
    header.set(divisionsBytes, index);
    index += divisionsBytes.byteLength;
    return header;
};
var getTrackHeader = function (_a) {
    var length = _a.length;
    // 4 for the MTrk header, 4 for the length buffer
    var buff = new ArrayBuffer(8);
    new Uint8Array(buff).set(mtrkString, 0);
    new DataView(buff).setUint32(4, length);
    return new Uint8Array(buff);
};
var MIDIFile = /** @class */ (function () {
    function MIDIFile(_a) {
        var divisions = _a.divisions;
        this.buffers = [];
        this.tracks = {};
        this.omniTrackEvents = [];
        this.divisions = divisions;
    }
    MIDIFile.prototype.programChange = function (_a) {
        var offset = _a.offset, program = _a.program, track = _a.track, _b = _a.channel, channel = _b === void 0 ? 1 : _b;
        var programChangeEvent = getProgramChangeEvent({ channel: channel, program: program });
        var bufferInfo = {
            event: programChangeEvent,
            eventType: 192 /* ProgramChange */,
            divisionOffset: offset,
        };
        if (track === undefined) {
            this.omniTrackEvents.push(bufferInfo);
        }
        else {
            if (!(track in this.tracks)) {
                this.tracks[track] = {
                    buffers: [],
                };
            }
            this.tracks[track].buffers.push(bufferInfo);
        }
    };
    MIDIFile.prototype.timeSignature = function (_a) {
        var numerator = _a.numerator, denominator = _a.denominator;
        var event = new Uint8Array([
            255 /* Meta */,
            88 /* TimeSignature */,
            4,
            numerator,
            Math.log2(denominator),
            // @todo: figure out how to actually deal with these parameters
            // robustly--I don't really understand them entirely
            // Number of metronome ticks per quarter note
            24,
            // Number of 1/32nd notes per MIDI quarter note
            8,
        ]);
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.keySignature = function (_a) {
        var keySignature = _a.keySignature, _b = _a.offset, offset = _b === void 0 ? 0 : _b;
        var event = new Uint8Array([
            255 /* Meta */,
            89 /* KeySignature */,
            2,
            keySignature.sharps,
            // major (0) vs. minor (1)
            // @todo: Actually find major/minor key from XML
            keySignature.mode === "minor" ? 1 : 0,
        ]);
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: offset,
        });
    };
    MIDIFile.prototype.setTitle = function (title) {
        // add 1 for null terminator byte
        var length = utils_1.toVariableLengthValue(title.length + 1);
        var chars = stringToCharCodeArray(title + "\0");
        var totalLength = 2 + // 1 byte each for status and subtype
            length.byteLength +
            chars.byteLength;
        var event = new Uint8Array(totalLength);
        var index = 0;
        event.set(Uint8Array.of(255 /* Meta */, 3 /* TrackName */), index);
        index += 2;
        event.set(length, index);
        index += length.byteLength;
        event.set(chars, index);
        index += chars.byteLength;
        this.buffers.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.note = function (_a) {
        var note = _a.note, duration = _a.duration, offset = _a.offset, track = _a.track, _b = _a.channel, channel = _b === void 0 ? 1 : _b, _c = _a.velocity, velocity = _c === void 0 ? 64 : _c, _d = _a.release, release = _d === void 0 ? velocity : _d, _e = _a.meta, meta = _e === void 0 ? {} : _e;
        var noteOnEvent = getNoteOnEvent(note, channel, velocity);
        var noteName = utils_1.NoteNumberToName(note);
        noteName = "" + noteName.step + (noteName.alter === 1 ?
            '#' :
            noteName.alter === -1 ?
                'b' :
                '') + noteName.octave;
        if (!(track in this.tracks)) {
            this.tracks[track] = {
                buffers: [],
            };
        }
        this.tracks[track].buffers.push({
            event: noteOnEvent,
            eventType: 144 /* NoteOn */,
            divisionOffset: offset,
            meta: __assign({ name: noteName }, meta),
        });
        debug('note on: ', {
            note: note,
            offset: offset,
            duration: duration,
            channel: channel,
            velocity: velocity,
            event: noteOnEvent,
        });
        var noteOffEvent = getNoteOffEvent(note, channel, release);
        var noteOffOffset = offset + duration;
        debug('note off: ', {
            note: note,
            offset: noteOffOffset,
            channel: channel,
            release: release,
            meta: __assign({ name: noteName }, meta),
        });
        this.tracks[track].buffers.push({
            event: noteOffEvent,
            eventType: 128 /* NoteOff */,
            divisionOffset: noteOffOffset,
        });
    };
    MIDIFile.prototype.setTempo = function (tempo) {
        var microsecondsPerQuarterNote = 6e7 / tempo;
        var tempoBytes = numberToBytes(microsecondsPerQuarterNote, 3);
        // 1 byte each for status type and meta type, and 1 for constant value 0x03 after meta type
        var totalLength = 3 +
            tempoBytes.byteLength;
        var event = new Uint8Array(totalLength);
        var index = 0;
        event.set(Uint8Array.of(255 /* Meta */, 81 /* SetTempo */, 3), index);
        index += 3;
        event.set(tempoBytes, index);
        index += tempoBytes.byteLength;
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.sortBuffers = function () {
        var _this = this;
        return Object.keys(this.tracks).reduce(function (reduction, trackNumber) {
            // shallow clone to avoid adding omniTrackEvents to the actual tracks
            var trackBuffers = _this.tracks[trackNumber].buffers.slice();
            trackBuffers.unshift.apply(trackBuffers, _this.omniTrackEvents);
            reduction[trackNumber] = trackBuffers.sort(function (a, b) {
                var offsetDiff = a.divisionOffset - b.divisionOffset;
                if (offsetDiff === 0) {
                    if (a.eventType === b.eventType) {
                        return 0;
                    }
                    if (a.eventType === 192 /* ProgramChange */ ||
                        a.eventType === 255 /* Meta */) {
                        if (b.eventType === 192 /* ProgramChange */ ||
                            b.eventType === 255 /* Meta */) {
                            return 0;
                        }
                        return -1;
                    }
                    return 1;
                }
                return offsetDiff;
            });
            return reduction;
        }, {});
    };
    MIDIFile.prototype.toArrayBuffer = function () {
        var buffers = this.sortBuffers();
        var trackCount = Object.keys(this.tracks).length;
        var trackLengths = Object.keys(buffers).reduce(function (totals, trackNumber) {
            var prevDuration = 0;
            totals[trackNumber] = buffers[trackNumber].reduce(function (total, midiEventInfo) {
                total = total + midiEventInfo.event.length;
                var deltaTime = midiEventInfo.divisionOffset - prevDuration;
                var deltaTimeBuffer = utils_1.toVariableLengthValue(deltaTime);
                total += deltaTimeBuffer.length;
                midiEventInfo.deltaTimeBuffer = deltaTimeBuffer;
                prevDuration = midiEventInfo.divisionOffset;
                return total;
            }, 0);
            totals[trackNumber] += 1 + // The delta time offset for end of track is 0, which takes 1 byte in VLV
                END_OF_TRACK_EVENT.length;
            return totals;
        }, {});
        var headerChunk = getFileHeader({
            divisions: this.divisions,
            trackCount: trackCount,
        });
        var trackHeaders = Object.keys(buffers).reduce(function (headers, trackNumber) {
            headers[trackNumber] = getTrackHeader({
                length: trackLengths[trackNumber],
            });
            return headers;
        }, {});
        var totalLength = headerChunk.length;
        totalLength += Object.keys(trackHeaders).reduce(function (total, trackNumber) { return total + trackHeaders[trackNumber].length; }, 0);
        totalLength += Object.keys(buffers).reduce(function (total, trackNumber) { return total + trackLengths[trackNumber]; }, 0);
        var buff = new ArrayBuffer(totalLength);
        var arr = new Uint8Array(buff);
        var offset = 0;
        arr.set(headerChunk, offset);
        offset += headerChunk.length;
        Object.keys(buffers).forEach(function (trackNumber) {
            arr.set(trackHeaders[trackNumber], offset);
            offset += trackHeaders[trackNumber].length;
            buffers[trackNumber].forEach(function (midiEventInfo) {
                var deltaTimeBuffer = midiEventInfo.deltaTimeBuffer;
                arr.set(deltaTimeBuffer, offset);
                offset += deltaTimeBuffer.length;
                arr.set(midiEventInfo.event, offset);
                offset += midiEventInfo.event.length;
            });
            // Delta time for end of track event is 0, so the buffer for it is always
            // the same
            arr.set(Uint8Array.from([0]), offset);
            offset += 1;
            arr.set(END_OF_TRACK_EVENT, offset);
            offset += END_OF_TRACK_EVENT.length;
        });
        return buff;
    };
    return MIDIFile;
}());
exports.MIDIFile = MIDIFile;
