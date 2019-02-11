import { MIDIFileType } from './MIDIFileType';
import { IMIDIFileHeader } from './IMIDIFileHeader';
import { MIDIParseError } from './MIDIParseError';
import { ITicksPerQuarterNote, ISMPTE } from './MIDIDivision';
import { IMIDIEvent } from './IMIDIEvent';
import { eventFromBytes } from './MIDIEventCreator';
import { MIDIEventType } from './MIDIEventType';
import { fromVariableLengthValue } from '../utils/variable-length-value';
import { bufferToString } from '../utils/buffer-to-string';

interface IReadEventResult {
  bytesRead: number;
  eventData: {
    trackNumber: number,
    deltaTime: number,
    event: IMIDIEvent,
  };
  statusByte: number;
}

export class MIDIReader {
  private readonly buffer:ArrayBufferLike

  private readonly bufferOffset:number;

  private readonly bufferLength:number;

  private readonly dataView:DataView;

  private readonly trackStartOffset:number;

  public readonly header:IMIDIFileHeader;

  constructor(
    buffer: ArrayBufferLike|Buffer
  ) {
    if (buffer instanceof Buffer) {
      this.bufferOffset = buffer.byteOffset;
      this.bufferLength = buffer.byteLength;
      this.buffer = buffer.buffer;
    }
    else {
      this.bufferOffset = 0;
      this.bufferLength = buffer.byteLength;
      this.buffer = buffer;
    }

    this.dataView = new DataView(this.buffer, this.bufferOffset, this.bufferLength);

    const fileHeaderChunk = this.readString(0, 4);

    if (fileHeaderChunk !== 'MThd') {
      throw new MIDIParseError('File does not start with a header chunk');
    }

    const [trackStartOffset, header] = this.readFileHeader(4);

    this.trackStartOffset = trackStartOffset + 4;
    this.header = header;
  }

  private readUint32(startIndex:number): number {
    return this.dataView.getUint32(startIndex);
  }

  private readUint16(startIndex:number): number {
    return this.dataView.getUint16(startIndex);
  }

  private readString(startIndex:number, length:number): string {
    return bufferToString(this.buffer, this.bufferOffset + startIndex, length);
  }

  private readVariableLength(startIndex:number): [number, number] {
    return fromVariableLengthValue(this.buffer, this.bufferOffset + startIndex);
  }

  private readMIDIEvent(
    startIndex:number,
    trackNumber:number,
    previousStatusByte?:number,
  ): IReadEventResult {
    const [bytesRead, deltaTime] = this.readVariableLength(startIndex);
    let index = startIndex + bytesRead;

    const eventOrNull = eventFromBytes(this.dataView, index, previousStatusByte);

    if (eventOrNull === null) {
      const statusByte = this.dataView.getUint8(index);
      throw new MIDIParseError(
        `Unknown MIDI event status 0x${statusByte.toString(16).toUpperCase()}`
      );
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

  private readFileHeader(startIndex:number): [number, IMIDIFileHeader] {
    const length = this.dataView.getUint32(startIndex);
    
    // Add 4 bytes for the length field
    let index = startIndex + 4;

    const fileTypeNumber = this.dataView.getUint16(index);
    index += 2;

    let fileType: MIDIFileType;

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

    let division: ITicksPerQuarterNote|ISMPTE;

    // high bit set = SMPTE
    if (divisionNum >> 15 === 1) {
      const deltaTimePerFrame = divisionNum & 0xF;
      const negativeFramesPerSecond = (divisionNum >> 8) & 0x7f
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

  public * readTracks(
    {
      eventTypes = MIDIEventType.All,
    }:
    {
      eventTypes?:MIDIEventType,
    } = {}
  ) {
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
        const { bytesRead, eventData, statusByte } = this.readMIDIEvent(
          index,
          trackNumber,
          previousStatusByte
        );
        
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
