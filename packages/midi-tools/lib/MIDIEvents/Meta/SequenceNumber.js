"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequenceNumberEvent = void 0;
class SequenceNumberEvent {
    constructor({ sequenceNumber, }) {
        this.type = 256 /* MIDIEventType.MetaSequenceNumber */;
        this.sequenceNumber = sequenceNumber;
    }
}
exports.SequenceNumberEvent = SequenceNumberEvent;
