"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteNameToNumber = exports.NoteNumberToName = void 0;
function NoteNumberToName(note) {
    let step;
    let alter;
    let octave = Math.floor(note / 12) - 1;
    switch (note % 12) {
        case 1:
            alter = 1;
        case 0:
            step = "C";
            break;
        case 3:
            alter = 1;
        case 2:
            step = "D";
            break;
        case 4:
            step = "E";
            break;
        case 6:
            alter = 1;
        case 5:
            step = "F";
            break;
        case 8:
            alter = 1;
        case 7:
            step = "G";
            break;
        case 10:
            alter = 1;
        case 9:
            step = "A";
            break;
        case 11:
            step = "B";
            break;
    }
    const noteObj = {
        step,
        octave,
        MIDINumber: note,
    };
    if (alter) {
        noteObj.alter = alter;
    }
    return noteObj;
}
exports.NoteNumberToName = NoteNumberToName;
const stepToNumber = {
    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11,
};
const steps = "ABCDEFG";
function NoteNameToNumber(noteName) {
    let step;
    let octave;
    let alter;
    if (typeof noteName === "string") {
        const matches = /^([A-G])([#b])?(-?\d+)$/.exec(noteName);
        if (!matches) {
            return null;
        }
        let alterString = matches[2];
        step = matches[1];
        octave = Number(matches[3]);
        if (alterString === "b") {
            alter = -1;
        }
        else if (alterString === "#") {
            alter = 1;
        }
    }
    else {
        step = noteName.step;
        alter = noteName.alter;
        octave = noteName.octave;
    }
    if (alter === -1) {
        alter = 1;
        const initialStepIndex = steps.indexOf(step);
        step = steps[(steps.indexOf(step) + steps.length - 1) % steps.length];
        // e.g. going from Ab4 -> G#3
        if (steps.indexOf(step) > initialStepIndex) {
            octave -= 1;
        }
    }
    let number = stepToNumber[step];
    if (alter === 1) {
        number += 1;
    }
    return number + ((octave + 1) * 12);
}
exports.NoteNameToNumber = NoteNameToNumber;
