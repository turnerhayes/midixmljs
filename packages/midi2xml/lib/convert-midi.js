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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
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
var midi_tools_1 = require("@thayes/midi-tools");
var MeasureChord_1 = require("./MeasureChord");
var MeasureRest_1 = require("./MeasureRest");
var get_measures_by_track_1 = require("./get-measures-by-track");
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
var writeMeasureNotes = function (xmlWriter, measure, clefNumber, ppqn) {
    // const { timeSignature } = measure;
    var e_1, _a;
    try {
        // let beatGroup:IMeasureElement[] = [];
        // const beatGroups:Array<IMeasureElement[]> = [
        //   beatGroup,
        // ];
        // const beatLength:number = ticksPerBeat(timeSignature, ppqn);
        // type AudibleItem = MeasureNote|MeasureChord;
        // type MeasureGroupItem = {
        //   start:number;
        //   startBeat:number;
        //   end:number;
        //   endBeat:number;
        //   nextInBeat:MeasureGroupItem|null;
        //   previousInBeat:MeasureGroupItem|null;
        //   noteType:INoteType;
        //   isRest:boolean;
        //   noteItem?:AudibleItem;
        // }
        // const measureItems:MeasureGroupItem[] = [];
        // let currentOffset = 0;
        // for (let element of measure.notes) {
        //   let item:MeasureGroupItem = {
        //     start: currentOffset,
        //     startBeat: Math.floor(currentOffset / beatLength),
        //     end: currentOffset + element.duration,
        //     endBeat: Math.floor((currentOffset + element.duration) / beatLength),
        //     nextInBeat: null,
        //     previousInBeat: null,
        //     noteType: element.noteType,
        //     isRest: element instanceof MeasureRest,
        //     noteItem: element instanceof MeasureRest ?
        //       undefined :
        //       element as AudibleItem,
        //   };
        //   currentOffset += element.duration;
        //   let previousAudibleItem:MeasureGroupItem;
        //   let previousMeasureItem:MeasureGroupItem;
        //   if (measureItems.length > 0) {
        //     previousMeasureItem = measureItems[measureItems.length - 1];
        //     for (
        //       let itemIndex = measureItems.length - 1;
        //       itemIndex >= 0 && !previousAudibleItem;
        //       itemIndex--
        //     ) {
        //       if (!measureItems[itemIndex].isRest) {
        //         previousAudibleItem = measureItems[itemIndex];
        //       }
        //     }
        //   }
        //   const nextItemStart = previousMeasureItem ?
        //     previousMeasureItem.end :
        //     0;
        //   if (nextItemStart < item.start) {
        //     const restDuration = item.start - nextItemStart;
        //     measureItems.push({
        //       start: nextItemStart,
        //       startBeat: Math.floor(nextItemStart / beatLength),
        //       end: item.start - 1,
        //       endBeat: Math.floor((item.start) / beatLength),
        //       nextInBeat: null,
        //       previousInBeat: null,
        //       noteType: findNoteType(restDuration, ppqn),
        //       isRest: true,
        //     });
        //   }
        //   measureItems.push(item);
        //   if (!item.isRest && previousAudibleItem && previousAudibleItem.startBeat === item.endBeat) {
        //     previousAudibleItem.nextInBeat = item;
        //     item.previousInBeat = previousAudibleItem;
        //   }
        // }
        // const measureDuration = beatLength * timeSignature.numerator;
        // const lastMeasureItem = measureItems[measureItems.length - 1];
        // // It's possible that a measure has no items, in which case it should just have a rest
        // // for the duration of the measure
        // const nextItemStart = lastMeasureItem ?
        //   lastMeasureItem.end :
        //   0;
        // for (let measureItem of measureItems) {
        for (var _b = __values(measure.measureItems), _c = _b.next(); !_c.done; _c = _b.next()) {
            var measureItem = _c.value;
            if (measureItem.element instanceof MeasureRest_1.MeasureRest) {
                xmlWriter.startElement("note");
                xmlWriter.startElement("rest").endElement();
                xmlWriter.writeElement("type", measureItem.element.noteType.typeName);
                if (measureItem.element.noteType.dot) {
                    xmlWriter.startElement("dot").endElement();
                }
                xmlWriter.writeElement("duration", measureItem.element.noteType.duration);
                xmlWriter.writeElement("staff", clefNumber);
                xmlWriter.writeElement("voice", clefNumber);
                xmlWriter.endElement(); // end <note>
                continue;
            }
            var notes = void 0;
            if (measureItem.element instanceof MeasureChord_1.MeasureChord) {
                notes = measureItem.element.notes;
            }
            else {
                notes = [
                    measureItem.element,
                ];
            }
            for (var noteIndex = 0; noteIndex < notes.length; noteIndex++) {
                var note = notes[noteIndex];
                xmlWriter.startElement("note");
                if (note instanceof MeasureRest_1.MeasureRest) {
                    xmlWriter.startElement("rest").endElement();
                }
                else {
                    xmlWriter.startElement("pitch");
                    xmlWriter.writeElement("step", note.pitch.step);
                    xmlWriter.writeElement("octave", note.pitch.octave);
                    if (note.pitch.alter !== undefined) {
                        xmlWriter.writeElement("alter", note.pitch.alter);
                    }
                    xmlWriter.endElement(); // end <pitch>
                    if (measureItem.previousInBeat || measureItem.nextInBeat) {
                        xmlWriter.startElement("beam");
                        xmlWriter.writeAttribute("number", 1);
                        if (!measureItem.previousInBeat) {
                            xmlWriter.text("begin");
                        }
                        else if (!measureItem.nextInBeat) {
                            xmlWriter.text("end");
                        }
                        else {
                            xmlWriter.text("continue");
                        }
                        xmlWriter.endElement(); // end <beam>
                    }
                }
                xmlWriter.writeElement("duration", note.noteType.duration);
                xmlWriter.writeElement("type", note.noteType.typeName);
                if (note.noteType.dot) {
                    xmlWriter.startElement("dot").endElement();
                }
                if (measureItem.element instanceof MeasureChord_1.MeasureChord && noteIndex > 0) {
                    xmlWriter.startElement("chord").endElement();
                }
                xmlWriter.writeElement("staff", clefNumber);
                xmlWriter.writeElement("voice", clefNumber);
                xmlWriter.endElement(); // end <note>
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
function convertMIDI(_a) {
    var midiFile = _a.midiFile;
    return __awaiter(this, void 0, void 0, function () {
        var e_2, _b, e_3, _c, e_4, _d, dataView, reader, xmlWriter, ppqn, measuresByTrack, tracksByProgramNumber, measuresByTrack_1, measuresByTrack_1_1, track, programNumberToPartID, partID, _e, _f, programNumber, tracks, id, clefNumber, _g, _h, programNumber, tracks, trebleClefTrack, bassCleffTrack, trebleClefNumber, bassCleffNumber, measureNumber, measure, bassCleffMeasure;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0: return [4 /*yield*/, getArrayBuffer(midiFile)];
                case 1:
                    dataView = _j.sent();
                    reader = new midi_tools_1.MIDIReader(dataView);
                    xmlWriter = new xml_writer_1.default("  ");
                    // TODO: handle SMPTE
                    if (reader.header.division.ticks) {
                        ppqn = reader.header.division.ticks;
                    }
                    else {
                        throw new Error("SMPTE divisions are not yet supported");
                    }
                    measuresByTrack = get_measures_by_track_1.getMeasuresByTrack(reader);
                    xmlWriter.startDocument("1.0", "UTF-8");
                    xmlWriter.writeDocType("score-partwise", "-//Recordare//DTD MusicXML 3.1 Partwise//EN", "http://www.musicxml.org/dtds/partwise.dtd");
                    xmlWriter.startElement("score-partwise");
                    xmlWriter.startElement("part-list");
                    tracksByProgramNumber = {};
                    try {
                        for (measuresByTrack_1 = __values(measuresByTrack), measuresByTrack_1_1 = measuresByTrack_1.next(); !measuresByTrack_1_1.done; measuresByTrack_1_1 = measuresByTrack_1.next()) {
                            track = measuresByTrack_1_1.value;
                            if (!track) {
                                continue;
                            }
                            if (!tracksByProgramNumber[track.info.programNumber]) {
                                tracksByProgramNumber[track.info.programNumber] = [];
                            }
                            tracksByProgramNumber[track.info.programNumber].push(track);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (measuresByTrack_1_1 && !measuresByTrack_1_1.done && (_b = measuresByTrack_1.return)) _b.call(measuresByTrack_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    programNumberToPartID = {};
                    partID = 0;
                    try {
                        for (_e = __values(Object.keys(tracksByProgramNumber)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            programNumber = _f.value;
                            tracks = tracksByProgramNumber[programNumber];
                            id = "P" + ++partID;
                            programNumberToPartID[programNumber] = id;
                            xmlWriter.startElement("score-part");
                            xmlWriter.writeAttribute("id", id);
                            xmlWriter.startElement("midi-instrument");
                            xmlWriter.writeElement("midi-program", Number(programNumber) + 1);
                            xmlWriter.endElement(); // end <midi-instrument>
                            xmlWriter.endElement(); // end <score-part>
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                    xmlWriter.endElement(); // end <part-list>
                    clefNumber = 0;
                    try {
                        for (_g = __values(Object.keys(tracksByProgramNumber)), _h = _g.next(); !_h.done; _h = _g.next()) {
                            programNumber = _h.value;
                            tracks = tracksByProgramNumber[programNumber];
                            trebleClefTrack = void 0;
                            bassCleffTrack = void 0;
                            trebleClefNumber = ++clefNumber;
                            bassCleffNumber = ++clefNumber;
                            // TODO: Better detection of appropriate clefs
                            if (tracks.length === 1) {
                                trebleClefTrack = tracks[0];
                            }
                            else if (tracks.length === 2) {
                                if (tracks[0].info.averageNoteNumber > tracks[1].info.averageNoteNumber) {
                                    trebleClefTrack = tracks[0];
                                    bassCleffTrack = tracks[1];
                                }
                                else {
                                    trebleClefTrack = tracks[1];
                                    bassCleffTrack = tracks[0];
                                }
                            }
                            else {
                                throw new Error("Don't know how to handle more than 2 tracks");
                            }
                            xmlWriter.startElement("part");
                            xmlWriter.writeAttribute("id", programNumberToPartID[programNumber]);
                            for (measureNumber = 1; measureNumber < trebleClefTrack.measures.length; measureNumber++) {
                                measure = trebleClefTrack.measures[measureNumber];
                                bassCleffMeasure = bassCleffTrack ?
                                    bassCleffTrack.measures[measureNumber] :
                                    null;
                                xmlWriter.startElement("measure");
                                xmlWriter.writeAttribute("number", measureNumber);
                                if (measureNumber === 1) {
                                    xmlWriter.startElement("attributes");
                                    xmlWriter.writeElement("divisions", ppqn);
                                    xmlWriter.startElement("key");
                                    xmlWriter.writeElement("fifths", measure.keySignature.sharps);
                                    if (measure.keySignature.mode === "minor") {
                                        xmlWriter.writeElement("mode", measure.keySignature.mode);
                                    }
                                    xmlWriter.endElement(); // end <key>
                                    xmlWriter.startElement("time");
                                    xmlWriter.writeElement("beats", measure.timeSignature.numerator);
                                    xmlWriter.writeElement("beat-type", measure.timeSignature.denominator);
                                    xmlWriter.endElement(); // end <time>
                                    xmlWriter.writeElement("staves", tracks.length);
                                    xmlWriter.startElement("clef");
                                    xmlWriter.writeAttribute("number", trebleClefNumber);
                                    xmlWriter.writeElement("sign", "G");
                                    xmlWriter.writeElement("line", 2);
                                    xmlWriter.endElement(); // end <clef>
                                    xmlWriter.startElement("clef");
                                    xmlWriter.writeAttribute("number", bassCleffNumber);
                                    xmlWriter.writeElement("sign", "F");
                                    xmlWriter.writeElement("line", 4);
                                    xmlWriter.endElement(); // end <clef>
                                    xmlWriter.endElement(); // end <attributes>
                                }
                                writeMeasureNotes(xmlWriter, measure, trebleClefNumber, ppqn);
                                if (bassCleffMeasure) {
                                    xmlWriter.startElement("backup");
                                    xmlWriter.writeElement("duration", measure.totalQuarterNotes * ppqn);
                                    xmlWriter.endElement(); // end <backup>
                                    writeMeasureNotes(xmlWriter, bassCleffMeasure, bassCleffNumber, ppqn);
                                }
                                xmlWriter.endElement(); // end <measure>
                            }
                            xmlWriter.endElement(); // end <part>
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    xmlWriter.endElement(); // end <score-partwise>
                    xmlWriter.endDocument();
                    return [2 /*return*/, xmlWriter.toString()];
            }
        });
    });
}
exports.convertMIDI = convertMIDI;
//# sourceMappingURL=convert-midi.js.map