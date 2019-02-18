import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class SequenceNumberEvent implements IMIDIMetaEvent {
    readonly sequenceNumber: number;
    readonly type: MIDIEventType;
    constructor({ sequenceNumber, }: {
        sequenceNumber: number;
    });
}
//# sourceMappingURL=SequenceNumber.d.ts.map