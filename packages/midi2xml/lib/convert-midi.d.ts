/// <reference types="node" />
declare type FileInput = ArrayBuffer | DataView | Uint8Array | Buffer | string;
export declare function convertMIDI({ midiFile, }: {
    midiFile: FileInput;
}): Promise<string>;
export {};
//# sourceMappingURL=convert-midi.d.ts.map