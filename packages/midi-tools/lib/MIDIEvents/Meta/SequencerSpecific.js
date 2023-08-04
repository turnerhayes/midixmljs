"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequencerSpecificEvent = void 0;
class SequencerSpecificEvent {
    constructor({ id, data, }) {
        this.type = 2097152 /* MIDIEventType.MetaSequencerSpecific */;
        this.id = id;
        this.data = data;
    }
}
exports.SequencerSpecificEvent = SequencerSpecificEvent;
