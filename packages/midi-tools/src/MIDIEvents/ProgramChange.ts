import { IMIDIChannelEvent } from './IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';

export class ProgramChangeEvent implements IMIDIChannelEvent {
  public readonly channel: number;

  public readonly programNumber: number;

  public readonly type: MIDIEventType = MIDIEventType.ProgramChange;

  constructor(
    {
      channel,
      programNumber,
    }:
      {
        channel: number,
        programNumber: number,
      }
  ) {
    this.channel = channel;
    this.programNumber = programNumber;
  }
}
