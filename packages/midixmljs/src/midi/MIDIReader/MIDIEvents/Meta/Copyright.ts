import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class CopyrightEvent implements IMIDIMetaEvent {
  public readonly copyright:string;

  public readonly type:MIDIEventType = MIDIEventType.MetaCopyright;

  constructor(
    {
      copyright,
    }:
    {
      copyright:string,
    }
  ) {
    this.copyright = copyright;
  }
}
