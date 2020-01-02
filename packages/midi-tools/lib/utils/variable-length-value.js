"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toVariableLengthValue(num) {
    var bytes = [];
    do {
        var byte = num & 0x7F;
        num = num >> 7;
        if (bytes.length > 0) {
            byte = byte + 0x80;
        }
        bytes.unshift(byte);
    } while (num > 0);
    return new Uint8Array(bytes);
}
exports.toVariableLengthValue = toVariableLengthValue;
;
function fromVariableLengthValue(buffer, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var uArray = new Uint8Array(buffer, startIndex);
    var value = 0;
    var index = -1;
    var bytesRead = 0;
    do {
        index += 1;
        value = (value << 7) + (uArray[index] & 0x7F);
        bytesRead += 1;
    } while (uArray[index] & 0x80);
    return [bytesRead, value];
}
exports.fromVariableLengthValue = fromVariableLengthValue;
;
//# sourceMappingURL=variable-length-value.js.map