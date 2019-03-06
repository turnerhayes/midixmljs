import { ITimeSignature } from '@thayes/midi-tools';
export declare class TimeSignatureMap {
    private readonly offsetMap;
    private sortedOffsets;
    addSignature(offset: number, timeSignature: ITimeSignature): void;
    getSignature(offset: number): ITimeSignature;
}
//# sourceMappingURL=TimeSignatureMap.d.ts.map