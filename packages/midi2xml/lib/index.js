"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
// const MIDI = require("midi");
var path = require("path");
var fs = require("fs");
var text_encoding_1 = require("text-encoding");
var jasmid_ts_1 = require("jasmid.ts");
var xml_writer_1 = require("xml-writer");
var midi_tools_1 = require("midi-tools");
var midi_instruments_1 = require("./midi-instruments");
global.TextDecoder = text_encoding_1.TextDecoder;
var samplePath = path.resolve(__dirname, "..", "..", "sample-midi", "Aha - Take On Me.mid");
// const samplePath:string = path.resolve(__dirname, "..", "..", "sample-midi", "Asia - Heat Of The Moment.mid");
// const samplePath:string = resolve(__dirname, "..", "..", "sample-midi", "house_of_the_rising_sun.mid");
var midi = jasmid_ts_1.parseMidiFile(fs.readFileSync(samplePath).buffer);
// fs.writeFileSync(
//   path.resolve(__dirname, "take-on-me--parsed.json"),
//   JSON.stringify(midi, null, "  ")
// );
function writeNotes(_a) {
    var notes = _a.notes, writer = _a.writer, divisions = _a.divisions, timeSignature = _a.timeSignature;
    var measureNumber = 0;
    notes.forEach(function (_a) {
        var note = _a.note, duration = _a.duration;
        measureNumber += 1;
        var noteDescription = midi_tools_1.NoteNumberToName(note);
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
function toMusicXML(_a) {
    var header = _a.header, tracks = _a.tracks;
    var ticksPerBeat = header.ticksPerBeat;
    var notesByTrack = [];
    var currentNotesByTrack = {};
    var instrumentIdsByChannel = {};
    for (var channel = 0; channel < 16; channel++) {
        instrumentIdsByChannel[channel] = 1; // default to instrument 1
    }
    var track = midi.tracks[0];
    var timeSignature = {
        numerator: null,
        denominator: null,
    };
    midi.tracks.forEach(function (track, trackNumber) {
        currentNotesByTrack[trackNumber] = [];
        track.forEach(function (event) {
            if (event.deltaTime > 0) {
                currentNotesByTrack[trackNumber].forEach(function (note) { return note.duration += event.deltaTime; });
            }
            var channel = event.channel;
            if (event.subType === "programChange") {
                var program = event.program;
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
                    channel: channel,
                    duration: 0,
                    instrumentId: instrumentIdsByChannel[channel],
                });
            }
            else if (event.subType === "noteOff") {
                var noteIndex = currentNotesByTrack[trackNumber].findIndex(function (_a) {
                    var note = _a.note;
                    return note === event.note;
                });
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
    var measureNumber = 0;
    var now = new Date();
    var year = now.getFullYear();
    var month = (now.getMonth() + 1).toString();
    if (month.length === 1) {
        month = "0" + month;
    }
    var date = now.getDate().toString();
    if (date.length === 1) {
        date = "0" + date;
    }
    var writer = new xml_writer_1.default("  ");
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
    Object.keys(notesByTrack).forEach(function (trackNumber) {
        var partId = "P" + trackNumber;
        var instrumentId = notesByTrack[trackNumber][0].instrumentId;
        var instrumentName = midi_instruments_1.getInstrumentName({ instrumentId: instrumentId });
        console.log({
            instrumentId: instrumentId,
            instrumentName: instrumentName,
        });
        var instrumentIdString = partId + "-I1";
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
    Object.keys(notesByTrack).forEach(function (trackNumber) {
        var notes = notesByTrack[trackNumber];
        writer.startElement("part").writeAttribute("id", "P" + trackNumber);
        writeNotes({ notes: notes, writer: writer, divisions: ticksPerBeat, timeSignature: timeSignature });
        writer.endElement(); // </part>
    });
    writer.endElement(); // </score-partwise>
    writer.endDocument();
    return writer.toString();
}
function writeXML(xml) {
    return new Promise(function (resolve, reject) { return fs.writeFile(path.resolve(__dirname, "main.xml"), xml, function (err) {
        if (err) {
            reject(err);
            return;
        }
        resolve();
    }); });
}
writeXML(toMusicXML(midi)).then(function () { return console.log("wrote main.xml"); }).catch(function (err) { return console.error("ERROR:", err); });
