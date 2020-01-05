"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buffer_to_string_1 = require("./buffer-to-string");
var stringToBuffer = function (str) {
    var ab = new ArrayBuffer(str.length);
    var buf = Buffer.from(ab);
    buf.write(str, 0, str.length, 'ascii');
    return ab;
};
var testCases = [
    {
        buffer: stringToBuffer(''),
        expected: '',
        startIndex: 0,
        length: 0,
    },
    {
        buffer: stringToBuffer('Hello'),
        expected: 'Hello',
        startIndex: 0,
        length: 'Hello'.length,
    },
];
describe('bufferToString', function () {
    testCases.forEach(function (testCase) {
        it("should properly parse \"" + testCase.expected + "\" from the buffer \"" + Buffer.from(testCase.buffer).toString('ascii') + "\"", function () {
            expect(buffer_to_string_1.bufferToString(testCase.buffer, testCase.startIndex, testCase.length)).toBe(testCase.expected);
        });
    });
});
