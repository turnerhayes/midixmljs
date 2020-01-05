"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChannelAftertouchEvent = /** @class */ (function () {
    function ChannelAftertouchEvent(_a) {
        var channel = _a.channel, pressure = _a.pressure;
        this.type = 32 /* ChannelAftertouch */;
        this.channel = channel;
        this.pressure = pressure;
    }
    return ChannelAftertouchEvent;
}());
exports.ChannelAftertouchEvent = ChannelAftertouchEvent;
