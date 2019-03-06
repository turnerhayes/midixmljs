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
var MeasureChord_1 = require("./MeasureChord");
var MeasureRest_1 = require("./MeasureRest");
var MeasureItemList_1 = require("./MeasureItemList");
var Measure = /** @class */ (function () {
    function Measure(_a) {
        var timeSignatureMap = _a.timeSignatureMap, keySignatureMap = _a.keySignatureMap, startOffset = _a.startOffset, endOffset = _a.endOffset, number = _a.number;
        this._notes = null;
        this.measureElementsByOffset = {};
        this.timeSignatureMap = timeSignatureMap;
        this.keySignatureMap = keySignatureMap;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
        this.number = number;
    }
    Object.defineProperty(Measure.prototype, "timeSignature", {
        get: function () {
            return this.timeSignatureMap.getSignature(this.startOffset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Measure.prototype, "keySignature", {
        get: function () {
            return this.keySignatureMap.getSignature(this.startOffset);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Measure.prototype, "measureItems", {
        get: function () {
            var e_1, _a;
            var list = new MeasureItemList_1.MeasureItemList({
                timeSignature: this.timeSignature,
            });
            try {
                for (var _b = __values(Object.keys(this.measureElementsByOffset)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var offset = _c.value;
                    var element = void 0;
                    if (this.measureElementsByOffset[offset][0] instanceof MeasureRest_1.MeasureRest) {
                        element = this.measureElementsByOffset[offset][0];
                    }
                    else if (this.measureElementsByOffset[offset].length > 1) {
                        element = new MeasureChord_1.MeasureChord({
                            notes: this.measureElementsByOffset[offset],
                            measureNumber: this.number,
                        });
                    }
                    else {
                        element = this.measureElementsByOffset[offset][0];
                    }
                    list.add(element);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Measure.prototype, "isFull", {
        get: function () {
            return this.measureItems.lengthInQuarterNotes ===
                this.timeSignature.numerator * (4 / this.timeSignature.denominator);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Measure.prototype, "notes", {
        get: function () {
            var _this = this;
            if (this._notes === null) {
                this._notes = Object.keys(this.measureElementsByOffset).sort(function (a, b) { return Number(a) - Number(b); }).reduce(function (notes, offset) {
                    var notesAtOffset = Object.values(_this.measureElementsByOffset[offset]);
                    if (notesAtOffset.length > 1) {
                        notes.push(new MeasureChord_1.MeasureChord({
                            notes: notesAtOffset,
                            measureNumber: _this.number,
                        }));
                    }
                    else {
                        notes.push(notesAtOffset[0]);
                    }
                    return notes;
                }, []);
            }
            return this._notes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Measure.prototype, "totalQuarterNotes", {
        get: function () {
            return this.timeSignature.numerator * (4 / this.timeSignature.denominator);
        },
        enumerable: true,
        configurable: true
    });
    Measure.prototype.addNote = function (_a) {
        var offset = _a.offset, note = _a.note;
        if (this.measureElementsByOffset[offset] === undefined) {
            this.measureElementsByOffset[offset] = [];
        }
        this.measureElementsByOffset[offset].push(note);
        this.invalidateNotesCache();
    };
    Measure.prototype.addRest = function (_a) {
        var offset = _a.offset, rest = _a.rest;
        if (this.measureElementsByOffset[offset] !== undefined) {
            throw new Error("There are already one or more notes at offset " + offset + "; cannot add rest");
        }
        this.measureElementsByOffset[offset] = [rest];
        this.invalidateNotesCache();
    };
    Measure.prototype.invalidateNotesCache = function () {
        this._notes = null;
    };
    Measure.prototype.toJSON = function () {
        return {
            keySignature: this.keySignature,
            timeSignature: this.timeSignature,
            notes: this.notes,
        };
    };
    return Measure;
}());
exports.Measure = Measure;
//# sourceMappingURL=Measure.js.map