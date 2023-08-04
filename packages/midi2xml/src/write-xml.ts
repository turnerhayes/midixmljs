
// const MIDI = require("midi");
import * as path from "path";
import * as fs from "fs";
import { TextDecoder } from "text-encoding";

import { getXML } from "./MIDIToXML";

(global as any).TextDecoder = TextDecoder;


const samplePath: string = path.resolve(__dirname, "..", "..", "sample-midi", "Aha - Take On Me.mid");
// const samplePath:string = path.resolve(__dirname, "..", "..", "sample-midi", "Asia - Heat Of The Moment.mid");
// const samplePath:string = resolve(__dirname, "..", "..", "sample-midi", "house_of_the_rising_sun.mid");

// fs.writeFileSync(
//   path.resolve(__dirname, "take-on-me--parsed.json"),
//   JSON.stringify(midi, null, "  ")
// );


function writeXML(xml) {
  return new Promise<void>(
    (resolve, reject) => fs.writeFile(
      path.resolve(__dirname, "main.xml"),
      xml,
      (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      }
    )
  );
}

writeXML(getXML(fs.readFileSync(samplePath).buffer)).then(
  () => console.log("wrote main.xml")
).catch(
  (err) => console.error("ERROR:", err)
);
