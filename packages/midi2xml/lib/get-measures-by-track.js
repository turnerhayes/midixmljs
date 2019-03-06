"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var midi_tools_1 = require("@thayes/midi-tools");
var KeySignatureMap_1 = require("./KeySignatureMap");
var TimeSignatureMap_1 = require("./TimeSignatureMap");
var Measure_1 = require("./Measure");
var MeasureNote_1 = require("./MeasureNote");
var MeasureRest_1 = require("./MeasureRest");
var NoteTypes_1 = require("./NoteTypes");
exports.quarterNotesPerBeat = function (timeSignature) {
    return 4 / timeSignature.denominator;
};
exports.ticksPerBeat = function (timeSignature, ppqn) {
    return ppqn * exports.quarterNotesPerBeat(timeSignature);
};
var getMeasureEndOffset = function (startOffset, timeSignature, ppqn) {
    return startOffset + (exports.ticksPerBeat(timeSignature, ppqn) * timeSignature.numerator);
};
var getMeasureForOffset = function (offset, measures) {
    for (var measureNumber = measures.length - 1; measureNumber >= 1; measureNumber--) {
        var measure = measures[measureNumber];
        if (measure.startOffset <= offset && measure.endOffset >= offset) {
            return measure;
        }
    }
    return null;
};
var ensureMeasures = function (_a) {
    var measures = _a.measures, timeSignatureMap = _a.timeSignatureMap, keySignatureMap = _a.keySignatureMap, endOffset = _a.endOffset, ppqn = _a.ppqn;
    if (measures.length === 0) {
        measures.push(undefined);
    }
    var lastMeasureEnd = measures.length === 1 ?
        0 :
        measures[measures.length - 1].endOffset;
    var currentOffset = lastMeasureEnd;
    var measureNumber = measures.length;
    while (currentOffset <= endOffset) {
        var measure = new Measure_1.Measure({
            startOffset: currentOffset,
            endOffset: getMeasureEndOffset(currentOffset, timeSignatureMap.getSignature(currentOffset), ppqn),
            keySignatureMap: keySignatureMap,
            timeSignatureMap: timeSignatureMap,
            number: measureNumber,
        });
        measures[measureNumber] = measure;
        currentOffset = measure.endOffset + 1;
    }
};
var addRests = function (_a) {
    var measures = _a.measures, fromOffset = _a.fromOffset, toOffset = _a.toOffset, ppqn = _a.ppqn;
    var startOffset = fromOffset;
    while (startOffset < toOffset) {
        var measure = getMeasureForOffset(startOffset, measures);
        if (measure === null) {
            throw new Error("Cannot find measure for offset " + startOffset);
        }
        // Add rest(s)
        var restDuration = void 0;
        if (toOffset > measure.endOffset && startOffset < measure.endOffset) {
            restDuration = measure.endOffset - startOffset;
        }
        else {
            restDuration = toOffset - startOffset;
        }
        var restNoteType = NoteTypes_1.findNoteType(restDuration, ppqn);
        measure.addRest({
            offset: startOffset,
            rest: new MeasureRest_1.MeasureRest({
                duration: restDuration,
                noteType: restNoteType,
                measureNumber: measure.number,
            }),
        });
        startOffset += restDuration;
    }
};
exports.getMeasuresByTrack = function (reader) {
    var e_1, _a;
    var measuresByTrack = [];
    var ppqn = reader.header.division.ticks;
    var currentTrack = -1;
    var currentMeasureNumber = 1;
    var currentOffset = 0;
    var lastNoteOffOffset;
    var keySignatureMap;
    var timeSignatureMap;
    var currentlyPlayingNotes;
    var currentProgramNumber;
    var trackName;
    var trackInstrumentName;
    var trackSequenceNumber;
    var trackTexts;
    var trackNoteNumbers;
    var measures;
    try {
        for (var _b = __values(reader.readTracks()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = _c.value, event_1 = _d.event, trackNumber = _d.trackNumber, deltaTime = _d.deltaTime;
            // track change
            if (trackNumber !== currentTrack) {
                if (currentTrack > 0) {
                    measuresByTrack[currentTrack] = {
                        info: {
                            trackNumber: currentTrack,
                            programNumber: currentProgramNumber,
                            averageNoteNumber: trackNoteNumbers.reduce(function (sum, noteNumber) { return sum + noteNumber; }, 0) / trackNoteNumbers.length,
                            instrumentName: trackInstrumentName,
                            sequenceNumber: trackSequenceNumber,
                            name: trackName,
                            texts: trackTexts.length > 0 ?
                                trackTexts :
                                undefined,
                        },
                        measures: measures,
                    };
                }
                currentTrack = trackNumber;
                currentMeasureNumber = 1;
                currentOffset = 0;
                currentProgramNumber = 0;
                trackName = undefined;
                trackInstrumentName = undefined;
                trackSequenceNumber = undefined;
                trackTexts = [];
                trackNoteNumbers = [];
                lastNoteOffOffset = null;
                keySignatureMap = new KeySignatureMap_1.KeySignatureMap();
                timeSignatureMap = new TimeSignatureMap_1.TimeSignatureMap();
                currentlyPlayingNotes = {};
                measures = [];
            }
            currentOffset += deltaTime;
            var type = event_1.type;
            if (type & 524288 /* MetaKeySignature */) {
                var _e = event_1, sharps = _e.sharps, isMajor = _e.isMajor;
                keySignatureMap.addSignature(currentOffset, {
                    sharps: sharps,
                    mode: isMajor ?
                        "major" :
                        "minor",
                });
            }
            else if (type & 131072 /* MetaTimeSignature */) {
                var _f = event_1, numerator = _f.numerator, denominator = _f.denominator;
                timeSignatureMap.addSignature(currentOffset, {
                    numerator: numerator,
                    denominator: denominator,
                });
            }
            else if (type & 16384 /* MetaTrackName */) {
                var name_1 = event_1.name;
                trackName = name_1;
            }
            else if (type & 65536 /* MetaInstrumentName */) {
                var name_2 = event_1.name;
                trackInstrumentName = name_2;
            }
            else if (type & 256 /* MetaSequenceNumber */) {
                var sequenceNumber = event_1.sequenceNumber;
                trackSequenceNumber = sequenceNumber;
            }
            else if (type & 2048 /* MetaText */) {
                var text = event_1.text;
                trackTexts.push(text);
            }
            else if (type & 16 /* ProgramChange */) {
                var programNumber = event_1.programNumber;
                currentProgramNumber = programNumber;
                if (currentOffset > 0) {
                    console.warn("Encountered a program change event that was not at the beginning of the track; the resulting MusicXML may not reflect this properly");
                }
            }
            else if (type & (2 /* NoteOn */ | 1 /* NoteOff */)) {
                var noteNumber = void 0;
                ensureMeasures({
                    measures: measures,
                    timeSignatureMap: timeSignatureMap,
                    keySignatureMap: keySignatureMap,
                    endOffset: currentOffset,
                    ppqn: ppqn
                });
                currentMeasureNumber = measures.length - 1;
                if (type & 2 /* NoteOn */) {
                    noteNumber = event_1.noteNumber;
                    if (event_1.velocity === 0) {
                        type = 1 /* NoteOff */;
                    }
                }
                else {
                    noteNumber = event_1.noteNumber;
                }
                if (type & 2 /* NoteOn */) {
                    if (lastNoteOffOffset !== null &&
                        lastNoteOffOffset + 1 < currentOffset &&
                        Object.keys(currentlyPlayingNotes).length === 0) {
                        addRests({
                            measures: measures,
                            fromOffset: lastNoteOffOffset,
                            toOffset: currentOffset,
                            ppqn: ppqn,
                        });
                    }
                    currentlyPlayingNotes[noteNumber] = {
                        startOffset: currentOffset,
                        startMeasure: currentMeasureNumber,
                    };
                    trackNoteNumbers.push(noteNumber);
                }
                else if (type & 1 /* NoteOff */) {
                    var playingNote = currentlyPlayingNotes[noteNumber];
                    if (!playingNote) {
                        console.warn("Got a noteOff event for note number " + noteNumber + " with no matching noteOn");
                        continue;
                    }
                    var pitch = midi_tools_1.NoteNumberToName(noteNumber);
                    var duration = currentOffset - playingNote.startOffset;
                    var note = new MeasureNote_1.MeasureNote({
                        pitch: pitch,
                        measureNumber: playingNote.startMeasure,
                        duration: duration,
                        noteType: NoteTypes_1.findNoteType(duration, ppqn),
                    });
                    measures[playingNote.startMeasure].addNote({
                        offset: playingNote.startOffset,
                        note: note,
                    });
                    // Canonicalize offset; if the actual duration was not a proper duration (i.e.
                    // corresponding exactly to a half note, quarter note, eighth note, etc.) then
                    // noteType.duration will not be the same as the duration calculated from the
                    // deltaTime--for instance, if ppqn = 480 and duration = 239, note.noteType will
                    // be an eighth note and note.noteType.duration will be 240. In that case, we want
                    // to add 1 to the currentOffset so that it aligns with the adjusted duration.
                    if (note.noteType.duration !== duration) {
                        currentOffset += note.noteType.duration - duration;
                    }
                    delete currentlyPlayingNotes[noteNumber];
                    lastNoteOffOffset = currentOffset;
                }
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
    if (measures.length > 0) {
        measuresByTrack[currentTrack] = {
            info: {
                trackNumber: currentTrack,
                programNumber: currentProgramNumber,
                averageNoteNumber: trackNoteNumbers.reduce(function (sum, noteNumber) { return sum + noteNumber; }, 0) / trackNoteNumbers.length,
                instrumentName: trackInstrumentName,
                sequenceNumber: trackSequenceNumber,
                name: trackName,
                texts: trackTexts.length > 0 ?
                    trackTexts :
                    undefined,
            },
            measures: measures,
        };
    }
    return measuresByTrack;
};
//# sourceMappingURL=get-measures-by-track.js.map