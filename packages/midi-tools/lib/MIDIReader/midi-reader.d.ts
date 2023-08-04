/// <reference types="node" />
import { MIDIEventType, IMIDIFileHeader } from '../';
import { IMIDIEvent } from '../MIDIEvents/IMIDIEvent';
export declare class MIDIReader {
    private readonly buffer;
    private readonly bufferOffset;
    private readonly bufferLength;
    private readonly dataView;
    private readonly trackStartOffset;
    readonly header: IMIDIFileHeader;
    constructor(buffer: ArrayBuffer | DataView | Buffer);
    private readUint32;
    private readUint16;
    private readString;
    private readVariableLength;
    private readMIDIEvent;
    private readFileHeader;
    readTracks({ eventTypes, }?: {
        eventTypes?: MIDIEventType;
    }): Generator<{
        trackNumber: number;
        deltaTime: number;
        event: IMIDIEvent;
    }, void, unknown>;
}
//# sourceMappingURL=midi-reader.d.ts.map