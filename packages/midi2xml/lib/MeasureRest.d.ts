import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";
export declare class MeasureRest implements IMeasureElement {
    readonly duration: number;
    readonly noteType: INoteType;
    readonly measureNumber: number;
    constructor({ duration, noteType, measureNumber, }: {
        duration: number;
        noteType: INoteType;
        measureNumber: number;
    });
}
//# sourceMappingURL=MeasureRest.d.ts.map