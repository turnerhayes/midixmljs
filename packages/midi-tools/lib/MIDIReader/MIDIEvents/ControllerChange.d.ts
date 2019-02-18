import { IMIDIChannelEvent } from '../IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';
export declare class ControllerChangeEvent implements IMIDIChannelEvent {
    readonly channel: number;
    readonly controllerNumber: number;
    readonly controllerValue: number;
    readonly type: MIDIEventType;
    constructor({ channel, controllerNumber, controllerValue, }: {
        channel: number;
        controllerNumber: number;
        controllerValue: number;
    });
}
//# sourceMappingURL=ControllerChange.d.ts.map