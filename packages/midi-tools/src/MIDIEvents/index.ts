import { NoteOffEvent } from './NoteOff';

import { NoteOnEvent } from './NoteOn';

import { ProgramChangeEvent } from './ProgramChange';

import { ControllerChangeEvent } from './ControllerChange';

import { PolyphonicAftertouchEvent } from './PolyphonicAftertouch';

import { ChannelAftertouchEvent } from './ChannelAftertouch';

import { PitchBendEvent } from './PitchBend';

import { SysExEvent } from './SysEx';

export {
  NoteOffEvent,
  NoteOnEvent,
  ProgramChangeEvent,
  ControllerChangeEvent,
  PolyphonicAftertouchEvent,
  ChannelAftertouchEvent,
  PitchBendEvent,
  SysExEvent,
};

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

export {
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
