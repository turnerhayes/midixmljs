"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeSignatureEvent = void 0;
class TimeSignatureEvent {
    constructor({ numerator, denominator, clocksPerTick, thirtySecondNotes, }) {
        this.type = 131072 /* MIDIEventType.MetaTimeSignature */;
        this.numerator = numerator;
        this.denominator = denominator;
        this.clocksPerTick = clocksPerTick;
        this.thirtySecondNotes = thirtySecondNotes;
    }
}
exports.TimeSignatureEvent = TimeSignatureEvent;
