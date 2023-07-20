export class ChannelPrefixEvent {
    constructor({ channelNumber, }) {
        this.type = 1024 /* MIDIEventType.MetaChannelPrefix */;
        this.channelNumber = channelNumber;
    }
}
