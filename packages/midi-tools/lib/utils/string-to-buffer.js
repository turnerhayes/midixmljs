"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToCharCodeArray = void 0;
const stringToCharCodeArray = (str) => {
    return new Uint8Array(str.split("").map((chr) => chr.charCodeAt(0)));
};
exports.stringToCharCodeArray = stringToCharCodeArray;
