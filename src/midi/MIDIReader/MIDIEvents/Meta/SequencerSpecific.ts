import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class SequencerSpecificEvent implements IMIDIMetaEvent {
  public readonly id:Uint8Array;

  public readonly data:Uint8Array;

  public readonly type:MIDIEventType = MIDIEventType.MetaSequencerSpecific;

  constructor(
    {
      id,
      data,
    }:
    {
      id:Uint8Array,
      data:Uint8Array,
    }
  ) {
    this.id = id;
    this.data = data
  }
}
