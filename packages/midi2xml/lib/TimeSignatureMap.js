"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeSignatureMap = /** @class */ (function () {
    function TimeSignatureMap() {
        this.offsetMap = {
            0: {
                numerator: 4,
                denominator: 4,
            },
        };
        this.sortedOffsets = [0];
    }
    TimeSignatureMap.prototype.addSignature = function (offset, timeSignature) {
        this.offsetMap[offset] = timeSignature;
        this.sortedOffsets = Object.keys(this.offsetMap).map(Number).sort(function (a, b) { return a - b; });
    };
    TimeSignatureMap.prototype.getSignature = function (offset) {
        if (offset in this.offsetMap) {
            return this.offsetMap[offset];
        }
        for (var index = this.sortedOffsets.length - 1; index >= 0; index--) {
            if (this.sortedOffsets[index] < offset) {
                return this.offsetMap[this.sortedOffsets[index]];
            }
        }
    };
    return TimeSignatureMap;
}());
exports.TimeSignatureMap = TimeSignatureMap;
//# sourceMappingURL=TimeSignatureMap.js.map