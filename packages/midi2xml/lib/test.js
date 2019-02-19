"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var midi_tools_1 = require("@thayes/midi-tools");
var NoteOnEvent = midi_tools_1.MIDIEvents.NoteOnEvent;
console.log({
    NoteOnEvent: NoteOnEvent,
});
var ev = {
    channel: 1,
    type: 2 /* NoteOn */,
};
console.log(ev.channel);
