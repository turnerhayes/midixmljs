const fs = require('fs');
const path = require('path');
const MIDIParser = require('./node_modules/midi-parser-js/src/midi-parser');

const file = fs.readFileSync(path.join(__dirname, 'sample-midi', 'Aha - Take On Me.mid'));
// const file = fs.readFileSync(path.join(__dirname, 'sample-midi', 'house_of_the_rising_sun.mid'));

const input = new Uint8Array(file.buffer, file.byteOffset, file.byteLength);

const res = MIDIParser.parse(input);

const typeStrings = {
  [0x8]: 'Note Off',
  [0x9]: 'Note On',
  [0xA]: 'Polyphonic Aftertouch',
  [0xB]: 'Controller Change',
  [0xC]: 'Program Change',
  [0xD]: 'Channel Aftertouch',
  [0xE]: 'Pitch Wheel Change',
  [0xF0]: 'Sysex Event',
  [0xFF]: 'Meta Event',
};

const metaTypeStrings = {
  [0x00]: 'Sequence Number',
  [0x01]: 'Text Event',
  [0x02]: 'Copyright Notice',
  [0x03]: 'Sequence/Track Name',
  [0x04]: 'Instrument Name',
  [0x05]: 'Lyric',
  [0x06]: 'Marker',
  [0x07]: 'Cue Point',
  [0X20]: 'MIDI Channel Prefix',
  [0X2F]: 'End of Track',
  [0X51]: 'Set Tempo',
  [0x54]: 'SMTPE Offset',
  [0x58]: 'Time Signature',
  [0x59]: 'Key Signature',
  [0x7F]:	'Sequencer-Specific Meta-event',
};

res.track.forEach(
  (track, trackIndex) => {
    track.event.forEach(
      (event, eventIndex) => {
        if (typeStrings[event.type]) {
          res.track[trackIndex].event[eventIndex].typeName = `${typeStrings[event.type]}`;
        }
        
        if ('metaType' in event) {
          res.track[trackIndex].event[eventIndex].metaTypeName = `${metaTypeStrings[event.metaType]}`;
        }

        res.track[trackIndex].event[eventIndex].type = `0x${event.type.toString(16)}`;
        if ('metaType' in event) {
          res.track[trackIndex].event[eventIndex].metaType = `0x${event.metaType.toString(16)}`;
        }
      }
    );
  }
);

console.log(
  JSON.stringify(
    res,
    null,
    '  '
  )
);

