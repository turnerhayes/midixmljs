import { IMIDIMetaEvent } from "../IMIDIEvent";
import { MIDIEventType } from "../../MIDIEventType";

export class LyricEvent implements IMIDIMetaEvent {
  public readonly lyric: string;

  public readonly type: MIDIEventType = MIDIEventType.MetaLyric;

  constructor(
    {
      lyric,
    }:
      {
        lyric: string,
      }
  ) {
    this.lyric = lyric;
  }
}
