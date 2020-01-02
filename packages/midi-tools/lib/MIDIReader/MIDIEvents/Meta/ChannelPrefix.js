"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChannelPrefixEvent = /** @class */ (function () {
    function ChannelPrefixEvent(_a) {
        var channelNumber = _a.channelNumber;
        this.type = 1024 /* MetaChannelPrefix */;
        this.channelNumber = channelNumber;
    }
    return ChannelPrefixEvent;
}());
exports.ChannelPrefixEvent = ChannelPrefixEvent;
//# sourceMappingURL=ChannelPrefix.js.map