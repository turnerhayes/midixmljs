import { IMIDIChannelEvent } from '../IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';

export class PolyphonicAftertouchEvent implements IMIDIChannelEvent {
  public readonly channel:number;

  public readonly noteNumber:number;

  public readonly pressure:number;

  public readonly type:MIDIEventType = MIDIEventType.PolyphonicAftertouch;

  constructor(
    {
      channel,
      noteNumber,
      pressure,
    }:
    {
      channel:number,
      noteNumber:number,
      pressure:number,
    }
  ) {
    this.channel = channel;
    this.noteNumber = noteNumber;
    this.pressure = pressure; 
  }
}
