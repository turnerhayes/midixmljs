import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class SetTempoEvent implements IMIDIMetaEvent {
    readonly microsecondsPerQuarterNote: number;
    readonly type: MIDIEventType;
    constructor({ microsecondsPerQuarterNote, }: {
        microsecondsPerQuarterNote: number;
    });
}
//# sourceMappingURL=SetTempo.d.ts.map