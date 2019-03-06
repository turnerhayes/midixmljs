import { IKeySignature } from "@thayes/midi-tools";
export declare class KeySignatureMap {
    private readonly offsetMap;
    private sortedOffsets;
    addSignature(offset: number, keySignature: IKeySignature): void;
    getSignature(offset: number): IKeySignature;
}
//# sourceMappingURL=KeySignatureMap.d.ts.map