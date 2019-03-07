import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";

export class MeasureRest implements IMeasureElement {
  public readonly noteType:INoteType;

  public readonly measureNumber:number;

  constructor(
    {
      noteType,
      measureNumber,
    }: {
      noteType:INoteType,
      measureNumber:number,
    }
  ) {
    this.noteType = noteType;
    this.measureNumber = measureNumber;
  }
}
