import * as path from 'path';
import * as fs from 'fs';

import { convertMIDI } from './src/convert-midi';

const samplePath:string = path.resolve(__dirname, "Tim Minchin - Rock N Roll Nerd.musescore.midi");
// const samplePath:string = path.resolve(__dirname, "Tim Minchin - Rock N Roll Nerd.midi");
// const samplePath:string = path.resolve(__dirname, "..", "..", "sample-midi", "Aha - Take On Me.mid");
// const samplePath:string = path.resolve(__dirname, "..", "..", "sample-midi", "house_of_the_rising_sun.mid");

(async () => {
  const xml:string = await convertMIDI({ midiFile: samplePath });
  
  console.log(xml);
})().catch(
  (err) => {
    console.error(err);
    process.exit(1);
  }
)
