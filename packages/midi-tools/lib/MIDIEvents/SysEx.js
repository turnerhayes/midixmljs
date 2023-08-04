"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SysExEvent = void 0;
class SysExEvent {
    constructor({ eventData, }) {
        this.type = 128 /* MIDIEventType.Sysex */;
        this.eventData = eventData;
    }
}
exports.SysExEvent = SysExEvent;
