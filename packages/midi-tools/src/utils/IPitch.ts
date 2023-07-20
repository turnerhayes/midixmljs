import { NoteStep } from "./NoteStep";

export interface IPitch {
  step: NoteStep,
  octave: number,
  alter?: 1 | -1,
  MIDINumber?: number,
}
