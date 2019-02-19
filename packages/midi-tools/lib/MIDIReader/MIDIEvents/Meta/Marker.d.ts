import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class MarkerEvent implements IMIDIMetaEvent {
    readonly marker: string;
    readonly type: MIDIEventType;
    constructor({ marker, }: {
        marker: string;
    });
}
//# sourceMappingURL=Marker.d.ts.map