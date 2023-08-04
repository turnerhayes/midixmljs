"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteOffEvent = void 0;
class NoteOffEvent {
    constructor({ channel, noteNumber, release, }) {
        this.type = 1 /* MIDIEventType.NoteOff */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.release = release;
    }
}
exports.NoteOffEvent = NoteOffEvent;
