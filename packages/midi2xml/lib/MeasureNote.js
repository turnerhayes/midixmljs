"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MeasureNote = /** @class */ (function () {
    function MeasureNote(_a) {
        var pitch = _a.pitch, noteType = _a.noteType, duration = _a.duration, measureNumber = _a.measureNumber;
        this.pitch = pitch;
        this.noteType = noteType;
        this.duration = duration;
        this.measureNumber = measureNumber;
    }
    MeasureNote.prototype.toJSON = function () {
        return {
            pitch: this.pitch,
            duration: this.duration,
            measureNumber: this.measureNumber,
        };
    };
    return MeasureNote;
}());
exports.MeasureNote = MeasureNote;
//# sourceMappingURL=MeasureNote.js.map