"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeySignatureEvent = /** @class */ (function () {
    function KeySignatureEvent(_a) {
        var sharps = _a.sharps, isMajor = _a.isMajor;
        this.type = 524288 /* MetaKeySignature */;
        this.sharps = sharps;
        this.isMajor = isMajor;
    }
    return KeySignatureEvent;
}());
exports.KeySignatureEvent = KeySignatureEvent;
