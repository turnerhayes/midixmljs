/* eslint-disable */
// const MIDI = require("midi");
import * as path from "path";
import * as fs from "fs";
import { TextDecoder } from "text-encoding";
import { parseMidiFile } from "jasmid.ts";
import XMLWriter from "xml-writer";
import { NoteNumberToName } from "@thayes/midi-tools";
import { getInstrumentName } from "./midi-instruments";
global.TextDecoder = TextDecoder;
const samplePath = path.resolve(__dirname, "..", "..", "sample-midi", "Aha - Take On Me.mid");
// const samplePath:string = path.resolve(__dirname, "..", "..", "sample-midi", "Asia - Heat Of The Moment.mid");
// const samplePath:string = resolve(__dirname, "..", "..", "sample-midi", "house_of_the_rising_sun.mid");
const midi = parseMidiFile(fs.readFileSync(samplePath).buffer);
// fs.writeFileSync(
//   path.resolve(__dirname, "take-on-me--parsed.json"),
//   JSON.stringify(midi, null, "  ")
// );
function writeNotes({ notes, writer, divisions, timeSignature }) {
    let measureNumber = 0;
    notes.forEach(({ note, duration }) => {
        measureNumber += 1;
        const noteDescription = NoteNumberToName(note);
        // <key>
        //   <fifths>-3</fifths>
        //   <mode>minor</mode>
        // </key>
        writer.startElement("measure").writeAttribute("number", measureNumber);
        if (measureNumber === 1) {
            writer.startElement("attributes");
            writer.writeElement("divisions", divisions);
            writer.startElement("time");
            writer.writeElement("beats", timeSignature.numerator);
            writer.writeElement("beat-type", timeSignature.denominator);
            writer.endElement(); // </time>
            writer.startElement("key");
            writer.writeElement("fifths", -3);
            writer.writeElement("mode", "minor");
            writer.endElement(); // </key>
            writer.startElement("clef");
            writer.writeElement("sign", "G");
            writer.writeElement("line", 2);
            writer.endElement(); // </clef>
            writer.endElement(); // </attributes>
        }
        writer.startElement("note");
        writer.startElement("pitch");
        writer.writeElement("step", noteDescription.step);
        writer.writeElement("octave", noteDescription.octave);
        if (noteDescription.alter) {
            writer.writeElement("alter", noteDescription.alter);
        }
        writer.endElement(); // </pitch>
        writer.writeElement("duration", duration);
        writer.endElement(); // </note>
        writer.endElement(); // </measure>
    });
}
function toMusicXML({ header, tracks }) {
    const ticksPerBeat = header.ticksPerBeat;
    const notesByTrack = [];
    const currentNotesByTrack = {};
    const instrumentIdsByChannel = {};
    for (let channel = 0; channel < 16; channel++) {
        instrumentIdsByChannel[channel] = 1; // default to instrument 1
    }
    const track = midi.tracks[0];
    let timeSignature = {
        numerator: null,
        denominator: null,
    };
    midi.tracks.forEach((track, trackNumber) => {
        currentNotesByTrack[trackNumber] = [];
        track.forEach((event) => {
            if (event.deltaTime > 0) {
                currentNotesByTrack[trackNumber].forEach((note) => note.duration += event.deltaTime);
            }
            const channel = event.channel;
            if (event.subType === "programChange") {
                const program = event.program;
                if (program === 0) {
                    console.log("setting program to 0", event);
                }
                instrumentIdsByChannel[channel] = program;
            }
            if (event.type === "meta") {
                if (event.subType === "timeSignature") {
                    timeSignature.numerator = event.numerator;
                    timeSignature.denominator = event.denominator;
                }
            }
            if (event.subType === "noteOn") {
                currentNotesByTrack[trackNumber].push({
                    note: event.note,
                    channel,
                    duration: 0,
                    instrumentId: instrumentIdsByChannel[channel],
                });
            }
            else if (event.subType === "noteOff") {
                const noteIndex = currentNotesByTrack[trackNumber].findIndex(({ note }) => note === event.note);
                if (noteIndex < 0) {
                    // should never happen--means we have a noteOff for a note that has not had a noteOn
                    return;
                }
                if (!(trackNumber in notesByTrack)) {
                    notesByTrack[trackNumber] = [];
                }
                notesByTrack[trackNumber].push({
                    note: currentNotesByTrack[trackNumber][noteIndex].note,
                    channel: currentNotesByTrack[trackNumber][noteIndex].channel,
                    duration: currentNotesByTrack[trackNumber][noteIndex].duration,
                    instrumentId: currentNotesByTrack[trackNumber][noteIndex].instrumentId,
                });
                currentNotesByTrack[trackNumber].splice(noteIndex, 1);
            }
        });
    });
    let measureNumber = 0;
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString();
    if (month.length === 1) {
        month = "0" + month;
    }
    let date = now.getDate().toString();
    if (date.length === 1) {
        date = "0" + date;
    }
    const writer = new XMLWriter("  ");
    writer.startDocument("1.0", "UTF-8", false);
    writer.writeDocType("score-partwise", "-//Recordare//DTD MusicXML 3.1 Partwise//EN", "http://www.musicxml.org/dtds/partwise.dtd");
    writer.startElement("score-partwise").writeAttribute("version", "3.1");
    writer.startElement("work");
    writer.writeElement("work-title", "Generated Score");
    writer.endElement(); // </work>
    writer.startElement("identification");
    writer.startElement("encoding");
    writer.writeElement("encoding-date", [year, month, date].join("-"));
    writer.endElement(); // </encoding>
    writer.endElement(); // </identification>
    writer.startElement("part-list");
    Object.keys(notesByTrack).forEach((trackNumber) => {
        const partId = `P${trackNumber}`;
        const instrumentId = notesByTrack[trackNumber][0].instrumentId;
        const instrumentName = getInstrumentName({ instrumentId });
        console.log({
            instrumentId,
            instrumentName,
        });
        const instrumentIdString = `${partId}-I1`;
        writer.startElement("score-part")
            .writeAttribute("id", partId);
        writer.startElement("part-name").text(instrumentName).endElement();
        writer.startElement("score-instrument").writeAttribute("id", instrumentIdString);
        writer.writeElement("instrument-name", instrumentName);
        writer.endElement(); // </score-instrument>
        writer.startElement("midi-instrument").writeAttribute("id", instrumentIdString);
        writer.endElement(); // </midi-instrument>
        writer.endElement(); // </score-part>
    });
    writer.endElement(); // </part-list>
    Object.keys(notesByTrack).forEach((trackNumber) => {
        const notes = notesByTrack[trackNumber];
        writer.startElement("part").writeAttribute("id", `P${trackNumber}`);
        writeNotes({ notes, writer, divisions: ticksPerBeat, timeSignature });
        writer.endElement(); // </part>
    });
    writer.endElement(); // </score-partwise>
    writer.endDocument();
    return writer.toString();
}
function writeXML(xml) {
    return new Promise((resolve, reject) => fs.writeFile(path.resolve(__dirname, "main.xml"), xml, (err) => {
        if (err) {
            reject(err);
            return;
        }
        resolve();
    }));
}
writeXML(toMusicXML(midi)).then(() => console.log("wrote main.xml")).catch((err) => console.error("ERROR:", err));
