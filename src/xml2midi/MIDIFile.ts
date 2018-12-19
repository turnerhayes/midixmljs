import createDebugger from "debug";

import getVariableLengthBuffer from "./variable-length-value";
import Channel from "./Channel";
import { writeFileSync } from "fs";
import { NoteNumberToName } from "./midi-note-converter";

const debug = createDebugger("xml2midi:MIDIFile");

const enum MIDIMessageStatus {
  NoteOn = 0x90,
  NoteOff = 0x80,
  ProgramChange = 0xC0,
  Meta = 0xFF,
}

const enum MIDIMessageSubtype {
  TimeSignature = 0x58,
  SetTempo = 0x51,
}

interface IBufferInfo {
  event: Uint8Array;
  eventType: MIDIMessageStatus;
  divisionOffset: number;
  deltaTimeBuffer?: Uint8Array;
  meta?: any;
}

const mthdString = "MThd".split("").map((chr) => chr.charCodeAt(0));
const mtrkString = "MTrk".split("").map((chr) => chr.charCodeAt(0));

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
  }: {
    divisions: number,
  }
): Uint8Array => {
  const format = 0;

  const divisionsBytes: number[] = [];

  // # of divisions per quarter note (15 bits only)
  divisions = divisions & 0x7FFF;

  do {
    divisionsBytes.unshift(divisions & 0xFF);

    divisions = divisions >> 8;
  } while (divisions > 0);

  if (divisionsBytes.length < 2) {
    divisionsBytes.unshift(0);
  }

  return new Uint8Array([
    ...mthdString,
    // Length field, MSB first
    0, 0, 0, 6,
    // Format field, MSB first
    0, format,
    // number of tracks in the file
    0, 1,
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
      channel = 1,
    }: {
      offset: number,
      program: number,
      channel: Channel,
    }
  ): void {
    const programChangeEvent = getProgramChangeEvent({ channel, program });

    this.buffers.push({
      event: programChangeEvent,
      eventType: MIDIMessageStatus.ProgramChange,
      divisionOffset: offset,
    });
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
      channel = 1,
      velocity = 64,
      release = velocity,
      meta = {},
    }: {
      note: number,
      duration: number,
      offset: number,
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

    this.buffers.push({
      event: noteOnEvent,
      eventType: MIDIMessageStatus.NoteOn,
      divisionOffset: offset,
      meta: {
        name: noteName,
        ...meta
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
        ...meta
      },
    });

    this.buffers.push({
      event: noteOffEvent,
      eventType: MIDIMessageStatus.NoteOff,
      divisionOffset: noteOffOffset,
    });
  }

  setTempo(tempo: number): void {
    let microsecondsPerQuarterNote: number = Math.round(6e7 / tempo);

    const usecBytes: number[] = [];

    do {
      usecBytes.unshift(microsecondsPerQuarterNote & 0xFF);

      microsecondsPerQuarterNote = microsecondsPerQuarterNote >> 8;
    } while (microsecondsPerQuarterNote > 0 || usecBytes.length < 3);

    const event = new Uint8Array([
      MIDIMessageStatus.Meta,
      MIDIMessageSubtype.SetTempo,
      3,
      ...usecBytes
    ]);

    this.buffers.push({
      event,
      eventType: MIDIMessageStatus.Meta,
      divisionOffset: 0,
    });
  }

  sortBuffers(): IBufferInfo[] {
    return this.buffers.sort(
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
  }

  toTypedArray(): ArrayBuffer {
    let prevDuration = 0;
    const buffers = this.sortBuffers();

    try {
      writeFileSync(
        "./midifile.json",
        JSON.stringify(
          buffers/* .reduce(
            (buffers: IBufferInfo[], bufferInfo) => {
              if (bufferInfo.meta) {
                buffers.push(bufferInfo.meta);
              }

              return buffers;
            },
            []
          ) */,
          null,
          "  "
        )
      )
    } catch (ex) {}

    let totalLength = buffers.reduce(
      (total, midiEventInfo) => {
        total = total + midiEventInfo.event.length;

        const deltaTime = midiEventInfo.divisionOffset - prevDuration;

        // if (midiEventInfo.eventType !== MIDIMessageStatus.Meta) {
          const deltaTimeBuffer = getVariableLengthBuffer(deltaTime);
  
          total += deltaTimeBuffer.length;
  
          midiEventInfo.deltaTimeBuffer = deltaTimeBuffer;
        // }

        prevDuration = midiEventInfo.divisionOffset;

        return total;
      },
      0
    );

    const headerChunk: Uint8Array = getFileHeader({
      divisions: this.divisions,
    });

    const trackChunk: Uint8Array = getTrackHeader({
      length: totalLength,
    });

    totalLength += headerChunk.length;

    totalLength += trackChunk.length;

    const buff = new ArrayBuffer(totalLength);

    const arr = new Uint8Array(buff);

    let offset = 0;

    arr.set(headerChunk, offset);
    offset += headerChunk.length;

    arr.set(trackChunk, offset);
    offset += trackChunk.length;

    buffers.forEach(
      (midiEventInfo) =>  {
        if (midiEventInfo.deltaTimeBuffer) {
          arr.set(midiEventInfo.deltaTimeBuffer, offset);
          offset += midiEventInfo.deltaTimeBuffer.length;
        }
        arr.set(midiEventInfo.event, offset);
        offset += midiEventInfo.event.length;
      }
    );

    return buff;
  }
}

export default MIDIFile;
