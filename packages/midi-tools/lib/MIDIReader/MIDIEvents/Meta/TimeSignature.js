export class TimeSignatureEvent {
    constructor({ numerator, denominator, clocksPerTick, thirtySecondNotes, }) {
        this.type = 131072 /* MIDIEventType.MetaTimeSignature */;
        this.numerator = numerator;
        this.denominator = denominator;
        this.clocksPerTick = clocksPerTick;
        this.thirtySecondNotes = thirtySecondNotes;
    }
}
