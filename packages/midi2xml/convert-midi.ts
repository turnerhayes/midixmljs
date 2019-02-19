import XMLWriter from "xml-writer";
import { shim as shimObjectValues } from "object.values";

import {
  MIDIReader,
  IPitch,
  NoteNumberToName,
  MIDIEventType,
  IMIDIEvent,
  ITicksPerQuarterNoteDivision,
  MIDIEvents,
} from "@thayes/midi-tools";

const {
  NoteOnEvent,
} = MIDIEvents;

const {
  TimeSignatureEvent,
  KeySignatureEvent,
} = MIDIEvents.Meta;

console.log({
  MIDIEvents,
  NoteOnEvent,
});


if (!Object.values) {
  shimObjectValues();
}

type FileInput = ArrayBuffer|DataView|Uint8Array|Buffer|string;

interface ITrackNote {
  duration:number;
  pitch:IPitch;
  beats:number;
  quarterNotes:number;
  measure:number;
}

interface ITimeSignature {
  numerator:number;
  denominator:number;
}

type OffsetMap<TVal> = {[offset:number]:TVal};

type TimeSignatureMap = OffsetMap<ITimeSignature>;

type KeySignatureMap = OffsetMap<number>;

interface ITrack {
  notes:Array<ITrackNote[]>;
  timeSignaturesByOffset:TimeSignatureMap;
  keySignaturesByOffset:KeySignatureMap;
}

type TrackMap = {[trackNumber:number]: ITrack};

const getArrayBuffer = async (
  midiFile:FileInput
):Promise<DataView> => {
  if (midiFile instanceof DataView) {
    return midiFile;
  }

  let buffer;
  let byteOffset;
  let byteLength;

  if (typeof midiFile === 'string') {
    const fs = await import("fs");

    midiFile = await new Promise(
      (resolve,reject) => fs.readFile(
        midiFile as string,
        (error, data) => {
          if (error) {
            return reject(error);
          }

          return resolve(data);
        }
      )
    ) as Buffer;
  }

  if (midiFile instanceof Buffer) {
    buffer = midiFile.buffer;
    byteOffset = midiFile.byteOffset;
    byteLength = midiFile.byteLength;
  }
  else if (midiFile instanceof Uint8Array) {
    buffer = midiFile.buffer;
    byteOffset = midiFile.byteOffset;
    byteLength = midiFile.byteLength;
  }
  else if (midiFile instanceof ArrayBuffer) {
    buffer = midiFile;
    byteOffset = 0;
    byteLength = midiFile.byteLength;
  }

  return new DataView(
    buffer,
    byteOffset,
    byteLength,
  );
};

const divisionsToQuarterNotes = (
  divisions:number,
  ppqn:number
) => {
  return divisions / ppqn;
}

const divisionsToBeats = (
  divisions:number,
  ppqn:number,
  timeSignature:ITimeSignature
) => {
  const quarterNotes = divisionsToQuarterNotes(divisions, ppqn);

  const beatsPerQuarterNote = 4 / timeSignature.denominator;

  return beatsPerQuarterNote * quarterNotes;
}

/**
 * Gets what measure the beat is in at the specified number of divisions.
 * 
 * @param {number} divisions - the number of divisions at this point in the piece
 * @param {number} ppqn - Pulses (divisions) Per Quarter Note--constant for a given
 * MIDI file
 * @param {ITimeSignature} timeSignature - the current time signature of the piece,
 * as numerator over denominator (e.g. 4/4)
 */
const getMeasureNumber = (
  divisions:number,
  ppqn:number,
  timeSignature:ITimeSignature = {
    numerator: 4,
    denominator: 4,
  },
) => {
  const quarterNotes = divisions / ppqn;

  const beatsPerQuarterNote = 4 / timeSignature.denominator;

  const beats = divisionsToBeats(
    divisions,
    ppqn,
    timeSignature
  );

  // Measures start at 1, not 0
  const measureNumber = Math.floor(beats / timeSignature.numerator) + 1;
  
  // console.log({
  //   divisions,
  //   ppqn,
  //   timeSignature,
  //   quarterNotes,
  //   beatsPerQuarterNote,
  //   beats,
  //   rawMeasureNumber: beats / timeSignature.numerator,
  //   measureNumber,
  // });

  return measureNumber;
};

const getNotesByTrack = (reader:MIDIReader):ITrack[] => {
  let notesPlaying:OffsetMap<IPitch[]>;

  let trackNotes:OffsetMap<ITrackNote[]>;

  const notesByTrack:TrackMap = {};

  const tracks:ITrack[] = [];

  const ppqn = (reader.header.division as ITicksPerQuarterNoteDivision).ticks;

  let currentOffset;

  let currentTrackNumber:number|undefined;

  let timeSignaturesByOffset:TimeSignatureMap;

  let currentTimeSignatureOffset:number;

  let keySignaturesByOffset:KeySignatureMap;

  let currentKeySignatureOffset:number;

  for (let gen = reader.readTracks(), item = gen.next(); !item.done; item = gen.next()) {
    const { deltaTime, event, trackNumber } = item.value;

    if (trackNumber !== currentTrackNumber) {
      if (currentTrackNumber !== undefined) {
        tracks[currentTrackNumber] = {
          keySignaturesByOffset,
          timeSignaturesByOffset,
          notes: Object.values(trackNotes),
        };
      }
      trackNotes = [];
      notesPlaying = {};
      currentOffset = 0;
      timeSignaturesByOffset = {
        0: {
          numerator: 4,
          denominator: 4,
        }
      };
      currentTimeSignatureOffset = 0;
      keySignaturesByOffset = {
        0: 0
      };
      currentKeySignatureOffset = 0;
      currentTrackNumber = trackNumber;
    }

    currentOffset += deltaTime;

    if (event.type & MIDIEventType.MetaTimeSignature) {
        // Typescript is being weird and claiming it can't find the name TimeSignatureEvent...
      const { numerator, denominator }: {numerator:number, denominator:number} = (event as any);
      // const { numerator, denominator } = (event as TimeSignatureEvent);
      timeSignaturesByOffset[currentOffset] = {
        numerator,
        denominator,
      };
      currentTimeSignatureOffset = currentOffset;
      continue;
    }

    if (event.type & MIDIEventType.MetaKeySignature) {
        // Typescript is being weird and claiming it can't find the name KeySignatureEvent...
      const { sharps }: { sharps:number } = (event as any);
      // const { sharps } = (event as KeySignatureEvent);
      keySignaturesByOffset[currentOffset] = sharps;
      currentKeySignatureOffset = currentOffset;
      continue;
    }

    
    if (event.type & (MIDIEventType.NoteOn | MIDIEventType.NoteOff)) {
      let { type } = event;
      let noteNumber:number;
  
      if (type === MIDIEventType.NoteOn) {
        // Typescript is being weird and claiming it can't find the name NoteOnEvent...
        noteNumber = (event as any).noteNumber;
        // noteNumber = (event as NoteOnEvent).noteNumber;
        let velocity:number = (event as any).velocity;
        // let velocity = (event as NoteOnEvent).velocity;

        if (velocity === 0) {
          type = MIDIEventType.NoteOff;
        }
        else {
          if (!notesPlaying[currentOffset]) {
            notesPlaying[currentOffset] = [];
          }
          const note = NoteNumberToName(noteNumber);

          notesPlaying[currentOffset].push(
            note
          );
        }
      }

      if (type === MIDIEventType.NoteOff) {
        const note = NoteNumberToName(noteNumber);

        let startOffset;
        let noteIndex;

        const offsets = Object.keys(notesPlaying);
        
        for (let i = offsets.length - 1; i >= 0; i--) {
          const offset = Number(offsets[i]);
  
          const index = notesPlaying[offset].findIndex(
            (pitch) => pitch.MIDINumber === note.MIDINumber
          );
  
          if (index >= 0) {
            startOffset = offset;
            noteIndex = index;
            break;
          }
        }

        if (startOffset !== undefined) {
          if (!trackNotes[startOffset]) {
            trackNotes[startOffset] = [];
          }

          const duration = currentOffset - startOffset;

          trackNotes[startOffset].push({
            pitch: note,
            duration,
            beats: divisionsToBeats(
              duration,
              ppqn,
              timeSignaturesByOffset[currentTimeSignatureOffset]
            ),
            quarterNotes: divisionsToQuarterNotes(
              duration,
              ppqn
            ),
            measure: getMeasureNumber(
              currentOffset,
              ppqn,
              timeSignaturesByOffset[currentTimeSignatureOffset]
            ),
          });

          notesPlaying[startOffset].splice(noteIndex, 1);

          if (notesPlaying[startOffset].length === 0) {
            delete notesPlaying[startOffset];
          }
        }
      }
    }
  }

  if (currentTrackNumber !== undefined && !tracks[currentTrackNumber]) {
    const notes:Array<ITrackNote[]> = Object.values(trackNotes);

    if (notes.length > 0) {
      tracks[currentTrackNumber] = {
        keySignaturesByOffset,
        timeSignaturesByOffset,
        notes,
      };
    }
  }

  return tracks;
};

export async function convertMIDI(
  {
    midiFile,
  }:
  {
    midiFile:FileInput,
  }
):Promise<string> {
  const dataView = await getArrayBuffer(midiFile);

  const reader = new MIDIReader(dataView);

  const xmlWriter = new XMLWriter(true);

  const eventTypes = MIDIEventType.ChannelEvents |
    MIDIEventType.MetaTrackName |
    MIDIEventType.MetaInstrumentName;

  const generator = reader.readTracks({ eventTypes });

  xmlWriter.startDocument("1.0", "UTF-8");
  xmlWriter.writeDocType(
    "score-timewise",
    "-//Recordare//DTD MusicXML 3.1 Partwise//EN",
    "http://www.musicxml.org/dtds/partwise.dtd"
  );
  xmlWriter.startElement("score-timewise");
  xmlWriter.startElement("part-list");
  xmlWriter.startElement("score-part");
  xmlWriter.writeAttribute("id", "P1");
  xmlWriter.endElement(); // end <score-part>
  xmlWriter.endElement(); // end <part-list>
  xmlWriter.startElement("measure");
  xmlWriter.writeAttribute("number", 1);
  xmlWriter.startElement("attributes");
  // TODO: handle SMPTE
  if ((reader.header.division as ITicksPerQuarterNoteDivision).ticks) {
    xmlWriter.writeElement(
      "divisions",
      (reader.header.division as ITicksPerQuarterNoteDivision).ticks
    );
  }
  xmlWriter.endElement(); // end <attributes>
  xmlWriter.startElement("part");
  xmlWriter.writeAttribute("id", "P1");

  for (let result = generator.next(); !result.done; result = generator.next()) {
    const { event, deltaTime, trackNumber } = result.value;

    if (event.type & (MIDIEventType.MetaInstrumentName | MIDIEventType.MetaTrackName)) {
      // console.log(trackNumber, event);
    }

    if (event.type & MIDIEventType.NoteOn) {
      // const note = NoteNumberToName((event as NoteOnEvent).noteNumber);
      // // console.log({
      // //   note,
      // // });
      
      // xmlWriter.startElement("note");
      // xmlWriter.startElement("pitch");
      // xmlWriter.writeElement("step", note.step);
      // xmlWriter.writeElement("octave", note.octave);
      // if (note.alter !== undefined) {
      //   xmlWriter.writeElement("alter", note.alter);
      // }
      // xmlWriter.endElement(); // end <pitch>
      // xmlWriter.endElement(); // end <note>
    }
  }

  xmlWriter.endElement(); // end <part>
  xmlWriter.endElement(); // end <measure>
  xmlWriter.endElement(); // end <score-timewise>
  xmlWriter.endDocument();

  const tracks = getNotesByTrack(reader);

  console.log(
    JSON.stringify(
      tracks,
      null,
      '  '
    )
  );
  

  return '';
  // return xmlWriter.toString();
}
