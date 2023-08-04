"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CuePointEvent = void 0;
class CuePointEvent {
    constructor({ cueText, }) {
        this.type = 4194304 /* MIDIEventType.MetaCuePoint */;
        this.cueText = cueText;
    }
}
exports.CuePointEvent = CuePointEvent;
