import { IPitch } from "./IPitch";
import { NoteStep } from "./NoteStep";

export function NoteNumberToName(note: number): IPitch {
  let step: NoteStep;
  let alter: 1 | undefined;
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

  const noteObj: IPitch = {
    step,
    octave,
    MIDINumber: note,
  };

  if (alter) {
    noteObj.alter = alter;
  }

  return noteObj;
}

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

export function NoteNameToNumber(noteName: string | IPitch): number {
  let step: NoteStep;
  let octave: number;
  let alter: -1 | 1 | undefined;

  if (typeof noteName === "string") {
    const matches = /^([A-G])([#b])?(-?\d+)$/.exec(noteName);

    if (!matches) {
      return null;
    }

    let alterString: string = matches[2];

    step = matches[1] as NoteStep;

    octave = Number(matches[3]);

    if (alterString === "b") {
      alter = -1;
    } else if (alterString === "#") {
      alter = 1;
    }

  } else {
    step = (noteName as IPitch).step;
    alter = (noteName as IPitch).alter;
    octave = (noteName as IPitch).octave;
  }


  if (alter === -1) {
    alter = 1;
    const initialStepIndex = steps.indexOf(step);

    step = steps[
      (steps.indexOf(step) + steps.length - 1) % steps.length
    ] as NoteStep;

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
