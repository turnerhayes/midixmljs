import { MIDIFileType } from './MIDIFileType';
import { MIDIParseError } from './MIDIParseError';
import { eventFromBytes } from './MIDIEventCreator';
import { fromVariableLengthValue } from '../utils/variable-length-value';
import { bufferToString } from '../utils/buffer-to-string';
export class MIDIReader {
    constructor(buffer) {
        if (buffer instanceof DataView) {
            this.bufferOffset = buffer.byteOffset;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer.buffer;
            this.dataView = buffer;
        }
        else if (buffer instanceof Buffer) {
            this.bufferOffset = buffer.byteOffset;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer.buffer;
            this.dataView = new DataView(this.buffer, this.bufferOffset, this.bufferLength);
        }
        else {
            this.bufferOffset = 0;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer;
            this.dataView = new DataView(this.buffer, this.bufferOffset, this.bufferLength);
        }
        const fileHeaderChunk = this.readString(0, 4);
        if (fileHeaderChunk !== 'MThd') {
            throw new MIDIParseError('File does not start with a header chunk');
        }
        const [trackStartOffset, header] = this.readFileHeader(4);
        this.trackStartOffset = trackStartOffset + 4;
        this.header = header;
    }
    readUint32(startIndex) {
        return this.dataView.getUint32(startIndex);
    }
    readUint16(startIndex) {
        return this.dataView.getUint16(startIndex);
    }
    readString(startIndex, length) {
        return bufferToString(this.buffer, this.bufferOffset + startIndex, length);
    }
    readVariableLength(startIndex) {
        return fromVariableLengthValue(this.buffer, this.bufferOffset + startIndex);
    }
    readMIDIEvent(startIndex, trackNumber, previousStatusByte) {
        const [bytesRead, deltaTime] = this.readVariableLength(startIndex);
        let index = startIndex + bytesRead;
        const eventOrNull = eventFromBytes(this.dataView, index, previousStatusByte);
        if (eventOrNull === null) {
            const statusByte = this.dataView.getUint8(index);
            throw new MIDIParseError(`Unknown MIDI event status 0x${statusByte.toString(16).toUpperCase()}`);
        }
        const { bytesRead: eventBytesRead, event, statusByte } = eventOrNull;
        return {
            bytesRead: index + eventBytesRead - startIndex,
            eventData: {
                trackNumber,
                deltaTime,
                event,
            },
            statusByte,
        };
    }
    readFileHeader(startIndex) {
        const length = this.dataView.getUint32(startIndex);
        // Add 4 bytes for the length field
        let index = startIndex + 4;
        const fileTypeNumber = this.dataView.getUint16(index);
        index += 2;
        let fileType;
        if (fileTypeNumber === 0) {
            fileType = MIDIFileType.Format0;
        }
        else if (fileTypeNumber === 1) {
            fileType = MIDIFileType.Format1;
        }
        else if (fileTypeNumber === 2) {
            fileType = MIDIFileType.Format2;
        }
        else {
            throw new MIDIParseError(`Unknown MIDI file type: ${fileTypeNumber}`);
        }
        const trackCount = this.dataView.getUint16(index);
        index += 2;
        const divisionNum = this.dataView.getUint16(index);
        index += 2;
        let division;
        // high bit set = SMPTE
        if (divisionNum >> 15 === 1) {
            const deltaTimePerFrame = divisionNum & 0xF;
            const negativeFramesPerSecond = (divisionNum >> 8) & 0x7f;
            division = {
                deltaTimePerFrame,
                negativeFramesPerSecond,
            };
        }
        else {
            division = {
                ticks: divisionNum & 0x7FFF,
            };
        }
        return [
            // Add 4 for the length header
            4 + length,
            {
                fileType,
                trackCount,
                division,
            }
        ];
    }
    *readTracks({ eventTypes = 8388607 /* MIDIEventType.All */, } = {}) {
        let index = this.trackStartOffset;
        let inHeader = false;
        let inTrack = false;
        let trackNumber = 0;
        let currentTrackEndIndex = null;
        let previousStatusByte;
        while (index < this.bufferLength) {
            if (currentTrackEndIndex === null) {
                const chunkType = this.readString(index, 4);
                index += 4;
                if (chunkType !== 'MTrk') {
                    throw new MIDIParseError('No track header found at start of track');
                }
                const length = this.readUint32(index);
                index += 4;
                currentTrackEndIndex = index + length;
                trackNumber = trackNumber + 1;
            }
            else {
                const { bytesRead, eventData, statusByte } = this.readMIDIEvent(index, trackNumber, previousStatusByte);
                index += bytesRead;
                previousStatusByte = statusByte;
                if (index === currentTrackEndIndex) {
                    currentTrackEndIndex = null;
                }
                if (eventData.event && (eventData.event.type & eventTypes)) {
                    yield eventData;
                }
            }
        }
    }
}
