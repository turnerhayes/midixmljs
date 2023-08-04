"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIDIEvents = exports.Meta = exports.SequencerSpecificEvent = exports.SMPTEOffsetEvent = exports.CuePointEvent = exports.MarkerEvent = exports.LyricEvent = exports.InstrumentNameEvent = exports.TextEvent = exports.TrackNameEvent = exports.CopyrightEvent = exports.ChannelPrefixEvent = exports.PortPrefixEvent = exports.SetTempoEvent = exports.KeySignatureEvent = exports.TimeSignatureEvent = exports.SequenceNumberEvent = exports.SysExEvent = exports.PitchBendEvent = exports.ChannelAftertouchEvent = exports.PolyphonicAftertouchEvent = exports.ControllerChangeEvent = exports.ProgramChangeEvent = exports.NoteOnEvent = exports.NoteOffEvent = void 0;
const NoteOff_1 = require("./NoteOff");
Object.defineProperty(exports, "NoteOffEvent", { enumerable: true, get: function () { return NoteOff_1.NoteOffEvent; } });
const NoteOn_1 = require("./NoteOn");
Object.defineProperty(exports, "NoteOnEvent", { enumerable: true, get: function () { return NoteOn_1.NoteOnEvent; } });
const ProgramChange_1 = require("./ProgramChange");
Object.defineProperty(exports, "ProgramChangeEvent", { enumerable: true, get: function () { return ProgramChange_1.ProgramChangeEvent; } });
const ControllerChange_1 = require("./ControllerChange");
Object.defineProperty(exports, "ControllerChangeEvent", { enumerable: true, get: function () { return ControllerChange_1.ControllerChangeEvent; } });
const PolyphonicAftertouch_1 = require("./PolyphonicAftertouch");
Object.defineProperty(exports, "PolyphonicAftertouchEvent", { enumerable: true, get: function () { return PolyphonicAftertouch_1.PolyphonicAftertouchEvent; } });
const ChannelAftertouch_1 = require("./ChannelAftertouch");
Object.defineProperty(exports, "ChannelAftertouchEvent", { enumerable: true, get: function () { return ChannelAftertouch_1.ChannelAftertouchEvent; } });
const PitchBend_1 = require("./PitchBend");
Object.defineProperty(exports, "PitchBendEvent", { enumerable: true, get: function () { return PitchBend_1.PitchBendEvent; } });
const SysEx_1 = require("./SysEx");
Object.defineProperty(exports, "SysExEvent", { enumerable: true, get: function () { return SysEx_1.SysExEvent; } });
const Meta_1 = require("./Meta");
Object.defineProperty(exports, "SequenceNumberEvent", { enumerable: true, get: function () { return Meta_1.SequenceNumberEvent; } });
Object.defineProperty(exports, "TimeSignatureEvent", { enumerable: true, get: function () { return Meta_1.TimeSignatureEvent; } });
Object.defineProperty(exports, "KeySignatureEvent", { enumerable: true, get: function () { return Meta_1.KeySignatureEvent; } });
Object.defineProperty(exports, "SetTempoEvent", { enumerable: true, get: function () { return Meta_1.SetTempoEvent; } });
Object.defineProperty(exports, "PortPrefixEvent", { enumerable: true, get: function () { return Meta_1.PortPrefixEvent; } });
Object.defineProperty(exports, "ChannelPrefixEvent", { enumerable: true, get: function () { return Meta_1.ChannelPrefixEvent; } });
Object.defineProperty(exports, "CopyrightEvent", { enumerable: true, get: function () { return Meta_1.CopyrightEvent; } });
Object.defineProperty(exports, "TrackNameEvent", { enumerable: true, get: function () { return Meta_1.TrackNameEvent; } });
Object.defineProperty(exports, "TextEvent", { enumerable: true, get: function () { return Meta_1.TextEvent; } });
Object.defineProperty(exports, "InstrumentNameEvent", { enumerable: true, get: function () { return Meta_1.InstrumentNameEvent; } });
Object.defineProperty(exports, "LyricEvent", { enumerable: true, get: function () { return Meta_1.LyricEvent; } });
Object.defineProperty(exports, "MarkerEvent", { enumerable: true, get: function () { return Meta_1.MarkerEvent; } });
Object.defineProperty(exports, "CuePointEvent", { enumerable: true, get: function () { return Meta_1.CuePointEvent; } });
Object.defineProperty(exports, "SMPTEOffsetEvent", { enumerable: true, get: function () { return Meta_1.SMPTEOffsetEvent; } });
Object.defineProperty(exports, "SequencerSpecificEvent", { enumerable: true, get: function () { return Meta_1.SequencerSpecificEvent; } });
exports.Meta = {
    SequenceNumberEvent: Meta_1.SequenceNumberEvent,
    TimeSignatureEvent: Meta_1.TimeSignatureEvent,
    KeySignatureEvent: Meta_1.KeySignatureEvent,
    SetTempoEvent: Meta_1.SetTempoEvent,
    PortPrefixEvent: Meta_1.PortPrefixEvent,
    ChannelPrefixEvent: Meta_1.ChannelPrefixEvent,
    CopyrightEvent: Meta_1.CopyrightEvent,
    TrackNameEvent: Meta_1.TrackNameEvent,
    TextEvent: Meta_1.TextEvent,
    InstrumentNameEvent: Meta_1.InstrumentNameEvent,
    LyricEvent: Meta_1.LyricEvent,
    MarkerEvent: Meta_1.MarkerEvent,
    CuePointEvent: Meta_1.CuePointEvent,
    SMPTEOffsetEvent: Meta_1.SMPTEOffsetEvent,
    SequencerSpecificEvent: Meta_1.SequencerSpecificEvent,
};
exports.MIDIEvents = {
    NoteOffEvent: NoteOff_1.NoteOffEvent,
    NoteOnEvent: NoteOn_1.NoteOnEvent,
    ProgramChangeEvent: ProgramChange_1.ProgramChangeEvent,
    ControllerChangeEvent: ControllerChange_1.ControllerChangeEvent,
    PolyphonicAftertouchEvent: PolyphonicAftertouch_1.PolyphonicAftertouchEvent,
    ChannelAftertouchEvent: ChannelAftertouch_1.ChannelAftertouchEvent,
    PitchBendEvent: PitchBend_1.PitchBendEvent,
    SysExEvent: SysEx_1.SysExEvent,
    Meta: exports.Meta,
};
