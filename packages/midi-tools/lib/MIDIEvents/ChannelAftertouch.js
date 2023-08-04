"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelAftertouchEvent = void 0;
class ChannelAftertouchEvent {
    constructor({ channel, pressure, }) {
        this.type = 32 /* MIDIEventType.ChannelAftertouch */;
        this.channel = channel;
        this.pressure = pressure;
    }
}
exports.ChannelAftertouchEvent = ChannelAftertouchEvent;
