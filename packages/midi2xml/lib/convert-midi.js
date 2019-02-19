"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var xml_writer_1 = __importDefault(require("xml-writer"));
var object_values_1 = require("object.values");
var midi_tools_1 = require("@thayes/midi-tools");
var NoteOnEvent = midi_tools_1.MIDIEvents.NoteOnEvent;
var _a = midi_tools_1.MIDIEvents.Meta, TimeSignatureEvent = _a.TimeSignatureEvent, KeySignatureEvent = _a.KeySignatureEvent;
console.log({
    MIDIEvents: midi_tools_1.MIDIEvents,
    NoteOnEvent: NoteOnEvent,
});
if (!Object.values) {
    object_values_1.shim();
}
var getArrayBuffer = function (midiFile) { return __awaiter(_this, void 0, void 0, function () {
    var buffer, byteOffset, byteLength, fs_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (midiFile instanceof DataView) {
                    return [2 /*return*/, midiFile];
                }
                if (!(typeof midiFile === 'string')) return [3 /*break*/, 3];
                return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require("fs")); })];
            case 1:
                fs_1 = _a.sent();
                return [4 /*yield*/, new Promise(function (resolve, reject) { return fs_1.readFile(midiFile, function (error, data) {
                        if (error) {
                            return reject(error);
                        }
                        return resolve(data);
                    }); })];
            case 2:
                midiFile = (_a.sent());
                _a.label = 3;
            case 3:
                if (midiFile instanceof Buffer) {
                    buffer = midiFile.buffer;
                    byteOffset = midiFile.byteOffset;
                    byteLength = midiFile.byteLength;
                }
                else if (midiFile instanceof Uint8Array) {
                    buffer = midiFile.buffer;
                    byteOffset = midiFile.byteOffset;
                    byteLength = midiFile.byteLength;
                }
                else if (midiFile instanceof ArrayBuffer) {
                    buffer = midiFile;
                    byteOffset = 0;
                    byteLength = midiFile.byteLength;
                }
                return [2 /*return*/, new DataView(buffer, byteOffset, byteLength)];
        }
    });
}); };
var divisionsToQuarterNotes = function (divisions, ppqn) {
    return divisions / ppqn;
};
var divisionsToBeats = function (divisions, ppqn, timeSignature) {
    var quarterNotes = divisionsToQuarterNotes(divisions, ppqn);
    var beatsPerQuarterNote = 4 / timeSignature.denominator;
    return beatsPerQuarterNote * quarterNotes;
};
/**
 * Gets what measure the beat is in at the specified number of divisions.
 *
 * @param {number} divisions - the number of divisions at this point in the piece
 * @param {number} ppqn - Pulses (divisions) Per Quarter Note--constant for a given
 * MIDI file
 * @param {ITimeSignature} timeSignature - the current time signature of the piece,
 * as numerator over denominator (e.g. 4/4)
 */
var getMeasureNumber = function (divisions, ppqn, timeSignature) {
    if (timeSignature === void 0) { timeSignature = {
        numerator: 4,
        denominator: 4,
    }; }
    var quarterNotes = divisions / ppqn;
    var beatsPerQuarterNote = 4 / timeSignature.denominator;
    var beats = divisionsToBeats(divisions, ppqn, timeSignature);
    // Measures start at 1, not 0
    var measureNumber = Math.floor(beats / timeSignature.numerator) + 1;
    // console.log({
    //   divisions,
    //   ppqn,
    //   timeSignature,
    //   quarterNotes,
    //   beatsPerQuarterNote,
    //   beats,
    //   rawMeasureNumber: beats / timeSignature.numerator,
    //   measureNumber,
    // });
    return measureNumber;
};
var getNotesByTrack = function (reader) {
    var notesPlaying;
    var trackNotes;
    var notesByTrack = {};
    var tracks = [];
    var ppqn = reader.header.division.ticks;
    var currentOffset;
    var currentTrackNumber;
    var timeSignaturesByOffset;
    var currentTimeSignatureOffset;
    var keySignaturesByOffset;
    var currentKeySignatureOffset;
    var _loop_1 = function (gen, item) {
        var _a = item.value, deltaTime = _a.deltaTime, event_1 = _a.event, trackNumber = _a.trackNumber;
        if (trackNumber !== currentTrackNumber) {
            if (currentTrackNumber !== undefined) {
                tracks[currentTrackNumber] = {
                    keySignaturesByOffset: keySignaturesByOffset,
                    timeSignaturesByOffset: timeSignaturesByOffset,
                    notes: Object.values(trackNotes),
                };
            }
            trackNotes = [];
            notesPlaying = {};
            currentOffset = 0;
            timeSignaturesByOffset = {
                0: {
                    numerator: 4,
                    denominator: 4,
                }
            };
            currentTimeSignatureOffset = 0;
            keySignaturesByOffset = {
                0: 0
            };
            currentKeySignatureOffset = 0;
            currentTrackNumber = trackNumber;
        }
        currentOffset += deltaTime;
        if (event_1.type & 131072 /* MetaTimeSignature */) {
            // Typescript is being weird and claiming it can't find the name TimeSignatureEvent...
            var _b = event_1, numerator = _b.numerator, denominator = _b.denominator;
            // const { numerator, denominator } = (event as TimeSignatureEvent);
            timeSignaturesByOffset[currentOffset] = {
                numerator: numerator,
                denominator: denominator,
            };
            currentTimeSignatureOffset = currentOffset;
            return "continue";
        }
        if (event_1.type & 524288 /* MetaKeySignature */) {
            // Typescript is being weird and claiming it can't find the name KeySignatureEvent...
            var sharps = event_1.sharps;
            // const { sharps } = (event as KeySignatureEvent);
            keySignaturesByOffset[currentOffset] = sharps;
            currentKeySignatureOffset = currentOffset;
            return "continue";
        }
        if (event_1.type & (2 /* NoteOn */ | 1 /* NoteOff */)) {
            var type = event_1.type;
            var noteNumber = void 0;
            if (type === 2 /* NoteOn */) {
                // Typescript is being weird and claiming it can't find the name NoteOnEvent...
                noteNumber = event_1.noteNumber;
                // noteNumber = (event as NoteOnEvent).noteNumber;
                var velocity = event_1.velocity;
                // let velocity = (event as NoteOnEvent).velocity;
                if (velocity === 0) {
                    type = 1 /* NoteOff */;
                }
                else {
                    if (!notesPlaying[currentOffset]) {
                        notesPlaying[currentOffset] = [];
                    }
                    var note = midi_tools_1.NoteNumberToName(noteNumber);
                    notesPlaying[currentOffset].push(note);
                }
            }
            if (type === 1 /* NoteOff */) {
                var note_1 = midi_tools_1.NoteNumberToName(noteNumber);
                var startOffset = void 0;
                var noteIndex = void 0;
                var offsets = Object.keys(notesPlaying);
                for (var i = offsets.length - 1; i >= 0; i--) {
                    var offset = Number(offsets[i]);
                    var index = notesPlaying[offset].findIndex(function (pitch) { return pitch.MIDINumber === note_1.MIDINumber; });
                    if (index >= 0) {
                        startOffset = offset;
                        noteIndex = index;
                        break;
                    }
                }
                if (startOffset !== undefined) {
                    if (!trackNotes[startOffset]) {
                        trackNotes[startOffset] = [];
                    }
                    var duration = currentOffset - startOffset;
                    trackNotes[startOffset].push({
                        pitch: note_1,
                        duration: duration,
                        beats: divisionsToBeats(duration, ppqn, timeSignaturesByOffset[currentTimeSignatureOffset]),
                        quarterNotes: divisionsToQuarterNotes(duration, ppqn),
                        measure: getMeasureNumber(currentOffset, ppqn, timeSignaturesByOffset[currentTimeSignatureOffset]),
                    });
                    notesPlaying[startOffset].splice(noteIndex, 1);
                    if (notesPlaying[startOffset].length === 0) {
                        delete notesPlaying[startOffset];
                    }
                }
            }
        }
    };
    for (var gen = reader.readTracks(), item = gen.next(); !item.done; item = gen.next()) {
        _loop_1(gen, item);
    }
    if (currentTrackNumber !== undefined && !tracks[currentTrackNumber]) {
        var notes = Object.values(trackNotes);
        if (notes.length > 0) {
            tracks[currentTrackNumber] = {
                keySignaturesByOffset: keySignaturesByOffset,
                timeSignaturesByOffset: timeSignaturesByOffset,
                notes: notes,
            };
        }
    }
    return tracks;
};
function convertMIDI(_a) {
    var midiFile = _a.midiFile;
    return __awaiter(this, void 0, void 0, function () {
        var dataView, reader, xmlWriter, eventTypes, generator, result, _b, event_2, deltaTime, trackNumber, tracks;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, getArrayBuffer(midiFile)];
                case 1:
                    dataView = _c.sent();
                    reader = new midi_tools_1.MIDIReader(dataView);
                    xmlWriter = new xml_writer_1.default(true);
                    eventTypes = 127 /* ChannelEvents */ |
                        16384 /* MetaTrackName */ |
                        65536 /* MetaInstrumentName */;
                    generator = reader.readTracks({ eventTypes: eventTypes });
                    xmlWriter.startDocument("1.0", "UTF-8");
                    xmlWriter.writeDocType("score-timewise", "-//Recordare//DTD MusicXML 3.1 Partwise//EN", "http://www.musicxml.org/dtds/partwise.dtd");
                    xmlWriter.startElement("score-timewise");
                    xmlWriter.startElement("part-list");
                    xmlWriter.startElement("score-part");
                    xmlWriter.writeAttribute("id", "P1");
                    xmlWriter.endElement(); // end <score-part>
                    xmlWriter.endElement(); // end <part-list>
                    xmlWriter.startElement("measure");
                    xmlWriter.writeAttribute("number", 1);
                    xmlWriter.startElement("attributes");
                    // TODO: handle SMPTE
                    if (reader.header.division.ticks) {
                        xmlWriter.writeElement("divisions", reader.header.division.ticks);
                    }
                    xmlWriter.endElement(); // end <attributes>
                    xmlWriter.startElement("part");
                    xmlWriter.writeAttribute("id", "P1");
                    for (result = generator.next(); !result.done; result = generator.next()) {
                        _b = result.value, event_2 = _b.event, deltaTime = _b.deltaTime, trackNumber = _b.trackNumber;
                        if (event_2.type & (65536 /* MetaInstrumentName */ | 16384 /* MetaTrackName */)) {
                            // console.log(trackNumber, event);
                        }
                        if (event_2.type & 2 /* NoteOn */) {
                            // const note = NoteNumberToName((event as NoteOnEvent).noteNumber);
                            // // console.log({
                            // //   note,
                            // // });
                            // xmlWriter.startElement("note");
                            // xmlWriter.startElement("pitch");
                            // xmlWriter.writeElement("step", note.step);
                            // xmlWriter.writeElement("octave", note.octave);
                            // if (note.alter !== undefined) {
                            //   xmlWriter.writeElement("alter", note.alter);
                            // }
                            // xmlWriter.endElement(); // end <pitch>
                            // xmlWriter.endElement(); // end <note>
                        }
                    }
                    xmlWriter.endElement(); // end <part>
                    xmlWriter.endElement(); // end <measure>
                    xmlWriter.endElement(); // end <score-timewise>
                    xmlWriter.endDocument();
                    tracks = getNotesByTrack(reader);
                    console.log(JSON.stringify(tracks, null, '  '));
                    return [2 /*return*/, ''];
            }
        });
    });
}
exports.convertMIDI = convertMIDI;
