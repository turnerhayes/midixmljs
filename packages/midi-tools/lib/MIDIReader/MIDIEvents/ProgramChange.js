"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProgramChangeEvent = /** @class */ (function () {
    function ProgramChangeEvent(_a) {
        var channel = _a.channel, programNumber = _a.programNumber;
        this.type = 16 /* ProgramChange */;
        this.channel = channel;
        this.programNumber = programNumber;
    }
    return ProgramChangeEvent;
}());
exports.ProgramChangeEvent = ProgramChangeEvent;
