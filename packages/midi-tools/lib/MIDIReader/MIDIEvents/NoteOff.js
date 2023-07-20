export class NoteOffEvent {
    constructor({ channel, noteNumber, release, }) {
        this.type = 1 /* MIDIEventType.NoteOff */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.release = release;
    }
}
