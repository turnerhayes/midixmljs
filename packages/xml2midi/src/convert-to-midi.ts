#!/usr/bin/env node

import { readFile, writeFile } from "fs";
import { resolve, basename } from "path";
import { JSDOM } from "jsdom";
import { program as commander } from "commander";

import { getMIDI } from "./XMLToMIDI";


/*
const args = yargs.command(
  "$0", "Converts a MusicXML file to MIDI.", (yargs) => {
    return yargs.options({
      out: {
        alias: "o",
        description: "Path to file where the resulting MIDI file should be written (relative to current working directory)",
      },
    }).positional("file", {
      description: "Path to the MusicXML file to parse (relative to current working directory)",
      type: "string",
    }).demand(1);
  }
)
.usage("convert-to-midi <file>")
.help().argv;
*/

let filePathArg: string | undefined;

commander.option(
  "-o, --out [output path]",
  `Path to file where the resulting MIDI file should be written
  If the path is omitted, it will write to the same filename, 
  but with the extension replaced by ".midi" and in the current working
  directory. If this option is omitted entirely, it will write the MIDI
  file to stdout.`
).arguments(
  "<filename>"
).action(
  function (filename) {
    filePathArg = filename;
  }
).parse(process.argv);

if (!filePathArg) {
  commander.outputHelp();
  process.exit(0);
}

const filePath = resolve(process.cwd(), filePathArg);

let outPath: string | boolean = commander['out'] as string | boolean;

if (outPath === true) {
  outPath = `${basename(filePath).replace(/\.[^.]+$/, "")}.midi`;
}

if (typeof outPath === "string") {
  outPath = resolve(process.cwd(), outPath);
}

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
  async (file) => {
    if (outPath && typeof outPath === "string") {
      return new Promise<void>(
        (resolve, reject) => writeFile(
          outPath as string,
          Buffer.from(file),
          (err) => {
            if (err) {
              return reject(err);
            }

            return resolve();
          }
        )
      );
    }
    else {
      const writePromise = new Promise(
        (resolve, reject) => {
          process.stdout.once("error", reject);

          process.stdout.once("drain", resolve);
        }
      );

      process.stdout.write(Buffer.from(file));

      return writePromise;
    }
  },
).then(
  () => process.exit(0),
).catch(
  (err) => {
    console.error(err);

    process.exit(1);
  }
);
