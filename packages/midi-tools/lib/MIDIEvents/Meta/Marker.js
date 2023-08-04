"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkerEvent = void 0;
class MarkerEvent {
    constructor({ marker, }) {
        this.type = 1048576 /* MIDIEventType.MetaMarker */;
        this.marker = marker;
    }
}
exports.MarkerEvent = MarkerEvent;
