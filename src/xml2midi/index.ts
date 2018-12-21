import { readFile, writeFile } from "fs";
import { resolve, basename } from "path";
import { JSDOM } from "jsdom";

import getMIDI from "./XMLToMIDI";

// const filePath = resolve(__dirname, "musicxml", "Tim Minchin - Not Perfect.musicxml");
// const filePath = resolve(__dirname, "musicxml", "Tim Minchin - Rock N Roll Nerd.musicxml");
const filePath = resolve(__dirname, "musicxml", "Tim Minchin - You Grew on Me.musicxml");

new Promise(
  (resolve, reject) => readFile(
    filePath,
    {
      encoding: "utf8",
    },
    (err, text) => {
      if (err) {
        return reject(err);
      }

      return resolve(text);
    }
  )
).then(
  (text: string) => {
    (global as any).window = new JSDOM().window;

    return getMIDI(text);
  }
).then(
  (file) => new Promise(
    (resolve, reject) => writeFile(
      `./${basename(filePath).replace(/\.[^.]+$/, "")}.midi`,
      Buffer.from(file),
      (err) => {
        if (err) {
          return reject(err);
        }

        return resolve();
      }
    )
  ),
).catch(
  (err) => console.error(err),
);
