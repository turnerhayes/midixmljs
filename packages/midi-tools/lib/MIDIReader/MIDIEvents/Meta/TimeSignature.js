"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeSignatureEvent = /** @class */ (function () {
    function TimeSignatureEvent(_a) {
        var numerator = _a.numerator, denominator = _a.denominator, clocksPerTick = _a.clocksPerTick, thirtySecondNotes = _a.thirtySecondNotes;
        this.type = 131072 /* MetaTimeSignature */;
        this.numerator = numerator;
        this.denominator = denominator;
        this.clocksPerTick = clocksPerTick;
        this.thirtySecondNotes = thirtySecondNotes;
    }
    return TimeSignatureEvent;
}());
exports.TimeSignatureEvent = TimeSignatureEvent;
