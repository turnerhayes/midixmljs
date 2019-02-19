"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToString = function (buffer, startIndex, length) {
    var str = '';
    console.error({
        buffer: buffer,
        startIndex: startIndex,
        length: length,
    });
    var dataView = new DataView(buffer, startIndex, length);
    for (var i = 0; i < length; i++) {
        str += String.fromCharCode(dataView.getUint8(i));
    }
    return str;
};
