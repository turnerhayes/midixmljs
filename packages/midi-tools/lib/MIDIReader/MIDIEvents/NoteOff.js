"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteOffEvent = /** @class */ (function () {
    function NoteOffEvent(_a) {
        var channel = _a.channel, noteNumber = _a.noteNumber, release = _a.release;
        this.type = 1 /* NoteOff */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.release = release;
    }
    return NoteOffEvent;
}());
exports.NoteOffEvent = NoteOffEvent;
//# sourceMappingURL=NoteOff.js.map