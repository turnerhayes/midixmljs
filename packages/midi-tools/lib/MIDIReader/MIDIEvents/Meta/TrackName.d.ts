import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class TrackNameEvent implements IMIDIMetaEvent {
    readonly name: string;
    readonly type: MIDIEventType;
    constructor({ name, }: {
        name: string;
    });
}
//# sourceMappingURL=TrackName.d.ts.map