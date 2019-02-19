import { IMIDIEvent } from "./IMIDIEvent";
export declare const eventFromBytes: (dataView: DataView, startIndex?: number, previousStatusByte?: number) => {
    bytesRead: number;
    event: IMIDIEvent;
    statusByte: number;
};
//# sourceMappingURL=MIDIEventCreator.d.ts.map