import { IKeySignature, Channel } from "../utils";
import { ITimeSignature } from "../utils/ITimeSignature";
declare const enum MIDIMessageStatus {
    NoteOn = 144,
    NoteOff = 128,
    ProgramChange = 192,
    Meta = 255
}
interface IBufferInfo {
    event: Uint8Array;
    eventType: MIDIMessageStatus;
    divisionOffset: number;
    deltaTimeBuffer?: Uint8Array;
    meta?: any;
}
export declare class MIDIFile {
    readonly divisions: number;
    private buffers;
    private tracks;
    private omniTrackEvents;
    private title?;
    constructor({ divisions, title, }: {
        divisions: number;
        title?: string;
    });
    programChange({ offset, program, track, channel, }: {
        offset: number;
        program: number;
        track?: number;
        channel?: Channel;
    }): this;
    timeSignature({ numerator, denominator, }: ITimeSignature): this;
    keySignature({ keySignature, offset, }: {
        keySignature: IKeySignature;
        offset: number;
    }): this;
    setTitle(title: string): this;
    private writeTitle;
    note({ note, duration, offset, track, channel, velocity, release, meta, }: {
        note: number;
        duration: number;
        offset: number;
        track: number;
        channel?: Channel;
        velocity?: number;
        release?: number;
        meta?: object;
    }): this;
    setTempo(tempo: number): this;
    sortBuffers(): {
        [trackNumber: number]: IBufferInfo[];
    };
    toArrayBuffer(): ArrayBuffer;
}
export {};
//# sourceMappingURL=MIDIFile.d.ts.map