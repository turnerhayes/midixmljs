export class CuePointEvent {
    constructor({ cueText, }) {
        this.type = 4194304 /* MIDIEventType.MetaCuePoint */;
        this.cueText = cueText;
    }
}
