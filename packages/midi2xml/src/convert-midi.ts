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
import { isPiano } from "./is-piano";

type FileInput = ArrayBuffer|DataView|Uint8Array|Buffer|string;

type TrackClefInfo = {
  [trackNumber:number]: {
    data:ITrackData,
    clef:"G"|"F",
    clefNumber:number,
  }
};

type TracksByProgram = {
  [programNumber:number]: TrackClefInfo
};

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
  for (let measureItem of measure.measureItems) {
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

        if (
          (
            // No beams for quarter note and longer
            measureItem.element.noteType.typeName !== "whole" &&
            measureItem.element.noteType.typeName !== "half" &&
            measureItem.element.noteType.typeName !== "quarter"
          ) && (
            measureItem.previousInBeat ||
            measureItem.nextInBeat
          )
        ) {
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

      
      for (let dotIndex = 0; dotIndex < measureItem.element.noteType.dotCount; dotIndex++) {
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

  const tracksByProgramNumber:TracksByProgram = {};

  let clefNumber = 1;
  
  for (let track of measuresByTrack) {
    if (!track || track.measures.length === 0) {
      continue;
    }

    const { programNumber } = track.info;

    if (!isPiano(programNumber)) {
      continue;
    }

    let thisClefNumber = clefNumber++;

    // TODO: Better detection of appropriate clefs
    let clef:"F"|"G" = "G";

    let existingClefInfo:TrackClefInfo = tracksByProgramNumber[programNumber];

    if (!existingClefInfo) {
      existingClefInfo = tracksByProgramNumber[programNumber] = {};
    }
    else {
      const existingClefNumber = Number(Object.keys(existingClefInfo)[0]);
      if (existingClefInfo[existingClefNumber].data.info.averageNoteNumber < track.info.averageNoteNumber) {
        existingClefInfo[existingClefNumber].clef = "F";
        // Make sure G clef is always higher clef number (i.e. lower in score)
        tracksByProgramNumber[programNumber][thisClefNumber] = existingClefInfo[existingClefNumber];
        thisClefNumber = existingClefNumber;
      }
      else {
        clef = "F";
      }

      existingClefInfo[thisClefNumber] = {
        clef,
        clefNumber: thisClefNumber,
        data: track,
      };
    }

    tracksByProgramNumber[track.info.programNumber][track.info.trackNumber] = {
      data: track,
      clef,
      clefNumber: thisClefNumber,
    };
  }

  const programNumberToPartID:{[program:number]: string} = {};

  let partID = 0;

  for (let programNumber of Object.keys(tracksByProgramNumber)) {
    const tracks:TrackClefInfo = tracksByProgramNumber[programNumber];

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

  let hasWrittenAttributes = false;

  for (let programNumber of Object.keys(tracksByProgramNumber)) {
    const tracks:TrackClefInfo = tracksByProgramNumber[programNumber];

    const track = tracks[Object.keys(tracks)[0]].data;

    xmlWriter.startElement("part");
    xmlWriter.writeAttribute("id", programNumberToPartID[programNumber]);

    for (let measureNumber = 1; measureNumber < track.measures.length; measureNumber++) {
      const measure = track.measures[measureNumber];

      xmlWriter.startElement("measure");
      xmlWriter.writeAttribute("number", measureNumber);

      if (!hasWrittenAttributes) {
        // TODO: write attributes element in case of any change mid-piece (e.g key change, time change)
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

        xmlWriter.writeElement("staves", measuresByTrack.length - 1);

        let clefNumber = 1;
        for (let programNumber of Object.keys(tracksByProgramNumber)) {
          const tracks:TrackClefInfo = tracksByProgramNumber[programNumber];

          for (let { clef, clefNumber } of Object.values(tracks).sort((a, b) => a.clefNumber - b.clefNumber)) {
            xmlWriter.startElement("clef");
            xmlWriter.writeAttribute("number", clefNumber);
            if (clef === "G") {
              xmlWriter.writeElement("sign", "G");
              xmlWriter.writeElement("line", 2);
            }
            else {
              xmlWriter.writeElement("sign", "F");
              xmlWriter.writeElement("line", 4);
            }
            xmlWriter.endElement(); // end <clef>
          }
        }
        xmlWriter.endElement(); // end <attributes>

        hasWrittenAttributes = true;
      }

      const trackValues = Object.values(tracks);
    
      for (let index = 0; index < trackValues.length; index++) {
        const { data, clefNumber } = trackValues[index];

        if (index > 0) {
          xmlWriter.startElement("backup");
          xmlWriter.writeElement("duration", measure.totalQuarterNotes * ppqn);
          xmlWriter.endElement(); // end <backup>
        }

        writeMeasureNotes(xmlWriter, data.measures[measureNumber], clefNumber, ppqn);
      }
      
      xmlWriter.endElement(); // end <measure>
    }

    xmlWriter.endElement(); // end <part>
  }

  xmlWriter.endElement(); // end <score-partwise>
  xmlWriter.endDocument();

  return xmlWriter.toString();
}
