"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KeySignatureMap = /** @class */ (function () {
    function KeySignatureMap() {
        this.offsetMap = {
            0: {
                sharps: 0,
                mode: "major",
            },
        };
        this.sortedOffsets = [0];
    }
    KeySignatureMap.prototype.addSignature = function (offset, keySignature) {
        this.offsetMap[offset] = keySignature;
        this.sortedOffsets = Object.keys(this.offsetMap).map(Number).sort(function (a, b) { return a - b; });
    };
    KeySignatureMap.prototype.getSignature = function (offset) {
        if (offset in this.offsetMap) {
            return this.offsetMap[offset];
        }
        for (var index = this.sortedOffsets.length - 1; index >= 0; index--) {
            if (this.sortedOffsets[index] < offset) {
                return this.offsetMap[this.sortedOffsets[index]];
            }
        }
    };
    return KeySignatureMap;
}());
exports.KeySignatureMap = KeySignatureMap;
//# sourceMappingURL=KeySignatureMap.js.map