import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";
export declare class LyricEvent implements IMIDIMetaEvent {
    readonly lyric: string;
    readonly type: MIDIEventType;
    constructor({ lyric, }: {
        lyric: string;
    });
}
//# sourceMappingURL=Lyric.d.ts.map