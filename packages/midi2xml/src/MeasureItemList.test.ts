import { MeasureItemList } from "./MeasureItemList";
import { MeasureNote } from "./MeasureNote";
import { MeasureRest } from "./MeasureRest";
import Fraction from "fraction.js";

describe("MeasureItemList", () => {
  it("should group items into beats", () => {
    const list = new MeasureItemList({
      timeSignature: {
        numerator: 2,
        denominator: 2,
      },
    });

    const element1 = new MeasureNote({
      measureNumber: 1,
      duration: 4,
      pitch: {
        step: "B",
        octave: 4,
      },
      noteType: {
        typeName: "eighth",
        dot: false,
        duration: 4,
        fraction: new Fraction(1, 2),
      },
    });

    const element2 = new MeasureNote({
      measureNumber: 1,
      duration: 4,
      pitch: {
        step: "C",
        octave: 4,
      },
      noteType: {
        typeName: "eighth",
        dot: false,
        duration: 4,
        fraction: new Fraction(1, 2),
      },
    });

    const element3 = new MeasureRest({
      measureNumber: 1,
      duration: 4,
      noteType: {
        typeName: "eighth",
        dot: false,
        duration: 4,
        fraction: new Fraction(1, 2),
      },
    });

    const element4 = new MeasureNote({
      measureNumber: 1,
      duration: 4,
      pitch: {
        step: "E",
        octave: 4,
      },
      noteType: {
        typeName: "eighth",
        dot: false,
        duration: 4,
        fraction: new Fraction(1, 2),
      },
    });

    const element5 = new MeasureNote({
      measureNumber: 1,
      duration: 16,
      pitch: {
        step: "D",
        octave: 4,
      },
      noteType: {
        typeName: "half",
        dot: false,
        duration: 16,
        fraction: new Fraction(2, 1),
      },
    });

    list.add(element1);

    list.add(element2);

    list.add(element3);

    list.add(element4);

    list.add(element5);

    expect(list.get(0).next).not.toBeNull();
    expect(list.get(0).beat).toBe(1);
    expect(list.get(0).next.element).toBe(element2);
    expect(list.get(0).nextInBeat).not.toBeNull();
    expect(list.get(0).nextInBeat.element).toBe(element2);

    expect(list.get(1).previous.element).toBe(element1);
    expect(list.get(1).beat).toBe(1);
    expect(list.get(1).next.element).toBe(element3);
    expect(list.get(1).previous.element).toBe(element1);
    expect(list.get(1).next.element).toBe(element3);
    expect(list.get(1).nextInBeat.element).toBe(element4);

    expect(list.get(3).previous.element).toBe(element3);
    expect(list.get(3).beat).toBe(1);
    expect(list.get(3).previousInBeat.element).toBe(element2);

    expect(list.get(4).next).toBeNull();
    expect(list.get(4).beat).toBe(2);
    expect(list.get(4).previousInBeat).toBeNull();
  });
});
