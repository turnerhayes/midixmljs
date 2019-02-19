import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class SMPTEOffsetEvent implements IMIDIMetaEvent {
    readonly hours: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly frames: number;
    readonly fractionalFrames: number;
    readonly type: MIDIEventType;
    constructor({ hours, minutes, seconds, frames, fractionalFrames, }: {
        hours: number;
        minutes: number;
        seconds: number;
        frames: number;
        fractionalFrames: number;
    });
}
//# sourceMappingURL=SMPTEOffset.d.ts.map