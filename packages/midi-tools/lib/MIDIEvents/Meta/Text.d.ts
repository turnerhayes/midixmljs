import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class TextEvent implements IMIDIMetaEvent {
    readonly text: string;
    readonly type: MIDIEventType;
    constructor({ text, }: {
        text: string;
    });
}
//# sourceMappingURL=Text.d.ts.map