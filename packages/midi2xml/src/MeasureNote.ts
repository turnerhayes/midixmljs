import { IPitch } from "@thayes/midi-tools";

import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";

export class MeasureNote implements IMeasureElement {
  public readonly pitch:IPitch;

  public readonly noteType:INoteType;

  public readonly measureNumber:number;

  constructor(
    {
      pitch,
      noteType,
      measureNumber,
    }:{
      pitch:IPitch,
      noteType:INoteType,
      measureNumber:number,
    }
  ) {
    this.pitch = pitch;
    this.noteType = noteType;
    this.measureNumber = measureNumber;
  }
}
