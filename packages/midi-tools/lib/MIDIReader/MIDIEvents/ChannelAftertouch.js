export class ChannelAftertouchEvent {
    constructor({ channel, pressure, }) {
        this.type = 32 /* MIDIEventType.ChannelAftertouch */;
        this.channel = channel;
        this.pressure = pressure;
    }
}
