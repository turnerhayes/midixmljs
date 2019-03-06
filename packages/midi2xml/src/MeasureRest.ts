import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";

export class MeasureRest implements IMeasureElement {
  public readonly duration:number;

  public readonly noteType:INoteType;

  public readonly measureNumber:number;

  constructor(
    {
      duration,
      noteType,
      measureNumber,
    }: {
      duration:number,
      noteType:INoteType,
      measureNumber:number,
    }
  ) {
    this.duration = duration;
    this.noteType = noteType;
    this.measureNumber = measureNumber;
  }
}
