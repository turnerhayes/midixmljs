"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackNameEvent = void 0;
class TrackNameEvent {
    constructor({ name, }) {
        this.type = 16384 /* MIDIEventType.MetaTrackName */;
        this.name = name;
    }
}
exports.TrackNameEvent = TrackNameEvent;
