import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class CuePointEvent implements IMIDIMetaEvent {
    readonly cueText: string;
    readonly type: MIDIEventType;
    constructor({ cueText, }: {
        cueText: string;
    });
}
//# sourceMappingURL=CuePoint.d.ts.map