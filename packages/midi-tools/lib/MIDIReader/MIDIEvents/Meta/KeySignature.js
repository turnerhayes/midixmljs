export class KeySignatureEvent {
    constructor({ sharps, isMajor, }) {
        this.type = 524288 /* MIDIEventType.MetaKeySignature */;
        this.sharps = sharps;
        this.isMajor = isMajor;
    }
}
