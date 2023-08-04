"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToString = void 0;
const bufferToString = (buffer, startIndex, length) => {
    let str = '';
    const dataView = new DataView(buffer, startIndex, length);
    for (let i = 0; i < length; i++) {
        str += String.fromCharCode(dataView.getUint8(i));
    }
    return str;
};
exports.bufferToString = bufferToString;
