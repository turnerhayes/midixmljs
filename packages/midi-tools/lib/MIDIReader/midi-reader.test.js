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
var midi_reader_1 = require("./midi-reader");
var MIDIEvents_1 = require("./MIDIEvents");
var Meta_1 = require("./MIDIEvents/Meta");
describe('midi-reader', function () {
    it('should generate the correct header information', function () {
        var reader = new midi_reader_1.MIDIReader(fs_1.readFileSync(path.join(__dirname, 'Tim Minchin - Rock N Roll Nerd.midi')));
        expect(reader.header).toEqual({
            division: {
                ticks: 4,
            },
            fileType: 1,
            trackCount: 2,
        });
    });
    it('should generate the correct events', function () {
        var reader = new midi_reader_1.MIDIReader(fs_1.readFileSync(path.join(__dirname, 'Tim Minchin - Rock N Roll Nerd.midi')));
        var trackGen = reader.readTracks();
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.ProgramChangeEvent({
                channel: 1,
                programNumber: 1,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new Meta_1.TimeSignatureEvent({
                numerator: 2,
                denominator: 2,
                clocksPerTick: 24,
                thirtySecondNotes: 8,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOnEvent({
                channel: 1,
                noteNumber: 72,
                velocity: 64,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOnEvent({
                channel: 1,
                noteNumber: 69,
                velocity: 64,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOnEvent({
                channel: 1,
                noteNumber: 76,
                velocity: 64,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOnEvent({
                channel: 1,
                noteNumber: 81,
                velocity: 64,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 8,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOffEvent({
                channel: 1,
                noteNumber: 76,
                release: 64,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOffEvent({
                channel: 1,
                noteNumber: 69,
                release: 64,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOffEvent({
                channel: 1,
                noteNumber: 81,
                release: 64,
            }),
        });
        expect(trackGen.next().value).toEqual({
            deltaTime: 0,
            trackNumber: 1,
            event: new MIDIEvents_1.NoteOffEvent({
                channel: 1,
                noteNumber: 72,
                release: 64,
            }),
        });
    });
});
