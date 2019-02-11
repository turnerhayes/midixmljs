import { bufferToString } from './buffer-to-string';

const stringToBuffer = (str:string):ArrayBuffer => {
  const ab = new ArrayBuffer(str.length);

  const buf = Buffer.from(ab);
  buf.write(str, 0, str.length, 'ascii');

  return ab;
}

const testCases = [
  {
    buffer: stringToBuffer(''),
    expected: '',
    startIndex: 0,
    length: 0,
  },
  {
    buffer: stringToBuffer('Hello'),
    expected: 'Hello',
    startIndex: 0,
    length: 'Hello'.length,
  },
];

describe('bufferToString', () => {
  testCases.forEach(
    (testCase) => {
      it(`should properly parse "${testCase.expected}" from the buffer "${Buffer.from(testCase.buffer).toString('ascii')}"`, () => {
        expect(
          bufferToString(testCase.buffer, testCase.startIndex, testCase.length)
        ).toBe(testCase.expected);
      });
    }
  );
});
