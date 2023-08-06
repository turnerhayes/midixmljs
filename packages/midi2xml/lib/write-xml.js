"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const MIDI = require("midi");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const text_encoding_1 = require("text-encoding");
const MIDIToXML_1 = require("./MIDIToXML");
global.TextDecoder = text_encoding_1.TextDecoder;
const samplePath = path.resolve(__dirname, "..", "..", "sample-midi", "Aha - Take On Me.mid");
// const samplePath:string = path.resolve(__dirname, "..", "..", "sample-midi", "Asia - Heat Of The Moment.mid");
// const samplePath:string = resolve(__dirname, "..", "..", "sample-midi", "house_of_the_rising_sun.mid");
// fs.writeFileSync(
//   path.resolve(__dirname, "take-on-me--parsed.json"),
//   JSON.stringify(midi, null, "  ")
// );
function writeXML(xml) {
    return new Promise((resolve, reject) => fs.writeFile(path.resolve(__dirname, "main.xml"), xml, (err) => {
        if (err) {
            reject(err);
            return;
        }
        resolve();
    }));
}
writeXML((0, MIDIToXML_1.getXML)(fs.readFileSync(samplePath).buffer)).then(() => console.log("wrote main.xml")).catch((err) => console.error("ERROR:", err));
