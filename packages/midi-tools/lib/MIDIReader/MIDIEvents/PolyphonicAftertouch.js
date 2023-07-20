export class PolyphonicAftertouchEvent {
    constructor({ channel, noteNumber, pressure, }) {
        this.type = 4 /* MIDIEventType.PolyphonicAftertouch */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.pressure = pressure;
    }
}
