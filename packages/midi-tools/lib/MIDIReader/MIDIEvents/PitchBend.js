"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PitchBendEvent = /** @class */ (function () {
    function PitchBendEvent(_a) {
        var channel = _a.channel, value = _a.value;
        this.type = 64 /* PitchBend */;
        this.channel = channel;
        this.value = value;
    }
    return PitchBendEvent;
}());
exports.PitchBendEvent = PitchBendEvent;
