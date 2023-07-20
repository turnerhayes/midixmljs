import createDebugger from "debug";
import { NoteNumberToName, toVariableLengthValue, } from "../utils";
const debug = createDebugger("midi-tools:MIDIFile");
const stringToCharCodeArray = (str) => {
    return new Uint8Array(str.split("").map((chr) => chr.charCodeAt(0)));
};
const mthdString = stringToCharCodeArray("MThd");
const mtrkString = stringToCharCodeArray("MTrk");
const END_OF_TRACK_EVENT = new Uint8Array([0xFF, 0x2F, 0x00]);
const numberToBytes = (num, minBytes) => {
    const bytes = [];
    do {
        bytes.unshift(num & 0xFF);
        num = num >> 8;
    } while (num > 0 || bytes.length < minBytes);
    return new Uint8Array(bytes);
};
const getNoteOnEvent = (note, channel, velocity) => {
    return new Uint8Array([
        144 /* MIDIMessageStatus.NoteOn */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
const getNoteOffEvent = (note, channel, velocity) => {
    return new Uint8Array([
        128 /* MIDIMessageStatus.NoteOff */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
const getProgramChangeEvent = ({ channel, program, }) => {
    return new Uint8Array([
        192 /* MIDIMessageStatus.ProgramChange */ + (channel - 1),
        program
    ]);
};
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
    index += divisionsBytes.byteLength;
    return header;
};
const getTrackHeader = ({ length, }) => {
    // 4 for the MTrk header, 4 for the length buffer
    const buff = new ArrayBuffer(8);
    new Uint8Array(buff).set(mtrkString, 0);
    new DataView(buff).setUint32(4, length);
    return new Uint8Array(buff);
};
export class MIDIFile {
    constructor({ divisions, }) {
        this.buffers = [];
        this.tracks = {};
        this.omniTrackEvents = [];
        this.divisions = divisions;
    }
    programChange({ offset, program, track, channel = 1, }) {
        const programChangeEvent = getProgramChangeEvent({ channel, program });
        const bufferInfo = {
            event: programChangeEvent,
            eventType: 192 /* MIDIMessageStatus.ProgramChange */,
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
    timeSignature({ numerator, denominator, }) {
        const event = new Uint8Array([
            255 /* MIDIMessageStatus.Meta */,
            88 /* MIDIMessageSubtype.TimeSignature */,
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
            eventType: 255 /* MIDIMessageStatus.Meta */,
            divisionOffset: 0,
        });
    }
    keySignature({ keySignature, offset = 0, }) {
        const event = new Uint8Array([
            255 /* MIDIMessageStatus.Meta */,
            89 /* MIDIMessageSubtype.KeySignature */,
            2,
            keySignature.sharps,
            // major (0) vs. minor (1)
            // @todo: Actually find major/minor key from XML
            keySignature.mode === "minor" ? 1 : 0,
        ]);
        this.omniTrackEvents.push({
            event,
            eventType: 255 /* MIDIMessageStatus.Meta */,
            divisionOffset: offset,
        });
    }
    setTitle(title) {
        // add 1 for null terminator byte
        const length = toVariableLengthValue(title.length + 1);
        const chars = stringToCharCodeArray(title + "\0");
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
        index += chars.byteLength;
        this.buffers.push({
            event,
            eventType: 255 /* MIDIMessageStatus.Meta */,
            divisionOffset: 0,
        });
    }
    note({ note, duration, offset, track, channel = 1, velocity = 64, release = velocity, meta = {}, }) {
        const noteOnEvent = getNoteOnEvent(note, channel, velocity);
        let noteName = NoteNumberToName(note);
        noteName = `${noteName.step}${noteName.alter === 1 ?
            '#' :
            noteName.alter === -1 ?
                'b' :
                ''}${noteName.octave}`;
        if (!(track in this.tracks)) {
            this.tracks[track] = {
                buffers: [],
            };
        }
        this.tracks[track].buffers.push({
            event: noteOnEvent,
            eventType: 144 /* MIDIMessageStatus.NoteOn */,
            divisionOffset: offset,
            meta: Object.assign({ name: noteName }, meta),
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
        const noteOffOffset = offset + duration;
        debug('note off: ', {
            note,
            offset: noteOffOffset,
            channel,
            release,
            meta: Object.assign({ name: noteName }, meta),
        });
        this.tracks[track].buffers.push({
            event: noteOffEvent,
            eventType: 128 /* MIDIMessageStatus.NoteOff */,
            divisionOffset: noteOffOffset,
        });
    }
    setTempo(tempo) {
        const microsecondsPerQuarterNote = 6e7 / tempo;
        const tempoBytes = numberToBytes(microsecondsPerQuarterNote, 3);
        // 1 byte each for status type and meta type, and 1 for constant value 0x03 after meta type
        const totalLength = 3 +
            tempoBytes.byteLength;
        const event = new Uint8Array(totalLength);
        let index = 0;
        event.set(Uint8Array.of(255 /* MIDIMessageStatus.Meta */, 81 /* MIDIMessageSubtype.SetTempo */, 3), index);
        index += 3;
        event.set(tempoBytes, index);
        index += tempoBytes.byteLength;
        this.omniTrackEvents.push({
            event,
            eventType: 255 /* MIDIMessageStatus.Meta */,
            divisionOffset: 0,
        });
    }
    sortBuffers() {
        return Object.keys(this.tracks).reduce((reduction, trackNumber) => {
            // shallow clone to avoid adding omniTrackEvents to the actual tracks
            const trackBuffers = this.tracks[trackNumber].buffers.slice();
            trackBuffers.unshift(...this.omniTrackEvents);
            reduction[trackNumber] = trackBuffers.sort((a, b) => {
                const offsetDiff = a.divisionOffset - b.divisionOffset;
                if (offsetDiff === 0) {
                    if (a.eventType === b.eventType) {
                        return 0;
                    }
                    if (a.eventType === 192 /* MIDIMessageStatus.ProgramChange */ ||
                        a.eventType === 255 /* MIDIMessageStatus.Meta */) {
                        if (b.eventType === 192 /* MIDIMessageStatus.ProgramChange */ ||
                            b.eventType === 255 /* MIDIMessageStatus.Meta */) {
                            return 0;
                        }
                        return -1;
                    }
                    return 1;
                }
                return offsetDiff;
            });
            return reduction;
        }, {});
    }
    toArrayBuffer() {
        const buffers = this.sortBuffers();
        const trackCount = Object.keys(this.tracks).length;
        let trackLengths = Object.keys(buffers).reduce((totals, trackNumber) => {
            let prevDuration = 0;
            totals[trackNumber] = buffers[trackNumber].reduce((total, midiEventInfo) => {
                total = total + midiEventInfo.event.length;
                const deltaTime = midiEventInfo.divisionOffset - prevDuration;
                const deltaTimeBuffer = toVariableLengthValue(deltaTime);
                total += deltaTimeBuffer.length;
                midiEventInfo.deltaTimeBuffer = deltaTimeBuffer;
                prevDuration = midiEventInfo.divisionOffset;
                return total;
            }, 0);
            totals[trackNumber] += 1 + // The delta time offset for end of track is 0, which takes 1 byte in VLV
                END_OF_TRACK_EVENT.length;
            return totals;
        }, {});
        const headerChunk = getFileHeader({
            divisions: this.divisions,
            trackCount,
        });
        const trackHeaders = Object.keys(buffers).reduce((headers, trackNumber) => {
            headers[trackNumber] = getTrackHeader({
                length: trackLengths[trackNumber],
            });
            return headers;
        }, {});
        let totalLength = headerChunk.length;
        totalLength += Object.keys(trackHeaders).reduce((total, trackNumber) => total + trackHeaders[trackNumber].length, 0);
        totalLength += Object.keys(buffers).reduce((total, trackNumber) => total + trackLengths[trackNumber], 0);
        const buff = new ArrayBuffer(totalLength);
        const arr = new Uint8Array(buff);
        let offset = 0;
        arr.set(headerChunk, offset);
        offset += headerChunk.length;
        Object.keys(buffers).forEach((trackNumber) => {
            arr.set(trackHeaders[trackNumber], offset);
            offset += trackHeaders[trackNumber].length;
            buffers[trackNumber].forEach((midiEventInfo) => {
                const deltaTimeBuffer = midiEventInfo.deltaTimeBuffer;
                arr.set(deltaTimeBuffer, offset);
                offset += deltaTimeBuffer.length;
                arr.set(midiEventInfo.event, offset);
                offset += midiEventInfo.event.length;
            });
            // Delta time for end of track event is 0, so the buffer for it is always
            // the same
            arr.set(Uint8Array.from([0]), offset);
            offset += 1;
            arr.set(END_OF_TRACK_EVENT, offset);
            offset += END_OF_TRACK_EVENT.length;
        });
        return buff;
    }
}
