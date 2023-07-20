export class TrackNameEvent {
    constructor({ name, }) {
        this.type = 16384 /* MIDIEventType.MetaTrackName */;
        this.name = name;
    }
}
