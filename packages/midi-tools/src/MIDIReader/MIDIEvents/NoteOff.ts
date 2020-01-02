import { IMIDIChannelEvent } from '../IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';

export class NoteOffEvent implements IMIDIChannelEvent {
  public readonly channel:number;
  
  public readonly noteNumber:number;

  public readonly release:number;

  public readonly type:MIDIEventType = MIDIEventType.NoteOff;

  constructor(
    {
      channel,
      noteNumber,
      release,
    }:
    {
      channel:number,
      noteNumber:number,
      release:number,
    }
  ) {
    this.channel = channel;
    this.noteNumber = noteNumber;
    this.release = release;
  }
}
