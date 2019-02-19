export { NoteOffEvent } from './NoteOff';

export { NoteOnEvent } from './NoteOn';

export { ProgramChangeEvent } from './ProgramChange';

export { ControllerChangeEvent } from './ControllerChange';

export { PolyphonicAftertouchEvent } from './PolyphonicAftertouch';

export { ChannelAftertouchEvent } from './ChannelAftertouch';

export { PitchBendEvent } from './PitchBend';

export { SysExEvent } from './SysEx';

import {
  SequenceNumberEvent,
  TimeSignatureEvent,
  KeySignatureEvent,
  SetTempoEvent,
  PortPrefixEvent,
  ChannelPrefixEvent,
  CopyrightEvent,
  TrackNameEvent,
  TextEvent,
  InstrumentNameEvent,
  LyricEvent,
  MarkerEvent,
  CuePointEvent,
  SMPTEOffsetEvent,
  SequencerSpecificEvent,
} from './Meta';

export const Meta = {
  SequenceNumberEvent,
  TimeSignatureEvent,
  KeySignatureEvent,
  SetTempoEvent,
  PortPrefixEvent,
  ChannelPrefixEvent,
  CopyrightEvent,
  TrackNameEvent,
  TextEvent,
  InstrumentNameEvent,
  LyricEvent,
  MarkerEvent,
  CuePointEvent,
  SMPTEOffsetEvent,
  SequencerSpecificEvent,
};
