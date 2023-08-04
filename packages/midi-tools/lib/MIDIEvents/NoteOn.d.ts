import { IMIDIChannelEvent } from './IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';
export declare class NoteOnEvent implements IMIDIChannelEvent {
    readonly channel: number;
    readonly noteNumber: number;
    readonly velocity: number;
    readonly type: MIDIEventType;
    constructor({ channel, noteNumber, velocity, }: {
        channel: number;
        noteNumber: number;
        velocity: number;
    });
}
//# sourceMappingURL=NoteOn.d.ts.map