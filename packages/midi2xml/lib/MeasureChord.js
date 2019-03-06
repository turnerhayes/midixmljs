"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MeasureChord = /** @class */ (function () {
    function MeasureChord(_a) {
        var e_1, _b;
        var notes = _a.notes, measureNumber = _a.measureNumber;
        var duration = null;
        try {
            for (var notes_1 = __values(notes), notes_1_1 = notes_1.next(); !notes_1_1.done; notes_1_1 = notes_1.next()) {
                var note = notes_1_1.value;
                if (duration !== null && duration !== note.noteType.duration) {
                    throw new Error("Cannot create a chord of notes with differing durations");
                }
                duration = note.noteType.duration;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (notes_1_1 && !notes_1_1.done && (_b = notes_1.return)) _b.call(notes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.notes = notes;
        this.measureNumber = measureNumber;
    }
    Object.defineProperty(MeasureChord.prototype, "duration", {
        get: function () {
            return this.noteType.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeasureChord.prototype, "noteType", {
        get: function () {
            return this.notes[0].noteType;
        },
        enumerable: true,
        configurable: true
    });
    MeasureChord.prototype.toJSON = function () {
        return {
            notes: this.notes,
            measureNumber: this.measureNumber,
        };
    };
    return MeasureChord;
}());
exports.MeasureChord = MeasureChord;
//# sourceMappingURL=MeasureChord.js.map