import { IMIDIChannelEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../MIDIEventType";
export declare class ChannelAftertouchEvent implements IMIDIChannelEvent {
    readonly channel: number;
    readonly pressure: number;
    readonly type: MIDIEventType;
    constructor({ channel, pressure, }: {
        channel: number;
        pressure: number;
    });
}
//# sourceMappingURL=ChannelAftertouch.d.ts.map