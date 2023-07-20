export class PitchBendEvent {
    constructor({ channel, value, }) {
        this.type = 64 /* MIDIEventType.PitchBend */;
        this.channel = channel;
        this.value = value;
    }
}
