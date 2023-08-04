import { readFileSync } from 'fs';
import * as path from 'path';

import { MIDIReader } from './midi-reader';
import { ProgramChangeEvent, NoteOnEvent, NoteOffEvent, TimeSignatureEvent } from '../MIDIEvents';

describe('midi-reader', () => {
  it('should generate the correct header information', () => {
    const reader = new MIDIReader(readFileSync(
      path.join(__dirname, 'Tim Minchin - Rock N Roll Nerd.midi')
    ));

    expect(reader.header).toEqual({
      division: {
        ticks: 4,
      },
      fileType: 1,
      trackCount: 2,
    });
  });

  it('should generate the correct events', () => {
    const reader = new MIDIReader(readFileSync(
      path.join(__dirname, 'Tim Minchin - Rock N Roll Nerd.midi')
    ));

    const trackGen = reader.readTracks();

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new ProgramChangeEvent({
        channel: 1,
        programNumber: 1,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new TimeSignatureEvent({
        numerator: 2,
        denominator: 2,
        clocksPerTick: 24,
        thirtySecondNotes: 8,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new NoteOnEvent({
        channel: 1,
        noteNumber: 72,
        velocity: 64,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new NoteOnEvent({
        channel: 1,
        noteNumber: 69,
        velocity: 64,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new NoteOnEvent({
        channel: 1,
        noteNumber: 76,
        velocity: 64,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new NoteOnEvent({
        channel: 1,
        noteNumber: 81,
        velocity: 64,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 8,
      trackNumber: 1,
      event: new NoteOffEvent({
        channel: 1,
        noteNumber: 76,
        release: 64,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new NoteOffEvent({
        channel: 1,
        noteNumber: 69,
        release: 64,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new NoteOffEvent({
        channel: 1,
        noteNumber: 81,
        release: 64,
      }),
    });

    expect(trackGen.next().value).toEqual({
      deltaTime: 0,
      trackNumber: 1,
      event: new NoteOffEvent({
        channel: 1,
        noteNumber: 72,
        release: 64,
      }),
    });
  });
});
