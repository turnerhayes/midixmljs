import { Channel } from "../utils";
import { IMIDIEvent } from "../";
interface NoteParams {
    note: number;
    duration: number;
    offset: number;
    track: number;
    channel?: Channel;
    velocity?: number;
    release?: number;
    meta?: object;
}
export declare class Track {
    private events;
    add(event: IMIDIEvent, offset?: number): this;
    addNote({ note, duration, channel, offset, velocity, release, meta, }: {
        note: number;
        duration: number;
        channel: number;
        offset: number;
        velocity: number;
        release?: number;
        meta?: object;
    }): this;
    [Symbol.iterator](): Iterator<[number, IMIDIEvent]>;
}
export declare class MIDIFile {
    private tempo?;
    private title?;
    private tracks;
    private divisions;
    constructor({ divisions, }: {
        divisions: number;
    });
    setTempo(tempo: number): this;
    getTempo(): number | undefined;
    setTitle(title: string): this;
    getTitle(): string | undefined;
    note({ note, duration, offset, track, channel, velocity, release, meta, }: NoteParams): this;
    toArrayBuffer(): ArrayBufferLike;
}
export {};
//# sourceMappingURL=MFile.d.ts.map