"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SysExEvent = /** @class */ (function () {
    function SysExEvent(_a) {
        var eventData = _a.eventData;
        this.type = 128 /* Sysex */;
        this.eventData = eventData;
    }
    return SysExEvent;
}());
exports.SysExEvent = SysExEvent;
//# sourceMappingURL=SysEx.js.map