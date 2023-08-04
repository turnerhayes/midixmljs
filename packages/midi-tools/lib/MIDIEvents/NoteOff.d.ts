import { IMIDIChannelEvent } from './IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';
export declare class NoteOffEvent implements IMIDIChannelEvent {
    readonly channel: number;
    readonly noteNumber: number;
    readonly release: number;
    readonly type: MIDIEventType;
    constructor({ channel, noteNumber, release, }: {
        channel: number;
        noteNumber: number;
        release: number;
    });
}
//# sourceMappingURL=NoteOff.d.ts.map