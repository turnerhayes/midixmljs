import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class ChannelPrefixEvent implements IMIDIMetaEvent {
    readonly channelNumber: number;
    readonly type: MIDIEventType;
    constructor({ channelNumber, }: {
        channelNumber: number;
    });
}
//# sourceMappingURL=ChannelPrefix.d.ts.map