import { IMIDIChannelEvent } from '../IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';
export declare class PolyphonicAftertouchEvent implements IMIDIChannelEvent {
    readonly channel: number;
    readonly noteNumber: number;
    readonly pressure: number;
    readonly type: MIDIEventType;
    constructor({ channel, noteNumber, pressure, }: {
        channel: number;
        noteNumber: number;
        pressure: number;
    });
}
//# sourceMappingURL=PolyphonicAftertouch.d.ts.map