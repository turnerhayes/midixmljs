import { MeasureNote } from "./MeasureNote";
import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";

export class MeasureChord implements IMeasureElement {
  public readonly notes:MeasureNote[];

  public readonly measureNumber:number;

  public get duration():number {
    return this.noteType.duration;
  }

  public get noteType():INoteType {
    return this.notes[0].noteType;
  }

  constructor(
    {
      notes,
      measureNumber,
    }:{
      notes:MeasureNote[],
      measureNumber:number,
    }
  ) {
    let duration:number = null;
    for (let note of notes) {
      if (duration !== null && duration !== note.noteType.duration) {
        throw new Error(`Cannot create a chord of notes with differing durations`);
      }

      duration = note.noteType.duration;
    }

    this.notes = notes;
    this.measureNumber = measureNumber;
  }

  toJSON() {
    return {
      notes: this.notes,
      measureNumber: this.measureNumber,
    };
  }
}
