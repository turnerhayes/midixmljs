"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromVariableLengthValue = exports.toVariableLengthValue = void 0;
function toVariableLengthValue(num) {
    const bytes = [];
    do {
        let byte = num & 0x7F;
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
function fromVariableLengthValue(buffer, startIndex = 0) {
    const uArray = new Uint8Array(buffer, startIndex);
    let value = 0;
    let index = -1;
    let bytesRead = 0;
    do {
        index += 1;
        value = (value << 7) + (uArray[index] & 0x7F);
        bytesRead += 1;
    } while (uArray[index] & 0x80);
    return [bytesRead, value];
}
exports.fromVariableLengthValue = fromVariableLengthValue;
;
