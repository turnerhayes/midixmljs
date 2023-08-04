"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPrefixEvent = void 0;
class ChannelPrefixEvent {
    constructor({ channelNumber, }) {
        this.type = 1024 /* MIDIEventType.MetaChannelPrefix */;
        this.channelNumber = channelNumber;
    }
}
exports.ChannelPrefixEvent = ChannelPrefixEvent;
