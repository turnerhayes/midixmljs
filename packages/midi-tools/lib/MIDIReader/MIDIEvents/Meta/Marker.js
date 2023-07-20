export class MarkerEvent {
    constructor({ marker, }) {
        this.type = 1048576 /* MIDIEventType.MetaMarker */;
        this.marker = marker;
    }
}
