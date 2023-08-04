import { IMIDIEvent } from "../MIDIEvents/IMIDIEvent";
export declare const eventFromBytes: (dataView: DataView, startIndex?: number, previousStatusByte?: number | null) => {
    bytesRead: number;
    event: IMIDIEvent;
    statusByte: number;
};
//# sourceMappingURL=MIDIEventCreator.d.ts.map