"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LyricEvent = void 0;
class LyricEvent {
    constructor({ lyric, }) {
        this.type = 262144 /* MIDIEventType.MetaLyric */;
        this.lyric = lyric;
    }
}
exports.LyricEvent = LyricEvent;
