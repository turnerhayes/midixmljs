import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class SMPTEOffsetEvent implements IMIDIMetaEvent {
  public readonly hours:number;

  public readonly minutes:number;

  public readonly seconds:number;

  public readonly frames:number;

  public readonly fractionalFrames:number;

  public readonly type:MIDIEventType = MIDIEventType.MetaSMPTEOffset;

  constructor(
    {
      hours,
      minutes,
      seconds,
      frames,
      fractionalFrames,
    }:
    {
      hours:number,
      minutes:number,
      seconds:number,
      frames:number,
      fractionalFrames:number,
    }
  ) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.frames = frames;
    this.fractionalFrames = fractionalFrames;
  }
}
