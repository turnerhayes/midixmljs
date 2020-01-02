"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PortPrefixEvent = /** @class */ (function () {
    function PortPrefixEvent(_a) {
        var portNumber = _a.portNumber;
        this.type = 512 /* MetaPortPrefix */;
        this.portNumber = portNumber;
    }
    return PortPrefixEvent;
}());
exports.PortPrefixEvent = PortPrefixEvent;
//# sourceMappingURL=PortPrefix.js.map