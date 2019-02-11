import { IMIDIMetaEvent } from "./IMIDIEvent";
import { Meta as Events } from "./MIDIEvents";
import { bufferToString } from '../utils/buffer-to-string';
import { fromVariableLengthValue } from '../utils/variable-length-value';

const readStringMetaEvent = (
  dataView:DataView,
  startIndex:number
): [number, string] => {
  let index = startIndex;

  const [bytesRead, stringLength] = fromVariableLengthValue(
    dataView.buffer,
    dataView.byteOffset + index
  );

  index += bytesRead;

  const str = bufferToString(dataView.buffer, dataView.byteOffset + index, stringLength);

  index = index + stringLength;

  return [
    bytesRead + stringLength,
    str
  ];
}

export const createMetaEventFromBytes = (
  statusByte:number,
  dataView:DataView,
  startIndex:number = 0,
):[number, IMIDIMetaEvent] => {
  let index = startIndex;

  const metaEventTypeNum = dataView.getUint8(index);
  index += 1;

  let event;

  if (metaEventTypeNum === 0x00) {
    // Next byte is 0x02--skip it
    index += 1;
    const sequenceNumber = dataView.getUint16(index);
    index += 2;

    event = new Events.SequenceNumberEvent({
      sequenceNumber,
    });
  }
  else if (metaEventTypeNum === 0x01) {
    const [bytesRead, text] = readStringMetaEvent(
      dataView,
      index
    );

    index += bytesRead;

    event = new Events.TextEvent({
      text,
    });
  }
  else if (metaEventTypeNum === 0x02) {
    const [bytesRead, copyright] = readStringMetaEvent(
      dataView,
      index
    );

    index += bytesRead;

    event = new Events.CopyrightEvent({
      copyright,
    });
  }
  else if (metaEventTypeNum === 0x03) {
    const [bytesRead, name] = readStringMetaEvent(
      dataView,
      index
    );

    index += bytesRead;

    event = new Events.TrackNameEvent({
      name,
    });
  }
  else if (metaEventTypeNum === 0x04) {
    const [bytesRead, name] = readStringMetaEvent(
      dataView,
      index
    );

    index += bytesRead;

    event = new Events.InstrumentNameEvent({
      name,
    });
  }
  else if (metaEventTypeNum === 0x05) {
    const [bytesRead, lyric] = readStringMetaEvent(
      dataView,
      index
    );

    index += bytesRead;

    event = new Events.LyricEvent({
      lyric,
    });
  }
  else if (metaEventTypeNum === 0x06) {
    const [bytesRead, marker] = readStringMetaEvent(
      dataView,
      index
    );

    index += bytesRead;

    event = new Events.MarkerEvent({
      marker,
    });
  }
  else if (metaEventTypeNum === 0x07) {
    const [bytesRead, cueText] = readStringMetaEvent(
      dataView,
      index
    );

    index += bytesRead;

    event = new Events.CuePointEvent({
      cueText,
    });
  }
  else if (metaEventTypeNum === 0x20) {
    // Skip next byte since it is a constant
    index += 1;
    const channelNumber = dataView.getUint8(index);
    index += 1;

    event = new Events.ChannelPrefixEvent({
      channelNumber,
    });
  }
  else if (metaEventTypeNum === 0x21) {
    // Skip next byte since it is a constant
    index += 1;
    const portNumber = dataView.getUint8(index);
    index += 1;

    event = new Events.PortPrefixEvent({
      portNumber,
    });
  }
  else if (metaEventTypeNum === 0x2F) {
    // End of track event
    index += 1;
  }
  else if (metaEventTypeNum === 0x51) {
    // Next byte is 0x03--skip it
    index += 1;
    const microsecondsPerQuarterNote = dataView.getUint16(index) << 8 + dataView.getUint8(index + 2);
    index += 3;

    event = new Events.SetTempoEvent({
      microsecondsPerQuarterNote,
    });
  }
  else if (metaEventTypeNum === 0x54) {
    // Skip next byte because it's a constant
    index += 1;
    const hours = dataView.getUint8(index);
    index += 1;
    const minutes = dataView.getUint8(index);
    index += 1;
    const seconds = dataView.getUint8(index);
    index += 1;
    const frames = dataView.getUint8(index);
    index += 1;
    const fractionalFrames = dataView.getUint8(index);
    index += 1;

    event = new Events.SMPTEOffsetEvent({
      hours,
      minutes,
      seconds,
      frames,
      fractionalFrames,
    });
  }
  else if (metaEventTypeNum === 0x58) {
    // Next byte is 0x04--skip it
    index += 1;
    const numerator = dataView.getUint8(index);
    index += 1;
    const denominator = Math.pow(2, dataView.getUint8(index));
    index += 1;
    const clocksPerTick = dataView.getUint8(index);
    index += 1;
    const thirtySecondNotes = dataView.getUint8(index);
    index += 1;

    event = new Events.TimeSignatureEvent({
      numerator,
      denominator,
      clocksPerTick,
      thirtySecondNotes,
    });
  }
  else if (metaEventTypeNum === 0x59) {
    // Next byte is 0x02--skip it
    index += 1;
    const sharps = dataView.getInt8(index);
    index += 1;
    const isMajor = dataView.getUint8(index) === 0;
    index += 1;

    event = new Events.KeySignatureEvent({
      sharps,
      isMajor,
    });
  }
  else if (metaEventTypeNum === 0x7F) {
    const [bytesRead, length] = fromVariableLengthValue(
      dataView.buffer,
      dataView.byteOffset + index
    );

    index += bytesRead;

    let data = new Uint8Array(
      dataView.buffer,
      dataView.byteOffset + index,
      length
    );

    let id = data.slice(0, 1);
    
    if (id[0] === 0) {
      id = data.slice(0, 3);
      data = data.slice(3);
    }
    else {
      data = data.slice(1);
    }
    
    event = new Events.SequencerSpecificEvent({
      id,
      data,
    });
  }
  else {
    throw new Error(`Unknown MIDI meta event type 0x${metaEventTypeNum.toString(16)}`);
  }

  return [
    index - startIndex,
    event,
  ];
}
