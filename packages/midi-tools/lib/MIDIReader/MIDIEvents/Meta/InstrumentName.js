export class InstrumentNameEvent {
    constructor({ name, }) {
        this.type = 65536 /* MIDIEventType.MetaInstrumentName */;
        this.name = name;
    }
}
