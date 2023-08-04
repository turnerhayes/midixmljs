import { IMIDIEvent } from "./IMIDIEvent";
import { MIDIEventType } from "../MIDIEventType";
export declare class SysExEvent implements IMIDIEvent {
    readonly eventData: Uint8Array;
    readonly type: MIDIEventType;
    constructor({ eventData, }: {
        eventData: Uint8Array;
    });
}
//# sourceMappingURL=SysEx.d.ts.map