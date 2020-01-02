import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class ChannelPrefixEvent implements IMIDIMetaEvent {
  public readonly channelNumber:number;

  public readonly type:MIDIEventType = MIDIEventType.MetaChannelPrefix;

  constructor(
    {
      channelNumber,
    }:
    {
      channelNumber:number,
    }
  ) {
    this.channelNumber = channelNumber;
  }
}
