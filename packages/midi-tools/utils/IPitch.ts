import { NoteStep } from "./NoteStep";

export interface IPitch {
  step: NoteStep,
  octave: number,
  alter?: number,
  MIDINumber?: number,
}
