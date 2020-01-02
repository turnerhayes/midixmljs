import { IMIDIChannelEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../MIDIEventType";

export class PitchBendEvent implements IMIDIChannelEvent {
  public readonly channel:number;

  public readonly value:number;

  public readonly type:MIDIEventType = MIDIEventType.PitchBend;

  constructor(
    {
      channel,
      value,
    }:
    {
      channel:number,
      value:number,
    }
  ) {
    this.channel = channel;
    this.value = value; 
  }
}
