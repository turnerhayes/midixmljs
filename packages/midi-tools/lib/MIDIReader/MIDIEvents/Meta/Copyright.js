export class CopyrightEvent {
    constructor({ copyright, }) {
        this.type = 4096 /* MIDIEventType.MetaCopyright */;
        this.copyright = copyright;
    }
}
