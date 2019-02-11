export const enum MIDIEventType {
  NoteOff = 1,
  NoteOn = 1 << 1,
  PolyphonicAftertouch = 1 << 2,
  ControllerChange = 1 << 3,
  ProgramChange = 1 << 4,
  ChannelAftertouch = 1 << 5,
  PitchBend = 1 << 6,

  ChannelEvents = NoteOn | NoteOff | PolyphonicAftertouch |
    ControllerChange | ProgramChange | ChannelAftertouch | PitchBend,

  Sysex = 1 << 7,
  
  MetaSequenceNumber = 1 << 8,
  MetaPortPrefix = 1 << 9,
  MetaChannelPrefix = 1 << 10,
  MetaText = 1 << 11,
  MetaCopyright = 1 << 12,
  MetaSetTempo = 1 << 13,
  MetaTrackName = 1 << 14,
  MetaSMPTEOffset = 1 << 15,
  MetaInstrumentName = 1 << 16,
  MetaTimeSignature = 1 << 17,
  MetaLyric = 1 << 18,
  MetaKeySignature = 1 << 19,
  MetaMarker = 1 << 20,
  MetaSequencerSpecific = 1 << 21,
  MetaCuePoint = 1 << 22,

  MetaEvents = MetaSequenceNumber | MetaPortPrefix | MetaChannelPrefix | MetaText | MetaCopyright |
    MetaSetTempo | MetaTrackName | MetaSMPTEOffset | MetaInstrumentName |
    MetaTimeSignature | MetaLyric | MetaKeySignature | MetaMarker |
    MetaSequencerSpecific | MetaCuePoint,
  
  All = ChannelEvents | Sysex | MetaEvents,
}
