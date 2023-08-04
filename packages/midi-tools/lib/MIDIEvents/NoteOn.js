"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteOnEvent = void 0;
class NoteOnEvent {
    constructor({ channel, noteNumber, velocity, }) {
        this.type = 2 /* MIDIEventType.NoteOn */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.velocity = velocity;
    }
}
exports.NoteOnEvent = NoteOnEvent;
