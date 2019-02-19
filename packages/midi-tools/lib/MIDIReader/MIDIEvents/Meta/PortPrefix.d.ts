import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class PortPrefixEvent implements IMIDIMetaEvent {
    readonly portNumber: number;
    readonly type: MIDIEventType;
    constructor({ portNumber, }: {
        portNumber: number;
    });
}
//# sourceMappingURL=PortPrefix.d.ts.map