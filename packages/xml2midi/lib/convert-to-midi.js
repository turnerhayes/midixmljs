#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const jsdom_1 = require("jsdom");
const commander_1 = require("commander");
const XMLToMIDI_1 = require("./XMLToMIDI");
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
let filePathArg;
commander_1.program.option("-o, --out [output path]", `Path to file where the resulting MIDI file should be written
  If the path is omitted, it will write to the same filename, but with the extension replaced by ".midi" and in the current working directory.
  If this option is omitted entirely, it will write the MIDI file to stdout.`).arguments("<filename>").action(function (filename) {
    filePathArg = filename;
}).parse(process.argv);
if (!filePathArg) {
    commander_1.program.outputHelp();
    process.exit(0);
}
const filePath = (0, path_1.resolve)(process.cwd(), filePathArg);
let outPath = commander_1.program['out'];
if (outPath === true) {
    outPath = `${(0, path_1.basename)(filePath).replace(/\.[^.]+$/, "")}.midi`;
}
if (typeof outPath === "string") {
    outPath = (0, path_1.resolve)(process.cwd(), outPath);
}
new Promise((resolve, reject) => (0, fs_1.readFile)(filePath, {
    encoding: "utf8",
}, (err, text) => {
    if (err) {
        return reject(err);
    }
    return resolve(text);
})).then((text) => {
    global.window = new jsdom_1.JSDOM().window;
    return (0, XMLToMIDI_1.getMIDI)(text);
}).then((file) => __awaiter(void 0, void 0, void 0, function* () {
    if (outPath && typeof outPath === "string") {
        return new Promise((resolve, reject) => (0, fs_1.writeFile)(outPath, Buffer.from(file), (err) => {
            if (err) {
                return reject(err);
            }
            return resolve();
        }));
    }
    else {
        const writePromise = new Promise((resolve, reject) => {
            process.stdout.once("error", reject);
            process.stdout.once("drain", resolve);
        });
        process.stdout.write(Buffer.from(file));
        return writePromise;
    }
})).then(() => process.exit(0)).catch((err) => {
    console.error(err);
    process.exit(1);
});
