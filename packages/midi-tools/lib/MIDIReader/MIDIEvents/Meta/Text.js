export class TextEvent {
    constructor({ text, }) {
        this.type = 2048 /* MIDIEventType.MetaText */;
        this.text = text;
    }
}
