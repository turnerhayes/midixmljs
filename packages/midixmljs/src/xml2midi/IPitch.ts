import NoteStep from "./NoteStep";

export default interface IPitch {
  step: NoteStep,
  octave: number,
  alter?: number,
  MIDINumber?: number,
}
