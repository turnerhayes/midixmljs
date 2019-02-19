import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class InstrumentNameEvent implements IMIDIMetaEvent {
    readonly name: string;
    readonly type: MIDIEventType;
    constructor({ name, }: {
        name: string;
    });
}
//# sourceMappingURL=InstrumentName.d.ts.map