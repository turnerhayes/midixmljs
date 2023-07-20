export class SysExEvent {
    constructor({ eventData, }) {
        this.type = 128 /* MIDIEventType.Sysex */;
        this.eventData = eventData;
    }
}
