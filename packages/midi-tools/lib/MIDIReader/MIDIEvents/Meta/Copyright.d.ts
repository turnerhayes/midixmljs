import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class CopyrightEvent implements IMIDIMetaEvent {
    readonly copyright: string;
    readonly type: MIDIEventType;
    constructor({ copyright, }: {
        copyright: string;
    });
}
//# sourceMappingURL=Copyright.d.ts.map