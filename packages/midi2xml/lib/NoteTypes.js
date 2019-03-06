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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fraction_js_1 = __importDefault(require("fraction.js"));
;
var types = {
    whole_dot: new fraction_js_1.default(6, 1),
    whole: new fraction_js_1.default(4, 1),
    half_dot: new fraction_js_1.default(3, 1),
    half: new fraction_js_1.default(2, 1),
    quarter_dot: new fraction_js_1.default(3, 2),
    quarter: new fraction_js_1.default(1, 1),
    eighth_dot: new fraction_js_1.default(3, 4),
    eighth: new fraction_js_1.default(1, 2),
    "16th_dot": new fraction_js_1.default(3, 8),
    "16th": new fraction_js_1.default(1, 4),
    "32nd_dot": new fraction_js_1.default(3, 16),
    "32nd": new fraction_js_1.default(1, 8),
    "64th_dot": new fraction_js_1.default(3, 32),
    "64th": new fraction_js_1.default(1, 16),
    "128th_dot": new fraction_js_1.default(3, 64),
    "128th": new fraction_js_1.default(1, 32),
    "256th_dot": new fraction_js_1.default(3, 128),
    "256th": new fraction_js_1.default(1, 64),
    "512th_dot": new fraction_js_1.default(3, 256),
    "512th": new fraction_js_1.default(1, 128),
    "1024th_dot": new fraction_js_1.default(3, 512),
    "1024th": new fraction_js_1.default(1, 256),
};
exports.getNoteTypes = function (ppqn) {
    var e_1, _a;
    var noteTypes = {};
    try {
        for (var _b = __values(Object.keys(types)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var fraction = types[key];
            var _d = __read(key.split("_"), 2), typeName = _d[0], dot = _d[1];
            var pulses = fraction.mul(ppqn);
            // Only add if an integer
            if (pulses.equals(pulses.floor())) {
                noteTypes[pulses.valueOf()] = {
                    typeName: typeName,
                    dot: !!dot,
                    fraction: fraction,
                    duration: pulses.valueOf(),
                };
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return noteTypes;
};
exports.findNoteType = function (divisions, ppqn) {
    var e_2, _a;
    var types = exports.getNoteTypes(ppqn);
    if (divisions in types) {
        // The division count is exactly a known duration--hooray, return it!
        return types[divisions];
    }
    // Divisions is not exact--we need to find the closest known duration
    var minDelta = Infinity;
    var closestDuration;
    var duration;
    try {
        for (var _b = __values(Object.keys(types)), _c = _b.next(); !_c.done; _c = _b.next()) {
            duration = _c.value;
            duration = Number(duration);
            var delta = Math.abs(duration - divisions);
            if (delta < minDelta) {
                minDelta = delta;
                closestDuration = duration;
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return types[closestDuration];
};
//# sourceMappingURL=NoteTypes.js.map