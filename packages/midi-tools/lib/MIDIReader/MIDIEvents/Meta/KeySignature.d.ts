import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class KeySignatureEvent implements IMIDIMetaEvent {
    readonly sharps: number;
    readonly isMajor: boolean;
    readonly type: MIDIEventType;
    constructor({ sharps, isMajor, }: {
        sharps: number;
        isMajor: boolean;
    });
}
//# sourceMappingURL=KeySignature.d.ts.map