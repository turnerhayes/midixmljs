import { getNoteTypes, INoteType, findNoteType } from "./NoteTypes";
import Fraction from "fraction.js";

describe("NoteTypes", () => {
  describe("findNoteType", () => {
    it("should find the type when the divisions count matches a key exactly", () => {
      const ppqn = 120;
  
      expect(findNoteType(120, ppqn)).toEqual({
        typeName: "quarter",
        dotCount: 0,
        duration: 120,
        fraction: new Fraction(1, 1),
      });
      
      expect(findNoteType(180, ppqn)).toEqual({
        typeName: "quarter",
        dotCount: 1,
        duration: 180,
        fraction: new Fraction(3, 2),
      });
  
      expect(findNoteType(30, ppqn)).toEqual({
        typeName: "16th",
        dotCount: 0,
        duration: 30,
        fraction: new Fraction(1, 4),
      });
    });
  
    it("should find the closest type when the divisions count does not match a key exactly", () => {
      const ppqn = 120;
  
      expect(findNoteType(119, ppqn)).toEqual({
        typeName: "quarter",
        dotCount: 0,
        duration: 120,
        fraction: new Fraction(1, 1),
      });

      expect(findNoteType(492, ppqn)).toEqual({
        typeName: "whole",
        dotCount: 0,
        duration: 480,
        fraction: new Fraction(4, 1),
      });

      expect(findNoteType(30, ppqn)).toEqual({
        typeName: "16th",
        dotCount: 0,
        duration: 30,
        fraction: new Fraction(1, 4),
      });
    });
  });
});
