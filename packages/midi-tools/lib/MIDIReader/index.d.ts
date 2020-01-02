export { IMIDIEvent, IMIDIChannelEvent, IMIDIMetaEvent, } from "./IMIDIEvent";
export { IMIDIFileHeader, } from "./IMIDIFileHeader";
export { ISMPTE as ISMPTEDivision, ITicksPerQuarterNote as ITicksPerQuarterNoteDivision, } from "./MIDIDivision";
export { MIDIEventType, } from "./MIDIEventType";
import { NoteOffEvent, NoteOnEvent, ProgramChangeEvent, ControllerChangeEvent, PolyphonicAftertouchEvent, ChannelAftertouchEvent, PitchBendEvent, SysExEvent } from "./MIDIEvents";
export declare const MIDIEvents: {
    NoteOffEvent: typeof NoteOffEvent;
    NoteOnEvent: typeof NoteOnEvent;
    ProgramChangeEvent: typeof ProgramChangeEvent;
    ControllerChangeEvent: typeof ControllerChangeEvent;
    PolyphonicAftertouchEvent: typeof PolyphonicAftertouchEvent;
    ChannelAftertouchEvent: typeof ChannelAftertouchEvent;
    PitchBendEvent: typeof PitchBendEvent;
    SysExEvent: typeof SysExEvent;
    Meta: {
        SequenceNumberEvent: typeof import("./MIDIEvents/Meta").SequenceNumberEvent;
        TimeSignatureEvent: typeof import("./MIDIEvents/Meta").TimeSignatureEvent;
        KeySignatureEvent: typeof import("./MIDIEvents/Meta").KeySignatureEvent;
        SetTempoEvent: typeof import("./MIDIEvents/Meta").SetTempoEvent;
        PortPrefixEvent: typeof import("./MIDIEvents/Meta").PortPrefixEvent;
        ChannelPrefixEvent: typeof import("./MIDIEvents/Meta").ChannelPrefixEvent;
        CopyrightEvent: typeof import("./MIDIEvents/Meta").CopyrightEvent;
        TrackNameEvent: typeof import("./MIDIEvents/Meta").TrackNameEvent;
        TextEvent: typeof import("./MIDIEvents/Meta").TextEvent;
        InstrumentNameEvent: typeof import("./MIDIEvents/Meta").InstrumentNameEvent;
        LyricEvent: typeof import("./MIDIEvents/Meta").LyricEvent;
        MarkerEvent: typeof import("./MIDIEvents/Meta").MarkerEvent;
        CuePointEvent: typeof import("./MIDIEvents/Meta").CuePointEvent;
        SMPTEOffsetEvent: typeof import("./MIDIEvents/Meta").SMPTEOffsetEvent;
        SequencerSpecificEvent: typeof import("./MIDIEvents/Meta").SequencerSpecificEvent;
    };
};
export { MIDIFileType, } from "./MIDIFileType";
export { MIDIParseError, } from "./MIDIParseError";
export { MIDIReader, } from "./midi-reader";
//# sourceMappingURL=index.d.ts.map