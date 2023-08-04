"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MIDIParseError = void 0;
class MIDIParseError extends Error {
    constructor(message) {
        super(`Invalid MIDI file: ${message}`);
    }
}
exports.MIDIParseError = MIDIParseError;
