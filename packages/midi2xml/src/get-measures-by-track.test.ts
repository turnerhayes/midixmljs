import { MIDIFile, MIDIReader } from "@thayes/midi-tools";

import { getMeasuresByTrack } from "./get-measures-by-track";
import { MeasureNote } from "./MeasureNote";
import { MeasureRest } from "./MeasureRest";
import Fraction from "fraction.js";

describe("get-measures-by-track", () => {
  it("should properly place rests across measure lines", () => {
    const file = new MIDIFile({ divisions: 8 });

    file.timeSignature({
      numerator: 2,
      denominator: 4,
    });

    file.note({
      note: 64,
      duration: 8,
      offset: 0,
      track: 1,
    });

    file.note({
      note: 66,
      duration: 4,
      offset: 28,
      track: 1,
    });

    const buf = file.toArrayBuffer();

    const reader = new MIDIReader(buf);

    const measByTrack = getMeasuresByTrack(reader);

    expect(measByTrack[1].measures[1].notes).toEqual(
      [
        new MeasureNote({
          pitch: {
            step: "E",
            octave: 4,
            alter: undefined,
          },
          duration: 8,
          noteType: {
            typeName: "quarter",
            dot: false,
            duration: 8,
            fraction: new Fraction(1, 1),
          },
          measureNumber: 1,
        }),
        new MeasureRest({
          duration: 8,
          noteType: {
            typeName: "quarter",
            dot: false,
            duration: 8,
            fraction: new Fraction(1, 1),
          },
          measureNumber: 1,
        }),
      ]
    );

    expect(measByTrack[1].measures[2].notes).toEqual(
      [
        new MeasureRest({
          duration: 12,
          noteType: {
            typeName: "quarter",
            dot: true,
            duration: 12,
            fraction: new Fraction(3, 2),
          },
          measureNumber: 2,
        }),
        new MeasureNote({
          pitch: {
            step: "F",
            octave: 4,
            alter: 1,
          },
          duration: 4,
          noteType: {
            typeName: "eighth",
            dot: false,
            duration: 4,
            fraction: new Fraction(1, 2),
          },
          measureNumber: 2,
        }),
      ]
    );
  });
});
