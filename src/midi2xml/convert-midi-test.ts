import * as path from 'path';
import * as fs from 'fs';

import { convertMIDI } from './convert-midi';

const samplePath:string = path.resolve(__dirname, "Tim Minchin - Rock N Roll Nerd.generated.midi");
// const samplePath:string = path.resolve(__dirname, "..", "..", "sample-midi", "Aha - Take On Me.mid");

(async () => {
  const xml:string = await convertMIDI({ midiFile: samplePath });
  
  console.log(xml);
})().catch(
  (err) => {
    console.error(err);
    process.exit(1);
  }
)
