"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextEvent = void 0;
class TextEvent {
    constructor({ text, }) {
        this.type = 2048 /* MIDIEventType.MetaText */;
        this.text = text;
    }
}
exports.TextEvent = TextEvent;
