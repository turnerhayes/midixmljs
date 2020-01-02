"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path = __importStar(require("path"));
var fs_1 = require("fs");
var midi_reader_1 = require("./midi-reader");
var samplePath = path.resolve(__dirname, "..", "..", "Tim Minchin - Rock N Roll Nerd.midi");
// const samplePath:string = path.resolve(__dirname, "..", "..", "..", "sample-midi", "Aha - Take On Me.mid");
var buffer = fs_1.readFileSync(samplePath);
var reader = new midi_reader_1.MIDIReader(buffer);
// console.log(gen);
console.log('header:', reader.header);
var gen = reader.readTracks({
    eventTypes: 127 /* ChannelEvents */,
});
var iterItem = gen.next();
while (!iterItem.done) {
    console.log(iterItem);
    iterItem = gen.next();
}
//# sourceMappingURL=midi-reader-test.js.map