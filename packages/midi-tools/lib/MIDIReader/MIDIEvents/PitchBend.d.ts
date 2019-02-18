import { IMIDIChannelEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../MIDIEventType";
export declare class PitchBendEvent implements IMIDIChannelEvent {
    readonly channel: number;
    readonly value: number;
    readonly type: MIDIEventType;
    constructor({ channel, value, }: {
        channel: number;
        value: number;
    });
}
//# sourceMappingURL=PitchBend.d.ts.map