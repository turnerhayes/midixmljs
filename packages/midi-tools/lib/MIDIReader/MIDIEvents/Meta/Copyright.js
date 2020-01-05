"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CopyrightEvent = /** @class */ (function () {
    function CopyrightEvent(_a) {
        var copyright = _a.copyright;
        this.type = 4096 /* MetaCopyright */;
        this.copyright = copyright;
    }
    return CopyrightEvent;
}());
exports.CopyrightEvent = CopyrightEvent;
