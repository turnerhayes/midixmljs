import { IMIDIChannelEvent } from '../IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';
export declare class ProgramChangeEvent implements IMIDIChannelEvent {
    readonly channel: number;
    readonly programNumber: number;
    readonly type: MIDIEventType;
    constructor({ channel, programNumber, }: {
        channel: number;
        programNumber: number;
    });
}
//# sourceMappingURL=ProgramChange.d.ts.map