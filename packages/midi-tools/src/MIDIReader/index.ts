export {
  IMIDIEvent,
  IMIDIChannelEvent,
  IMIDIMetaEvent,
} from "./IMIDIEvent";

export {
  IMIDIFileHeader,
} from "./IMIDIFileHeader";

export {
  ISMPTE as ISMPTEDivision,
  ITicksPerQuarterNote as ITicksPerQuarterNoteDivision,
} from "./MIDIDivision";

export {
  MIDIEventType,
} from "./MIDIEventType";

import {
  NoteOffEvent,
  NoteOnEvent,
  ProgramChangeEvent,
  ControllerChangeEvent,
  PolyphonicAftertouchEvent,
  ChannelAftertouchEvent,
  PitchBendEvent,
  SysExEvent,
  Meta,
} from "./MIDIEvents";

export const MIDIEvents = {
  NoteOffEvent,
  NoteOnEvent,
  ProgramChangeEvent,
  ControllerChangeEvent,
  PolyphonicAftertouchEvent,
  ChannelAftertouchEvent,
  PitchBendEvent,
  SysExEvent,
  Meta,
};

export {
  MIDIFileType,
} from "./MIDIFileType";

export {
  MIDIParseError,
} from "./MIDIParseError";

export {
  MIDIReader,
} from "./midi-reader";
