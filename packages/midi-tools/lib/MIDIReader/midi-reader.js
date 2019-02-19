"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var MIDIFileType_1 = require("./MIDIFileType");
var MIDIParseError_1 = require("./MIDIParseError");
var MIDIEventCreator_1 = require("./MIDIEventCreator");
var variable_length_value_1 = require("../utils/variable-length-value");
var buffer_to_string_1 = require("../utils/buffer-to-string");
var MIDIReader = /** @class */ (function () {
    function MIDIReader(buffer) {
        if (buffer instanceof DataView) {
            this.bufferOffset = buffer.byteOffset;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer.buffer;
            this.dataView = buffer;
        }
        else {
            this.bufferOffset = 0;
            this.bufferLength = buffer.byteLength;
            this.buffer = buffer;
            this.dataView = new DataView(this.buffer, this.bufferOffset, this.bufferLength);
        }
        var fileHeaderChunk = this.readString(0, 4);
        if (fileHeaderChunk !== 'MThd') {
            throw new MIDIParseError_1.MIDIParseError('File does not start with a header chunk');
        }
        var _a = this.readFileHeader(4), trackStartOffset = _a[0], header = _a[1];
        this.trackStartOffset = trackStartOffset + 4;
        this.header = header;
    }
    MIDIReader.prototype.readUint32 = function (startIndex) {
        return this.dataView.getUint32(startIndex);
    };
    MIDIReader.prototype.readUint16 = function (startIndex) {
        return this.dataView.getUint16(startIndex);
    };
    MIDIReader.prototype.readString = function (startIndex, length) {
        return buffer_to_string_1.bufferToString(this.buffer, this.bufferOffset + startIndex, length);
    };
    MIDIReader.prototype.readVariableLength = function (startIndex) {
        return variable_length_value_1.fromVariableLengthValue(this.buffer, this.bufferOffset + startIndex);
    };
    MIDIReader.prototype.readMIDIEvent = function (startIndex, trackNumber, previousStatusByte) {
        var _a = this.readVariableLength(startIndex), bytesRead = _a[0], deltaTime = _a[1];
        var index = startIndex + bytesRead;
        var eventOrNull = MIDIEventCreator_1.eventFromBytes(this.dataView, index, previousStatusByte);
        if (eventOrNull === null) {
            var statusByte_1 = this.dataView.getUint8(index);
            throw new MIDIParseError_1.MIDIParseError("Unknown MIDI event status 0x" + statusByte_1.toString(16).toUpperCase());
        }
        var eventBytesRead = eventOrNull.bytesRead, event = eventOrNull.event, statusByte = eventOrNull.statusByte;
        return {
            bytesRead: index + eventBytesRead - startIndex,
            eventData: {
                trackNumber: trackNumber,
                deltaTime: deltaTime,
                event: event,
            },
            statusByte: statusByte,
        };
    };
    MIDIReader.prototype.readFileHeader = function (startIndex) {
        var length = this.dataView.getUint32(startIndex);
        // Add 4 bytes for the length field
        var index = startIndex + 4;
        var fileTypeNumber = this.dataView.getUint16(index);
        index += 2;
        var fileType;
        if (fileTypeNumber === 0) {
            fileType = MIDIFileType_1.MIDIFileType.Format0;
        }
        else if (fileTypeNumber === 1) {
            fileType = MIDIFileType_1.MIDIFileType.Format1;
        }
        else if (fileTypeNumber === 2) {
            fileType = MIDIFileType_1.MIDIFileType.Format2;
        }
        else {
            throw new MIDIParseError_1.MIDIParseError("Unknown MIDI file type: " + fileTypeNumber);
        }
        var trackCount = this.dataView.getUint16(index);
        index += 2;
        var divisionNum = this.dataView.getUint16(index);
        index += 2;
        var division;
        // high bit set = SMPTE
        if (divisionNum >> 15 === 1) {
            var deltaTimePerFrame = divisionNum & 0xF;
            var negativeFramesPerSecond = (divisionNum >> 8) & 0x7f;
            division = {
                deltaTimePerFrame: deltaTimePerFrame,
                negativeFramesPerSecond: negativeFramesPerSecond,
            };
        }
        else {
            division = {
                ticks: divisionNum & 0x7FFF,
            };
        }
        return [
            // Add 4 for the length header
            4 + length,
            {
                fileType: fileType,
                trackCount: trackCount,
                division: division,
            }
        ];
    };
    MIDIReader.prototype.readTracks = function (_a) {
        var index, inHeader, inTrack, trackNumber, currentTrackEndIndex, previousStatusByte, chunkType, length_1, _b, bytesRead, eventData, statusByte;
        var _c = (_a === void 0 ? {} : _a).eventTypes, eventTypes = _c === void 0 ? 8388607 /* All */ : _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    index = this.trackStartOffset;
                    inHeader = false;
                    inTrack = false;
                    trackNumber = 0;
                    currentTrackEndIndex = null;
                    _d.label = 1;
                case 1:
                    if (!(index < this.bufferLength)) return [3 /*break*/, 5];
                    if (!(currentTrackEndIndex === null)) return [3 /*break*/, 2];
                    chunkType = this.readString(index, 4);
                    index += 4;
                    if (chunkType !== 'MTrk') {
                        throw new MIDIParseError_1.MIDIParseError('No track header found at start of track');
                    }
                    length_1 = this.readUint32(index);
                    index += 4;
                    currentTrackEndIndex = index + length_1;
                    trackNumber = trackNumber + 1;
                    return [3 /*break*/, 4];
                case 2:
                    _b = this.readMIDIEvent(index, trackNumber, previousStatusByte), bytesRead = _b.bytesRead, eventData = _b.eventData, statusByte = _b.statusByte;
                    index += bytesRead;
                    previousStatusByte = statusByte;
                    if (index === currentTrackEndIndex) {
                        currentTrackEndIndex = null;
                    }
                    if (!(eventData.event && (eventData.event.type & eventTypes))) return [3 /*break*/, 4];
                    return [4 /*yield*/, eventData];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4: return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    };
    return MIDIReader;
}());
exports.MIDIReader = MIDIReader;
