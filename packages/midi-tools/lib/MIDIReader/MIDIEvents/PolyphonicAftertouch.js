"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PolyphonicAftertouchEvent = /** @class */ (function () {
    function PolyphonicAftertouchEvent(_a) {
        var channel = _a.channel, noteNumber = _a.noteNumber, pressure = _a.pressure;
        this.type = 4 /* PolyphonicAftertouch */;
        this.channel = channel;
        this.noteNumber = noteNumber;
        this.pressure = pressure;
    }
    return PolyphonicAftertouchEvent;
}());
exports.PolyphonicAftertouchEvent = PolyphonicAftertouchEvent;
