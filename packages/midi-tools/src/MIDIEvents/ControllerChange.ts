import { IMIDIChannelEvent } from './IMIDIEvent';
import { MIDIEventType } from '../MIDIEventType';

export class ControllerChangeEvent implements IMIDIChannelEvent {
  public readonly channel: number;

  public readonly controllerNumber: number;

  public readonly controllerValue: number;

  public readonly type: MIDIEventType = MIDIEventType.ControllerChange;

  constructor(
    {
      channel,
      controllerNumber,
      controllerValue,
    }:
      {
        channel: number,
        controllerNumber: number,
        controllerValue: number,
      }
  ) {
    this.channel = channel;
    this.controllerNumber = controllerNumber;
    this.controllerValue = controllerValue;
  }
}
