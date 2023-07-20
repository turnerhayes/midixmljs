export class SetTempoEvent {
    constructor({ microsecondsPerQuarterNote, }) {
        this.type = 8192 /* MIDIEventType.MetaSetTempo */;
        this.microsecondsPerQuarterNote = microsecondsPerQuarterNote;
    }
}
