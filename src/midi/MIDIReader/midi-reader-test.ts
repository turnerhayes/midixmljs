import * as path from 'path';
import { readFileSync } from 'fs';

import { MIDIReader } from './midi-reader';
import { IMIDIFileHeader } from './IMIDIFileHeader';
import { MIDIEventType } from './MIDIEventType';


const samplePath:string = path.resolve(__dirname, "..", "..", "..", "sample-midi", "house_of_the_rising_sun.mid");
// const samplePath:string = path.resolve(__dirname, "..", "..", "..", "sample-midi", "Aha - Take On Me.mid");

const buffer:Buffer = readFileSync(samplePath);

const reader = new MIDIReader(buffer);

// console.log(gen);
console.log('header:', reader.header);

const gen = reader.readTracks({
  eventTypes: MIDIEventType.ChannelEvents,
});
let iterItem = gen.next();

while(!iterItem.done) {
  console.log(iterItem);
  iterItem = gen.next();
}
