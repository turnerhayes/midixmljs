"use strict";
/**
 * @todo: handle repeats
 * @todo: reconcile different division counts
 *  - between staffs
 *  - within a staff
 *  - not sure this ever actually happens, but is *technically* possible
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMIDI = void 0;
const midi_tools_1 = require("@thayes/midi-tools");
const jsdom_1 = require("jsdom");
const getChordNoteNodes = ({ document, itemNode, staff, window, }) => {
    const siblingsIterator = document.evaluate(`following-sibling::note[staff/text() = "${staff}"]`, itemNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    const siblings = [];
    let nextNoteNode = siblingsIterator.iterateNext();
    while (nextNoteNode && nextNoteNode.querySelector("chord")) {
        siblings.push(nextNoteNode);
        nextNoteNode = siblingsIterator.iterateNext();
    }
    return siblings;
};
const readMeasuresFromPart = (partNode, document, window) => {
    return Array.from(partNode.querySelectorAll("measure")).reduce((measureReduction, measureNode) => {
        const measureNumber = Number(measureNode.getAttribute("number"));
        const attributesNode = measureNode.querySelector("attributes");
        let timeSignature;
        let divisions;
        let keySignature;
        if (attributesNode) {
            const divisionsNode = attributesNode.querySelector("divisions");
            if (divisionsNode) {
                divisions = Number(divisionsNode.textContent);
            }
            const timeSignatureNode = attributesNode.querySelector("time");
            if (timeSignatureNode) {
                timeSignature = {
                    numerator: Number(timeSignatureNode.querySelector("beats").textContent),
                    denominator: Number(timeSignatureNode.querySelector("beat-type").textContent),
                };
            }
            const keySignatureNode = attributesNode.querySelector("key");
            if (keySignatureNode) {
                const modeNode = keySignatureNode.querySelector("mode");
                let mode = "major";
                if (modeNode) {
                    const modeString = modeNode.textContent;
                    if (modeString === "minor") {
                        mode = modeString;
                    }
                }
                keySignature = {
                    sharps: Number(keySignatureNode.querySelector("fifths").textContent),
                    mode,
                };
            }
        }
        const bpmNode = measureNode.querySelector("direction metronome > per-minute");
        let bpm;
        if (bpmNode) {
            bpm = Number(bpmNode.textContent);
        }
        const noteIterator = document.evaluate(".//note[not(chord)]", measureNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        let itemNode = noteIterator.iterateNext();
        const notesByStaff = {};
        while (itemNode) {
            const duration = Number(itemNode.querySelector("duration").textContent);
            const staffNode = itemNode.querySelector("staff");
            let staff;
            if (staffNode) {
                staff = Number(staffNode.textContent);
                const item = {
                    duration,
                    staff,
                };
                if (!itemNode.querySelector("rest")) {
                    const chordNotes = getChordNoteNodes({
                        document,
                        itemNode,
                        staff,
                        window,
                    });
                    chordNotes.unshift(itemNode);
                    const notes = chordNotes.map((noteNode) => {
                        const pitchNode = itemNode.querySelector("pitch");
                        const step = pitchNode.querySelector("step").textContent;
                        const octave = Number(pitchNode.querySelector("octave").textContent);
                        const alterNode = pitchNode.querySelector("alter");
                        const pitch = {
                            step,
                            octave,
                        };
                        if (alterNode) {
                            pitch.alter = Number(alterNode.textContent);
                        }
                        const midiNumber = (0, midi_tools_1.NoteNameToNumber)(pitch);
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
            divisions,
            timeSignature,
            keySignature,
            tempo: bpm,
        };
        return measureReduction;
    }, {});
};
const readParts = (partListNode) => {
    return Array.from(partListNode.querySelectorAll("score-part")).reduce((reduction, partNode) => {
        const id = partNode.getAttribute("id");
        const name = partNode.querySelector("part-name").textContent;
        const instruments = Array.from(partNode.querySelectorAll("score-instrument")).reduce((instrumentReduction, instrumentNode) => {
            const instrumentID = instrumentNode.getAttribute("id");
            const instrumentName = instrumentNode.querySelector("instrument-name").textContent;
            const midiInfo = {};
            const midiDeviceNode = partNode.querySelector(`midi-device[id="${instrumentID}"]`);
            if (midiDeviceNode) {
                const port = midiDeviceNode.getAttribute("port");
                if (port) {
                    midiInfo.port = Number(port);
                }
            }
            const midiInstrumentNode = partNode.querySelector(`midi-instrument[id="${instrumentID}"]`);
            const channelNode = midiInstrumentNode.querySelector("midi-channel");
            if (channelNode) {
                const channel = channelNode.textContent;
                if (channel) {
                    midiInfo.channel = Number(channel);
                }
            }
            const programNode = midiInstrumentNode.querySelector("midi-program");
            if (programNode) {
                const program = programNode.textContent;
                if (program) {
                    midiInfo.program = Number(program);
                }
            }
            const volumeNode = midiInstrumentNode.querySelector("volume");
            if (volumeNode) {
                const volume = volumeNode.textContent;
                if (volume) {
                    midiInfo.volume = Number(volume);
                }
            }
            const panNode = midiInstrumentNode.querySelector("pan");
            if (panNode) {
                const pan = panNode.textContent;
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
        const part = {
            id,
            name,
            instruments,
        };
        reduction[id] = part;
        return reduction;
    }, {});
};
function getWindow() {
    if (typeof window === "undefined") {
        return new jsdom_1.JSDOM().window;
    }
    return window;
}
const getMIDI = (document, windowObj) => {
    if (!windowObj) {
        windowObj = getWindow();
    }
    if (typeof document === "string") {
        document = new windowObj.DOMParser().parseFromString(document, "application/xml");
    }
    let isTimewise;
    let root = document.querySelector("score-partwise");
    if (root) {
        isTimewise = false;
    }
    else {
        root = document.querySelector("score-timewise");
        isTimewise = true;
    }
    const workTitleNode = root.querySelector("work work-title");
    let title;
    if (workTitleNode) {
        title = workTitleNode.textContent;
    }
    const partListNode = root.querySelector("part-list");
    const parts = readParts(partListNode);
    const measures = Array.from(root.querySelectorAll("part")).reduce((measuresReduction, partNode) => {
        const partID = partNode.getAttribute("id");
        measuresReduction[partID] = readMeasuresFromPart(partNode, document, windowObj);
        return measuresReduction;
    }, {});
    let divisions;
    let timeSignature;
    let tempo;
    // @todo: handle divisions more intelligently; it is possible, in theory, for
    // different measures to have different divisions. This assumes the first division
    // is the only one used throughout the MusicXML.
    for (const partID in measures) {
        if (!measures.hasOwnProperty(partID)) {
            continue;
        }
        for (const measureNumber in measures[partID]) {
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
    const file = new midi_tools_1.MIDIFile({
        divisions,
    });
    if (title) {
        file.setTitle(title);
    }
    const channelsByParts = {};
    Object.keys(parts).forEach((partID) => Object.keys(parts[partID].instruments).forEach((instrumentID) => {
        const instrument = parts[partID].instruments[instrumentID];
        if (instrument.midi.program === undefined) {
            return;
        }
        let channel = instrument.midi.channel;
        if (channel === undefined) {
            channel = 1;
        }
        // @todo: handle channel changes on individual parts (does that ever happen?)
        channelsByParts[partID] = channel;
        file.programChange({
            offset: 0,
            program: instrument.midi.program,
            channel,
        });
        if (tempo) {
            file.setTempo(tempo);
        }
        if (timeSignature) {
            file.timeSignature(timeSignature);
        }
    }));
    const offsetByStaff = {};
    Object.keys(measures).forEach((partID) => {
        const measurePart = measures[partID];
        Object.keys(measurePart).forEach((measureNumber) => {
            const notesByStaff = measurePart[measureNumber].notes;
            Object.keys(notesByStaff).forEach((staffNumber) => {
                notesByStaff[staffNumber].forEach((note) => {
                    if (!(note.staff in offsetByStaff)) {
                        offsetByStaff[note.staff] = 0;
                    }
                    let notes;
                    if (note.notes) {
                        // chord
                        notes = note.notes;
                    }
                    if (notes) {
                        notes.forEach((pitch) => file.note({
                            note: pitch.MIDINumber,
                            duration: note.duration,
                            channel: channelsByParts[partID],
                            offset: offsetByStaff[note.staff],
                            track: note.staff,
                            meta: {
                                staff: note.staff,
                                measureNumber,
                            },
                        }));
                    }
                    offsetByStaff[note.staff] += note.duration;
                });
            });
        });
    });
    return file.toArrayBuffer();
};
exports.getMIDI = getMIDI;
