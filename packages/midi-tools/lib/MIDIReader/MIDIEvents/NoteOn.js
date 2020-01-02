"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NoteOnEvent = /** @class */ (function () {
    function NoteOnEvent(_a) {
        var channel = _a.channel, noteNumber = _a.noteNumber, velocity = _a.velocity;
        this.type = 2 /* NoteOn */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.velocity = velocity;
    }
    return NoteOnEvent;
}());
exports.NoteOnEvent = NoteOnEvent;
//# sourceMappingURL=NoteOn.js.map