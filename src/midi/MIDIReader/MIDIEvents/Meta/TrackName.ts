import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class TrackNameEvent implements IMIDIMetaEvent {
  public readonly name:string;

  public readonly type:MIDIEventType = MIDIEventType.MetaTrackName;

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
