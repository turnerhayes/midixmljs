"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentNameEvent = void 0;
class InstrumentNameEvent {
    constructor({ name, }) {
        this.type = 65536 /* MIDIEventType.MetaInstrumentName */;
        this.name = name;
    }
}
exports.InstrumentNameEvent = InstrumentNameEvent;
