import { IMIDIChannelEvent } from '../IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';

export class NoteOnEvent implements IMIDIChannelEvent {
  public readonly channel:number;
  
  public readonly noteNumber:number;

  public readonly velocity:number;

  public readonly type:MIDIEventType = MIDIEventType.NoteOn;

  constructor(
    {
      channel,
      noteNumber,
      velocity,
    }:
    {
      channel:number,
      noteNumber:number,
      velocity:number,
    }
  ) {
    this.channel = channel;
    this.noteNumber = noteNumber;
    this.velocity = velocity;
  }
}
