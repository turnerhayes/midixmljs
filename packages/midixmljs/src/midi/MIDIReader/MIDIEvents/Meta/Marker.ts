import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class MarkerEvent implements IMIDIMetaEvent {
  public readonly marker:string;

  public readonly type:MIDIEventType = MIDIEventType.MetaMarker;

  constructor(
    {
      marker,
    }:
    {
      marker:string,
    }
  ) {
    this.marker = marker;
  }
}
