import createDebugger from "debug";

import Channel from "./Channel";
import IKeySignature from "./IKeySignature";
import { NoteNumberToName } from "./midi-note-converter";
import getVariableLengthBuffer from "./variable-length-value";

const debug = createDebugger("xml2midi:MIDIFile");

const enum MIDIMessageStatus {
  NoteOn = 0x90,
  NoteOff = 0x80,
  ProgramChange = 0xC0,
  Meta = 0xFF,
}

const enum MIDIMessageSubtype {
  TimeSignature = 0x58,
  KeySignature = 0x59,
  SetTempo = 0x51,
  TrackName = 0x03,
}

interface IBufferInfo {
  event: Uint8Array;
  eventType: MIDIMessageStatus;
  divisionOffset: number;
  deltaTimeBuffer?: Uint8Array;
  meta?: any;
}

const stringToCharCodeArray = (str: string): number[] => {
  return str.split("").map((chr) => chr.charCodeAt(0));
};

const mthdString = stringToCharCodeArray("MThd");
const mtrkString = stringToCharCodeArray("MTrk");

const END_OF_TRACK_EVENT: Uint8Array = new Uint8Array([ 0xFF, 0x2F, 0x00]);

const numberToBytes = (num: number, minBytes: number): number[] => {
  const bytes: number[] = [];

  do {
    bytes.unshift(num & 0xFF);

    num = num >> 8;
  } while (num > 0 || bytes.length < minBytes);

  return bytes;
};

const getNoteOnEvent = (
  note: number,
  channel: Channel,
  velocity: number,
): Uint8Array => {
  return new Uint8Array([
    MIDIMessageStatus.NoteOn + (channel - 1),
    // Unset top bit; value can only be 7 bits long
    note & 0x7F,
    velocity & 0x7F,
  ]);
};

const getNoteOffEvent = (
  note: number,
  channel: Channel,
  velocity: number,
): Uint8Array => {
  return new Uint8Array([
    MIDIMessageStatus.NoteOff + (channel - 1),
    // Unset top bit; value can only be 7 bits long
    note & 0x7F,
    velocity & 0x7F,
  ]);
};

const getProgramChangeEvent = (
  {
    channel,
    program,
  }: {
    channel: Channel,
    program: number,
  }
): Uint8Array => {
  return new Uint8Array([
    MIDIMessageStatus.ProgramChange + (channel - 1),
    program
  ]);
};

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
    0: 
    1;

  // # of divisions per quarter note (15 bits only)
  const divisionsBytes: number[] = numberToBytes(divisions & 0x7FFF, 2);

  return new Uint8Array([
    ...mthdString,
    // Length field, MSB first
    0, 0, 0, 6,
    // Format field, MSB first
    0, format,
    // number of tracks in the file
    ...numberToBytes(trackCount, 2),
    ...divisionsBytes
  ]);
};

const getTrackHeader = (
  {
    length,
  }: {
    length: number,
  }
): Uint8Array => {
  // 4 for the MTrk header, 4 for the length buffer
  const buff = new ArrayBuffer(8);

  new Uint8Array(buff).set(mtrkString, 0);

  new DataView(buff).setUint32(4, length);

  return new Uint8Array(buff);
};

class MIDIFile {
  public readonly divisions: number;

  private buffers: IBufferInfo[] = [];

  private tracks: { [trackNumber: number]: { buffers: IBufferInfo[] } } = {};

  private omniTrackEvents: IBufferInfo[] = [];

  constructor(
    {
      divisions,
    }: {
      divisions: number,
    }
  ) {
    this.divisions = divisions;
  }

  programChange(
    {
      offset,
      program,
      track,
      channel = 1,
    }: {
      offset: number,
      program: number,
      track?: number,
      channel: Channel,
    }
  ): void {
    const programChangeEvent = getProgramChangeEvent({ channel, program });

    const bufferInfo: IBufferInfo = {
      event: programChangeEvent,
      eventType: MIDIMessageStatus.ProgramChange,
      divisionOffset: offset,
    };

    if (track === undefined) {
      this.omniTrackEvents.push(bufferInfo);
    }
    else {
      if (!(track in this.tracks)) {
        this.tracks[track] = {
          buffers: [],
        };
      }

      this.tracks[track].buffers.push(bufferInfo);
    }
  }

  timeSignature(
    {
      numerator,
      denominator,
    }: {
      numerator: number,
      denominator: number,
    }
  ): void {
    const event = new Uint8Array([
      MIDIMessageStatus.Meta,
      MIDIMessageSubtype.TimeSignature,
      4,
      numerator,
      Math.log2(denominator),
      // @todo: figure out how to actually deal with these parameters
      // robustly--I don't really understand them entirely
      // Number of metronome ticks per quarter note
      24,
      // Number of 1/32nd notes per MIDI quarter note
      8,
    ]);

    this.omniTrackEvents.push({
      event,
      eventType: MIDIMessageStatus.Meta,
      divisionOffset: 0,
    });
  }

  keySignature(
    {
      keySignature,
      offset = 0,
    }: {
      keySignature: IKeySignature,
      offset: number,
    }
  ): void {
    const event = new Uint8Array([
      MIDIMessageStatus.Meta,
      MIDIMessageSubtype.KeySignature,
      2,
      keySignature.sharps,
      // major (0) vs. minor (1)
      // @todo: Actually find major/minor key from XML
      keySignature.mode === "minor" ? 1 : 0,
    ]);

    this.omniTrackEvents.push({
      event,
      eventType: MIDIMessageStatus.Meta,
      divisionOffset: offset,
    });
  }

  setTitle(title: string): void {
    const event = new Uint8Array([
      MIDIMessageStatus.Meta,
      MIDIMessageSubtype.TrackName,
      // add 1 for null terminator byte
      ...getVariableLengthBuffer(title.length + 1),
      ...stringToCharCodeArray(title + "\0"),
    ]);

    this.buffers.push({
      event,
      eventType: MIDIMessageStatus.Meta,
      divisionOffset: 0,
    });
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
      meta = {},
    }: {
      note: number,
      duration: number,
      offset: number,
      track: number,
      channel?: Channel,
      velocity?: number,
      release?: number,
      meta: object,
    }
  ): void {
    const noteOnEvent = getNoteOnEvent(note, channel, velocity);

    let noteName: any = NoteNumberToName(note);
    noteName = `${noteName.step}${
      noteName.alter === 1 ?
        '#' :
        noteName.alter === -1 ?
          'b' :
          ''
    }${noteName.octave}`;

    if (!(track in this.tracks)) {
      this.tracks[track] = {
        buffers: [],
      };
    }

    this.tracks[track].buffers.push({
      event: noteOnEvent,
      eventType: MIDIMessageStatus.NoteOn,
      divisionOffset: offset,
      meta: {
        name: noteName,
        ...meta,
      },
    });

    debug('note on: ', {
      note,
      offset,
      duration,
      channel,
      velocity,
      event: noteOnEvent,
    });

    const noteOffEvent = getNoteOffEvent(note, channel, release);

    const noteOffOffset: number = offset + duration;

    debug('note off: ', {
      note,
      offset: noteOffOffset,
      channel,
      release,
      meta: {
        name: noteName,
        ...meta,
      },
    });

    this.tracks[track].buffers.push({
      event: noteOffEvent,
      eventType: MIDIMessageStatus.NoteOff,
      divisionOffset: noteOffOffset,
    });
  }

  setTempo(tempo: number): void {
    let microsecondsPerQuarterNote: number = 6e7 / tempo;

    const event = new Uint8Array([
      MIDIMessageStatus.Meta,
      MIDIMessageSubtype.SetTempo,
      3,
      ...numberToBytes(microsecondsPerQuarterNote, 3),
    ]);

    this.omniTrackEvents.push({
      event,
      eventType: MIDIMessageStatus.Meta,
      divisionOffset: 0,
    });
  }

  sortBuffers(): { [trackNumber: number]: IBufferInfo[] } {
    return Object.keys(this.tracks).reduce(
      (
        reduction: { [trackNumber: number]: IBufferInfo[] },
        trackNumber: string,
      ) => {
        // shallow clone to avoid adding omniTrackEvents to the actual tracks
        const trackBuffers = this.tracks[trackNumber].buffers.slice();

        trackBuffers.unshift(...this.omniTrackEvents);

        reduction[trackNumber] = trackBuffers.sort(
          (a, b) => {
            const offsetDiff = a.divisionOffset - b.divisionOffset;
            
            if (offsetDiff === 0) {
              if (a.eventType === b.eventType) {
                return 0;
              }

              if (
                a.eventType === MIDIMessageStatus.ProgramChange ||
                a.eventType === MIDIMessageStatus.Meta
              ) {
                if (
                  b.eventType === MIDIMessageStatus.ProgramChange ||
                  b.eventType === MIDIMessageStatus.Meta
                ) {
                  return 0;
                }

                return -1;
              }

              return 1;
            }

            return offsetDiff;
          }
        );

        return reduction;
      },
      {}
    );
  }

  toArrayBuffer(): ArrayBuffer {
    const buffers = this.sortBuffers();

    const trackCount: number = Object.keys(this.tracks).length;

    let trackLengths = Object.keys(buffers).reduce(
      (
        totals: { [trackNumber: number]: number },
        trackNumber: string,
      ) => {
        let prevDuration: number = 0;
        totals[trackNumber] = buffers[trackNumber].reduce(
          (total: number, midiEventInfo: IBufferInfo): number => {
            total = total + midiEventInfo.event.length;
    
            const deltaTime = midiEventInfo.divisionOffset - prevDuration;
    
            const deltaTimeBuffer = getVariableLengthBuffer(deltaTime);
    
            total += deltaTimeBuffer.length;
    
            midiEventInfo.deltaTimeBuffer = deltaTimeBuffer;
    
            prevDuration = midiEventInfo.divisionOffset;

            return total;
          },
          0
        );

        return totals;
      },
      {}
    );

    const headerChunk: Uint8Array = getFileHeader({
      divisions: this.divisions,
      trackCount,
    });

    const trackHeaders: { [trackNumber: string]: Uint8Array } = Object.keys(
      buffers
    ).reduce(
      (headers: { [trackNumber: string]: Uint8Array }, trackNumber: string) => {
        headers[trackNumber] = getTrackHeader({
          length: trackLengths[trackNumber],
        });

        return headers;
      },
      {}
    );

    let totalLength: number = headerChunk.length;

    totalLength += Object.keys(trackHeaders).reduce(
      (total: number, trackNumber: string) => total + trackHeaders[trackNumber].length,
      0
    );

    totalLength += Object.keys(buffers).reduce(
      (total: number, trackNumber: string) => total + trackLengths[trackNumber],
      0
    );

    totalLength += END_OF_TRACK_EVENT.length;

    const buff = new ArrayBuffer(totalLength);

    const arr = new Uint8Array(buff);

    let offset = 0;

    arr.set(headerChunk, offset);
    offset += headerChunk.length;

    Object.keys(buffers).forEach(
      (trackNumber: string) => {
        arr.set(trackHeaders[trackNumber], offset);
        offset += trackHeaders[trackNumber].length;

        buffers[trackNumber].forEach(
          (midiEventInfo) =>  {
            const deltaTimeBuffer = midiEventInfo.deltaTimeBuffer as Uint8Array;
            arr.set(deltaTimeBuffer, offset);
            offset += deltaTimeBuffer.length;
            arr.set(midiEventInfo.event, offset);
            offset += midiEventInfo.event.length;
          }
        );
      }
    );

    arr.set(END_OF_TRACK_EVENT, offset);
    offset += END_OF_TRACK_EVENT.length;

    return buff;
  }
}

export default MIDIFile;
