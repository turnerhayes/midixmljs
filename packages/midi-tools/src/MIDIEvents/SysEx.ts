import { IMIDIEvent } from "./IMIDIEvent";
import { MIDIEventType } from "../MIDIEventType";

export class SysExEvent implements IMIDIEvent {
  public readonly eventData: Uint8Array;

  public readonly type: MIDIEventType = MIDIEventType.Sysex;

  constructor(
    {
      eventData,
    }:
      {
        eventData: Uint8Array,
      }
  ) {
    this.eventData = eventData;
  }
}
