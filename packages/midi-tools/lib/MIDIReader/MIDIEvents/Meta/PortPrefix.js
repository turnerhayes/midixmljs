export class PortPrefixEvent {
    constructor({ portNumber, }) {
        this.type = 512 /* MIDIEventType.MetaPortPrefix */;
        this.portNumber = portNumber;
    }
}
