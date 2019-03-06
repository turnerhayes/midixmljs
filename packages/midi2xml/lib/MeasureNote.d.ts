import { IPitch } from "@thayes/midi-tools";
import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";
export declare class MeasureNote implements IMeasureElement {
    readonly pitch: IPitch;
    readonly noteType: INoteType;
    readonly duration: number;
    readonly measureNumber: number;
    constructor({ pitch, noteType, duration, measureNumber, }: {
        pitch: IPitch;
        noteType: INoteType;
        duration: number;
        measureNumber: number;
    });
    toJSON(): {
        pitch: IPitch;
        duration: number;
        measureNumber: number;
    };
}
//# sourceMappingURL=MeasureNote.d.ts.map