import { MIDIFile, Track, MIDIMessageStatus, MIDIMessageSubtype } from './MFile';
import { MIDIEventType } from '../index';
import { NoteNameToNumber, stringToCharCodeArray } from '../utils';

// 4 for the "MTrk" string + 4 for one (32-bit) integer for track length
const TRACK_HEADER_LENGTH = 8;

describe('MIDIFile (new)', () => {
  describe('Track', () => {
    it('should return an iterator of events', () => {
      const track = new Track();
      track.add({
        type: MIDIEventType.NoteOn,
      }).add({
        type: MIDIEventType.NoteOff,
      }, 20);

      const events = [...track];

      expect(events).toEqual([
        [0, {
          type: MIDIEventType.NoteOn,
        }],
        [20, {
          type: MIDIEventType.NoteOff,
        }],
      ]);
    });
  });

  fdescribe('toArrayBuffer', () => {
    fit('should encode a SetTempo event', () => {
      const file = new MIDIFile({
        divisions: 4,
      }).tempo({
        microsecondsPerQuarterNote: 1000000,
      });

      const buffer = file.toArrayBuffer();

      expect(buffer.slice(14 + TRACK_HEADER_LENGTH))
        .toEqual(Uint8Array.of(
          MIDIMessageStatus.Meta,
          MIDIMessageSubtype.SetTempo,
          3,
          0,
          0,
          60,
        ));
    })
    it('should return an ArrayBuffer', () => {
      const title = 'Test Song';
      const file = new MIDIFile({
        divisions: 4,
      }).trackName({ name: title, track: 0, }).note({
        note: NoteNameToNumber('F#4'),
        duration: 1,
        offset: 0,
        track: 0,
      });

      const buffer = file.toArrayBuffer();

      const expectedHeader = Uint8Array.from([
        77, 84, 104, 100, 0, 0, 0, 6, 0, 0, 0, 1, 0, 4,
      ]);
      const expectedTitle = Uint8Array.of(
        MIDIMessageStatus.Meta,
        MIDIMessageSubtype.TrackName,
        title.length + 1, // +1 for null byte at end
        ...stringToCharCodeArray(title + '\0')
      );

      expect(buffer.slice(0, expectedHeader.byteLength))
        .toEqual(expectedHeader);

      expect(buffer.slice(
        expectedHeader.byteLength + TRACK_HEADER_LENGTH,
        expectedHeader.byteLength + TRACK_HEADER_LENGTH + expectedTitle.byteLength
      )).toEqual(expectedTitle);
    });
  });
});
