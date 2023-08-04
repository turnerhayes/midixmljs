import createDebugger from "debug";

import {
  NoteNumberToName,
  IKeySignature,
  Channel,
  toVariableLengthValue,
  ITimeSignature,
} from "../utils";
import { IMIDIEvent, MIDIEventType } from "../";
import { NoteOffEvent, NoteOnEvent, SetTempoEvent, TimeSignatureEvent, TrackNameEvent } from "../MIDIEvents";
import { stringToCharCodeArray } from '../utils';

const debug = createDebugger("midi-tools:MIDIFile");

export const enum MIDIMessageStatus {
  NoteOn = 0x90,
  NoteOff = 0x80,
  ProgramChange = 0xC0,
  Meta = 0xFF,
}

export const enum MIDIMessageSubtype {
  TimeSignature = 0x58,
  KeySignature = 0x59,
  SetTempo = 0x51,
  TrackName = 0x03,
}

interface NoteParams {
  note: number,
  duration: number,
  offset: number,
  track: number,
  channel?: Channel,
  velocity?: number,
  release?: number,
  meta?: object,
};

type TypedArray = Uint8Array | Uint16Array | Uint32Array;

const mthdString = stringToCharCodeArray("MThd");
const mtrkString = stringToCharCodeArray("MTrk");

const END_OF_TRACK_EVENT: Uint8Array = new Uint8Array([0xFF, 0x2F, 0x00]);

const concatTypedArrays = (...arrays: TypedArray[]): Uint8Array => {
  const totalLength = arrays.reduce((length, array) => length + array.byteLength, 0);

  const finalArray = new Uint8Array(totalLength);

  let index = 0;
  for (const arr of arrays) {
    finalArray.set(arr, index);
    index += arr.byteLength;
  }

  return finalArray;
};

const numberToBytes = (num: number, minBytes: number): Uint8Array => {
  const bytes: number[] = [];

  do {
    bytes.unshift(num & 0xFF);

    num = num >> 8;
  } while (num > 0 || bytes.length < minBytes);

  return new Uint8Array(bytes);
};

const sortEvents = (events: IMIDIEvent[]): IMIDIEvent[] => {
  return events.sort((a, b) => {
    if (a instanceof NoteOnEvent || a instanceof NoteOffEvent) {
      if (b instanceof NoteOnEvent) {
        return 0;
      }
      if (b instanceof NoteOffEvent) {
        return -1;
      }
      return 1;
    }
    else {
      if (b instanceof NoteOnEvent || b instanceof NoteOffEvent) {
        return -1;
      }
      return 0;
    }
  });
};

function getTrackNameEvent(event: TrackNameEvent): Uint8Array {
  // Strings are null terminated
  const nullTerminatedName = event.name + '\0';
  const length = toVariableLengthValue(nullTerminatedName.length);
  const chars = stringToCharCodeArray(nullTerminatedName);

  return concatTypedArrays(Uint8Array.of(
    MIDIMessageStatus.Meta,
    MIDIMessageSubtype.TrackName,
  ), length, chars);
}

function getSetTempoEvent(event: SetTempoEvent): Uint8Array {
  const arr = concatTypedArrays(
    Uint8Array.of(
      MIDIMessageStatus.Meta,
      MIDIMessageSubtype.SetTempo,
      3,
    ),
    numberToBytes(6e7 / event.microsecondsPerQuarterNote, 3)
  );
  console.log('set tempo event: %s', arr);
  return arr;
}

const getFileHeader = (
  {
    divisions,
    trackCount,
  }: {
    divisions: number,
    trackCount: number,
  }
): Uint8Array => {
  const format: 0 | 1 = trackCount === 1 ?
    0 :
    1;

  // # of divisions per quarter note (15 bits only)
  const divisionsBytes = numberToBytes(divisions & 0x7FFF, 2);

  const trackCountBytes = numberToBytes(trackCount, 2);

  return concatTypedArrays(
    mthdString,
    // Length field, MSB first
    Uint8Array.of(0, 0, 0, 6),
    Uint8Array.of(0, format),
    trackCountBytes,
    divisionsBytes
  );
};

const bufferFromTrackEvent = (event: IMIDIEvent) => {
  if (event instanceof NoteOnEvent) {
    return getNoteOnEvent(event);
  }
  if (event instanceof NoteOffEvent) {
    return getNoteOffEvent(event);
  }
  if (event instanceof TimeSignatureEvent) {
    return getTimeSignatureEvent(event);
  }
  if (event instanceof TrackNameEvent) {
    return getTrackNameEvent(event);
  }
  if (event instanceof SetTempoEvent) {
    return getSetTempoEvent(event);
  }

  throw new Error(`Cannot get buffer for event ${event}`);
};

export class Track {
  private events = new Map<number, Array<IMIDIEvent>>();

  add(event: IMIDIEvent, offset: number = 0): this {
    let eventArray = this.events.get(offset);
    if (!eventArray) {
      eventArray = [];
      this.events.set(offset, eventArray);
    }
    eventArray.push(event);
    return this;
  }

  addNote({
    note,
    duration,
    channel,
    offset,
    velocity,
    release = velocity,
  }: {
    note: number;
    duration: number;
    channel: number;
    offset: number;
    velocity: number;
    release?: number;
  }): this {
    this.add(new NoteOnEvent({
      channel,
      noteNumber: note,
      velocity,
    }), offset).add(new NoteOffEvent({
      channel,
      noteNumber: note,
      release,
    }), offset + duration);
    return this;
  }

  [Symbol.iterator](): Iterator<[number, IMIDIEvent]> {
    const offsets = this.events.keys();
    let currentOffset: number | undefined;
    let currentEventArrayIndex = -1;
    let currentEventArray: IMIDIEvent[] | undefined;
    return {
      next: (): IteratorResult<[number, IMIDIEvent], void> => {
        let done = false;
        if (currentOffset === undefined) {
          ({ done, value: currentOffset } = offsets.next());
          if (done) {
            return {
              value: undefined,
              done,
            };
          }
          currentEventArray = sortEvents(this.events.get(currentOffset));
          currentEventArrayIndex++;
        }
        else if (++currentEventArrayIndex >= currentEventArray.length) {
          ({ done, value: currentOffset } = offsets.next());
          if (done) {
            return {
              value: undefined,
              done,
            };
          }
          currentEventArray = sortEvents(this.events.get(currentOffset));
          currentEventArrayIndex = 0;
        }
        const event = currentEventArray[currentEventArrayIndex];
        return {
          value: [currentOffset, event],
          done: false,
        };
      },
    };
  }
}

const getNoteOnEvent = (
  event: NoteOnEvent
): Uint8Array => {
  return new Uint8Array([
    MIDIMessageStatus.NoteOn + (event.channel - 1),
    // Unset top bit; value can only be 7 bits long
    event.noteNumber & 0x7F,
    event.velocity & 0x7F,
  ]);
};

const getNoteOffEvent = (event: NoteOffEvent): Uint8Array => {
  return new Uint8Array([
    MIDIMessageStatus.NoteOff + (event.channel - 1),
    // Unset top bit; value can only be 7 bits long
    event.noteNumber & 0x7F,
    event.release & 0x7F,
  ]);
};

const getTimeSignatureEvent = (event: TimeSignatureEvent): Uint8Array => {
  const { numerator, denominator } = event;
  return new Uint8Array([
    MIDIMessageStatus.Meta,
    MIDIMessageSubtype.TimeSignature,
    4,
    numerator,
    Math.log2(denominator),
    // TODO: figure out how to actually deal with these parameters
    // robustly--I don't really understand them entirely
    // Number of metronome ticks per quarter note
    24,
    // Number of 1/32nd notes per MIDI quarter note
    8,
  ])
};

const getTrackHeader = (
  {
    length,
  }: {
    length: number,
  }
): Uint8Array => {
  return concatTypedArrays(
    mtrkString,
    Uint32Array.of(length),
  );
};

export class MIDIFile {
  private tracks: Track[] = [];

  private divisions: number;

  constructor({
    divisions,
  }: {
    divisions: number;
  }) {
    this.divisions = divisions;
  }

  private getTrack(track: number) {
    if (!this.tracks[track]) {
      this.tracks[track] = new Track();
    }

    return this.tracks[track];
  }

  tempo({
    microsecondsPerQuarterNote,
    track = 1,
    offset = 0,
  }: {
    microsecondsPerQuarterNote: number;
    track?: number;
    offset?: number;
  }): this {
    this.getTrack(track).add(new SetTempoEvent({
      microsecondsPerQuarterNote,
    }), offset);
    return this;
  }

  trackName({
    name,
    track = 1,
    offset = 0,
  }: {
    name: string;
    track?: number;
    offset?: number;
  }): this {
    this.getTrack(track).add(
      new TrackNameEvent({ name }),
      offset
    );
    return this;
  }

  timeSignature({
    timeSignature,
    track = 1,
    clocksPerTick = 24,
    thirtySecondNotes = 8,
    offset = 0,
  }: {
    timeSignature: ITimeSignature;
    track?: number;
    clocksPerTick?: number;
    thirtySecondNotes?: number;
    offset?: number;
  }) {
    if (timeSignature.denominator % 2 !== 0) {
      throw new Error(`Time signature denominator must be a power of 2`);
    }
    this.getTrack(track).add(new TimeSignatureEvent({
      ...timeSignature,
      clocksPerTick,
      thirtySecondNotes,
    }), offset);
  }

  note(
    {
      note,
      duration,
      offset,
      track,
      channel = 1,
      velocity = 64,
      release = velocity,
    }: NoteParams
  ): this {
    this.getTrack(track).addNote({
      note,
      duration,
      channel,
      velocity,
      release,
      offset,
    });

    return this;
  }

  toArrayBuffer(): ArrayBufferLike {
    const trackCount: number = Object.keys(this.tracks).length;
    const headerChunk: Uint8Array = getFileHeader({
      divisions: this.divisions,
      trackCount,
    });

    const buffers: Uint8Array[] = [
      headerChunk,
    ];

    const trackBuffers = new Map<number, Array<ArrayBufferLike>>();

    const trackLengths: { [trackNumber: number]: number } = {};
    this.tracks.forEach(
      (
        track: Track,
        trackNumber: number
      ) => {
        let prevDuration: number = 0;
        trackLengths[trackNumber] = 0;
        for (const [offset, event] of track) {
          const buffer = bufferFromTrackEvent(event);
          if (!trackBuffers[trackNumber]) {
            trackBuffers[trackNumber] = [];
          }
          trackBuffers[trackNumber].push(buffer);
          trackLengths[trackNumber] += buffer.byteLength;

          const deltaTime = offset - prevDuration;

          const deltaTimeBuffer = toVariableLengthValue(deltaTime);

          trackLengths[trackNumber] += deltaTimeBuffer.byteLength;

          prevDuration = offset;
        }
        trackBuffers[trackNumber].push(END_OF_TRACK_EVENT);
        trackLengths[trackNumber] += 1 + // The delta time offset for end of track is 0, which takes 1 byte in VLV
          END_OF_TRACK_EVENT.byteLength;
      });

    for (const trackNumber of Object.keys(trackBuffers)) {
      buffers.push(
        getTrackHeader({
          length: trackLengths[trackNumber],
        }),
        ...trackBuffers[trackNumber]
      );
    }

    return concatTypedArrays(...buffers);
  }
}
