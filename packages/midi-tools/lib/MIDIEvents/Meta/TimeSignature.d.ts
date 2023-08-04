import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class TimeSignatureEvent implements IMIDIMetaEvent {
    readonly numerator: number;
    readonly denominator: number;
    readonly clocksPerTick: number;
    readonly thirtySecondNotes: number;
    readonly type: MIDIEventType;
    constructor({ numerator, denominator, clocksPerTick, thirtySecondNotes, }: {
        numerator: number;
        denominator: number;
        clocksPerTick: number;
        thirtySecondNotes: number;
    });
}
//# sourceMappingURL=TimeSignature.d.ts.map