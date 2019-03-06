"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MIDIEvents_1 = require("./MIDIEvents");
exports.MIDIEvents = {
    NoteOffEvent: MIDIEvents_1.NoteOffEvent,
    NoteOnEvent: MIDIEvents_1.NoteOnEvent,
    ProgramChangeEvent: MIDIEvents_1.ProgramChangeEvent,
    ControllerChangeEvent: MIDIEvents_1.ControllerChangeEvent,
    PolyphonicAftertouchEvent: MIDIEvents_1.PolyphonicAftertouchEvent,
    ChannelAftertouchEvent: MIDIEvents_1.ChannelAftertouchEvent,
    PitchBendEvent: MIDIEvents_1.PitchBendEvent,
    SysExEvent: MIDIEvents_1.SysExEvent,
    Meta: MIDIEvents_1.Meta,
};
var MIDIFileType_1 = require("./MIDIFileType");
exports.MIDIFileType = MIDIFileType_1.MIDIFileType;
var MIDIParseError_1 = require("./MIDIParseError");
exports.MIDIParseError = MIDIParseError_1.MIDIParseError;
var midi_reader_1 = require("./midi-reader");
exports.MIDIReader = midi_reader_1.MIDIReader;
//# sourceMappingURL=index.js.map