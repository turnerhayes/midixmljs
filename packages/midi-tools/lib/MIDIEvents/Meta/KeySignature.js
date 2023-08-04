"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeySignatureEvent = void 0;
class KeySignatureEvent {
    constructor({ sharps, isMajor, }) {
        this.type = 524288 /* MIDIEventType.MetaKeySignature */;
        this.sharps = sharps;
        this.isMajor = isMajor;
    }
}
exports.KeySignatureEvent = KeySignatureEvent;
