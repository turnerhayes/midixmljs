import { MeasureNote } from "./MeasureNote";
import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";
export declare class MeasureChord implements IMeasureElement {
    readonly notes: MeasureNote[];
    readonly measureNumber: number;
    readonly duration: number;
    readonly noteType: INoteType;
    constructor({ notes, measureNumber, }: {
        notes: MeasureNote[];
        measureNumber: number;
    });
    toJSON(): {
        notes: MeasureNote[];
        measureNumber: number;
    };
}
//# sourceMappingURL=MeasureChord.d.ts.map