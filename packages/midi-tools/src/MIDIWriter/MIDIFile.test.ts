import { readFile, writeFile } from "fs";
import * as path from "path";

import { MIDIFile } from './MIDIFile';

expect.addSnapshotSerializer({
  test(value: unknown) {
    return value instanceof ArrayBuffer;
  },
  print(value: ArrayBuffer) {
    return Buffer.from(value).toString('base64');
  }
});

const readCachedFile = (name) => {
  return new Promise(
    (resolve, reject) => readFile(
      path.resolve(__dirname, name),
      (err, data) => {
        if (err) {
          return reject(err);
        }

        return resolve(data);
      }
    )
  );
}

const writeCachedFile = (name, data) => {
  return new Promise<void>(
    (resolve, reject) => writeFile(
      path.resolve(__dirname, name),
      data,
      (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      }
    )
  );
}

const validateMIDIFile = (file: Buffer, numTracks: number = 1): void => {
  const fileChunkHeader = file.toString("ascii", 0, 4);

  let index = 4;

  expect(fileChunkHeader).toBe("MThd");

  let length = file.readUInt32BE(index);
  index += 4;

  expect(length).toBe(6);

  const format = file.readUInt16BE(index);
  index += 2;

  expect(format).toBe(1);

  const trackCount = file.readUInt16BE(index);
  index += 2;

  expect(trackCount).toBe(numTracks);

  const divisionNum = file.readUInt16BE(index);
  index += 2;

  expect(divisionNum).toBe(4);

  let trackHeader = file.toString("ascii", index, index + 4);
  index += 4;

  expect(trackHeader).toBe("MTrk");

  length = file.readUInt32BE(index);
  index += 4;

  expect(length).toBeGreaterThan(0);

  index += length;

  trackHeader = file.toString("ascii", index, index + 4);
  index += 4;

  expect(trackHeader).toBe("MTrk");

  length = file.readUInt32BE(index);
  index += 4;

  expect(length).toBeGreaterThan(0);

  index += length;

  expect(index).toBe(file.byteLength);
};

describe('MIDIFile', () => {
  it("should generate a valid MIDI file", () => {
    const file = new MIDIFile({ divisions: 4 });

    file.note({
      note: 64,
      duration: 16,
      track: 1,
      offset: 0,
    });


    file.note({
      note: 674,
      duration: 8,
      track: 2,
      offset: 8,
    });

    validateMIDIFile(Buffer.from(file.toArrayBuffer()), 2);
  });

  it('should create a MIDI file with the added notes', () => {
    const file = new MIDIFile({ divisions: 4 });

    file.note({
      note: 64,
      duration: 8,
      offset: 0,
      track: 1,
    });

    file.note({
      note: 66,
      duration: 8,
      offset: 4,
      track: 1,
    });

    const buffer = file.toArrayBuffer();

    expect(buffer).toMatchSnapshot();
  });

  it('should set a program change', () => {
    const file = new MIDIFile({ divisions: 4 });

    file.note({
      note: 64,
      duration: 16,
      offset: 0,
      track: 1,
    });

    file.programChange({
      offset: 2,
      program: 5,
      track: 1,
    });

    file.note({
      note: 68,
      duration: 8,
      offset: 0,
      track: 2,
    });

    const buffer = file.toArrayBuffer();

    expect(buffer).toMatchSnapshot();
  });

  it('should be able to change the tempo', () => {
    const file = new MIDIFile({ divisions: 4 });

    file.note({
      note: 64,
      duration: 16,
      offset: 0,
      track: 1,
    });

    file.setTempo(50);

    file.note({
      note: 68,
      duration: 16,
      offset: 0,
      track: 2,
    });

    const buffer = file.toArrayBuffer();

    expect(buffer).toMatchSnapshot();
  });
});
