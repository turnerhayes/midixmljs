export class ProgramChangeEvent {
    constructor({ channel, programNumber, }) {
        this.type = 16 /* MIDIEventType.ProgramChange */;
        this.channel = channel;
        this.programNumber = programNumber;
    }
}
