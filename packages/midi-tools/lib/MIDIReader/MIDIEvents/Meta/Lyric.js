export class LyricEvent {
    constructor({ lyric, }) {
        this.type = 262144 /* MIDIEventType.MetaLyric */;
        this.lyric = lyric;
    }
}
