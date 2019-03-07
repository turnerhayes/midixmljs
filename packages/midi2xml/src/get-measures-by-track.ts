import {
  MIDIReader,
  MIDIEvents,
  IMIDIEvent,
  NoteNumberToName,
  KeySharps,
  IKeySignature,
} from "@thayes/midi-tools";

import {
  NoteOnEvent,
  NoteOffEvent,
  ProgramChangeEvent
} from "@thayes/midi-tools/lib/MIDIReader/MIDIEvents";
import { MIDIEventType, MIDIFileType } from "@thayes/midi-tools/lib/MIDIReader";
import {
  KeySignatureEvent,
  TimeSignatureEvent,
  TrackNameEvent,
  InstrumentNameEvent,
  SequenceNumberEvent,
  TextEvent
} from "@thayes/midi-tools/lib/MIDIReader/MIDIEvents/Meta";
import { ITicksPerQuarterNote } from "@thayes/midi-tools/lib/MIDIReader/MIDIDivision";
import { ITimeSignature } from "@thayes/midi-tools/lib/utils";

import { KeySignatureMap } from "./KeySignatureMap";
import { TimeSignatureMap } from "./TimeSignatureMap";
import { Measure } from "./Measure";
import { MeasureNote } from "./MeasureNote";
import { MeasureRest } from "./MeasureRest";
import { getNoteTypes, INoteType, findNoteType } from "./NoteTypes";

export interface ITrackInfo {
  trackNumber:number;
  programNumber:number;
  averageNoteNumber:number;
  name?:string;
  sequenceNumber?:number;
  instrumentName?:string;
  texts?:string[];
}

export interface ITrackData {
  info:ITrackInfo,
  measures:Measure[],
}

interface IPlayingNote {
  startOffset:number;
  startMeasure:number;
}

type PlayingNotes = {[noteNumber:number]: IPlayingNote};

export type MeasuresByTrack = ITrackData[];

export const quarterNotesPerBeat = (
  timeSignature:ITimeSignature
):number => {
  return 4 / timeSignature.denominator;
};

export const ticksPerBeat = (
  timeSignature:ITimeSignature,
  ppqn:number
):number => {
  return ppqn * quarterNotesPerBeat(timeSignature);
};

const getMeasureEndOffset = (
  startOffset:number,
  timeSignature:ITimeSignature,
  ppqn:number,
):number => {
  return startOffset + (
    ticksPerBeat(timeSignature, ppqn) * timeSignature.numerator
  );
};

const getMeasureForOffset = (
  offset:number,
  measures:Measure[],
):Measure|null => {
  for (let measureNumber = measures.length - 1; measureNumber >= 1; measureNumber--) {
    const measure = measures[measureNumber];

    if (measure.startOffset <= offset && measure.endOffset >= offset) {
      return measure;
    }
  }

  return null;
};

const ensureMeasures = (
  {
    measures,
    timeSignatureMap,
    keySignatureMap,
    endOffset,
    ppqn,
  }: {
    measures:Measure[],
    timeSignatureMap:TimeSignatureMap,
    keySignatureMap:KeySignatureMap,
    endOffset:number,
    ppqn:number,
  }
):void => {
  if (measures.length === 0) {
    measures.push(undefined);
  }
  const lastMeasureEnd = measures.length === 1 ?
    0 :
    measures[measures.length - 1].endOffset;
  
  let currentOffset = lastMeasureEnd;

  const measureNumber = measures.length;

  while (currentOffset <= endOffset) {
    const measure = new Measure({
      startOffset: currentOffset,
      endOffset: getMeasureEndOffset(
        currentOffset,
        timeSignatureMap.getSignature(currentOffset),
        ppqn
      ),
      keySignature: keySignatureMap.getSignature(currentOffset),
      timeSignature: timeSignatureMap.getSignature(currentOffset),
      number: measureNumber,
    });

    measures[measureNumber] = measure;

    currentOffset = measure.endOffset + 1;
  }
};

const addRests = (
  {
    measures,
    fromOffset,
    toOffset,
    ppqn,
  }: {
    measures:Measure[],
    fromOffset:number,
    toOffset:number,
    ppqn:number,
  }
):number => {
  let startOffset = fromOffset;
  
  while (startOffset < toOffset) {
    const measure = getMeasureForOffset(startOffset, measures);

    if (measure === null) {
      throw new Error(`Cannot find measure for offset ${startOffset}`);
    }
    
    // Add rest(s)
    let restDuration;
    
    if (toOffset > measure.endOffset && startOffset < measure.endOffset) {
      restDuration = measure.endOffset - startOffset;
    }
    else {
      restDuration = toOffset - startOffset;
    }

    const restNoteType = findNoteType(restDuration, ppqn);
    
    measure.addRest({
      offset: startOffset,
      rest: new MeasureRest({
        noteType: restNoteType,
        measureNumber: measure.number,
      }),
    });

    startOffset += restNoteType.duration;
  }

  return startOffset;
};

export const getMeasuresByTrack = (reader:MIDIReader):MeasuresByTrack => {
  const measuresByTrack:MeasuresByTrack = [];

  const ppqn = (reader.header.division as ITicksPerQuarterNote).ticks;

  let currentTrack = -1;

  let currentMeasureNumber = 1;

  let currentOffset = 0;

  let lastNoteOffOffset:number|null;

  let keySignatureMap:KeySignatureMap = new KeySignatureMap();

  let timeSignatureMap:TimeSignatureMap = new TimeSignatureMap();

  let currentlyPlayingNotes:PlayingNotes;

  let currentProgramNumber:number;

  let trackName:string;

  let trackInstrumentName:string;

  let trackSequenceNumber:number;

  let trackTexts:string[];

  let trackNoteNumbers:number[];

  let measures:Measure[];

  let lastOffsetAdjustment:number = 0;

  for (let { event, trackNumber, deltaTime } of reader.readTracks()) {
    // track change
    if (trackNumber !== currentTrack) {
      if (currentTrack > 0) {
        measuresByTrack[currentTrack] = {
          info: {
            trackNumber: currentTrack,
            programNumber: currentProgramNumber,
            averageNoteNumber: trackNoteNumbers.reduce(
              (sum, noteNumber) => sum + noteNumber,
              0
            ) / trackNoteNumbers.length,
            instrumentName: trackInstrumentName,
            sequenceNumber: trackSequenceNumber,
            name: trackName,
            texts: trackTexts.length > 0 ?
              trackTexts :
              undefined,
          },
          measures,
        };
      }

      currentTrack = trackNumber;
      currentMeasureNumber = 1;
      currentOffset = 0;
      currentProgramNumber = 0;
      trackName = undefined;
      trackInstrumentName = undefined;
      trackSequenceNumber = undefined;
      // In a type 2 file, each track should contain its own time and key signatures.
      // In types 0 and 1, the info should be (at least) at the beginning of the first
      // track.
      if (reader.header.fileType === MIDIFileType.Format2) {
        keySignatureMap = new KeySignatureMap();
        timeSignatureMap = new TimeSignatureMap();
      }
      trackTexts = [];
      trackNoteNumbers = [];
      lastNoteOffOffset = null;
      currentlyPlayingNotes = {};
      measures = [];
    }

    if (deltaTime > 0) {
      currentOffset += Math.max(
        0,
        deltaTime - lastOffsetAdjustment
      );
      lastOffsetAdjustment = 0;
    }

    let type = event.type;

    if (type & MIDIEventType.MetaKeySignature) {
      const { sharps, isMajor } = event as KeySignatureEvent;

      keySignatureMap.addSignature(
        currentOffset,
        {
          sharps: sharps as KeySharps,
          mode: isMajor ?
            "major":
            "minor",
        }
      );
    }
    else if (type & MIDIEventType.MetaTimeSignature) {
      const { numerator, denominator } = event as TimeSignatureEvent;

      timeSignatureMap.addSignature(
        currentOffset,
        {
          numerator,
          denominator,
        }
      );
    }
    else if (type & MIDIEventType.MetaTrackName) {
      const { name } = event as TrackNameEvent;

      trackName = name;
    }
    else if (type & MIDIEventType.MetaInstrumentName) {
      const { name } = event as InstrumentNameEvent;

      trackInstrumentName = name;
    }
    else if (type & MIDIEventType.MetaSequenceNumber) {
      const { sequenceNumber } = event as SequenceNumberEvent;
      
      trackSequenceNumber = sequenceNumber;
    }
    else if (type & MIDIEventType.MetaText) {
      const { text } = event as TextEvent;
      
      trackTexts.push(text);
    }
    else if (type & MIDIEventType.ProgramChange) {
      const { programNumber } = event as ProgramChangeEvent;

      currentProgramNumber = programNumber;

      if (currentOffset > 0) {
        console.warn(`Encountered a program change event that was not at the beginning of the track; the resulting MusicXML may not reflect this properly`);
      }
    }
    else if (type & (MIDIEventType.NoteOn | MIDIEventType.NoteOff)) {
      let noteNumber;

      ensureMeasures({
        measures,
        timeSignatureMap,
        keySignatureMap,
        endOffset: currentOffset,
        ppqn
      });

      currentMeasureNumber = measures.length - 1;

      if (type & MIDIEventType.NoteOn) {
        noteNumber = (event as NoteOnEvent).noteNumber;

        if ((event as NoteOnEvent).velocity === 0) {
          type = MIDIEventType.NoteOff;
        }
      }
      else {
        noteNumber = (event as NoteOffEvent).noteNumber;
      }

      if (type & MIDIEventType.NoteOn) {
        if (
          lastNoteOffOffset !== null &&
          lastNoteOffOffset + 1 < currentOffset &&
          Object.keys(currentlyPlayingNotes).length === 0
        ) {
          currentOffset = addRests({
            measures,
            fromOffset: lastNoteOffOffset,
            toOffset: currentOffset,
            ppqn,
          });
        }

        currentlyPlayingNotes[noteNumber] = {
          startOffset: currentOffset,
          startMeasure: currentMeasureNumber,
        };

        trackNoteNumbers.push(noteNumber);
      }
      else if (type & MIDIEventType.NoteOff) {
        const playingNote = currentlyPlayingNotes[noteNumber];

        if (!playingNote) {
          console.warn(`Got a noteOff event for note number ${noteNumber} with no matching noteOn`);
          continue;
        }

        const pitch = NoteNumberToName(noteNumber);

        const duration = currentOffset - playingNote.startOffset;

        const note = new MeasureNote({
          pitch,
          measureNumber: playingNote.startMeasure,
          noteType: findNoteType(duration, ppqn),
        });

        measures[playingNote.startMeasure].addNote({
          offset: playingNote.startOffset,
          note,
        });

        // Canonicalize offset; if the actual duration was not a proper duration (i.e.
        // corresponding exactly to a half note, quarter note, eighth note, etc.) then
        // noteType.duration will not be the same as the duration calculated from the
        // deltaTime--for instance, if ppqn = 480 and duration = 239, note.noteType will
        // be an eighth note and note.noteType.duration will be 240. In that case, we want
        // to add 1 to the currentOffset so that it aligns with the adjusted duration.
        if (note.noteType.duration !== duration) {
          const adjustment = note.noteType.duration - duration;
          currentOffset += adjustment;
          lastOffsetAdjustment = adjustment;
        }

        delete currentlyPlayingNotes[noteNumber];

        lastNoteOffOffset = currentOffset;
      }
    }
  }

  if (measures.length > 0) {
    measuresByTrack[currentTrack] = {
      info: {
        trackNumber: currentTrack,
        programNumber: currentProgramNumber,
        averageNoteNumber: trackNoteNumbers.reduce(
          (sum, noteNumber) => sum + noteNumber,
          0
        ) / trackNoteNumbers.length,
        instrumentName: trackInstrumentName,
        sequenceNumber: trackSequenceNumber,
        name: trackName,
        texts: trackTexts.length > 0 ?
          trackTexts :
          undefined,
      },
      measures,
    };
  }

  return measuresByTrack;
};
