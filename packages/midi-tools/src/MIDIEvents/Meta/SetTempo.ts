import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class SetTempoEvent implements IMIDIMetaEvent {
  public readonly microsecondsPerQuarterNote: number;

  public readonly type: MIDIEventType = MIDIEventType.MetaSetTempo;

  constructor(
    {
      microsecondsPerQuarterNote,
    }:
      {
        microsecondsPerQuarterNote: number,
      }
  ) {
    this.microsecondsPerQuarterNote = microsecondsPerQuarterNote;
  }
}
