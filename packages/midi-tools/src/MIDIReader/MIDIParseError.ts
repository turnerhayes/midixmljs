export class MIDIParseError extends Error {
  constructor(message) {
    super(`Invalid MIDI file: ${message}`);
  }
}
