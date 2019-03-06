import { IPitch } from "@thayes/midi-tools";

import { IMeasureElement } from "./IMeasureElement";
import { INoteType } from "./NoteTypes";

export class MeasureNote implements IMeasureElement {
  public readonly pitch:IPitch;

  public readonly noteType:INoteType;

  public readonly duration:number;

  public readonly measureNumber:number;

  constructor(
    {
      pitch,
      noteType,
      duration,
      measureNumber,
    }:{
      pitch:IPitch,
      noteType:INoteType,
      duration:number,
      measureNumber:number,
    }
  ) {
    this.pitch = pitch;
    this.noteType = noteType;
    this.duration = duration;
    this.measureNumber = measureNumber;
  }

  toJSON() {
    return {
      pitch: this.pitch,
      duration: this.duration,
      measureNumber: this.measureNumber,
    };
  }
}
