import MIDIFile from './MIDIFile';

expect.addSnapshotSerializer({
  test(value) {
    return value instanceof ArrayBuffer;
  },
  print(value) {
    return new Buffer(value).toString('base64');
  }
})

describe('MIDIFile', () => {
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
