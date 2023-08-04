"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyrightEvent = void 0;
class CopyrightEvent {
    constructor({ copyright, }) {
        this.type = 4096 /* MIDIEventType.MetaCopyright */;
        this.copyright = copyright;
    }
}
exports.CopyrightEvent = CopyrightEvent;
