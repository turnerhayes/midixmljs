"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgramChangeEvent = void 0;
class ProgramChangeEvent {
    constructor({ channel, programNumber, }) {
        this.type = 16 /* MIDIEventType.ProgramChange */;
        this.channel = channel;
        this.programNumber = programNumber;
    }
}
exports.ProgramChangeEvent = ProgramChangeEvent;
