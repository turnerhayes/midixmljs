"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MarkerEvent = /** @class */ (function () {
    function MarkerEvent(_a) {
        var marker = _a.marker;
        this.type = 1048576 /* MetaMarker */;
        this.marker = marker;
    }
    return MarkerEvent;
}());
exports.MarkerEvent = MarkerEvent;
