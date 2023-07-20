export class SequencerSpecificEvent {
    constructor({ id, data, }) {
        this.type = 2097152 /* MIDIEventType.MetaSequencerSpecific */;
        this.id = id;
        this.data = data;
    }
}
