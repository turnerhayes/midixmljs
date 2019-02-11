import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class TimeSignatureEvent implements IMIDIMetaEvent {
  public readonly numerator:number;

  public readonly denominator:number;

  public readonly clocksPerTick:number;

  public readonly thirtySecondNotes:number;

  public readonly type:MIDIEventType = MIDIEventType.MetaTimeSignature;

  constructor(
    {
      numerator,
      denominator,
      clocksPerTick,
      thirtySecondNotes,
    }:
    {
      numerator:number,
      denominator:number,
      clocksPerTick:number,
      thirtySecondNotes:number,
    }
  ) {
    this.numerator = numerator;
    this.denominator = denominator;
    this.clocksPerTick = clocksPerTick;
    this.thirtySecondNotes = thirtySecondNotes;
  }
}
