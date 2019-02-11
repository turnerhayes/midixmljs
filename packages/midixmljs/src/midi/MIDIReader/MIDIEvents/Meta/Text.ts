import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class TextEvent implements IMIDIMetaEvent {
  public readonly text:string;

  public readonly type:MIDIEventType = MIDIEventType.MetaText;

  constructor(
    {
      text,
    }:
    {
      text:string,
    }
  ) {
    this.text = text;
  }
}
