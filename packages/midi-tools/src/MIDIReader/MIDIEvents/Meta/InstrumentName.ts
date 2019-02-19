import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class InstrumentNameEvent implements IMIDIMetaEvent {
  public readonly name:string;

  public readonly type:MIDIEventType = MIDIEventType.MetaInstrumentName;

  constructor(
    {
      name,
    }:
    {
      name:string,
    }
  ) {
    this.name = name;
  }
}
