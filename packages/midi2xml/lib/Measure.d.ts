import { IKeySignature } from "@thayes/midi-tools";
import { ITimeSignature } from "@thayes/midi-tools/lib/utils";
import { MeasureNote } from "./MeasureNote";
import { IMeasureElement } from "./IMeasureElement";
import { MeasureRest } from "./MeasureRest";
import { TimeSignatureMap } from "./TimeSignatureMap";
import { KeySignatureMap } from "./KeySignatureMap";
import { MeasureItemList } from "./MeasureItemList";
export declare class Measure {
    private _notes;
    private readonly measureElementsByOffset;
    readonly timeSignature: ITimeSignature;
    readonly keySignature: IKeySignature;
    private readonly timeSignatureMap;
    private readonly keySignatureMap;
    readonly startOffset: number;
    readonly endOffset: number;
    readonly number: number;
    readonly measureItems: MeasureItemList;
    readonly isFull: boolean;
    constructor({ timeSignatureMap, keySignatureMap, startOffset, endOffset, number, }: {
        timeSignatureMap: TimeSignatureMap;
        keySignatureMap: KeySignatureMap;
        startOffset: number;
        endOffset: number;
        number: number;
    });
    readonly notes: IMeasureElement[];
    readonly totalQuarterNotes: number;
    addNote({ offset, note, }: {
        offset: number;
        note: MeasureNote;
    }): void;
    addRest({ offset, rest, }: {
        offset: number;
        rest: MeasureRest;
    }): void;
    private invalidateNotesCache;
    toJSON(): {
        keySignature: IKeySignature;
        timeSignature: ITimeSignature;
        notes: IMeasureElement[];
    };
}
//# sourceMappingURL=Measure.d.ts.map