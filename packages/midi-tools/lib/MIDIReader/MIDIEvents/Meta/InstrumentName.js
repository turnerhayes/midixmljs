"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InstrumentNameEvent = /** @class */ (function () {
    function InstrumentNameEvent(_a) {
        var name = _a.name;
        this.type = 65536 /* MetaInstrumentName */;
        this.name = name;
    }
    return InstrumentNameEvent;
}());
exports.InstrumentNameEvent = InstrumentNameEvent;
