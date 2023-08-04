import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class CuePointEvent implements IMIDIMetaEvent {
  public readonly cueText: string;

  public readonly type: MIDIEventType = MIDIEventType.MetaCuePoint;

  constructor(
    {
      cueText,
    }:
      {
        cueText: string,
      }
  ) {
    this.cueText = cueText;
  }
}
