import { MIDIFileType } from './MIDIFileType';
import { ITicksPerQuarterNote, ISMPTE } from './MIDIDivision';
export interface IMIDIFileHeader {
    fileType: MIDIFileType;
    trackCount: number;
    division: ITicksPerQuarterNote | ISMPTE;
}
//# sourceMappingURL=IMIDIFileHeader.d.ts.map