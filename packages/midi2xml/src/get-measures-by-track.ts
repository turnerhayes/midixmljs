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
import { MIDIEventType, MIDIFileType, IMIDIChannelEvent } from "@thayes/midi-tools/lib/MIDIReader";
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
import { TrackReadError } from "./TrackReadError";

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
  timeSignatureMap:TimeSignatureMap;
  keySignatureMap:KeySignatureMap;
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

const DEFAULT_PROGRAM_NUMBER = 0;

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

  let measureNumber = measures.length;

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
    measureNumber += 1;
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

  const useChannelsAsTracks = reader.header.fileType === MIDIFileType.Format0;

  let currentTrack = -1;

  let currentMeasureNumber = 1;

  let currentOffset = 0;

  const lastNoteOffOffsetByTrack:{[trackNumber:number]: number} = {};

  let keySignatureMap:KeySignatureMap = new KeySignatureMap();

  let timeSignatureMap:TimeSignatureMap = new TimeSignatureMap();

  const currentlyPlayingNotesByTrack:{[trackNumber:number]: PlayingNotes} = {};

  const noteNumbersByTrack:{[trackNumber:number]: number[]} = {};

  let measures:Measure[];

  let lastOffsetAdjustment:number = 0;

  for (let { event, trackNumber:eventTrackNumber, deltaTime } of reader.readTracks()) {
    let trackNumber:number;
    
    if (useChannelsAsTracks) {
      if ("channel" in (event as IMIDIChannelEvent)) {
        trackNumber = (event as IMIDIChannelEvent).channel;
      }
    }
    
    if (trackNumber === undefined) {
      trackNumber = eventTrackNumber;
    }

    try {
      let trackData:ITrackData = measuresByTrack[trackNumber];

      if (!trackData) {
        trackData = {
          info: {
            trackNumber,
            programNumber: DEFAULT_PROGRAM_NUMBER,
            averageNoteNumber: 0,
          },
          keySignatureMap: reader.header.fileType === MIDIFileType.Format2 ?
            new KeySignatureMap() :
            keySignatureMap,
          timeSignatureMap: reader.header.fileType === MIDIFileType.Format2 ?
            new TimeSignatureMap() :
            timeSignatureMap,
          measures: [],
        };

        measuresByTrack[trackNumber] = trackData;

        currentlyPlayingNotesByTrack[trackNumber] = {};

        // For type 0, there's only 1 track, so only 1 offset. For the other types,
        // we need to reset offset each time we change tracks.
        if (!useChannelsAsTracks) {
          currentOffset = 0;
        }
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

        trackData.keySignatureMap.addSignature(
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

        trackData.timeSignatureMap.addSignature(
          currentOffset,
          {
            numerator,
            denominator,
          }
        );
      }
      else if (type & MIDIEventType.MetaTrackName) {
        const { name } = event as TrackNameEvent;

        if (reader.header.fileType === MIDIFileType.Format2) {
          trackData.info.name = name;
        }
        else {
          Object.values(measuresByTrack).forEach(
            (trackData) => trackData.info.name = name
          );
        }
      }
      else if (type & MIDIEventType.MetaInstrumentName) {
        const { name } = event as InstrumentNameEvent;

        if (reader.header.fileType === MIDIFileType.Format2) {
          trackData.info.instrumentName = name;
        }
        else {
          Object.values(measuresByTrack).forEach(
            (trackData) => trackData.info.instrumentName = name
          );
        }
      }
      else if (type & MIDIEventType.MetaSequenceNumber) {
        const { sequenceNumber } = event as SequenceNumberEvent;
        
        if (reader.header.fileType === MIDIFileType.Format2) {
          trackData.info.sequenceNumber = sequenceNumber;
        }
        else {
          Object.values(measuresByTrack).forEach(
            (trackData) => trackData.info.sequenceNumber = sequenceNumber
          );
        }
      }
      else if (type & MIDIEventType.MetaText) {
        const { text } = event as TextEvent;
        
        if (!trackData.info.texts) {
          trackData.info.texts = [];
        }

        trackData.info.texts.push(text);
        if (reader.header.fileType === MIDIFileType.Format2) {
          if (!trackData.info.texts) {
            trackData.info.texts = [];
          }

          trackData.info.texts.push(text);
        }
        else {
          Object.values(measuresByTrack).forEach(
            (trackData) => {
              if (!trackData.info.texts) {
                trackData.info.texts = [];
              }

              trackData.info.texts.push(text);
            }
          );
        }
      }
      else if (type & MIDIEventType.ProgramChange) {
        const { programNumber, channel } = event as ProgramChangeEvent;

        trackData.info.programNumber = programNumber + 1;

        if (
          trackData.measures.length > 1 ||
          Object.keys(currentlyPlayingNotesByTrack[trackNumber]).length > 0
        ) {
          console.warn(
            `Encountered a program change event after notes started playing ` +
            `(offset was ${currentOffset}); the resulting MusicXML may not reflect this properly`
          );
        }
      }
      else if (type & (MIDIEventType.NoteOn | MIDIEventType.NoteOff)) {
        let noteNumber;

        ensureMeasures({
          measures: trackData.measures,
          timeSignatureMap: trackData.timeSignatureMap,
          keySignatureMap: trackData.keySignatureMap,
          endOffset: currentOffset,
          ppqn,
        });

        currentMeasureNumber = trackData.measures.length - 1;

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
            lastNoteOffOffsetByTrack[trackNumber] !== undefined &&
            lastNoteOffOffsetByTrack[trackNumber] + 1 < currentOffset &&
            Object.keys(currentlyPlayingNotesByTrack[trackNumber]).length === 0
          ) {
            const toOffset = currentOffset;
            currentOffset = addRests({
              measures: trackData.measures,
              fromOffset: lastNoteOffOffsetByTrack[trackNumber],
              toOffset,
              ppqn,
            });

            if (currentOffset !== toOffset) {
              lastOffsetAdjustment = currentOffset - toOffset;
            }

            delete lastNoteOffOffsetByTrack[trackNumber];

            /// DEBUG
            let prevMeasure:Measure = null;
            for (let _measure of trackData.measures) {
              if (!_measure) {
                continue;
              }

              if (prevMeasure !== null && Math.abs(_measure.startOffset - prevMeasure.endOffset) > 1) {
                throw new Error(`Non-contiguous measures ${prevMeasure.number} - ${_measure.number}`);
              }

              prevMeasure = _measure;
            }

            /// END DEBUG
          }

          currentlyPlayingNotesByTrack[trackNumber][noteNumber] = {
            startOffset: currentOffset,
            startMeasure: currentMeasureNumber,
          };

          if (!noteNumbersByTrack[trackNumber]) {
            noteNumbersByTrack[trackNumber] = [];
          }

          noteNumbersByTrack[trackNumber].push(noteNumber);
          trackData.info.averageNoteNumber = noteNumbersByTrack[trackNumber].reduce(
            (sum, noteNumber) => sum + noteNumber,
            0
          ) / noteNumbersByTrack[trackNumber].length;
        }
        else if (type & MIDIEventType.NoteOff) {
          const playingNote = currentlyPlayingNotesByTrack[trackNumber][noteNumber];

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

          trackData.measures[playingNote.startMeasure].addNote({
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

          delete currentlyPlayingNotesByTrack[trackNumber][noteNumber];

          lastNoteOffOffsetByTrack[trackNumber] = currentOffset;
        }
      }
    }
    catch (ex) {
      throw new TrackReadError(
        ex.message,
        trackNumber,
        {
          trackName: measuresByTrack[trackNumber].info.name,
          trackInstrumentName: measuresByTrack[trackNumber].info.instrumentName,
          trackSequenceNumber: measuresByTrack[trackNumber].info.sequenceNumber,
          trackTexts: measuresByTrack[trackNumber].info.texts,
        },
        ex.stack
      );
    }
  }

  return measuresByTrack;
};
