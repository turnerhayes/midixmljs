import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class SequenceNumberEvent implements IMIDIMetaEvent {
  public readonly sequenceNumber: number;

  public readonly type: MIDIEventType = MIDIEventType.MetaSequenceNumber;

  constructor(
    {
      sequenceNumber,
    }:
      {
        sequenceNumber: number,
      }
  ) {
    this.sequenceNumber = sequenceNumber;
  }
}
