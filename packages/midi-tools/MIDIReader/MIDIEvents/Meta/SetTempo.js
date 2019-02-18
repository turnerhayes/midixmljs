"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SetTempoEvent = /** @class */ (function () {
    function SetTempoEvent(_a) {
        var microsecondsPerQuarterNote = _a.microsecondsPerQuarterNote;
        this.type = 8192 /* MetaSetTempo */;
        this.microsecondsPerQuarterNote = microsecondsPerQuarterNote;
    }
    return SetTempoEvent;
}());
exports.SetTempoEvent = SetTempoEvent;
