"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIDIFile = exports.Track = void 0;
const debug_1 = __importDefault(require("debug"));
const utils_1 = require("../utils");
const MIDIEvents_1 = require("../MIDIEvents");
const utils_2 = require("../utils");
;
const mthdString = (0, utils_2.stringToCharCodeArray)("MThd");
const mtrkString = (0, utils_2.stringToCharCodeArray)("MTrk");
const END_OF_TRACK_EVENT = new Uint8Array([0xFF, 0x2F, 0x00]);
const numberToBytes = (num, minBytes) => {
    const bytes = [];
    do {
        bytes.unshift(num & 0xFF);
        num = num >> 8;
    } while (num > 0 || bytes.length < minBytes);
    return new Uint8Array(bytes);
};
function getTitleBuffer(title) {
    // add 1 for null terminator byte
    const length = (0, utils_1.toVariableLengthValue)(title.length + 1);
    const chars = (0, utils_2.stringToCharCodeArray)(title + "\0");
    const totalLength = 2 + // 1 byte each for status and subtype
        length.byteLength +
        chars.byteLength;
    const event = new Uint8Array(totalLength);
    let index = 0;
    event.set(Uint8Array.of(255 /* MIDIMessageStatus.Meta */, 3 /* MIDIMessageSubtype.TrackName */), index);
    index += 2;
    event.set(length, index);
    index += length.byteLength;
    event.set(chars, index);
    return event;
}
const getFileHeader = ({ divisions, trackCount, }) => {
    const format = trackCount === 1 ?
        0 :
        1;
    // # of divisions per quarter note (15 bits only)
    const divisionsBytes = numberToBytes(divisions & 0x7FFF, 2);
    const trackCountBytes = numberToBytes(trackCount, 2);
    const totalLength = mthdString.byteLength +
        // 4 bytes for length field  
        4 +
        // 2 bytes for format field
        2 +
        trackCountBytes.byteLength +
        divisionsBytes.byteLength;
    const header = new Uint8Array(totalLength);
    let index = 0;
    header.set(mthdString, index);
    index += mthdString.byteLength;
    // Length field, MSB first
    header.set(Uint8Array.of(0, 0, 0, 6), index);
    index += 4;
    header.set(Uint8Array.of(0, format), index);
    index += 2;
    header.set(trackCountBytes, index);
    index += trackCountBytes.byteLength;
    header.set(divisionsBytes, index);
    return header;
};
const bufferFromTrackEvent = (event) => {
    if (event instanceof MIDIEvents_1.NoteOnEvent) {
        return getNoteOnEvent(event);
    }
    if (event instanceof MIDIEvents_1.NoteOffEvent) {
        return getNoteOffEvent(event);
    }
};
class Track {
    constructor() {
        this.events = new Map();
    }
    add(event, offset = 0) {
        this.events.set(offset, event);
        return this;
    }
    addNote({ note, duration, channel, offset, velocity, release = velocity, meta = {}, }) {
        this.add(new MIDIEvents_1.NoteOnEvent({
            channel,
            noteNumber: note,
            velocity,
        }), offset).add(new MIDIEvents_1.NoteOffEvent({
            channel,
            noteNumber: note,
            release,
        }), offset + duration);
        return this;
    }
    [Symbol.iterator]() {
        const offsets = [...this.events.keys()].sort();
        let currentOffsetIndex = -1;
        return {
            next: () => {
                const event = this.events.get(offsets[++currentOffsetIndex]);
                return {
                    value: [offsets[currentOffsetIndex], event],
                    done: currentOffsetIndex === offsets.length,
                };
            },
        };
    }
}
exports.Track = Track;
const debug = (0, debug_1.default)("midi-tools:MIDIFile");
const getNoteOnEvent = (event) => {
    return new Uint8Array([
        144 /* MIDIMessageStatus.NoteOn */ + (event.channel - 1),
        // Unset top bit; value can only be 7 bits long
        event.noteNumber & 0x7F,
        event.velocity & 0x7F,
    ]);
};
const getNoteOffEvent = (event) => {
    return new Uint8Array([
        128 /* MIDIMessageStatus.NoteOff */ + (event.channel - 1),
        // Unset top bit; value can only be 7 bits long
        event.noteNumber & 0x7F,
        event.release & 0x7F,
    ]);
};
const getTrackHeader = ({ length, }) => {
    // 4 for the MTrk header, 4 for the length buffer
    const buff = new ArrayBuffer(8);
    new Uint8Array(buff).set(mtrkString, 0);
    new DataView(buff).setUint32(4, length);
    return new Uint8Array(buff);
};
class MIDIFile {
    constructor({ divisions, }) {
        this.tracks = [];
        this.divisions = divisions;
    }
    setTempo(tempo) {
        this.tempo = tempo;
        return this;
    }
    getTempo() {
        return this.tempo;
    }
    setTitle(title) {
        this.title = title;
        return this;
    }
    getTitle() {
        return this.title;
    }
    note({ note, duration, offset, track, channel = 1, velocity = 64, release = velocity, meta = {}, }) {
        if (!this.tracks[track]) {
            this.tracks[track] = new Track();
        }
        this.tracks[track].addNote({
            note,
            duration,
            channel,
            velocity,
            release,
            offset,
            meta,
        });
        return this;
    }
    toArrayBuffer() {
        const trackCount = Object.keys(this.tracks).length;
        const headerChunk = getFileHeader({
            divisions: this.divisions,
            trackCount,
        });
        const buffers = [
            headerChunk,
        ];
        if (this.title) {
            buffers.push(getTitleBuffer(this.title));
        }
        const trackBuffers = new Map();
        let trackLengths = this.tracks.forEach((track, trackNumber) => {
            let prevDuration = 0;
            trackLengths[trackNumber] = 0;
            for (const [offset, event] of track) {
                const buffer = bufferFromTrackEvent(event);
                if (!trackBuffers[trackNumber]) {
                    trackBuffers[trackNumber] = [];
                }
                trackBuffers[trackNumber].push(buffer);
                trackLengths[trackNumber] += buffer.byteLength;
                const deltaTime = offset - prevDuration;
                const deltaTimeBuffer = (0, utils_1.toVariableLengthValue)(deltaTime);
                trackLengths[trackNumber] += deltaTimeBuffer.byteLength;
                prevDuration = offset;
            }
            trackBuffers[trackNumber].push(END_OF_TRACK_EVENT);
            trackLengths[trackNumber] += 1 + // The delta time offset for end of track is 0, which takes 1 byte in VLV
                END_OF_TRACK_EVENT.byteLength;
        });
        for (let trackNumber = 0; trackNumber < this.tracks.length; trackNumber++) {
            buffers.push(getTrackHeader({
                length: trackLengths[trackNumber],
            }));
        }
        const length = buffers.reduce((count, buffer) => count + buffer.byteLength, 0);
        const array = new Uint8Array(length);
        let offset = 0;
        for (const buff of buffers) {
            array.set(buff, offset);
            offset += buff.byteLength;
        }
        return array;
    }
}
exports.MIDIFile = MIDIFile;
