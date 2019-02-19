"use strict";
/**
 * @todo: handle repeats
 * @todo: reconcile different division counts
 *  - between staffs
 *  - within a staff
 *  - not sure this ever actually happens, but is *technically* possible
 */
Object.defineProperty(exports, "__esModule", { value: true });
var midi_tools_1 = require("@thayes/midi-tools");
var getChordNoteNodes = function (_a) {
    var document = _a.document, itemNode = _a.itemNode, staff = _a.staff;
    var siblingsIterator = document.evaluate("following-sibling::note[staff/text() = \"" + staff + "\"]", itemNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var siblings = [];
    var nextNoteNode = siblingsIterator.iterateNext();
    while (nextNoteNode && nextNoteNode.querySelector("chord")) {
        siblings.push(nextNoteNode);
        nextNoteNode = siblingsIterator.iterateNext();
    }
    return siblings;
};
var readMeasuresFromPart = function (partNode, document) {
    return Array.from(partNode.querySelectorAll("measure")).reduce(function (measureReduction, measureNode) {
        var measureNumber = Number(measureNode.getAttribute("number"));
        var attributesNode = measureNode.querySelector("attributes");
        var timeSignature;
        var divisions;
        var keySignature;
        if (attributesNode) {
            var divisionsNode = attributesNode.querySelector("divisions");
            if (divisionsNode) {
                divisions = Number(divisionsNode.textContent);
            }
            var timeSignatureNode = attributesNode.querySelector("time");
            if (timeSignatureNode) {
                timeSignature = {
                    numerator: Number(timeSignatureNode.querySelector("beats").textContent),
                    denominator: Number(timeSignatureNode.querySelector("beat-type").textContent),
                };
            }
            var keySignatureNode = attributesNode.querySelector("key");
            if (keySignatureNode) {
                var modeNode = keySignatureNode.querySelector("mode");
                var mode = "major";
                if (modeNode) {
                    var modeString = modeNode.textContent;
                    if (modeString === "minor") {
                        mode = modeString;
                    }
                }
                keySignature = {
                    sharps: Number(keySignatureNode.querySelector("fifths").textContent),
                    mode: mode,
                };
            }
        }
        var bpmNode = measureNode.querySelector("direction metronome > per-minute");
        var bpm;
        if (bpmNode) {
            bpm = Number(bpmNode.textContent);
        }
        var noteIterator = document.evaluate(".//note[not(chord)]", measureNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var itemNode = noteIterator.iterateNext();
        var notesByStaff = {};
        while (itemNode) {
            var duration = Number(itemNode.querySelector("duration").textContent);
            var staffNode = itemNode.querySelector("staff");
            var staff = void 0;
            if (staffNode) {
                staff = Number(staffNode.textContent);
                var item = {
                    duration: duration,
                    staff: staff,
                };
                if (!itemNode.querySelector("rest")) {
                    var chordNotes = getChordNoteNodes({
                        document: document,
                        itemNode: itemNode,
                        staff: staff,
                    });
                    chordNotes.unshift(itemNode);
                    var notes = chordNotes.map(function (noteNode) {
                        var pitchNode = itemNode.querySelector("pitch");
                        var step = pitchNode.querySelector("step").textContent;
                        var octave = Number(pitchNode.querySelector("octave").textContent);
                        var alterNode = pitchNode.querySelector("alter");
                        var pitch = {
                            step: step,
                            octave: octave,
                        };
                        if (alterNode) {
                            pitch.alter = Number(alterNode.textContent);
                        }
                        var midiNumber = midi_tools_1.NoteNameToNumber(pitch);
                        pitch.MIDINumber = midiNumber;
                        return pitch;
                    });
                    item.notes = notes;
                }
                if (!(staff in notesByStaff)) {
                    notesByStaff[staff] = [];
                }
                notesByStaff[staff].push(item);
            }
            itemNode = noteIterator.iterateNext();
        }
        measureReduction[measureNumber] = {
            number: measureNumber,
            notes: notesByStaff,
            divisions: divisions,
            timeSignature: timeSignature,
            keySignature: keySignature,
            tempo: bpm,
        };
        return measureReduction;
    }, {});
};
var readParts = function (partListNode) {
    return Array.from(partListNode.querySelectorAll("score-part")).reduce(function (reduction, partNode) {
        var id = partNode.getAttribute("id");
        var name = partNode.querySelector("part-name").textContent;
        var instruments = Array.from(partNode.querySelectorAll("score-instrument")).reduce(function (instrumentReduction, instrumentNode) {
            var instrumentID = instrumentNode.getAttribute("id");
            var instrumentName = instrumentNode.querySelector("instrument-name").textContent;
            var midiInfo = {};
            var midiDeviceNode = partNode.querySelector("midi-device[id=\"" + instrumentID + "\"]");
            if (midiDeviceNode) {
                var port = midiDeviceNode.getAttribute("port");
                if (port) {
                    midiInfo.port = Number(port);
                }
            }
            var midiInstrumentNode = partNode.querySelector("midi-instrument[id=\"" + instrumentID + "\"]");
            var channelNode = midiInstrumentNode.querySelector("midi-channel");
            if (channelNode) {
                var channel = channelNode.textContent;
                if (channel) {
                    midiInfo.channel = Number(channel);
                }
            }
            var programNode = midiInstrumentNode.querySelector("midi-program");
            if (programNode) {
                var program = programNode.textContent;
                if (program) {
                    midiInfo.program = Number(program);
                }
            }
            var volumeNode = midiInstrumentNode.querySelector("volume");
            if (volumeNode) {
                var volume = volumeNode.textContent;
                if (volume) {
                    midiInfo.volume = Number(volume);
                }
            }
            var panNode = midiInstrumentNode.querySelector("pan");
            if (panNode) {
                var pan = panNode.textContent;
                if (pan) {
                    midiInfo.pan = Number(pan);
                }
            }
            instrumentReduction[instrumentID] = {
                id: instrumentID,
                name: instrumentName,
                midi: midiInfo,
            };
            return instrumentReduction;
        }, {});
        var part = {
            id: id,
            name: name,
            instruments: instruments,
        };
        reduction[id] = part;
        return reduction;
    }, {});
};
exports.getMIDI = function (document) {
    if (typeof document === "string") {
        document = new window.DOMParser().parseFromString(document, "application/xml");
    }
    var isTimewise;
    var root = document.querySelector("score-partwise");
    if (root) {
        isTimewise = false;
    }
    else {
        root = document.querySelector("score-timewise");
        isTimewise = true;
    }
    var workTitleNode = root.querySelector("work work-title");
    var title;
    if (workTitleNode) {
        title = workTitleNode.textContent;
    }
    var partListNode = root.querySelector("part-list");
    var parts = readParts(partListNode);
    var measures = Array.from(root.querySelectorAll("part")).reduce(function (measuresReduction, partNode) {
        var partID = partNode.getAttribute("id");
        measuresReduction[partID] = readMeasuresFromPart(partNode, document);
        return measuresReduction;
    }, {});
    var divisions;
    var timeSignature;
    var tempo;
    // @todo: handle divisions more intelligently; it is possible, in theory, for
    // different measures to have different divisions. This assumes the first division
    // is the only one used throughout the MusicXML.
    for (var partID in measures) {
        if (!measures.hasOwnProperty(partID)) {
            continue;
        }
        for (var measureNumber in measures[partID]) {
            if (!measures[partID].hasOwnProperty(measureNumber)) {
                continue;
            }
            if (measures[partID][measureNumber].divisions) {
                divisions = measures[partID][measureNumber].divisions;
            }
            if (measures[partID][measureNumber].timeSignature) {
                timeSignature = measures[partID][measureNumber].timeSignature;
            }
            if (measures[partID][measureNumber].tempo) {
                tempo = measures[partID][measureNumber].tempo;
            }
        }
        if (divisions && timeSignature && tempo) {
            break;
        }
    }
    var file = new midi_tools_1.MIDIFile({
        divisions: divisions,
    });
    if (title) {
        file.setTitle(title);
    }
    var channelsByParts = {};
    Object.keys(parts).forEach(function (partID) { return Object.keys(parts[partID].instruments).forEach(function (instrumentID) {
        var instrument = parts[partID].instruments[instrumentID];
        if (instrument.midi.program === undefined) {
            return;
        }
        var channel = instrument.midi.channel;
        if (channel === undefined) {
            channel = 1;
        }
        // @todo: handle channel changes on individual parts (does that ever happen?)
        channelsByParts[partID] = channel;
        file.programChange({
            offset: 0,
            program: instrument.midi.program,
            channel: channel,
        });
        if (tempo) {
            file.setTempo(tempo);
        }
        if (timeSignature) {
            file.timeSignature(timeSignature);
        }
    }); });
    var offsetByStaff = {};
    Object.keys(measures).forEach(function (partID) {
        var measurePart = measures[partID];
        Object.keys(measurePart).forEach(function (measureNumber) {
            var notesByStaff = measurePart[measureNumber].notes;
            Object.keys(notesByStaff).forEach(function (staffNumber) {
                notesByStaff[staffNumber].forEach(function (note) {
                    if (!(note.staff in offsetByStaff)) {
                        offsetByStaff[note.staff] = 0;
                    }
                    var notes;
                    if (note.notes) {
                        // chord
                        notes = note.notes;
                    }
                    if (notes) {
                        notes.forEach(function (pitch) { return file.note({
                            note: pitch.MIDINumber,
                            duration: note.duration,
                            channel: channelsByParts[partID],
                            offset: offsetByStaff[note.staff],
                            track: note.staff,
                            meta: {
                                staff: note.staff,
                                measureNumber: measureNumber,
                            },
                        }); });
                    }
                    offsetByStaff[note.staff] += note.duration;
                });
            });
        });
    });
    return file.toArrayBuffer();
};
