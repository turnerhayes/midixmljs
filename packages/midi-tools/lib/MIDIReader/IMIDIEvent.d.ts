import { MIDIEventType } from './MIDIEventType';
export interface IMIDIEvent {
    type: MIDIEventType;
}
export interface IMIDIChannelEvent extends IMIDIEvent {
    channel: number;
}
export interface IMIDIMetaEvent extends IMIDIEvent {
}
//# sourceMappingURL=IMIDIEvent.d.ts.map