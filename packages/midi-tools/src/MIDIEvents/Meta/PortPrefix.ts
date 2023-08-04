import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class PortPrefixEvent implements IMIDIMetaEvent {
  public readonly portNumber: number;

  public readonly type: MIDIEventType = MIDIEventType.MetaPortPrefix;

  constructor(
    {
      portNumber,
    }:
      {
        portNumber: number,
      }
  ) {
    this.portNumber = portNumber;
  }
}
