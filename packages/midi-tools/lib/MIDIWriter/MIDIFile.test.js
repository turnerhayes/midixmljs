"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path = __importStar(require("path"));
var MIDIFile_1 = require("./MIDIFile");
expect.addSnapshotSerializer({
    test: function (value) {
        return value instanceof ArrayBuffer;
    },
    print: function (value) {
        return new Buffer(value).toString('base64');
    }
});
var readCachedFile = function (name) {
    return new Promise(function (resolve, reject) { return fs_1.readFile(path.resolve(__dirname, name), function (err, data) {
        if (err) {
            return reject(err);
        }
        return resolve(data);
    }); });
};
var writeCachedFile = function (name, data) {
    return new Promise(function (resolve, reject) { return fs_1.writeFile(path.resolve(__dirname, name), data, function (err) {
        if (err) {
            return reject(err);
        }
        return resolve();
    }); });
};
var validateMIDIFile = function (file, numTracks) {
    if (numTracks === void 0) { numTracks = 1; }
    var fileChunkHeader = file.toString("ascii", 0, 4);
    var index = 4;
    expect(fileChunkHeader).toBe("MThd");
    var length = file.readUInt32BE(index);
    index += 4;
    expect(length).toBe(6);
    var format = file.readUInt16BE(index);
    index += 2;
    expect(format).toBe(1);
    var trackCount = file.readUInt16BE(index);
    index += 2;
    expect(trackCount).toBe(numTracks);
    var divisionNum = file.readUInt16BE(index);
    index += 2;
    expect(divisionNum).toBe(4);
    var trackHeader = file.toString("ascii", index, index + 4);
    index += 4;
    expect(trackHeader).toBe("MTrk");
    length = file.readUInt32BE(index);
    index += 4;
    expect(length).toBeGreaterThan(0);
    index += length;
    trackHeader = file.toString("ascii", index, index + 4);
    index += 4;
    expect(trackHeader).toBe("MTrk");
    length = file.readUInt32BE(index);
    index += 4;
    expect(length).toBeGreaterThan(0);
    index += length;
    expect(index).toBe(file.byteLength);
};
describe('MIDIFile', function () {
    it("should generate a valid MIDI file", function () {
        var file = new MIDIFile_1.MIDIFile({ divisions: 4 });
        file.note({
            note: 64,
            duration: 16,
            track: 1,
            offset: 0,
        });
        file.note({
            note: 674,
            duration: 8,
            track: 2,
            offset: 8,
        });
        validateMIDIFile(Buffer.from(file.toArrayBuffer()), 2);
    });
    it('should create a MIDI file with the added notes', function () {
        var file = new MIDIFile_1.MIDIFile({ divisions: 4 });
        file.note({
            note: 64,
            duration: 8,
            offset: 0,
            track: 1,
        });
        file.note({
            note: 66,
            duration: 8,
            offset: 4,
            track: 1,
        });
        var buffer = file.toArrayBuffer();
        expect(buffer).toMatchSnapshot();
    });
    it('should set a program change', function () {
        var file = new MIDIFile_1.MIDIFile({ divisions: 4 });
        file.note({
            note: 64,
            duration: 16,
            offset: 0,
            track: 1,
        });
        file.programChange({
            offset: 2,
            program: 5,
            track: 1,
        });
        file.note({
            note: 68,
            duration: 8,
            offset: 0,
            track: 2,
        });
        var buffer = file.toArrayBuffer();
        expect(buffer).toMatchSnapshot();
    });
    it('should be able to change the tempo', function () {
        var file = new MIDIFile_1.MIDIFile({ divisions: 4 });
        file.note({
            note: 64,
            duration: 16,
            offset: 0,
            track: 1,
        });
        file.setTempo(50);
        file.note({
            note: 68,
            duration: 16,
            offset: 0,
            track: 2,
        });
        var buffer = file.toArrayBuffer();
        expect(buffer).toMatchSnapshot();
    });
});
