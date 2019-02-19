"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteOff_1 = require("./NoteOff");
exports.NoteOffEvent = NoteOff_1.NoteOffEvent;
var NoteOn_1 = require("./NoteOn");
exports.NoteOnEvent = NoteOn_1.NoteOnEvent;
var ProgramChange_1 = require("./ProgramChange");
exports.ProgramChangeEvent = ProgramChange_1.ProgramChangeEvent;
var ControllerChange_1 = require("./ControllerChange");
exports.ControllerChangeEvent = ControllerChange_1.ControllerChangeEvent;
var PolyphonicAftertouch_1 = require("./PolyphonicAftertouch");
exports.PolyphonicAftertouchEvent = PolyphonicAftertouch_1.PolyphonicAftertouchEvent;
var ChannelAftertouch_1 = require("./ChannelAftertouch");
exports.ChannelAftertouchEvent = ChannelAftertouch_1.ChannelAftertouchEvent;
var PitchBend_1 = require("./PitchBend");
exports.PitchBendEvent = PitchBend_1.PitchBendEvent;
var SysEx_1 = require("./SysEx");
exports.SysExEvent = SysEx_1.SysExEvent;
var Meta_1 = require("./Meta");
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
