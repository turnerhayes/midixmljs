export class SequenceNumberEvent {
    constructor({ sequenceNumber, }) {
        this.type = 256 /* MIDIEventType.MetaSequenceNumber */;
        this.sequenceNumber = sequenceNumber;
    }
}
