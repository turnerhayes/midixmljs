export class NoteOnEvent {
    constructor({ channel, noteNumber, velocity, }) {
        this.type = 2 /* MIDIEventType.NoteOn */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.velocity = velocity;
    }
}
