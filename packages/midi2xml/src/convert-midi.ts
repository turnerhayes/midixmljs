import XMLWriter from "xml-writer";

import {
  MIDIReader,
  ITimeSignature,
} from "@thayes/midi-tools";
import { writeFileSync } from "fs";
import { resolve } from "path";

import { Measure } from "./Measure";
import { MeasureNote } from "./MeasureNote";
// import { MIDIReader } from "@thayes/midi-tools/lib/MIDIReader";
import { ITicksPerQuarterNote } from "@thayes/midi-tools/lib/MIDIReader/MIDIDivision";
import { MeasureChord } from "./MeasureChord";
import { MeasureRest } from "./MeasureRest";
import {
  getMeasuresByTrack,
  ITrackData,
  ITrackInfo,
  ticksPerBeat,
} from "./get-measures-by-track";
import { IMeasureElement } from "./IMeasureElement";
import { INoteType, findNoteType } from "./NoteTypes";

type FileInput = ArrayBuffer|DataView|Uint8Array|Buffer|string;

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


const writeMeasureNotes = (xmlWriter:XMLWriter, measure:Measure, clefNumber:number, ppqn:number) => {
  // const { timeSignature } = measure;
  
  // let beatGroup:IMeasureElement[] = [];
  
  // const beatGroups:Array<IMeasureElement[]> = [
  //   beatGroup,
  // ];

  // const beatLength:number = ticksPerBeat(timeSignature, ppqn);

  // type AudibleItem = MeasureNote|MeasureChord;

  // type MeasureGroupItem = {
  //   start:number;
  //   startBeat:number;
  //   end:number;
  //   endBeat:number;
  //   nextInBeat:MeasureGroupItem|null;
  //   previousInBeat:MeasureGroupItem|null;
  //   noteType:INoteType;
  //   isRest:boolean;
  //   noteItem?:AudibleItem;
  // }

  // const measureItems:MeasureGroupItem[] = [];

  // let currentOffset = 0;

  // for (let element of measure.notes) {
  //   let item:MeasureGroupItem = {
  //     start: currentOffset,
  //     startBeat: Math.floor(currentOffset / beatLength),
  //     end: currentOffset + element.duration,
  //     endBeat: Math.floor((currentOffset + element.duration) / beatLength),
  //     nextInBeat: null,
  //     previousInBeat: null,
  //     noteType: element.noteType,
  //     isRest: element instanceof MeasureRest,
  //     noteItem: element instanceof MeasureRest ?
  //       undefined :
  //       element as AudibleItem,
  //   };

  //   currentOffset += element.duration;

  //   let previousAudibleItem:MeasureGroupItem;

  //   let previousMeasureItem:MeasureGroupItem;

  //   if (measureItems.length > 0) {
  //     previousMeasureItem = measureItems[measureItems.length - 1];

  //     for (
  //       let itemIndex = measureItems.length - 1;
  //       itemIndex >= 0 && !previousAudibleItem;
  //       itemIndex--
  //     ) {
  //       if (!measureItems[itemIndex].isRest) {
  //         previousAudibleItem = measureItems[itemIndex];
  //       }
  //     }
  //   }

  //   const nextItemStart = previousMeasureItem ?
  //     previousMeasureItem.end :
  //     0;

  //   if (nextItemStart < item.start) {
  //     const restDuration = item.start - nextItemStart;

  //     measureItems.push({
  //       start: nextItemStart,
  //       startBeat: Math.floor(nextItemStart / beatLength),
  //       end: item.start - 1,
  //       endBeat: Math.floor((item.start) / beatLength),
  //       nextInBeat: null,
  //       previousInBeat: null,
  //       noteType: findNoteType(restDuration, ppqn),
  //       isRest: true,
  //     });
  //   }

  //   measureItems.push(item);
    
  //   if (!item.isRest && previousAudibleItem && previousAudibleItem.startBeat === item.endBeat) {
  //     previousAudibleItem.nextInBeat = item;
  //     item.previousInBeat = previousAudibleItem;
  //   }
  // }

  // const measureDuration = beatLength * timeSignature.numerator;
  // const lastMeasureItem = measureItems[measureItems.length - 1];
  // // It's possible that a measure has no items, in which case it should just have a rest
  // // for the duration of the measure
  // const nextItemStart = lastMeasureItem ?
  //   lastMeasureItem.end :
  //   0;

  // for (let measureItem of measureItems) {
  for (let measureItem of measure.measureItems) {
    if (measureItem.element instanceof MeasureRest) {
      xmlWriter.startElement("note");
      xmlWriter.startElement("rest").endElement();
      xmlWriter.writeElement("type", measureItem.element.noteType.typeName);
      if (measureItem.element.noteType.dot) {
        xmlWriter.startElement("dot").endElement();
      }
      xmlWriter.writeElement("duration", measureItem.element.noteType.duration);
      xmlWriter.writeElement("staff", clefNumber);
      xmlWriter.writeElement("voice", clefNumber);
      xmlWriter.endElement(); // end <note>

      continue;
    }
      
    let notes:(MeasureNote|MeasureRest)[];
    
    if (measureItem.element instanceof MeasureChord) {
      notes = measureItem.element.notes;
    }
    else {
      notes = [
        measureItem.element as MeasureNote|MeasureRest,
      ];
    }

    for (let noteIndex = 0; noteIndex < notes.length; noteIndex++) {
      const note = notes[noteIndex];

      xmlWriter.startElement("note");
      if (note instanceof MeasureRest) {
        xmlWriter.startElement("rest").endElement();
      }
      else {
        xmlWriter.startElement("pitch");
        xmlWriter.writeElement("step", note.pitch.step);
        xmlWriter.writeElement("octave", note.pitch.octave);
        if (note.pitch.alter !== undefined) {
          xmlWriter.writeElement("alter", note.pitch.alter);
        }
        xmlWriter.endElement(); // end <pitch>

        if (measureItem.previousInBeat || measureItem.nextInBeat) {
          xmlWriter.startElement("beam");
          xmlWriter.writeAttribute("number", 1);

          if (!measureItem.previousInBeat) {
            xmlWriter.text("begin");
          }
          else if (!measureItem.nextInBeat) {
            xmlWriter.text("end");
          }
          else {
            xmlWriter.text("continue");
          }
          xmlWriter.endElement(); // end <beam>
        }
      }
      xmlWriter.writeElement("duration", note.noteType.duration);
      xmlWriter.writeElement("type", note.noteType.typeName);

      if (note.noteType.dot) {
        xmlWriter.startElement("dot").endElement();
      }
      if (measureItem.element instanceof MeasureChord && noteIndex > 0) {
        xmlWriter.startElement("chord").endElement();
      }

      xmlWriter.writeElement("staff", clefNumber);
      xmlWriter.writeElement("voice", clefNumber);
      xmlWriter.endElement(); // end <note>
    }
  }
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

  const xmlWriter = new XMLWriter("  ");

  let ppqn:number;

  // TODO: handle SMPTE
  if ((reader.header.division as ITicksPerQuarterNote).ticks) {
    ppqn = (reader.header.division as ITicksPerQuarterNote).ticks;
  }
  else {
    throw new Error("SMPTE divisions are not yet supported");
  }

  const measuresByTrack = getMeasuresByTrack(reader);

  xmlWriter.startDocument("1.0", "UTF-8");
  xmlWriter.writeDocType(
    "score-partwise",
    "-//Recordare//DTD MusicXML 3.1 Partwise//EN",
    "http://www.musicxml.org/dtds/partwise.dtd"
  );
  xmlWriter.startElement("score-partwise");
  xmlWriter.startElement("part-list");

  const tracksByProgramNumber:{
    [program:number]: ITrackData[]
  } = {};
  
  for (let track of measuresByTrack) {
    if (!track) {
      continue;
    }

    if (!tracksByProgramNumber[track.info.programNumber]) {
      tracksByProgramNumber[track.info.programNumber] = [];
    }

    tracksByProgramNumber[track.info.programNumber].push(track);
  }

  const programNumberToPartID:{[program:number]: string} = {};

  let partID = 0;

  for (let programNumber of Object.keys(tracksByProgramNumber)) {
    const tracks = tracksByProgramNumber[programNumber];

    const id = `P${++partID}`;
    programNumberToPartID[programNumber] = id;

    xmlWriter.startElement("score-part");
    xmlWriter.writeAttribute("id", id);
    xmlWriter.startElement("midi-instrument");
    xmlWriter.writeElement("midi-program", Number(programNumber) + 1);
    xmlWriter.endElement(); // end <midi-instrument>
    xmlWriter.endElement(); // end <score-part>
  }

  xmlWriter.endElement(); // end <part-list>

  let clefNumber = 0;

  for (let programNumber of Object.keys(tracksByProgramNumber)) {
    const tracks:ITrackData[] = tracksByProgramNumber[programNumber];

    let trebleClefTrack:ITrackData;
    let bassCleffTrack:ITrackData;

    const trebleClefNumber = ++clefNumber;
    const bassCleffNumber = ++clefNumber;

    // TODO: Better detection of appropriate clefs
    if (tracks.length === 1) {
      trebleClefTrack = tracks[0];
    }
    else if (tracks.length === 2) {
      if (tracks[0].info.averageNoteNumber > tracks[1].info.averageNoteNumber) {
        trebleClefTrack = tracks[0];
        bassCleffTrack = tracks[1];
      }
      else {
        trebleClefTrack = tracks[1];
        bassCleffTrack = tracks[0];
      }
    }
    else {
      throw new Error(`Don't know how to handle more than 2 tracks`);
    }

    xmlWriter.startElement("part");
    xmlWriter.writeAttribute("id", programNumberToPartID[programNumber]);

    for (let measureNumber = 1; measureNumber < trebleClefTrack.measures.length; measureNumber++) {
      const measure = trebleClefTrack.measures[measureNumber];

      const bassCleffMeasure = bassCleffTrack ?
        bassCleffTrack.measures[measureNumber] :
        null;

      xmlWriter.startElement("measure");
      xmlWriter.writeAttribute("number", measureNumber);

      if (measureNumber === 1) {
        xmlWriter.startElement("attributes");
        xmlWriter.writeElement("divisions", ppqn);
        xmlWriter.startElement("key");
        xmlWriter.writeElement("fifths", measure.keySignature.sharps as number);
        if (measure.keySignature.mode === "minor") {
          xmlWriter.writeElement("mode", measure.keySignature.mode);
        }
        xmlWriter.endElement(); // end <key>
        xmlWriter.startElement("time");
        xmlWriter.writeElement("beats", measure.timeSignature.numerator);
        xmlWriter.writeElement("beat-type", measure.timeSignature.denominator);
        xmlWriter.endElement(); // end <time>

        xmlWriter.writeElement("staves", tracks.length);
        xmlWriter.startElement("clef");
        xmlWriter.writeAttribute("number", trebleClefNumber);
        xmlWriter.writeElement("sign", "G");
        xmlWriter.writeElement("line", 2);
        xmlWriter.endElement(); // end <clef>
        xmlWriter.startElement("clef");
        xmlWriter.writeAttribute("number", bassCleffNumber);
        xmlWriter.writeElement("sign", "F");
        xmlWriter.writeElement("line", 4);
        xmlWriter.endElement(); // end <clef>
        xmlWriter.endElement(); // end <attributes>
      }
    
      writeMeasureNotes(xmlWriter, measure, trebleClefNumber, ppqn);
      
      if (bassCleffMeasure) {
        xmlWriter.startElement("backup");
        xmlWriter.writeElement("duration", measure.totalQuarterNotes * ppqn);
        xmlWriter.endElement(); // end <backup>

        writeMeasureNotes(xmlWriter, bassCleffMeasure, bassCleffNumber, ppqn);
      }

      xmlWriter.endElement(); // end <measure>
    }

    xmlWriter.endElement(); // end <part>
  }

  xmlWriter.endElement(); // end <score-partwise>
  xmlWriter.endDocument();

  return xmlWriter.toString();
}
