"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolyphonicAftertouchEvent = void 0;
class PolyphonicAftertouchEvent {
    constructor({ channel, noteNumber, pressure, }) {
        this.type = 4 /* MIDIEventType.PolyphonicAftertouch */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.pressure = pressure;
    }
}
exports.PolyphonicAftertouchEvent = PolyphonicAftertouchEvent;
