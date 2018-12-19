import getVariableLengthBuffer from "./variable-length-value";

const testCases = [
  {
    value: 0x00,
    expected: [0x00],
  },
  {
    value: 0x40,
    expected: [0x40],
  },

  {
    value: 0x7F,
    expected: [0x7F],
  },

  {
    value: 0x80,
    expected: [0x81, 0x00],
  },

  {
    value: 0x2000,
    expected: [0xC0, 0x00],
  },

  {
    value: 0x3FFF,
    expected: [0xFF, 0x7F],
  },

  {
    value: 0x4000,
    expected: [0x81, 0x80, 0x00],
  },

  {
    value: 0x100000,
    expected: [0xC0, 0x80, 0x00],
  },

  {
    value: 0x1FFFFF,
    expected: [0xFF, 0xFF, 0x7F],
  },

  {
    value: 0x200000,
    expected: [0x81, 0x80, 0x80, 0x00],
  },

  {
    value: 0x8000000,
    expected: [0xC0, 0x80, 0x80, 0x00],
  },

  {
    value: 0xFFFFFFF,
    expected: [0xFF, 0xFF, 0xFF, 0x7F],
  },
];

describe("variable length value", () => {
  testCases.forEach(
    (testCase) => it(
      `should generate the correct typed array for value 0x${testCase.value.toString(16)}`,
      () => {
        const actual = getVariableLengthBuffer(testCase.value);

        expect(actual).toEqual(new Uint8Array(testCase.expected));
      }
    )
  );
});
