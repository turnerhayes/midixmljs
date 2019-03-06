import { ITimeSignature } from "@thayes/midi-tools/lib/utils";
import { IMeasureElement } from "./IMeasureElement";
export declare class MeasureItemListNode {
    readonly beat: number;
    readonly element: IMeasureElement;
    nextInBeat: MeasureItemListNode | null;
    previousInBeat: MeasureItemListNode | null;
    next: MeasureItemListNode | null;
    previous: MeasureItemListNode | null;
    constructor({ beat, element, }: {
        beat: number;
        element: IMeasureElement;
    });
}
export declare class MeasureItemList implements Iterable<MeasureItemListNode> {
    lastAudibleElement: MeasureItemListNode | null;
    private readonly timeSignature;
    private totalQuarterNotes;
    private readonly nodes;
    readonly lengthInQuarterNotes: number;
    constructor({ timeSignature, }: {
        timeSignature: ITimeSignature;
    });
    add(element: IMeasureElement): this;
    get(index: number): MeasureItemListNode;
    [Symbol.iterator](): IterableIterator<MeasureItemListNode>;
}
//# sourceMappingURL=MeasureItemList.d.ts.map