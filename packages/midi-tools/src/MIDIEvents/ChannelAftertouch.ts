import { IMIDIChannelEvent } from "./IMIDIEvent";
import { MIDIEventType } from "../MIDIEventType";

export class ChannelAftertouchEvent implements IMIDIChannelEvent {
  public readonly channel: number;

  public readonly pressure: number;

  public readonly type: MIDIEventType = MIDIEventType.ChannelAftertouch;

  constructor(
    {
      channel,
      pressure,
    }:
      {
        channel: number,
        pressure: number,
      }
  ) {
    this.channel = channel;
    this.pressure = pressure;
  }
}
