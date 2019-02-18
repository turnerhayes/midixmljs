import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class SequencerSpecificEvent implements IMIDIMetaEvent {
    readonly id: Uint8Array;
    readonly data: Uint8Array;
    readonly type: MIDIEventType;
    constructor({ id, data, }: {
        id: Uint8Array;
        data: Uint8Array;
    });
}
//# sourceMappingURL=SequencerSpecific.d.ts.map