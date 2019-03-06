import { Measure } from "./Measure";
import { TimeSignatureMap } from "./TimeSignatureMap";
import { KeySignatureMap } from "./KeySignatureMap";
import { MeasureNote } from "./MeasureNote";
import Fraction from "fraction.js";

describe("Measure", () => {
  it("should return a list of measure items", () => {
    const measure = new Measure({
      number: 1,
      timeSignatureMap: new TimeSignatureMap(),
      keySignatureMap: new KeySignatureMap(),
      startOffset: 0,
      endOffset: 16,
    });

    measure.addNote({
      offset: 0,
      note: new MeasureNote({
        measureNumber: 1,
        duration: 8,
        pitch: {
          step: "A",
          octave: 4,
          alter: undefined,
        },
        noteType: {
          dot: false,
          typeName: "half",
          duration: 8,
          fraction: new Fraction(2, 1),
        },
      }),
    });
  });
});
