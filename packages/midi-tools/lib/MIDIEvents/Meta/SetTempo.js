"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetTempoEvent = void 0;
class SetTempoEvent {
    constructor({ microsecondsPerQuarterNote, }) {
        this.type = 8192 /* MIDIEventType.MetaSetTempo */;
        this.microsecondsPerQuarterNote = microsecondsPerQuarterNote;
    }
}
exports.SetTempoEvent = SetTempoEvent;
