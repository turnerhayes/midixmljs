import { IMIDIMetaEvent } from "../../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class KeySignatureEvent implements IMIDIMetaEvent {
  public readonly sharps:number;

  public readonly isMajor:boolean;

  public readonly type:MIDIEventType = MIDIEventType.MetaKeySignature;

  constructor(
    {
      sharps,
      isMajor,
    }:
    {
      sharps:number,
      isMajor:boolean,
    }
  ) {
    this.sharps = sharps;
    this.isMajor = isMajor;
  }
}
