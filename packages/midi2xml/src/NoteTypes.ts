import Fraction from "fraction.js";

export type NoteTypeName = "whole"|"half"|"quarter"|"eighth"|"16th"|"32nd"|"64th"|"128th"|"256th"|"512th"|"1024th";

export interface INoteType {
  typeName:NoteTypeName;
  dot:boolean;
  duration:number;
  fraction:Fraction; // numerator, denominator
};

const types:{[typeName:string]: Fraction} = {
  whole_dot: new Fraction(6, 1),
  whole: new Fraction(4, 1),
  half_dot: new Fraction(3, 1),
  half: new Fraction(2, 1),
  quarter_dot: new Fraction(3, 2),
  quarter: new Fraction(1, 1),
  eighth_dot: new Fraction(3, 4),
  eighth: new Fraction(1, 2),
  "16th_dot": new Fraction(3, 8),
  "16th": new Fraction(1, 4),
  "32nd_dot": new Fraction(3, 16),
  "32nd": new Fraction(1, 8),
  "64th_dot": new Fraction(3, 32),
  "64th": new Fraction(1, 16),
  "128th_dot": new Fraction(3, 64),
  "128th": new Fraction(1, 32),
  "256th_dot": new Fraction(3, 128),
  "256th": new Fraction(1, 64),
  "512th_dot": new Fraction(3, 256),
  "512th": new Fraction(1, 128),
  "1024th_dot": new Fraction(3, 512),
  "1024th": new Fraction(1, 256),
};

export const getNoteTypes = (ppqn:number):{[duration:number]: INoteType} => {
  const noteTypes:{[duration:number]: INoteType} = {};

  for (let key of Object.keys(types)) {
    const fraction = types[key];
    const [ typeName, dot ] = key.split("_");

    const pulses = fraction.mul(ppqn);

    // Only add if an integer
    if (pulses.equals(pulses.floor())) {
      noteTypes[pulses.valueOf()] = {
        typeName: typeName as NoteTypeName,
        dot: !!dot,
        fraction,
        duration: pulses.valueOf(),
      };
    }
  }

  return noteTypes;
};

export const findNoteType = (
  divisions: number,
  ppqn: number
): INoteType => {
  const types = getNoteTypes(ppqn);

  if (divisions in types) {
    // The division count is exactly a known duration--hooray, return it!
    return types[divisions];
  }

  // Divisions is not exact--we need to find the closest known duration

  let minDelta = Infinity;

  let closestDuration:number;

  let duration:string|number;

  for (duration of Object.keys(types)) {
    duration = Number(duration);

    const delta = Math.abs(duration - divisions);

    if (delta < minDelta) {
      minDelta = delta;
      closestDuration = duration;
    }
  }

  return types[closestDuration];
};
