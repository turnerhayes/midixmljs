"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SMPTEOffsetEvent = /** @class */ (function () {
    function SMPTEOffsetEvent(_a) {
        var hours = _a.hours, minutes = _a.minutes, seconds = _a.seconds, frames = _a.frames, fractionalFrames = _a.fractionalFrames;
        this.type = 32768 /* MetaSMPTEOffset */;
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.frames = frames;
        this.fractionalFrames = fractionalFrames;
    }
    return SMPTEOffsetEvent;
}());
exports.SMPTEOffsetEvent = SMPTEOffsetEvent;
