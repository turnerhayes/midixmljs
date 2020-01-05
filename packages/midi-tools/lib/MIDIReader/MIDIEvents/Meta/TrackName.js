"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TrackNameEvent = /** @class */ (function () {
    function TrackNameEvent(_a) {
        var name = _a.name;
        this.type = 16384 /* MetaTrackName */;
        this.name = name;
    }
    return TrackNameEvent;
}());
exports.TrackNameEvent = TrackNameEvent;
