"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PitchBendEvent = void 0;
class PitchBendEvent {
    constructor({ channel, value, }) {
        this.type = 64 /* MIDIEventType.PitchBend */;
        this.channel = channel;
        this.value = value;
    }
}
exports.PitchBendEvent = PitchBendEvent;
