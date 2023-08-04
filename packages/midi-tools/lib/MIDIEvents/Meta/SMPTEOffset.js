"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMPTEOffsetEvent = void 0;
class SMPTEOffsetEvent {
    constructor({ hours, minutes, seconds, frames, fractionalFrames, }) {
        this.type = 32768 /* MIDIEventType.MetaSMPTEOffset */;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.frames = frames;
        this.fractionalFrames = fractionalFrames;
    }
}
exports.SMPTEOffsetEvent = SMPTEOffsetEvent;
