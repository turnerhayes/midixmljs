import { MIDIReader } from "@thayes/midi-tools";
import { ITimeSignature } from "@thayes/midi-tools/lib/utils";
import { Measure } from "./Measure";
export interface ITrackInfo {
    trackNumber: number;
    programNumber: number;
    averageNoteNumber: number;
    name?: string;
    sequenceNumber?: number;
    instrumentName?: string;
    texts?: string[];
}
export interface ITrackData {
    info: ITrackInfo;
    measures: Measure[];
}
export declare type MeasuresByTrack = ITrackData[];
export declare const quarterNotesPerBeat: (timeSignature: ITimeSignature) => number;
export declare const ticksPerBeat: (timeSignature: ITimeSignature, ppqn: number) => number;
export declare const getMeasuresByTrack: (reader: MIDIReader) => ITrackData[];
//# sourceMappingURL=get-measures-by-track.d.ts.map