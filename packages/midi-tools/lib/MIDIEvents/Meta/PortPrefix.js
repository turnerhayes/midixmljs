"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortPrefixEvent = void 0;
class PortPrefixEvent {
    constructor({ portNumber, }) {
        this.type = 512 /* MIDIEventType.MetaPortPrefix */;
        this.portNumber = portNumber;
    }
}
exports.PortPrefixEvent = PortPrefixEvent;
