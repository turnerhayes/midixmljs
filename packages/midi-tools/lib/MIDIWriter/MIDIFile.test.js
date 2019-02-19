"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MIDIFile_1 = require("./MIDIFile");
expect.addSnapshotSerializer({
    test: function (value) {
        return value instanceof ArrayBuffer;
    },
    print: function (value) {
        return new Buffer(value).toString('base64');
    }
});
describe('MIDIFile', function () {
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
