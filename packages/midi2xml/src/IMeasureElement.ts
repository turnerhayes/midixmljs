import { INoteType } from "./NoteTypes";

export interface IMeasureElement {
  measureNumber:number;

  duration:number;

  noteType:INoteType;
}
