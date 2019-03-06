import Fraction from "fraction.js";
export declare type NoteTypeName = "whole" | "half" | "quarter" | "eighth" | "16th" | "32nd" | "64th" | "128th" | "256th" | "512th" | "1024th";
export interface INoteType {
    typeName: NoteTypeName;
    dot: boolean;
    duration: number;
    fraction: Fraction;
}
export declare const getNoteTypes: (ppqn: number) => {
    [duration: number]: INoteType;
};
export declare const findNoteType: (divisions: number, ppqn: number) => INoteType;
//# sourceMappingURL=NoteTypes.d.ts.map