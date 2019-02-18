import { toVariableLengthValue, fromVariableLengthValue } from "./variable-length-value";

const testCases = [
  {
    value: 0x00,
    bytes: [0x00],
  },
  {
    value: 0x40,
    bytes: [0x40],
  },

  {
    value: 0x7F,
    bytes: [0x7F],
  },

  {
    value: 0x80,
    bytes: [0x81, 0x00],
  },

  {
    value: 0x2000,
    bytes: [0xC0, 0x00],
  },

  {
    value: 0x3FFF,
    bytes: [0xFF, 0x7F],
  },

  {
    value: 0x4000,
    bytes: [0x81, 0x80, 0x00],
  },

  {
    value: 0x100000,
    bytes: [0xC0, 0x80, 0x00],
  },

  {
    value: 0x1FFFFF,
    bytes: [0xFF, 0xFF, 0x7F],
  },

  {
    value: 0x200000,
    bytes: [0x81, 0x80, 0x80, 0x00],
  },

  {
    value: 0x8000000,
    bytes: [0xC0, 0x80, 0x80, 0x00],
  },

  {
    value: 0xFFFFFFF,
    bytes: [0xFF, 0xFF, 0xFF, 0x7F],
  },
];

describe("variable length value", () => {
  describe('toVariableLengthValue', () => {
    testCases.forEach(
      (testCase) => it(
        `should generate the correct typed array for value 0x${testCase.value.toString(16)}`,
        () => {
          const actual = toVariableLengthValue(testCase.value);
  
          expect(actual).toEqual(new Uint8Array(testCase.bytes));
        }
      )
    );
  });

  describe('fromVariableLengthValue', () => {
    testCases.forEach(
      (testCase, index) => it(
        `should generate the correct value for array ${testCase.bytes}`,
        () => {
          const actual = fromVariableLengthValue(new Uint8Array(testCase.bytes).buffer);
  
          expect(actual).toEqual([testCase.bytes.length, testCase.value]);
        }
      )
    );
  });
});
