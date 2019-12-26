import { MIDIFile, MIDIReader } from "@thayes/midi-tools";
import { ITimeSignature } from "@thayes/midi-tools/lib/utils";
import Fraction from "fraction.js";


import { getMeasuresByTrack } from "./get-measures-by-track";
import { MeasureNote } from "./MeasureNote";
import { MeasureRest } from "./MeasureRest";
import { MeasureItemList } from "./MeasureItemList";

describe("get-measures-by-track", () => {
  it("should properly place rests across measure lines", () => {
    const file = new MIDIFile({ divisions: 8 });

    const timeSignature:ITimeSignature = {
      numerator: 2,
      denominator: 4,
    }

    file.timeSignature(timeSignature);

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

    expect(measByTrack[1].measures[1].measureItems).toEqual(
      new MeasureItemList({
        timeSignature,
        items: [
          new MeasureNote({
            pitch: {
              step: "E",
              octave: 4,
              MIDINumber: 64,
            },
            noteType: {
              typeName: "quarter",
              dotCount: 0,
              duration: 8,
              fraction: new Fraction(1, 1),
            },
            measureNumber: 1,
          }),
          new MeasureRest({
            noteType: {
              typeName: "quarter",
              dotCount: 0,
              duration: 8,
              fraction: new Fraction(1, 1),
            },
            measureNumber: 1,
          }),
        ],
      })
    );

    expect(measByTrack[1].measures[2].measureItems).toEqual(
      new MeasureItemList({
        timeSignature,
        items: [
          new MeasureRest({
            noteType: {
              typeName: "quarter",
              dotCount: 1,
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
              MIDINumber: 66,
            },
            noteType: {
              typeName: "eighth",
              dotCount: 0,
              duration: 4,
              fraction: new Fraction(1, 2),
            },
            measureNumber: 2,
          }),
        ],
      })
    );
  });
});
