(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["XML2MIDI"] = factory();
	else
		root["XML2MIDI"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@thayes/midi-tools/build/midi-tools.js":
/*!*************************************************************!*\
  !*** ./node_modules/@thayes/midi-tools/build/midi-tools.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./MIDIWriter/MIDIFile.ts":
/*!********************************!*\
  !*** ./MIDIWriter/MIDIFile.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./utils/index.ts");
var debug = debug_1.default("xml2midi:MIDIFile");
var stringToCharCodeArray = function (str) {
    return new Uint8Array(str.split("").map(function (chr) { return chr.charCodeAt(0); }));
};
var mthdString = stringToCharCodeArray("MThd");
var mtrkString = stringToCharCodeArray("MTrk");
var END_OF_TRACK_EVENT = new Uint8Array([0xFF, 0x2F, 0x00]);
var numberToBytes = function (num, minBytes) {
    var bytes = [];
    do {
        bytes.unshift(num & 0xFF);
        num = num >> 8;
    } while (num > 0 || bytes.length < minBytes);
    return new Uint8Array(bytes);
};
var getNoteOnEvent = function (note, channel, velocity) {
    return new Uint8Array([
        144 /* NoteOn */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
var getNoteOffEvent = function (note, channel, velocity) {
    return new Uint8Array([
        128 /* NoteOff */ + (channel - 1),
        // Unset top bit; value can only be 7 bits long
        note & 0x7F,
        velocity & 0x7F,
    ]);
};
var getProgramChangeEvent = function (_a) {
    var channel = _a.channel, program = _a.program;
    return new Uint8Array([
        192 /* ProgramChange */ + (channel - 1),
        program
    ]);
};
var getFileHeader = function (_a) {
    var divisions = _a.divisions, trackCount = _a.trackCount;
    var format = trackCount === 1 ?
        0 :
        1;
    // # of divisions per quarter note (15 bits only)
    var divisionsBytes = numberToBytes(divisions & 0x7FFF, 2);
    var trackCountBytes = numberToBytes(trackCount, 2);
    var totalLength = mthdString.byteLength +
        // 4 bytes for length field  
        4 +
        // 2 bytes for format field
        2 +
        trackCountBytes.byteLength +
        divisionsBytes.byteLength;
    var header = new Uint8Array(totalLength);
    var index = 0;
    header.set(mthdString, index);
    index += mthdString.byteLength;
    // Length field, MSB first
    header.set(Uint8Array.of(0, 0, 0, 6), index);
    index += 4;
    header.set(Uint8Array.of(0, format), index);
    index += 2;
    header.set(trackCountBytes, index);
    index += trackCountBytes.byteLength;
    header.set(divisionsBytes, index);
    index += divisionsBytes.byteLength;
    return header;
};
var getTrackHeader = function (_a) {
    var length = _a.length;
    // 4 for the MTrk header, 4 for the length buffer
    var buff = new ArrayBuffer(8);
    new Uint8Array(buff).set(mtrkString, 0);
    new DataView(buff).setUint32(4, length);
    return new Uint8Array(buff);
};
var MIDIFile = /** @class */ (function () {
    function MIDIFile(_a) {
        var divisions = _a.divisions;
        this.buffers = [];
        this.tracks = {};
        this.omniTrackEvents = [];
        this.divisions = divisions;
    }
    MIDIFile.prototype.programChange = function (_a) {
        var offset = _a.offset, program = _a.program, track = _a.track, _b = _a.channel, channel = _b === void 0 ? 1 : _b;
        var programChangeEvent = getProgramChangeEvent({ channel: channel, program: program });
        var bufferInfo = {
            event: programChangeEvent,
            eventType: 192 /* ProgramChange */,
            divisionOffset: offset,
        };
        if (track === undefined) {
            this.omniTrackEvents.push(bufferInfo);
        }
        else {
            if (!(track in this.tracks)) {
                this.tracks[track] = {
                    buffers: [],
                };
            }
            this.tracks[track].buffers.push(bufferInfo);
        }
    };
    MIDIFile.prototype.timeSignature = function (_a) {
        var numerator = _a.numerator, denominator = _a.denominator;
        var event = new Uint8Array([
            255 /* Meta */,
            88 /* TimeSignature */,
            4,
            numerator,
            Math.log2(denominator),
            // @todo: figure out how to actually deal with these parameters
            // robustly--I don't really understand them entirely
            // Number of metronome ticks per quarter note
            24,
            // Number of 1/32nd notes per MIDI quarter note
            8,
        ]);
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.keySignature = function (_a) {
        var keySignature = _a.keySignature, _b = _a.offset, offset = _b === void 0 ? 0 : _b;
        var event = new Uint8Array([
            255 /* Meta */,
            89 /* KeySignature */,
            2,
            keySignature.sharps,
            // major (0) vs. minor (1)
            // @todo: Actually find major/minor key from XML
            keySignature.mode === "minor" ? 1 : 0,
        ]);
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: offset,
        });
    };
    MIDIFile.prototype.setTitle = function (title) {
        // add 1 for null terminator byte
        var length = utils_1.toVariableLengthValue(title.length + 1);
        var chars = stringToCharCodeArray(title + "\0");
        var totalLength = 2 + // 1 byte each for status and subtype
            length.byteLength +
            chars.byteLength;
        var event = new Uint8Array(totalLength);
        var index = 0;
        event.set(Uint8Array.of(255 /* Meta */, 3 /* TrackName */), index);
        index += 2;
        event.set(length, index);
        index += length.byteLength;
        event.set(chars, index);
        index += chars.byteLength;
        this.buffers.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.note = function (_a) {
        var note = _a.note, duration = _a.duration, offset = _a.offset, track = _a.track, _b = _a.channel, channel = _b === void 0 ? 1 : _b, _c = _a.velocity, velocity = _c === void 0 ? 64 : _c, _d = _a.release, release = _d === void 0 ? velocity : _d, _e = _a.meta, meta = _e === void 0 ? {} : _e;
        var noteOnEvent = getNoteOnEvent(note, channel, velocity);
        var noteName = utils_1.NoteNumberToName(note);
        noteName = "" + noteName.step + (noteName.alter === 1 ?
            '#' :
            noteName.alter === -1 ?
                'b' :
                '') + noteName.octave;
        if (!(track in this.tracks)) {
            this.tracks[track] = {
                buffers: [],
            };
        }
        this.tracks[track].buffers.push({
            event: noteOnEvent,
            eventType: 144 /* NoteOn */,
            divisionOffset: offset,
            meta: __assign({ name: noteName }, meta),
        });
        debug('note on: ', {
            note: note,
            offset: offset,
            duration: duration,
            channel: channel,
            velocity: velocity,
            event: noteOnEvent,
        });
        var noteOffEvent = getNoteOffEvent(note, channel, release);
        var noteOffOffset = offset + duration;
        debug('note off: ', {
            note: note,
            offset: noteOffOffset,
            channel: channel,
            release: release,
            meta: __assign({ name: noteName }, meta),
        });
        this.tracks[track].buffers.push({
            event: noteOffEvent,
            eventType: 128 /* NoteOff */,
            divisionOffset: noteOffOffset,
        });
    };
    MIDIFile.prototype.setTempo = function (tempo) {
        var microsecondsPerQuarterNote = 6e7 / tempo;
        var tempoBytes = numberToBytes(microsecondsPerQuarterNote, 3);
        // 1 byte each for status type and meta type, and 1 for constant value 0x03 after meta type
        var totalLength = 3 +
            tempoBytes.byteLength;
        var event = new Uint8Array(totalLength);
        var index = 0;
        event.set(Uint8Array.of(255 /* Meta */, 81 /* SetTempo */, 3), index);
        index += 3;
        event.set(tempoBytes, index);
        index += tempoBytes.byteLength;
        this.omniTrackEvents.push({
            event: event,
            eventType: 255 /* Meta */,
            divisionOffset: 0,
        });
    };
    MIDIFile.prototype.sortBuffers = function () {
        var _this = this;
        return Object.keys(this.tracks).reduce(function (reduction, trackNumber) {
            // shallow clone to avoid adding omniTrackEvents to the actual tracks
            var trackBuffers = _this.tracks[trackNumber].buffers.slice();
            trackBuffers.unshift.apply(trackBuffers, _this.omniTrackEvents);
            reduction[trackNumber] = trackBuffers.sort(function (a, b) {
                var offsetDiff = a.divisionOffset - b.divisionOffset;
                if (offsetDiff === 0) {
                    if (a.eventType === b.eventType) {
                        return 0;
                    }
                    if (a.eventType === 192 /* ProgramChange */ ||
                        a.eventType === 255 /* Meta */) {
                        if (b.eventType === 192 /* ProgramChange */ ||
                            b.eventType === 255 /* Meta */) {
                            return 0;
                        }
                        return -1;
                    }
                    return 1;
                }
                return offsetDiff;
            });
            return reduction;
        }, {});
    };
    MIDIFile.prototype.toArrayBuffer = function () {
        var buffers = this.sortBuffers();
        var trackCount = Object.keys(this.tracks).length;
        var trackLengths = Object.keys(buffers).reduce(function (totals, trackNumber) {
            var prevDuration = 0;
            totals[trackNumber] = buffers[trackNumber].reduce(function (total, midiEventInfo) {
                total = total + midiEventInfo.event.length;
                var deltaTime = midiEventInfo.divisionOffset - prevDuration;
                var deltaTimeBuffer = utils_1.toVariableLengthValue(deltaTime);
                total += deltaTimeBuffer.length;
                midiEventInfo.deltaTimeBuffer = deltaTimeBuffer;
                prevDuration = midiEventInfo.divisionOffset;
                return total;
            }, 0);
            return totals;
        }, {});
        var headerChunk = getFileHeader({
            divisions: this.divisions,
            trackCount: trackCount,
        });
        var trackHeaders = Object.keys(buffers).reduce(function (headers, trackNumber) {
            headers[trackNumber] = getTrackHeader({
                length: trackLengths[trackNumber],
            });
            return headers;
        }, {});
        var totalLength = headerChunk.length;
        totalLength += Object.keys(trackHeaders).reduce(function (total, trackNumber) { return total + trackHeaders[trackNumber].length; }, 0);
        totalLength += Object.keys(buffers).reduce(function (total, trackNumber) { return total + trackLengths[trackNumber]; }, 0);
        totalLength += END_OF_TRACK_EVENT.length;
        var buff = new ArrayBuffer(totalLength);
        var arr = new Uint8Array(buff);
        var offset = 0;
        arr.set(headerChunk, offset);
        offset += headerChunk.length;
        Object.keys(buffers).forEach(function (trackNumber) {
            arr.set(trackHeaders[trackNumber], offset);
            offset += trackHeaders[trackNumber].length;
            buffers[trackNumber].forEach(function (midiEventInfo) {
                var deltaTimeBuffer = midiEventInfo.deltaTimeBuffer;
                arr.set(deltaTimeBuffer, offset);
                offset += deltaTimeBuffer.length;
                arr.set(midiEventInfo.event, offset);
                offset += midiEventInfo.event.length;
            });
        });
        arr.set(END_OF_TRACK_EVENT, offset);
        offset += END_OF_TRACK_EVENT.length;
        return buff;
    };
    return MIDIFile;
}());
exports.MIDIFile = MIDIFile;


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var MIDIFile_1 = __webpack_require__(/*! ./MIDIWriter/MIDIFile */ "./MIDIWriter/MIDIFile.ts");
exports.MIDIFile = MIDIFile_1.MIDIFile;
__export(__webpack_require__(/*! ./utils */ "./utils/index.ts"));


/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./utils/buffer-to-string.ts":
/*!***********************************!*\
  !*** ./utils/buffer-to-string.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToString = function (buffer, startIndex, length) {
    var str = '';
    var dataView = new DataView(buffer, startIndex, length);
    for (var i = 0; i < length; i++) {
        str += String.fromCharCode(dataView.getUint8(i));
    }
    return str;
};


/***/ }),

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./buffer-to-string */ "./utils/buffer-to-string.ts"));
__export(__webpack_require__(/*! ./variable-length-value */ "./utils/variable-length-value.ts"));
__export(__webpack_require__(/*! ./midi-note-converter */ "./utils/midi-note-converter.ts"));


/***/ }),

/***/ "./utils/midi-note-converter.ts":
/*!**************************************!*\
  !*** ./utils/midi-note-converter.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function NoteNumberToName(note) {
    var step;
    var alter;
    // eslint-disable-next-line no-magic-numbers
    var octave = Math.floor(note / 12) - 1;
    /* eslint-disable no-fallthrough */
    /* eslint-disable no-magic-numbers */
    switch (note % 12) {
        case 1:
            alter = 1;
        case 0:
            step = "C";
            break;
        case 3:
            alter = 1;
        case 2:
            step = "D";
            break;
        case 4:
            step = "E";
            break;
        case 6:
            alter = 1;
        case 5:
            step = "F";
            break;
        case 8:
            alter = 1;
        case 7:
            step = "G";
            break;
        case 10:
            alter = 1;
        case 9:
            step = "A";
            break;
        case 11:
            step = "B";
            break;
    }
    /* eslint-enable no-magic-numbers */
    /* eslint-enable no-fallthrough */
    var noteObj = {
        step: step,
        octave: octave,
    };
    if (alter) {
        noteObj.alter = alter;
    }
    return noteObj;
}
exports.NoteNumberToName = NoteNumberToName;
var stepToNumber = {
    C: 0,
    D: 2,
    E: 4,
    F: 5,
    G: 7,
    A: 9,
    B: 11,
};
var steps = "ABCDEFG";
function NoteNameToNumber(noteName) {
    var step;
    var octave;
    var alter;
    if (typeof noteName === "string") {
        var matches = /^([A-G])([#b])?(-?\d+)$/.exec(noteName);
        if (!matches) {
            return null;
        }
        var alterString = matches[2];
        step = matches[1];
        octave = Number(matches[3]);
        if (alterString === "b") {
            alter = -1;
        }
        else if (alterString === "#") {
            alter = 1;
        }
    }
    else {
        step = noteName.step;
        alter = noteName.alter;
        octave = noteName.octave;
    }
    if (alter === -1) {
        alter = 1;
        var initialStepIndex = steps.indexOf(step);
        step = steps[(steps.indexOf(step) + steps.length - 1) % steps.length];
        // e.g. going from Ab4 -> G#3
        if (steps.indexOf(step) > initialStepIndex) {
            octave -= 1;
        }
    }
    var number = stepToNumber[step];
    if (alter === 1) {
        number += 1;
    }
    // eslint-disable-next-line no-magic-numbers
    return number + ((octave + 1) * 12);
}
exports.NoteNameToNumber = NoteNameToNumber;


/***/ }),

/***/ "./utils/variable-length-value.ts":
/*!****************************************!*\
  !*** ./utils/variable-length-value.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toVariableLengthValue(num) {
    var bytes = [];
    do {
        var byte = num & 0x7F;
        num = num >> 7;
        if (bytes.length > 0) {
            byte = byte + 0x80;
        }
        bytes.unshift(byte);
    } while (num > 0);
    return new Uint8Array(bytes);
}
exports.toVariableLengthValue = toVariableLengthValue;
;
function fromVariableLengthValue(buffer, startIndex) {
    if (startIndex === void 0) { startIndex = 0; }
    var uArray = new Uint8Array(buffer, startIndex);
    var value = 0;
    var index = -1;
    var bytesRead = 0;
    do {
        index += 1;
        value = (value << 7) + (uArray[index] & 0x7F);
        bytesRead += 1;
    } while (uArray[index] & 0x80);
    return [bytesRead, value];
}
exports.fromVariableLengthValue = fromVariableLengthValue;
;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NSURJVG9vbHMvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL01JRElUb29scy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9NSURJV3JpdGVyL01JRElGaWxlLnRzIiwid2VicGFjazovL01JRElUb29scy8uL2luZGV4LnRzIiwid2VicGFjazovL01JRElUb29scy8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9NSURJVG9vbHMvLi91dGlscy9idWZmZXItdG8tc3RyaW5nLnRzIiwid2VicGFjazovL01JRElUb29scy8uL3V0aWxzL2luZGV4LnRzIiwid2VicGFjazovL01JRElUb29scy8uL3V0aWxzL21pZGktbm90ZS1jb252ZXJ0ZXIudHMiLCJ3ZWJwYWNrOi8vTUlESVRvb2xzLy4vdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZhO0FBQ2I7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxjQUFjLG1CQUFPLENBQUMsa0RBQU87QUFDN0IsY0FBYyxtQkFBTyxDQUFDLGtDQUFVO0FBQ2hDO0FBQ0E7QUFDQSw0REFBNEQsMEJBQTBCLEVBQUU7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxxQ0FBcUM7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9TQUFvUztBQUNwUztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQkFBaUI7QUFDN0MsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0EsdUZBQXVGLGlEQUFpRCxFQUFFO0FBQzFJLGtGQUFrRiwwQ0FBMEMsRUFBRTtBQUM5SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM5VGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxpQkFBaUIsbUJBQU8sQ0FBQyx1REFBdUI7QUFDaEQ7QUFDQSxTQUFTLG1CQUFPLENBQUMsaUNBQVM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQU8sQ0FBQyxvREFBVTs7QUFFbkMsT0FBTyxXQUFXOztBQUVsQjtBQUNBO0FBQ0E7O0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx6QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDVGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxTQUFTLG1CQUFPLENBQUMsdURBQW9CO0FBQ3JDLFNBQVMsbUJBQU8sQ0FBQyxpRUFBeUI7QUFDMUMsU0FBUyxtQkFBTyxDQUFDLDZEQUF1Qjs7Ozs7Ozs7Ozs7OztBQ1AzQjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEdhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWlkaS10b29scy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1JRElUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNSURJVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGRlYnVnXzEgPSByZXF1aXJlKFwiZGVidWdcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBkZWJ1ZyA9IGRlYnVnXzEuZGVmYXVsdChcInhtbDJtaWRpOk1JRElGaWxlXCIpO1xudmFyIHN0cmluZ1RvQ2hhckNvZGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc3RyLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbiAoY2hyKSB7IHJldHVybiBjaHIuY2hhckNvZGVBdCgwKTsgfSkpO1xufTtcbnZhciBtdGhkU3RyaW5nID0gc3RyaW5nVG9DaGFyQ29kZUFycmF5KFwiTVRoZFwiKTtcbnZhciBtdHJrU3RyaW5nID0gc3RyaW5nVG9DaGFyQ29kZUFycmF5KFwiTVRya1wiKTtcbnZhciBFTkRfT0ZfVFJBQ0tfRVZFTlQgPSBuZXcgVWludDhBcnJheShbMHhGRiwgMHgyRiwgMHgwMF0pO1xudmFyIG51bWJlclRvQnl0ZXMgPSBmdW5jdGlvbiAobnVtLCBtaW5CeXRlcykge1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGRvIHtcbiAgICAgICAgYnl0ZXMudW5zaGlmdChudW0gJiAweEZGKTtcbiAgICAgICAgbnVtID0gbnVtID4+IDg7XG4gICAgfSB3aGlsZSAobnVtID4gMCB8fCBieXRlcy5sZW5ndGggPCBtaW5CeXRlcyk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcbn07XG52YXIgZ2V0Tm90ZU9uRXZlbnQgPSBmdW5jdGlvbiAobm90ZSwgY2hhbm5lbCwgdmVsb2NpdHkpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAxNDQgLyogTm90ZU9uICovICsgKGNoYW5uZWwgLSAxKSxcbiAgICAgICAgLy8gVW5zZXQgdG9wIGJpdDsgdmFsdWUgY2FuIG9ubHkgYmUgNyBiaXRzIGxvbmdcbiAgICAgICAgbm90ZSAmIDB4N0YsXG4gICAgICAgIHZlbG9jaXR5ICYgMHg3RixcbiAgICBdKTtcbn07XG52YXIgZ2V0Tm90ZU9mZkV2ZW50ID0gZnVuY3Rpb24gKG5vdGUsIGNoYW5uZWwsIHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMTI4IC8qIE5vdGVPZmYgKi8gKyAoY2hhbm5lbCAtIDEpLFxuICAgICAgICAvLyBVbnNldCB0b3AgYml0OyB2YWx1ZSBjYW4gb25seSBiZSA3IGJpdHMgbG9uZ1xuICAgICAgICBub3RlICYgMHg3RixcbiAgICAgICAgdmVsb2NpdHkgJiAweDdGLFxuICAgIF0pO1xufTtcbnZhciBnZXRQcm9ncmFtQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIHByb2dyYW0gPSBfYS5wcm9ncmFtO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDE5MiAvKiBQcm9ncmFtQ2hhbmdlICovICsgKGNoYW5uZWwgLSAxKSxcbiAgICAgICAgcHJvZ3JhbVxuICAgIF0pO1xufTtcbnZhciBnZXRGaWxlSGVhZGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGRpdmlzaW9ucyA9IF9hLmRpdmlzaW9ucywgdHJhY2tDb3VudCA9IF9hLnRyYWNrQ291bnQ7XG4gICAgdmFyIGZvcm1hdCA9IHRyYWNrQ291bnQgPT09IDEgP1xuICAgICAgICAwIDpcbiAgICAgICAgMTtcbiAgICAvLyAjIG9mIGRpdmlzaW9ucyBwZXIgcXVhcnRlciBub3RlICgxNSBiaXRzIG9ubHkpXG4gICAgdmFyIGRpdmlzaW9uc0J5dGVzID0gbnVtYmVyVG9CeXRlcyhkaXZpc2lvbnMgJiAweDdGRkYsIDIpO1xuICAgIHZhciB0cmFja0NvdW50Qnl0ZXMgPSBudW1iZXJUb0J5dGVzKHRyYWNrQ291bnQsIDIpO1xuICAgIHZhciB0b3RhbExlbmd0aCA9IG10aGRTdHJpbmcuYnl0ZUxlbmd0aCArXG4gICAgICAgIC8vIDQgYnl0ZXMgZm9yIGxlbmd0aCBmaWVsZCAgXG4gICAgICAgIDQgK1xuICAgICAgICAvLyAyIGJ5dGVzIGZvciBmb3JtYXQgZmllbGRcbiAgICAgICAgMiArXG4gICAgICAgIHRyYWNrQ291bnRCeXRlcy5ieXRlTGVuZ3RoICtcbiAgICAgICAgZGl2aXNpb25zQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICB2YXIgaGVhZGVyID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgaGVhZGVyLnNldChtdGhkU3RyaW5nLCBpbmRleCk7XG4gICAgaW5kZXggKz0gbXRoZFN0cmluZy5ieXRlTGVuZ3RoO1xuICAgIC8vIExlbmd0aCBmaWVsZCwgTVNCIGZpcnN0XG4gICAgaGVhZGVyLnNldChVaW50OEFycmF5Lm9mKDAsIDAsIDAsIDYpLCBpbmRleCk7XG4gICAgaW5kZXggKz0gNDtcbiAgICBoZWFkZXIuc2V0KFVpbnQ4QXJyYXkub2YoMCwgZm9ybWF0KSwgaW5kZXgpO1xuICAgIGluZGV4ICs9IDI7XG4gICAgaGVhZGVyLnNldCh0cmFja0NvdW50Qnl0ZXMsIGluZGV4KTtcbiAgICBpbmRleCArPSB0cmFja0NvdW50Qnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICBoZWFkZXIuc2V0KGRpdmlzaW9uc0J5dGVzLCBpbmRleCk7XG4gICAgaW5kZXggKz0gZGl2aXNpb25zQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICByZXR1cm4gaGVhZGVyO1xufTtcbnZhciBnZXRUcmFja0hlYWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBsZW5ndGggPSBfYS5sZW5ndGg7XG4gICAgLy8gNCBmb3IgdGhlIE1UcmsgaGVhZGVyLCA0IGZvciB0aGUgbGVuZ3RoIGJ1ZmZlclxuICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKDgpO1xuICAgIG5ldyBVaW50OEFycmF5KGJ1ZmYpLnNldChtdHJrU3RyaW5nLCAwKTtcbiAgICBuZXcgRGF0YVZpZXcoYnVmZikuc2V0VWludDMyKDQsIGxlbmd0aCk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xufTtcbnZhciBNSURJRmlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNSURJRmlsZShfYSkge1xuICAgICAgICB2YXIgZGl2aXNpb25zID0gX2EuZGl2aXNpb25zO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy50cmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSBkaXZpc2lvbnM7XG4gICAgfVxuICAgIE1JRElGaWxlLnByb3RvdHlwZS5wcm9ncmFtQ2hhbmdlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBfYS5vZmZzZXQsIHByb2dyYW0gPSBfYS5wcm9ncmFtLCB0cmFjayA9IF9hLnRyYWNrLCBfYiA9IF9hLmNoYW5uZWwsIGNoYW5uZWwgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xuICAgICAgICB2YXIgcHJvZ3JhbUNoYW5nZUV2ZW50ID0gZ2V0UHJvZ3JhbUNoYW5nZUV2ZW50KHsgY2hhbm5lbDogY2hhbm5lbCwgcHJvZ3JhbTogcHJvZ3JhbSB9KTtcbiAgICAgICAgdmFyIGJ1ZmZlckluZm8gPSB7XG4gICAgICAgICAgICBldmVudDogcHJvZ3JhbUNoYW5nZUV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAxOTIgLyogUHJvZ3JhbUNoYW5nZSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0cmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tbmlUcmFja0V2ZW50cy5wdXNoKGJ1ZmZlckluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEodHJhY2sgaW4gdGhpcy50cmFja3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdID0ge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJzOiBbXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdLmJ1ZmZlcnMucHVzaChidWZmZXJJbmZvKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTUlESUZpbGUucHJvdG90eXBlLnRpbWVTaWduYXR1cmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG51bWVyYXRvciA9IF9hLm51bWVyYXRvciwgZGVub21pbmF0b3IgPSBfYS5kZW5vbWluYXRvcjtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAgICAgMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICA4OCAvKiBUaW1lU2lnbmF0dXJlICovLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICAgIE1hdGgubG9nMihkZW5vbWluYXRvciksXG4gICAgICAgICAgICAvLyBAdG9kbzogZmlndXJlIG91dCBob3cgdG8gYWN0dWFsbHkgZGVhbCB3aXRoIHRoZXNlIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIC8vIHJvYnVzdGx5LS1JIGRvbid0IHJlYWxseSB1bmRlcnN0YW5kIHRoZW0gZW50aXJlbHlcbiAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXRyb25vbWUgdGlja3MgcGVyIHF1YXJ0ZXIgbm90ZVxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAvLyBOdW1iZXIgb2YgMS8zMm5kIG5vdGVzIHBlciBNSURJIHF1YXJ0ZXIgbm90ZVxuICAgICAgICAgICAgOCxcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5rZXlTaWduYXR1cmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGtleVNpZ25hdHVyZSA9IF9hLmtleVNpZ25hdHVyZSwgX2IgPSBfYS5vZmZzZXQsIG9mZnNldCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgODkgLyogS2V5U2lnbmF0dXJlICovLFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIGtleVNpZ25hdHVyZS5zaGFycHMsXG4gICAgICAgICAgICAvLyBtYWpvciAoMCkgdnMuIG1pbm9yICgxKVxuICAgICAgICAgICAgLy8gQHRvZG86IEFjdHVhbGx5IGZpbmQgbWFqb3IvbWlub3Iga2V5IGZyb20gWE1MXG4gICAgICAgICAgICBrZXlTaWduYXR1cmUubW9kZSA9PT0gXCJtaW5vclwiID8gMSA6IDAsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm9tbmlUcmFja0V2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogb2Zmc2V0LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5zZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICAvLyBhZGQgMSBmb3IgbnVsbCB0ZXJtaW5hdG9yIGJ5dGVcbiAgICAgICAgdmFyIGxlbmd0aCA9IHV0aWxzXzEudG9WYXJpYWJsZUxlbmd0aFZhbHVlKHRpdGxlLmxlbmd0aCArIDEpO1xuICAgICAgICB2YXIgY2hhcnMgPSBzdHJpbmdUb0NoYXJDb2RlQXJyYXkodGl0bGUgKyBcIlxcMFwiKTtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gMiArIC8vIDEgYnl0ZSBlYWNoIGZvciBzdGF0dXMgYW5kIHN1YnR5cGVcbiAgICAgICAgICAgIGxlbmd0aC5ieXRlTGVuZ3RoICtcbiAgICAgICAgICAgIGNoYXJzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZXZlbnQuc2V0KFVpbnQ4QXJyYXkub2YoMjU1IC8qIE1ldGEgKi8sIDMgLyogVHJhY2tOYW1lICovKSwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICBldmVudC5zZXQobGVuZ3RoLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IGxlbmd0aC5ieXRlTGVuZ3RoO1xuICAgICAgICBldmVudC5zZXQoY2hhcnMsIGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gY2hhcnMuYnl0ZUxlbmd0aDtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5ub3RlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBub3RlID0gX2Eubm90ZSwgZHVyYXRpb24gPSBfYS5kdXJhdGlvbiwgb2Zmc2V0ID0gX2Eub2Zmc2V0LCB0cmFjayA9IF9hLnRyYWNrLCBfYiA9IF9hLmNoYW5uZWwsIGNoYW5uZWwgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iLCBfYyA9IF9hLnZlbG9jaXR5LCB2ZWxvY2l0eSA9IF9jID09PSB2b2lkIDAgPyA2NCA6IF9jLCBfZCA9IF9hLnJlbGVhc2UsIHJlbGVhc2UgPSBfZCA9PT0gdm9pZCAwID8gdmVsb2NpdHkgOiBfZCwgX2UgPSBfYS5tZXRhLCBtZXRhID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2U7XG4gICAgICAgIHZhciBub3RlT25FdmVudCA9IGdldE5vdGVPbkV2ZW50KG5vdGUsIGNoYW5uZWwsIHZlbG9jaXR5KTtcbiAgICAgICAgdmFyIG5vdGVOYW1lID0gdXRpbHNfMS5Ob3RlTnVtYmVyVG9OYW1lKG5vdGUpO1xuICAgICAgICBub3RlTmFtZSA9IFwiXCIgKyBub3RlTmFtZS5zdGVwICsgKG5vdGVOYW1lLmFsdGVyID09PSAxID9cbiAgICAgICAgICAgICcjJyA6XG4gICAgICAgICAgICBub3RlTmFtZS5hbHRlciA9PT0gLTEgP1xuICAgICAgICAgICAgICAgICdiJyA6XG4gICAgICAgICAgICAgICAgJycpICsgbm90ZU5hbWUub2N0YXZlO1xuICAgICAgICBpZiAoISh0cmFjayBpbiB0aGlzLnRyYWNrcykpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXSA9IHtcbiAgICAgICAgICAgICAgICBidWZmZXJzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdLmJ1ZmZlcnMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogbm90ZU9uRXZlbnQsXG4gICAgICAgICAgICBldmVudFR5cGU6IDE0NCAvKiBOb3RlT24gKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgbWV0YTogX19hc3NpZ24oeyBuYW1lOiBub3RlTmFtZSB9LCBtZXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlYnVnKCdub3RlIG9uOiAnLCB7XG4gICAgICAgICAgICBub3RlOiBub3RlLFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LFxuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPbkV2ZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5vdGVPZmZFdmVudCA9IGdldE5vdGVPZmZFdmVudChub3RlLCBjaGFubmVsLCByZWxlYXNlKTtcbiAgICAgICAgdmFyIG5vdGVPZmZPZmZzZXQgPSBvZmZzZXQgKyBkdXJhdGlvbjtcbiAgICAgICAgZGVidWcoJ25vdGUgb2ZmOiAnLCB7XG4gICAgICAgICAgICBub3RlOiBub3RlLFxuICAgICAgICAgICAgb2Zmc2V0OiBub3RlT2ZmT2Zmc2V0LFxuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHJlbGVhc2U6IHJlbGVhc2UsXG4gICAgICAgICAgICBtZXRhOiBfX2Fzc2lnbih7IG5hbWU6IG5vdGVOYW1lIH0sIG1ldGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdLmJ1ZmZlcnMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogbm90ZU9mZkV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAxMjggLyogTm90ZU9mZiAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiBub3RlT2ZmT2Zmc2V0LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5zZXRUZW1wbyA9IGZ1bmN0aW9uICh0ZW1wbykge1xuICAgICAgICB2YXIgbWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUgPSA2ZTcgLyB0ZW1wbztcbiAgICAgICAgdmFyIHRlbXBvQnl0ZXMgPSBudW1iZXJUb0J5dGVzKG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlLCAzKTtcbiAgICAgICAgLy8gMSBieXRlIGVhY2ggZm9yIHN0YXR1cyB0eXBlIGFuZCBtZXRhIHR5cGUsIGFuZCAxIGZvciBjb25zdGFudCB2YWx1ZSAweDAzIGFmdGVyIG1ldGEgdHlwZVxuICAgICAgICB2YXIgdG90YWxMZW5ndGggPSAzICtcbiAgICAgICAgICAgIHRlbXBvQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBldmVudC5zZXQoVWludDhBcnJheS5vZigyNTUgLyogTWV0YSAqLywgODEgLyogU2V0VGVtcG8gKi8sIDMpLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDM7XG4gICAgICAgIGV2ZW50LnNldCh0ZW1wb0J5dGVzLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IHRlbXBvQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBldmVudFR5cGU6IDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IDAsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTUlESUZpbGUucHJvdG90eXBlLnNvcnRCdWZmZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50cmFja3MpLnJlZHVjZShmdW5jdGlvbiAocmVkdWN0aW9uLCB0cmFja051bWJlcikge1xuICAgICAgICAgICAgLy8gc2hhbGxvdyBjbG9uZSB0byBhdm9pZCBhZGRpbmcgb21uaVRyYWNrRXZlbnRzIHRvIHRoZSBhY3R1YWwgdHJhY2tzXG4gICAgICAgICAgICB2YXIgdHJhY2tCdWZmZXJzID0gX3RoaXMudHJhY2tzW3RyYWNrTnVtYmVyXS5idWZmZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICB0cmFja0J1ZmZlcnMudW5zaGlmdC5hcHBseSh0cmFja0J1ZmZlcnMsIF90aGlzLm9tbmlUcmFja0V2ZW50cyk7XG4gICAgICAgICAgICByZWR1Y3Rpb25bdHJhY2tOdW1iZXJdID0gdHJhY2tCdWZmZXJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0RGlmZiA9IGEuZGl2aXNpb25PZmZzZXQgLSBiLmRpdmlzaW9uT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXREaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmV2ZW50VHlwZSA9PT0gYi5ldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmV2ZW50VHlwZSA9PT0gMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZXZlbnRUeXBlID09PSAyNTUgLyogTWV0YSAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIuZXZlbnRUeXBlID09PSAxOTIgLyogUHJvZ3JhbUNoYW5nZSAqLyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuZXZlbnRUeXBlID09PSAyNTUgLyogTWV0YSAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2Zmc2V0RGlmZjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlZHVjdGlvbjtcbiAgICAgICAgfSwge30pO1xuICAgIH07XG4gICAgTUlESUZpbGUucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidWZmZXJzID0gdGhpcy5zb3J0QnVmZmVycygpO1xuICAgICAgICB2YXIgdHJhY2tDb3VudCA9IE9iamVjdC5rZXlzKHRoaXMudHJhY2tzKS5sZW5ndGg7XG4gICAgICAgIHZhciB0cmFja0xlbmd0aHMgPSBPYmplY3Qua2V5cyhidWZmZXJzKS5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFscywgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBwcmV2RHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdG90YWxzW3RyYWNrTnVtYmVyXSA9IGJ1ZmZlcnNbdHJhY2tOdW1iZXJdLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIG1pZGlFdmVudEluZm8pIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgbWlkaUV2ZW50SW5mby5ldmVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhVGltZSA9IG1pZGlFdmVudEluZm8uZGl2aXNpb25PZmZzZXQgLSBwcmV2RHVyYXRpb247XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhVGltZUJ1ZmZlciA9IHV0aWxzXzEudG9WYXJpYWJsZUxlbmd0aFZhbHVlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gZGVsdGFUaW1lQnVmZmVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBtaWRpRXZlbnRJbmZvLmRlbHRhVGltZUJ1ZmZlciA9IGRlbHRhVGltZUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBwcmV2RHVyYXRpb24gPSBtaWRpRXZlbnRJbmZvLmRpdmlzaW9uT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFscztcbiAgICAgICAgfSwge30pO1xuICAgICAgICB2YXIgaGVhZGVyQ2h1bmsgPSBnZXRGaWxlSGVhZGVyKHtcbiAgICAgICAgICAgIGRpdmlzaW9uczogdGhpcy5kaXZpc2lvbnMsXG4gICAgICAgICAgICB0cmFja0NvdW50OiB0cmFja0NvdW50LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRyYWNrSGVhZGVycyA9IE9iamVjdC5rZXlzKGJ1ZmZlcnMpLnJlZHVjZShmdW5jdGlvbiAoaGVhZGVycywgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbdHJhY2tOdW1iZXJdID0gZ2V0VHJhY2tIZWFkZXIoe1xuICAgICAgICAgICAgICAgIGxlbmd0aDogdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gaGVhZGVyQ2h1bmsubGVuZ3RoO1xuICAgICAgICB0b3RhbExlbmd0aCArPSBPYmplY3Qua2V5cyh0cmFja0hlYWRlcnMpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIHRyYWNrTnVtYmVyKSB7IHJldHVybiB0b3RhbCArIHRyYWNrSGVhZGVyc1t0cmFja051bWJlcl0ubGVuZ3RoOyB9LCAwKTtcbiAgICAgICAgdG90YWxMZW5ndGggKz0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbCwgdHJhY2tOdW1iZXIpIHsgcmV0dXJuIHRvdGFsICsgdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXTsgfSwgMCk7XG4gICAgICAgIHRvdGFsTGVuZ3RoICs9IEVORF9PRl9UUkFDS19FVkVOVC5sZW5ndGg7XG4gICAgICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgYXJyLnNldChoZWFkZXJDaHVuaywgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlckNodW5rLmxlbmd0aDtcbiAgICAgICAgT2JqZWN0LmtleXMoYnVmZmVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGFyci5zZXQodHJhY2tIZWFkZXJzW3RyYWNrTnVtYmVyXSwgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSB0cmFja0hlYWRlcnNbdHJhY2tOdW1iZXJdLmxlbmd0aDtcbiAgICAgICAgICAgIGJ1ZmZlcnNbdHJhY2tOdW1iZXJdLmZvckVhY2goZnVuY3Rpb24gKG1pZGlFdmVudEluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFUaW1lQnVmZmVyID0gbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgYXJyLnNldChkZWx0YVRpbWVCdWZmZXIsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJyLnNldChtaWRpRXZlbnRJbmZvLmV2ZW50LCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaWRpRXZlbnRJbmZvLmV2ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYXJyLnNldChFTkRfT0ZfVFJBQ0tfRVZFTlQsIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBFTkRfT0ZfVFJBQ0tfRVZFTlQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gYnVmZjtcbiAgICB9O1xuICAgIHJldHVybiBNSURJRmlsZTtcbn0oKSk7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTUlESUZpbGVfMSA9IHJlcXVpcmUoXCIuL01JRElXcml0ZXIvTUlESUZpbGVcIik7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGVfMS5NSURJRmlsZTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3V0aWxzXCIpKTtcbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4vKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGxvZyguLi5hcmdzKSB7XG5cdC8vIFRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG5cdC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG5cdHJldHVybiB0eXBlb2YgY29uc29sZSA9PT0gJ29iamVjdCcgJiZcblx0XHRjb25zb2xlLmxvZyAmJlxuXHRcdGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cblx0Ki9cblx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzID0gW107XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuXHRcdC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcblxuXHRcdC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG5cdFx0XHRpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC0/XFxkP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8d2Vla3M/fHd8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ3dlZWtzJzpcbiAgICBjYXNlICd3ZWVrJzpcbiAgICBjYXNlICd3JzpcbiAgICAgIHJldHVybiBuICogdztcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHZhciBtc0FicyA9IE1hdGguYWJzKG1zKTtcbiAgaWYgKG1zQWJzID49IGQpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgZCwgJ2RheScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBoKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGgsICdob3VyJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgbSwgJ21pbnV0ZScpO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIHMsICdzZWNvbmQnKTtcbiAgfVxuICByZXR1cm4gbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG1zQWJzLCBuLCBuYW1lKSB7XG4gIHZhciBpc1BsdXJhbCA9IG1zQWJzID49IG4gKiAxLjU7XG4gIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbikgKyAnICcgKyBuYW1lICsgKGlzUGx1cmFsID8gJ3MnIDogJycpO1xufVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5idWZmZXJUb1N0cmluZyA9IGZ1bmN0aW9uIChidWZmZXIsIHN0YXJ0SW5kZXgsIGxlbmd0aCkge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgZGF0YVZpZXcgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCBzdGFydEluZGV4LCBsZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc3RyICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoZGF0YVZpZXcuZ2V0VWludDgoaSkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL2J1ZmZlci10by1zdHJpbmdcIikpO1xuX19leHBvcnQocmVxdWlyZShcIi4vdmFyaWFibGUtbGVuZ3RoLXZhbHVlXCIpKTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL21pZGktbm90ZS1jb252ZXJ0ZXJcIikpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBOb3RlTnVtYmVyVG9OYW1lKG5vdGUpIHtcbiAgICB2YXIgc3RlcDtcbiAgICB2YXIgYWx0ZXI7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcbiAgICB2YXIgb2N0YXZlID0gTWF0aC5mbG9vcihub3RlIC8gMTIpIC0gMTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1mYWxsdGhyb3VnaCAqL1xuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgICBzd2l0Y2ggKG5vdGUgJSAxMikge1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkNcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkRcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBzdGVwID0gXCJFXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBzdGVwID0gXCJGXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBzdGVwID0gXCJHXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgc3RlcCA9IFwiQVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgICBzdGVwID0gXCJCXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1mYWxsdGhyb3VnaCAqL1xuICAgIHZhciBub3RlT2JqID0ge1xuICAgICAgICBzdGVwOiBzdGVwLFxuICAgICAgICBvY3RhdmU6IG9jdGF2ZSxcbiAgICB9O1xuICAgIGlmIChhbHRlcikge1xuICAgICAgICBub3RlT2JqLmFsdGVyID0gYWx0ZXI7XG4gICAgfVxuICAgIHJldHVybiBub3RlT2JqO1xufVxuZXhwb3J0cy5Ob3RlTnVtYmVyVG9OYW1lID0gTm90ZU51bWJlclRvTmFtZTtcbnZhciBzdGVwVG9OdW1iZXIgPSB7XG4gICAgQzogMCxcbiAgICBEOiAyLFxuICAgIEU6IDQsXG4gICAgRjogNSxcbiAgICBHOiA3LFxuICAgIEE6IDksXG4gICAgQjogMTEsXG59O1xudmFyIHN0ZXBzID0gXCJBQkNERUZHXCI7XG5mdW5jdGlvbiBOb3RlTmFtZVRvTnVtYmVyKG5vdGVOYW1lKSB7XG4gICAgdmFyIHN0ZXA7XG4gICAgdmFyIG9jdGF2ZTtcbiAgICB2YXIgYWx0ZXI7XG4gICAgaWYgKHR5cGVvZiBub3RlTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IC9eKFtBLUddKShbI2JdKT8oLT9cXGQrKSQvLmV4ZWMobm90ZU5hbWUpO1xuICAgICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhbHRlclN0cmluZyA9IG1hdGNoZXNbMl07XG4gICAgICAgIHN0ZXAgPSBtYXRjaGVzWzFdO1xuICAgICAgICBvY3RhdmUgPSBOdW1iZXIobWF0Y2hlc1szXSk7XG4gICAgICAgIGlmIChhbHRlclN0cmluZyA9PT0gXCJiXCIpIHtcbiAgICAgICAgICAgIGFsdGVyID0gLTE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYWx0ZXJTdHJpbmcgPT09IFwiI1wiKSB7XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0ZXAgPSBub3RlTmFtZS5zdGVwO1xuICAgICAgICBhbHRlciA9IG5vdGVOYW1lLmFsdGVyO1xuICAgICAgICBvY3RhdmUgPSBub3RlTmFtZS5vY3RhdmU7XG4gICAgfVxuICAgIGlmIChhbHRlciA9PT0gLTEpIHtcbiAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICB2YXIgaW5pdGlhbFN0ZXBJbmRleCA9IHN0ZXBzLmluZGV4T2Yoc3RlcCk7XG4gICAgICAgIHN0ZXAgPSBzdGVwc1soc3RlcHMuaW5kZXhPZihzdGVwKSArIHN0ZXBzLmxlbmd0aCAtIDEpICUgc3RlcHMubGVuZ3RoXTtcbiAgICAgICAgLy8gZS5nLiBnb2luZyBmcm9tIEFiNCAtPiBHIzNcbiAgICAgICAgaWYgKHN0ZXBzLmluZGV4T2Yoc3RlcCkgPiBpbml0aWFsU3RlcEluZGV4KSB7XG4gICAgICAgICAgICBvY3RhdmUgLT0gMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgbnVtYmVyID0gc3RlcFRvTnVtYmVyW3N0ZXBdO1xuICAgIGlmIChhbHRlciA9PT0gMSkge1xuICAgICAgICBudW1iZXIgKz0gMTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW1hZ2ljLW51bWJlcnNcbiAgICByZXR1cm4gbnVtYmVyICsgKChvY3RhdmUgKyAxKSAqIDEyKTtcbn1cbmV4cG9ydHMuTm90ZU5hbWVUb051bWJlciA9IE5vdGVOYW1lVG9OdW1iZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIHRvVmFyaWFibGVMZW5ndGhWYWx1ZShudW0pIHtcbiAgICB2YXIgYnl0ZXMgPSBbXTtcbiAgICBkbyB7XG4gICAgICAgIHZhciBieXRlID0gbnVtICYgMHg3RjtcbiAgICAgICAgbnVtID0gbnVtID4+IDc7XG4gICAgICAgIGlmIChieXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBieXRlID0gYnl0ZSArIDB4ODA7XG4gICAgICAgIH1cbiAgICAgICAgYnl0ZXMudW5zaGlmdChieXRlKTtcbiAgICB9IHdoaWxlIChudW0gPiAwKTtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnl0ZXMpO1xufVxuZXhwb3J0cy50b1ZhcmlhYmxlTGVuZ3RoVmFsdWUgPSB0b1ZhcmlhYmxlTGVuZ3RoVmFsdWU7XG47XG5mdW5jdGlvbiBmcm9tVmFyaWFibGVMZW5ndGhWYWx1ZShidWZmZXIsIHN0YXJ0SW5kZXgpIHtcbiAgICBpZiAoc3RhcnRJbmRleCA9PT0gdm9pZCAwKSB7IHN0YXJ0SW5kZXggPSAwOyB9XG4gICAgdmFyIHVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgc3RhcnRJbmRleCk7XG4gICAgdmFyIHZhbHVlID0gMDtcbiAgICB2YXIgaW5kZXggPSAtMTtcbiAgICB2YXIgYnl0ZXNSZWFkID0gMDtcbiAgICBkbyB7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIHZhbHVlID0gKHZhbHVlIDw8IDcpICsgKHVBcnJheVtpbmRleF0gJiAweDdGKTtcbiAgICAgICAgYnl0ZXNSZWFkICs9IDE7XG4gICAgfSB3aGlsZSAodUFycmF5W2luZGV4XSAmIDB4ODApO1xuICAgIHJldHVybiBbYnl0ZXNSZWFkLCB2YWx1ZV07XG59XG5leHBvcnRzLmZyb21WYXJpYWJsZUxlbmd0aFZhbHVlID0gZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWU7XG47XG4iXSwic291cmNlUm9vdCI6IiJ9

/***/ }),

/***/ "./src/XMLToMIDI.ts":
/*!**************************!*\
  !*** ./src/XMLToMIDI.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @todo: handle repeats
 * @todo: reconcile different division counts
 *  - between staffs
 *  - within a staff
 *  - not sure this ever actually happens, but is *technically* possible
 */
Object.defineProperty(exports, "__esModule", { value: true });
var midi_tools_1 = __webpack_require__(/*! @thayes/midi-tools */ "./node_modules/@thayes/midi-tools/build/midi-tools.js");
var getChordNoteNodes = function (_a) {
    var document = _a.document, itemNode = _a.itemNode, staff = _a.staff;
    var siblingsIterator = document.evaluate("following-sibling::note[staff/text() = \"" + staff + "\"]", itemNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
    var siblings = [];
    var nextNoteNode = siblingsIterator.iterateNext();
    while (nextNoteNode && nextNoteNode.querySelector("chord")) {
        siblings.push(nextNoteNode);
        nextNoteNode = siblingsIterator.iterateNext();
    }
    return siblings;
};
var readMeasuresFromPart = function (partNode, document) {
    return Array.from(partNode.querySelectorAll("measure")).reduce(function (measureReduction, measureNode) {
        var measureNumber = Number(measureNode.getAttribute("number"));
        var attributesNode = measureNode.querySelector("attributes");
        var timeSignature;
        var divisions;
        var keySignature;
        if (attributesNode) {
            var divisionsNode = attributesNode.querySelector("divisions");
            if (divisionsNode) {
                divisions = Number(divisionsNode.textContent);
            }
            var timeSignatureNode = attributesNode.querySelector("time");
            if (timeSignatureNode) {
                timeSignature = {
                    numerator: Number(timeSignatureNode.querySelector("beats").textContent),
                    denominator: Number(timeSignatureNode.querySelector("beat-type").textContent),
                };
            }
            var keySignatureNode = attributesNode.querySelector("key");
            if (keySignatureNode) {
                var modeNode = keySignatureNode.querySelector("mode");
                var mode = "major";
                if (modeNode) {
                    var modeString = modeNode.textContent;
                    if (modeString === "minor") {
                        mode = modeString;
                    }
                }
                keySignature = {
                    sharps: Number(keySignatureNode.querySelector("fifths").textContent),
                    mode: mode,
                };
            }
        }
        var bpmNode = measureNode.querySelector("direction metronome > per-minute");
        var bpm;
        if (bpmNode) {
            bpm = Number(bpmNode.textContent);
        }
        var noteIterator = document.evaluate(".//note[not(chord)]", measureNode, null, window.XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
        var itemNode = noteIterator.iterateNext();
        var notesByStaff = {};
        while (itemNode) {
            var duration = Number(itemNode.querySelector("duration").textContent);
            var staffNode = itemNode.querySelector("staff");
            var staff = void 0;
            if (staffNode) {
                staff = Number(staffNode.textContent);
                var item = {
                    duration: duration,
                    staff: staff,
                };
                if (!itemNode.querySelector("rest")) {
                    var chordNotes = getChordNoteNodes({
                        document: document,
                        itemNode: itemNode,
                        staff: staff,
                    });
                    chordNotes.unshift(itemNode);
                    var notes = chordNotes.map(function (noteNode) {
                        var pitchNode = noteNode.querySelector("pitch");
                        var step = pitchNode.querySelector("step").textContent;
                        var octave = Number(pitchNode.querySelector("octave").textContent);
                        var alterNode = pitchNode.querySelector("alter");
                        var pitch = {
                            step: step,
                            octave: octave,
                        };
                        if (alterNode) {
                            pitch.alter = Number(alterNode.textContent);
                        }
                        var midiNumber = midi_tools_1.NoteNameToNumber(pitch);
                        pitch.MIDINumber = midiNumber;
                        return pitch;
                    });
                    item.notes = notes;
                }
                if (!(staff in notesByStaff)) {
                    notesByStaff[staff] = [];
                }
                notesByStaff[staff].push(item);
            }
            itemNode = noteIterator.iterateNext();
        }
        measureReduction[measureNumber] = {
            number: measureNumber,
            notes: notesByStaff,
            divisions: divisions,
            timeSignature: timeSignature,
            keySignature: keySignature,
            tempo: bpm,
        };
        return measureReduction;
    }, {});
};
var readParts = function (partListNode) {
    return Array.from(partListNode.querySelectorAll("score-part")).reduce(function (reduction, partNode) {
        var id = partNode.getAttribute("id");
        var name = partNode.querySelector("part-name").textContent;
        var instruments = Array.from(partNode.querySelectorAll("score-instrument")).reduce(function (instrumentReduction, instrumentNode) {
            var instrumentID = instrumentNode.getAttribute("id");
            var instrumentName = instrumentNode.querySelector("instrument-name").textContent;
            var midiInfo = {};
            var midiDeviceNode = partNode.querySelector("midi-device[id=\"" + instrumentID + "\"]");
            if (midiDeviceNode) {
                var port = midiDeviceNode.getAttribute("port");
                if (port) {
                    midiInfo.port = Number(port);
                }
            }
            var midiInstrumentNode = partNode.querySelector("midi-instrument[id=\"" + instrumentID + "\"]");
            var channelNode = midiInstrumentNode.querySelector("midi-channel");
            if (channelNode) {
                var channel = channelNode.textContent;
                if (channel) {
                    midiInfo.channel = Number(channel);
                }
            }
            var programNode = midiInstrumentNode.querySelector("midi-program");
            if (programNode) {
                var program = programNode.textContent;
                if (program) {
                    midiInfo.program = Number(program);
                }
            }
            var volumeNode = midiInstrumentNode.querySelector("volume");
            if (volumeNode) {
                var volume = volumeNode.textContent;
                if (volume) {
                    midiInfo.volume = Number(volume);
                }
            }
            var panNode = midiInstrumentNode.querySelector("pan");
            if (panNode) {
                var pan = panNode.textContent;
                if (pan) {
                    midiInfo.pan = Number(pan);
                }
            }
            instrumentReduction[instrumentID] = {
                id: instrumentID,
                name: instrumentName,
                midi: midiInfo,
            };
            return instrumentReduction;
        }, {});
        var part = {
            id: id,
            name: name,
            instruments: instruments,
        };
        reduction[id] = part;
        return reduction;
    }, {});
};
exports.getMIDI = function (document) {
    if (typeof document === "string") {
        document = new window.DOMParser().parseFromString(document, "application/xml");
    }
    var isTimewise;
    var root = document.querySelector("score-partwise");
    if (root) {
        isTimewise = false;
    }
    else {
        root = document.querySelector("score-timewise");
        isTimewise = true;
    }
    var workTitleNode = root.querySelector("work work-title");
    var title;
    if (workTitleNode) {
        title = workTitleNode.textContent;
    }
    var partListNode = root.querySelector("part-list");
    var parts = readParts(partListNode);
    var measures = Array.from(root.querySelectorAll("part")).reduce(function (measuresReduction, partNode) {
        var partID = partNode.getAttribute("id");
        measuresReduction[partID] = readMeasuresFromPart(partNode, document);
        return measuresReduction;
    }, {});
    var divisions;
    var timeSignature;
    var tempo;
    // @todo: handle divisions more intelligently; it is possible, in theory, for
    // different measures to have different divisions. This assumes the first division
    // is the only one used throughout the MusicXML.
    for (var partID in measures) {
        if (!measures.hasOwnProperty(partID)) {
            continue;
        }
        for (var measureNumber in measures[partID]) {
            if (!measures[partID].hasOwnProperty(measureNumber)) {
                continue;
            }
            if (measures[partID][measureNumber].divisions) {
                divisions = measures[partID][measureNumber].divisions;
            }
            if (measures[partID][measureNumber].timeSignature) {
                timeSignature = measures[partID][measureNumber].timeSignature;
            }
            if (measures[partID][measureNumber].tempo) {
                tempo = measures[partID][measureNumber].tempo;
            }
        }
        if (divisions && timeSignature && tempo) {
            break;
        }
    }
    var file = new midi_tools_1.MIDIFile({
        divisions: divisions,
    });
    if (title) {
        file.setTitle(title);
    }
    var channelsByParts = {};
    Object.keys(parts).forEach(function (partID) { return Object.keys(parts[partID].instruments).forEach(function (instrumentID) {
        var instrument = parts[partID].instruments[instrumentID];
        if (instrument.midi.program === undefined) {
            return;
        }
        var channel = instrument.midi.channel;
        if (channel === undefined) {
            channel = 1;
        }
        // @todo: handle channel changes on individual parts (does that ever happen?)
        channelsByParts[partID] = channel;
        file.programChange({
            offset: 0,
            program: instrument.midi.program,
            channel: channel,
        });
        if (tempo) {
            file.setTempo(tempo);
        }
        if (timeSignature) {
            file.timeSignature(timeSignature);
        }
    }); });
    var offsetByStaff = {};
    Object.keys(measures).forEach(function (partID) {
        var measurePart = measures[partID];
        Object.keys(measurePart).forEach(function (measureNumber) {
            var notesByStaff = measurePart[measureNumber].notes;
            Object.keys(notesByStaff).forEach(function (staffNumber) {
                notesByStaff[staffNumber].forEach(function (note) {
                    if (!(note.staff in offsetByStaff)) {
                        offsetByStaff[note.staff] = 0;
                    }
                    var notes;
                    if (note.notes) {
                        // chord
                        notes = note.notes;
                    }
                    if (notes) {
                        notes.forEach(function (pitch) { return file.note({
                            note: pitch.MIDINumber,
                            duration: note.duration,
                            channel: channelsByParts[partID],
                            offset: offsetByStaff[note.staff],
                            track: note.staff,
                            meta: {
                                staff: note.staff,
                                measureNumber: measureNumber,
                            },
                        }); });
                    }
                    offsetByStaff[note.staff] += note.duration;
                });
            });
        });
    });
    return file.toArrayBuffer();
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var XMLToMIDI_1 = __webpack_require__(/*! ./XMLToMIDI */ "./src/XMLToMIDI.ts");
exports.getMIDI = XMLToMIDI_1.getMIDI;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9YTUwyTUlESS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vWE1MMk1JREkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vWE1MMk1JREkvLi9ub2RlX21vZHVsZXMvQHRoYXllcy9taWRpLXRvb2xzL2J1aWxkL21pZGktdG9vbHMuanMiLCJ3ZWJwYWNrOi8vWE1MMk1JREkvLi9zcmMvWE1MVG9NSURJLnRzIiwid2VicGFjazovL1hNTDJNSURJLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxJQUFJLElBQXlEO0FBQzdEO0FBQ0EsTUFBTSxFQUswQjtBQUNoQyxDQUFDO0FBQ0Qsb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGdDQUFnQztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0Usa0JBQWtCO0FBQ2xGO0FBQ0EseURBQXlELGNBQWM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUNBQWlDO0FBQ2xGLHdIQUF3SCxtQkFBbUIsRUFBRTtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCLEVBQUU7QUFDL0QseUNBQXlDLGVBQWU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCwrREFBK0Q7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCwwQkFBMEIsRUFBRTtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELHFDQUFxQztBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esb1NBQW9TO0FBQ3BTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQSx1RkFBdUYsaURBQWlELEVBQUU7QUFDMUksa0ZBQWtGLDBDQUEwQyxFQUFFO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBOzs7QUFHQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7QUFHdEMsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTs7O0FBR0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FB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QUMsT0FBTyxDQUNYLFVBQUMsS0FBYSxJQUFLLFdBQUksQ0FBQyxJQUFJLENBQUM7NEJBQzNCLElBQUksRUFBRSxLQUFLLENBQUMsVUFBVTs0QkFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFROzRCQUN2QixPQUFPLEVBQUUsZUFBZSxDQUFDLE1BQU0sQ0FBQzs0QkFDaEMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDOzRCQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7NEJBQ2pCLElBQUksRUFBRTtnQ0FDSixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0NBQ2pCLGFBQWE7NkJBQ2Q7eUJBQ0YsQ0FBQyxFQVZpQixDQVVqQixDQUNILENBQUM7cUJBQ0g7b0JBRUQsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUM3QyxDQUFDLENBQ0Y7WUFDSCxDQUFDLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQyxDQUNGLENBQUM7SUFFRixPQUFPLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztBQUM5QixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3BoQkYsK0VBQXNDO0FBQTdCLHFDQUFPIiwiZmlsZSI6InhtbDJtaWRpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiWE1MMk1JRElcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiWE1MMk1JRElcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1JRElUb29sc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNSURJVG9vbHNcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC50c1wiKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKHtcblxuLyoqKi8gXCIuL01JRElXcml0ZXIvTUlESUZpbGUudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vTUlESVdyaXRlci9NSURJRmlsZS50cyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZGVidWdfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIGRlYnVnICovIFwiLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanNcIik7XG52YXIgdXRpbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4uL3V0aWxzICovIFwiLi91dGlscy9pbmRleC50c1wiKTtcbnZhciBkZWJ1ZyA9IGRlYnVnXzEuZGVmYXVsdChcInhtbDJtaWRpOk1JRElGaWxlXCIpO1xudmFyIHN0cmluZ1RvQ2hhckNvZGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoc3RyLnNwbGl0KFwiXCIpLm1hcChmdW5jdGlvbiAoY2hyKSB7IHJldHVybiBjaHIuY2hhckNvZGVBdCgwKTsgfSkpO1xufTtcbnZhciBtdGhkU3RyaW5nID0gc3RyaW5nVG9DaGFyQ29kZUFycmF5KFwiTVRoZFwiKTtcbnZhciBtdHJrU3RyaW5nID0gc3RyaW5nVG9DaGFyQ29kZUFycmF5KFwiTVRya1wiKTtcbnZhciBFTkRfT0ZfVFJBQ0tfRVZFTlQgPSBuZXcgVWludDhBcnJheShbMHhGRiwgMHgyRiwgMHgwMF0pO1xudmFyIG51bWJlclRvQnl0ZXMgPSBmdW5jdGlvbiAobnVtLCBtaW5CeXRlcykge1xuICAgIHZhciBieXRlcyA9IFtdO1xuICAgIGRvIHtcbiAgICAgICAgYnl0ZXMudW5zaGlmdChudW0gJiAweEZGKTtcbiAgICAgICAgbnVtID0gbnVtID4+IDg7XG4gICAgfSB3aGlsZSAobnVtID4gMCB8fCBieXRlcy5sZW5ndGggPCBtaW5CeXRlcyk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcbn07XG52YXIgZ2V0Tm90ZU9uRXZlbnQgPSBmdW5jdGlvbiAobm90ZSwgY2hhbm5lbCwgdmVsb2NpdHkpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAxNDQgLyogTm90ZU9uICovICsgKGNoYW5uZWwgLSAxKSxcbiAgICAgICAgLy8gVW5zZXQgdG9wIGJpdDsgdmFsdWUgY2FuIG9ubHkgYmUgNyBiaXRzIGxvbmdcbiAgICAgICAgbm90ZSAmIDB4N0YsXG4gICAgICAgIHZlbG9jaXR5ICYgMHg3RixcbiAgICBdKTtcbn07XG52YXIgZ2V0Tm90ZU9mZkV2ZW50ID0gZnVuY3Rpb24gKG5vdGUsIGNoYW5uZWwsIHZlbG9jaXR5KSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMTI4IC8qIE5vdGVPZmYgKi8gKyAoY2hhbm5lbCAtIDEpLFxuICAgICAgICAvLyBVbnNldCB0b3AgYml0OyB2YWx1ZSBjYW4gb25seSBiZSA3IGJpdHMgbG9uZ1xuICAgICAgICBub3RlICYgMHg3RixcbiAgICAgICAgdmVsb2NpdHkgJiAweDdGLFxuICAgIF0pO1xufTtcbnZhciBnZXRQcm9ncmFtQ2hhbmdlRXZlbnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2hhbm5lbCA9IF9hLmNoYW5uZWwsIHByb2dyYW0gPSBfYS5wcm9ncmFtO1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDE5MiAvKiBQcm9ncmFtQ2hhbmdlICovICsgKGNoYW5uZWwgLSAxKSxcbiAgICAgICAgcHJvZ3JhbVxuICAgIF0pO1xufTtcbnZhciBnZXRGaWxlSGVhZGVyID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGRpdmlzaW9ucyA9IF9hLmRpdmlzaW9ucywgdHJhY2tDb3VudCA9IF9hLnRyYWNrQ291bnQ7XG4gICAgdmFyIGZvcm1hdCA9IHRyYWNrQ291bnQgPT09IDEgP1xuICAgICAgICAwIDpcbiAgICAgICAgMTtcbiAgICAvLyAjIG9mIGRpdmlzaW9ucyBwZXIgcXVhcnRlciBub3RlICgxNSBiaXRzIG9ubHkpXG4gICAgdmFyIGRpdmlzaW9uc0J5dGVzID0gbnVtYmVyVG9CeXRlcyhkaXZpc2lvbnMgJiAweDdGRkYsIDIpO1xuICAgIHZhciB0cmFja0NvdW50Qnl0ZXMgPSBudW1iZXJUb0J5dGVzKHRyYWNrQ291bnQsIDIpO1xuICAgIHZhciB0b3RhbExlbmd0aCA9IG10aGRTdHJpbmcuYnl0ZUxlbmd0aCArXG4gICAgICAgIC8vIDQgYnl0ZXMgZm9yIGxlbmd0aCBmaWVsZCAgXG4gICAgICAgIDQgK1xuICAgICAgICAvLyAyIGJ5dGVzIGZvciBmb3JtYXQgZmllbGRcbiAgICAgICAgMiArXG4gICAgICAgIHRyYWNrQ291bnRCeXRlcy5ieXRlTGVuZ3RoICtcbiAgICAgICAgZGl2aXNpb25zQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICB2YXIgaGVhZGVyID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgaGVhZGVyLnNldChtdGhkU3RyaW5nLCBpbmRleCk7XG4gICAgaW5kZXggKz0gbXRoZFN0cmluZy5ieXRlTGVuZ3RoO1xuICAgIC8vIExlbmd0aCBmaWVsZCwgTVNCIGZpcnN0XG4gICAgaGVhZGVyLnNldChVaW50OEFycmF5Lm9mKDAsIDAsIDAsIDYpLCBpbmRleCk7XG4gICAgaW5kZXggKz0gNDtcbiAgICBoZWFkZXIuc2V0KFVpbnQ4QXJyYXkub2YoMCwgZm9ybWF0KSwgaW5kZXgpO1xuICAgIGluZGV4ICs9IDI7XG4gICAgaGVhZGVyLnNldCh0cmFja0NvdW50Qnl0ZXMsIGluZGV4KTtcbiAgICBpbmRleCArPSB0cmFja0NvdW50Qnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICBoZWFkZXIuc2V0KGRpdmlzaW9uc0J5dGVzLCBpbmRleCk7XG4gICAgaW5kZXggKz0gZGl2aXNpb25zQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICByZXR1cm4gaGVhZGVyO1xufTtcbnZhciBnZXRUcmFja0hlYWRlciA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBsZW5ndGggPSBfYS5sZW5ndGg7XG4gICAgLy8gNCBmb3IgdGhlIE1UcmsgaGVhZGVyLCA0IGZvciB0aGUgbGVuZ3RoIGJ1ZmZlclxuICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKDgpO1xuICAgIG5ldyBVaW50OEFycmF5KGJ1ZmYpLnNldChtdHJrU3RyaW5nLCAwKTtcbiAgICBuZXcgRGF0YVZpZXcoYnVmZikuc2V0VWludDMyKDQsIGxlbmd0aCk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xufTtcbnZhciBNSURJRmlsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNSURJRmlsZShfYSkge1xuICAgICAgICB2YXIgZGl2aXNpb25zID0gX2EuZGl2aXNpb25zO1xuICAgICAgICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbiAgICAgICAgdGhpcy50cmFja3MgPSB7fTtcbiAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5kaXZpc2lvbnMgPSBkaXZpc2lvbnM7XG4gICAgfVxuICAgIE1JRElGaWxlLnByb3RvdHlwZS5wcm9ncmFtQ2hhbmdlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSBfYS5vZmZzZXQsIHByb2dyYW0gPSBfYS5wcm9ncmFtLCB0cmFjayA9IF9hLnRyYWNrLCBfYiA9IF9hLmNoYW5uZWwsIGNoYW5uZWwgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iO1xuICAgICAgICB2YXIgcHJvZ3JhbUNoYW5nZUV2ZW50ID0gZ2V0UHJvZ3JhbUNoYW5nZUV2ZW50KHsgY2hhbm5lbDogY2hhbm5lbCwgcHJvZ3JhbTogcHJvZ3JhbSB9KTtcbiAgICAgICAgdmFyIGJ1ZmZlckluZm8gPSB7XG4gICAgICAgICAgICBldmVudDogcHJvZ3JhbUNoYW5nZUV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAxOTIgLyogUHJvZ3JhbUNoYW5nZSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIH07XG4gICAgICAgIGlmICh0cmFjayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9tbmlUcmFja0V2ZW50cy5wdXNoKGJ1ZmZlckluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCEodHJhY2sgaW4gdGhpcy50cmFja3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdID0ge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJzOiBbXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdLmJ1ZmZlcnMucHVzaChidWZmZXJJbmZvKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTUlESUZpbGUucHJvdG90eXBlLnRpbWVTaWduYXR1cmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG51bWVyYXRvciA9IF9hLm51bWVyYXRvciwgZGVub21pbmF0b3IgPSBfYS5kZW5vbWluYXRvcjtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAgICAgMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICA4OCAvKiBUaW1lU2lnbmF0dXJlICovLFxuICAgICAgICAgICAgNCxcbiAgICAgICAgICAgIG51bWVyYXRvcixcbiAgICAgICAgICAgIE1hdGgubG9nMihkZW5vbWluYXRvciksXG4gICAgICAgICAgICAvLyBAdG9kbzogZmlndXJlIG91dCBob3cgdG8gYWN0dWFsbHkgZGVhbCB3aXRoIHRoZXNlIHBhcmFtZXRlcnNcbiAgICAgICAgICAgIC8vIHJvYnVzdGx5LS1JIGRvbid0IHJlYWxseSB1bmRlcnN0YW5kIHRoZW0gZW50aXJlbHlcbiAgICAgICAgICAgIC8vIE51bWJlciBvZiBtZXRyb25vbWUgdGlja3MgcGVyIHF1YXJ0ZXIgbm90ZVxuICAgICAgICAgICAgMjQsXG4gICAgICAgICAgICAvLyBOdW1iZXIgb2YgMS8zMm5kIG5vdGVzIHBlciBNSURJIHF1YXJ0ZXIgbm90ZVxuICAgICAgICAgICAgOCxcbiAgICAgICAgXSk7XG4gICAgICAgIHRoaXMub21uaVRyYWNrRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5rZXlTaWduYXR1cmUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGtleVNpZ25hdHVyZSA9IF9hLmtleVNpZ25hdHVyZSwgX2IgPSBfYS5vZmZzZXQsIG9mZnNldCA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgICAgIDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgODkgLyogS2V5U2lnbmF0dXJlICovLFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIGtleVNpZ25hdHVyZS5zaGFycHMsXG4gICAgICAgICAgICAvLyBtYWpvciAoMCkgdnMuIG1pbm9yICgxKVxuICAgICAgICAgICAgLy8gQHRvZG86IEFjdHVhbGx5IGZpbmQgbWFqb3IvbWlub3Iga2V5IGZyb20gWE1MXG4gICAgICAgICAgICBrZXlTaWduYXR1cmUubW9kZSA9PT0gXCJtaW5vclwiID8gMSA6IDAsXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm9tbmlUcmFja0V2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogMjU1IC8qIE1ldGEgKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogb2Zmc2V0LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5zZXRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICAvLyBhZGQgMSBmb3IgbnVsbCB0ZXJtaW5hdG9yIGJ5dGVcbiAgICAgICAgdmFyIGxlbmd0aCA9IHV0aWxzXzEudG9WYXJpYWJsZUxlbmd0aFZhbHVlKHRpdGxlLmxlbmd0aCArIDEpO1xuICAgICAgICB2YXIgY2hhcnMgPSBzdHJpbmdUb0NoYXJDb2RlQXJyYXkodGl0bGUgKyBcIlxcMFwiKTtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gMiArIC8vIDEgYnl0ZSBlYWNoIGZvciBzdGF0dXMgYW5kIHN1YnR5cGVcbiAgICAgICAgICAgIGxlbmd0aC5ieXRlTGVuZ3RoICtcbiAgICAgICAgICAgIGNoYXJzLmJ5dGVMZW5ndGg7XG4gICAgICAgIHZhciBldmVudCA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgZXZlbnQuc2V0KFVpbnQ4QXJyYXkub2YoMjU1IC8qIE1ldGEgKi8sIDMgLyogVHJhY2tOYW1lICovKSwgaW5kZXgpO1xuICAgICAgICBpbmRleCArPSAyO1xuICAgICAgICBldmVudC5zZXQobGVuZ3RoLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IGxlbmd0aC5ieXRlTGVuZ3RoO1xuICAgICAgICBldmVudC5zZXQoY2hhcnMsIGluZGV4KTtcbiAgICAgICAgaW5kZXggKz0gY2hhcnMuYnl0ZUxlbmd0aDtcbiAgICAgICAgdGhpcy5idWZmZXJzLnB1c2goe1xuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAyNTUgLyogTWV0YSAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiAwLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5ub3RlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBub3RlID0gX2Eubm90ZSwgZHVyYXRpb24gPSBfYS5kdXJhdGlvbiwgb2Zmc2V0ID0gX2Eub2Zmc2V0LCB0cmFjayA9IF9hLnRyYWNrLCBfYiA9IF9hLmNoYW5uZWwsIGNoYW5uZWwgPSBfYiA9PT0gdm9pZCAwID8gMSA6IF9iLCBfYyA9IF9hLnZlbG9jaXR5LCB2ZWxvY2l0eSA9IF9jID09PSB2b2lkIDAgPyA2NCA6IF9jLCBfZCA9IF9hLnJlbGVhc2UsIHJlbGVhc2UgPSBfZCA9PT0gdm9pZCAwID8gdmVsb2NpdHkgOiBfZCwgX2UgPSBfYS5tZXRhLCBtZXRhID0gX2UgPT09IHZvaWQgMCA/IHt9IDogX2U7XG4gICAgICAgIHZhciBub3RlT25FdmVudCA9IGdldE5vdGVPbkV2ZW50KG5vdGUsIGNoYW5uZWwsIHZlbG9jaXR5KTtcbiAgICAgICAgdmFyIG5vdGVOYW1lID0gdXRpbHNfMS5Ob3RlTnVtYmVyVG9OYW1lKG5vdGUpO1xuICAgICAgICBub3RlTmFtZSA9IFwiXCIgKyBub3RlTmFtZS5zdGVwICsgKG5vdGVOYW1lLmFsdGVyID09PSAxID9cbiAgICAgICAgICAgICcjJyA6XG4gICAgICAgICAgICBub3RlTmFtZS5hbHRlciA9PT0gLTEgP1xuICAgICAgICAgICAgICAgICdiJyA6XG4gICAgICAgICAgICAgICAgJycpICsgbm90ZU5hbWUub2N0YXZlO1xuICAgICAgICBpZiAoISh0cmFjayBpbiB0aGlzLnRyYWNrcykpIHtcbiAgICAgICAgICAgIHRoaXMudHJhY2tzW3RyYWNrXSA9IHtcbiAgICAgICAgICAgICAgICBidWZmZXJzOiBbXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdLmJ1ZmZlcnMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogbm90ZU9uRXZlbnQsXG4gICAgICAgICAgICBldmVudFR5cGU6IDE0NCAvKiBOb3RlT24gKi8sXG4gICAgICAgICAgICBkaXZpc2lvbk9mZnNldDogb2Zmc2V0LFxuICAgICAgICAgICAgbWV0YTogX19hc3NpZ24oeyBuYW1lOiBub3RlTmFtZSB9LCBtZXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlYnVnKCdub3RlIG9uOiAnLCB7XG4gICAgICAgICAgICBub3RlOiBub3RlLFxuICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgICAgICAgdmVsb2NpdHk6IHZlbG9jaXR5LFxuICAgICAgICAgICAgZXZlbnQ6IG5vdGVPbkV2ZW50LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG5vdGVPZmZFdmVudCA9IGdldE5vdGVPZmZFdmVudChub3RlLCBjaGFubmVsLCByZWxlYXNlKTtcbiAgICAgICAgdmFyIG5vdGVPZmZPZmZzZXQgPSBvZmZzZXQgKyBkdXJhdGlvbjtcbiAgICAgICAgZGVidWcoJ25vdGUgb2ZmOiAnLCB7XG4gICAgICAgICAgICBub3RlOiBub3RlLFxuICAgICAgICAgICAgb2Zmc2V0OiBub3RlT2ZmT2Zmc2V0LFxuICAgICAgICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgICAgICAgIHJlbGVhc2U6IHJlbGVhc2UsXG4gICAgICAgICAgICBtZXRhOiBfX2Fzc2lnbih7IG5hbWU6IG5vdGVOYW1lIH0sIG1ldGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50cmFja3NbdHJhY2tdLmJ1ZmZlcnMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogbm90ZU9mZkV2ZW50LFxuICAgICAgICAgICAgZXZlbnRUeXBlOiAxMjggLyogTm90ZU9mZiAqLyxcbiAgICAgICAgICAgIGRpdmlzaW9uT2Zmc2V0OiBub3RlT2ZmT2Zmc2V0LFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1JRElGaWxlLnByb3RvdHlwZS5zZXRUZW1wbyA9IGZ1bmN0aW9uICh0ZW1wbykge1xuICAgICAgICB2YXIgbWljcm9zZWNvbmRzUGVyUXVhcnRlck5vdGUgPSA2ZTcgLyB0ZW1wbztcbiAgICAgICAgdmFyIHRlbXBvQnl0ZXMgPSBudW1iZXJUb0J5dGVzKG1pY3Jvc2Vjb25kc1BlclF1YXJ0ZXJOb3RlLCAzKTtcbiAgICAgICAgLy8gMSBieXRlIGVhY2ggZm9yIHN0YXR1cyB0eXBlIGFuZCBtZXRhIHR5cGUsIGFuZCAxIGZvciBjb25zdGFudCB2YWx1ZSAweDAzIGFmdGVyIG1ldGEgdHlwZVxuICAgICAgICB2YXIgdG90YWxMZW5ndGggPSAzICtcbiAgICAgICAgICAgIHRlbXBvQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBldmVudC5zZXQoVWludDhBcnJheS5vZigyNTUgLyogTWV0YSAqLywgODEgLyogU2V0VGVtcG8gKi8sIDMpLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IDM7XG4gICAgICAgIGV2ZW50LnNldCh0ZW1wb0J5dGVzLCBpbmRleCk7XG4gICAgICAgIGluZGV4ICs9IHRlbXBvQnl0ZXMuYnl0ZUxlbmd0aDtcbiAgICAgICAgdGhpcy5vbW5pVHJhY2tFdmVudHMucHVzaCh7XG4gICAgICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgICAgICBldmVudFR5cGU6IDI1NSAvKiBNZXRhICovLFxuICAgICAgICAgICAgZGl2aXNpb25PZmZzZXQ6IDAsXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTUlESUZpbGUucHJvdG90eXBlLnNvcnRCdWZmZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50cmFja3MpLnJlZHVjZShmdW5jdGlvbiAocmVkdWN0aW9uLCB0cmFja051bWJlcikge1xuICAgICAgICAgICAgLy8gc2hhbGxvdyBjbG9uZSB0byBhdm9pZCBhZGRpbmcgb21uaVRyYWNrRXZlbnRzIHRvIHRoZSBhY3R1YWwgdHJhY2tzXG4gICAgICAgICAgICB2YXIgdHJhY2tCdWZmZXJzID0gX3RoaXMudHJhY2tzW3RyYWNrTnVtYmVyXS5idWZmZXJzLnNsaWNlKCk7XG4gICAgICAgICAgICB0cmFja0J1ZmZlcnMudW5zaGlmdC5hcHBseSh0cmFja0J1ZmZlcnMsIF90aGlzLm9tbmlUcmFja0V2ZW50cyk7XG4gICAgICAgICAgICByZWR1Y3Rpb25bdHJhY2tOdW1iZXJdID0gdHJhY2tCdWZmZXJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0RGlmZiA9IGEuZGl2aXNpb25PZmZzZXQgLSBiLmRpdmlzaW9uT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChvZmZzZXREaWZmID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmV2ZW50VHlwZSA9PT0gYi5ldmVudFR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChhLmV2ZW50VHlwZSA9PT0gMTkyIC8qIFByb2dyYW1DaGFuZ2UgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuZXZlbnRUeXBlID09PSAyNTUgLyogTWV0YSAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGIuZXZlbnRUeXBlID09PSAxOTIgLyogUHJvZ3JhbUNoYW5nZSAqLyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGIuZXZlbnRUeXBlID09PSAyNTUgLyogTWV0YSAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb2Zmc2V0RGlmZjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlZHVjdGlvbjtcbiAgICAgICAgfSwge30pO1xuICAgIH07XG4gICAgTUlESUZpbGUucHJvdG90eXBlLnRvQXJyYXlCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBidWZmZXJzID0gdGhpcy5zb3J0QnVmZmVycygpO1xuICAgICAgICB2YXIgdHJhY2tDb3VudCA9IE9iamVjdC5rZXlzKHRoaXMudHJhY2tzKS5sZW5ndGg7XG4gICAgICAgIHZhciB0cmFja0xlbmd0aHMgPSBPYmplY3Qua2V5cyhidWZmZXJzKS5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFscywgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIHZhciBwcmV2RHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgdG90YWxzW3RyYWNrTnVtYmVyXSA9IGJ1ZmZlcnNbdHJhY2tOdW1iZXJdLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIG1pZGlFdmVudEluZm8pIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgbWlkaUV2ZW50SW5mby5ldmVudC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhVGltZSA9IG1pZGlFdmVudEluZm8uZGl2aXNpb25PZmZzZXQgLSBwcmV2RHVyYXRpb247XG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhVGltZUJ1ZmZlciA9IHV0aWxzXzEudG9WYXJpYWJsZUxlbmd0aFZhbHVlKGRlbHRhVGltZSk7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gZGVsdGFUaW1lQnVmZmVyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBtaWRpRXZlbnRJbmZvLmRlbHRhVGltZUJ1ZmZlciA9IGRlbHRhVGltZUJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBwcmV2RHVyYXRpb24gPSBtaWRpRXZlbnRJbmZvLmRpdmlzaW9uT2Zmc2V0O1xuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRvdGFscztcbiAgICAgICAgfSwge30pO1xuICAgICAgICB2YXIgaGVhZGVyQ2h1bmsgPSBnZXRGaWxlSGVhZGVyKHtcbiAgICAgICAgICAgIGRpdmlzaW9uczogdGhpcy5kaXZpc2lvbnMsXG4gICAgICAgICAgICB0cmFja0NvdW50OiB0cmFja0NvdW50LFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHRyYWNrSGVhZGVycyA9IE9iamVjdC5rZXlzKGJ1ZmZlcnMpLnJlZHVjZShmdW5jdGlvbiAoaGVhZGVycywgdHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbdHJhY2tOdW1iZXJdID0gZ2V0VHJhY2tIZWFkZXIoe1xuICAgICAgICAgICAgICAgIGxlbmd0aDogdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGhlYWRlcnM7XG4gICAgICAgIH0sIHt9KTtcbiAgICAgICAgdmFyIHRvdGFsTGVuZ3RoID0gaGVhZGVyQ2h1bmsubGVuZ3RoO1xuICAgICAgICB0b3RhbExlbmd0aCArPSBPYmplY3Qua2V5cyh0cmFja0hlYWRlcnMpLnJlZHVjZShmdW5jdGlvbiAodG90YWwsIHRyYWNrTnVtYmVyKSB7IHJldHVybiB0b3RhbCArIHRyYWNrSGVhZGVyc1t0cmFja051bWJlcl0ubGVuZ3RoOyB9LCAwKTtcbiAgICAgICAgdG90YWxMZW5ndGggKz0gT2JqZWN0LmtleXMoYnVmZmVycykucmVkdWNlKGZ1bmN0aW9uICh0b3RhbCwgdHJhY2tOdW1iZXIpIHsgcmV0dXJuIHRvdGFsICsgdHJhY2tMZW5ndGhzW3RyYWNrTnVtYmVyXTsgfSwgMCk7XG4gICAgICAgIHRvdGFsTGVuZ3RoICs9IEVORF9PRl9UUkFDS19FVkVOVC5sZW5ndGg7XG4gICAgICAgIHZhciBidWZmID0gbmV3IEFycmF5QnVmZmVyKHRvdGFsTGVuZ3RoKTtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZmYpO1xuICAgICAgICB2YXIgb2Zmc2V0ID0gMDtcbiAgICAgICAgYXJyLnNldChoZWFkZXJDaHVuaywgb2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGhlYWRlckNodW5rLmxlbmd0aDtcbiAgICAgICAgT2JqZWN0LmtleXMoYnVmZmVycykuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tOdW1iZXIpIHtcbiAgICAgICAgICAgIGFyci5zZXQodHJhY2tIZWFkZXJzW3RyYWNrTnVtYmVyXSwgb2Zmc2V0KTtcbiAgICAgICAgICAgIG9mZnNldCArPSB0cmFja0hlYWRlcnNbdHJhY2tOdW1iZXJdLmxlbmd0aDtcbiAgICAgICAgICAgIGJ1ZmZlcnNbdHJhY2tOdW1iZXJdLmZvckVhY2goZnVuY3Rpb24gKG1pZGlFdmVudEluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGFUaW1lQnVmZmVyID0gbWlkaUV2ZW50SW5mby5kZWx0YVRpbWVCdWZmZXI7XG4gICAgICAgICAgICAgICAgYXJyLnNldChkZWx0YVRpbWVCdWZmZXIsIG9mZnNldCk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IGRlbHRhVGltZUJ1ZmZlci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYXJyLnNldChtaWRpRXZlbnRJbmZvLmV2ZW50LCBvZmZzZXQpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaWRpRXZlbnRJbmZvLmV2ZW50Lmxlbmd0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgYXJyLnNldChFTkRfT0ZfVFJBQ0tfRVZFTlQsIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBFTkRfT0ZfVFJBQ0tfRVZFTlQubGVuZ3RoO1xuICAgICAgICByZXR1cm4gYnVmZjtcbiAgICB9O1xuICAgIHJldHVybiBNSURJRmlsZTtcbn0oKSk7XG5leHBvcnRzLk1JRElGaWxlID0gTUlESUZpbGU7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9pbmRleC50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vaW5kZXgudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNSURJRmlsZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9NSURJV3JpdGVyL01JRElGaWxlICovIFwiLi9NSURJV3JpdGVyL01JRElGaWxlLnRzXCIpO1xuZXhwb3J0cy5NSURJRmlsZSA9IE1JRElGaWxlXzEuTUlESUZpbGU7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3V0aWxzICovIFwiLi91dGlscy9pbmRleC50c1wiKSk7XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MpIHsvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHQvLyBUaGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuXHQvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuXHRyZXR1cm4gdHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmXG5cdFx0Y29uc29sZS5sb2cgJiZcblx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2NvbW1vbiAqLyBcIi4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanNcIikoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vLi4vLi4vcHJvY2Vzcy9icm93c2VyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIpKSlcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIG1zICovIFwiLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanNcIik7XG5cblx0T2JqZWN0LmtleXMoZW52KS5mb3JFYWNoKGtleSA9PiB7XG5cdFx0Y3JlYXRlRGVidWdba2V5XSA9IGVudltrZXldO1xuXHR9KTtcblxuXHQvKipcblx0KiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmluc3RhbmNlcyA9IFtdO1xuXG5cdC8qKlxuXHQqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuXHQqL1xuXG5cdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0LyoqXG5cdCogTWFwIG9mIHNwZWNpYWwgXCIlblwiIGhhbmRsaW5nIGZ1bmN0aW9ucywgZm9yIHRoZSBkZWJ1ZyBcImZvcm1hdFwiIGFyZ3VtZW50LlxuXHQqXG5cdCogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzID0ge307XG5cblx0LyoqXG5cdCogU2VsZWN0cyBhIGNvbG9yIGZvciBhIGRlYnVnIG5hbWVzcGFjZVxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2UgVGhlIG5hbWVzcGFjZSBzdHJpbmcgZm9yIHRoZSBmb3IgdGhlIGRlYnVnIGluc3RhbmNlIHRvIGJlIGNvbG9yZWRcblx0KiBAcmV0dXJuIHtOdW1iZXJ8U3RyaW5nfSBBbiBBTlNJIGNvbG9yIGNvZGUgZm9yIHRoZSBnaXZlbiBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG5cdFx0bGV0IGhhc2ggPSAwO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lc3BhY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0aGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcblx0XHR9XG5cblx0XHRyZXR1cm4gY3JlYXRlRGVidWcuY29sb3JzW01hdGguYWJzKGhhc2gpICUgY3JlYXRlRGVidWcuY29sb3JzLmxlbmd0aF07XG5cdH1cblx0Y3JlYXRlRGVidWcuc2VsZWN0Q29sb3IgPSBzZWxlY3RDb2xvcjtcblxuXHQvKipcblx0KiBDcmVhdGUgYSBkZWJ1Z2dlciB3aXRoIHRoZSBnaXZlbiBgbmFtZXNwYWNlYC5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAcmV0dXJuIHtGdW5jdGlvbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblx0XHRsZXQgcHJldlRpbWU7XG5cblx0XHRmdW5jdGlvbiBkZWJ1ZyguLi5hcmdzKSB7XG5cdFx0XHQvLyBEaXNhYmxlZD9cblx0XHRcdGlmICghZGVidWcuZW5hYmxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlbGYgPSBkZWJ1ZztcblxuXHRcdFx0Ly8gU2V0IGBkaWZmYCB0aW1lc3RhbXBcblx0XHRcdGNvbnN0IGN1cnIgPSBOdW1iZXIobmV3IERhdGUoKSk7XG5cdFx0XHRjb25zdCBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG5cdFx0XHRzZWxmLmRpZmYgPSBtcztcblx0XHRcdHNlbGYucHJldiA9IHByZXZUaW1lO1xuXHRcdFx0c2VsZi5jdXJyID0gY3Vycjtcblx0XHRcdHByZXZUaW1lID0gY3VycjtcblxuXHRcdFx0YXJnc1swXSA9IGNyZWF0ZURlYnVnLmNvZXJjZShhcmdzWzBdKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBhcmdzWzBdICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHQvLyBBbnl0aGluZyBlbHNlIGxldCdzIGluc3BlY3Qgd2l0aCAlT1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoJyVPJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IGFueSBgZm9ybWF0dGVyc2AgdHJhbnNmb3JtYXRpb25zXG5cdFx0XHRsZXQgaW5kZXggPSAwO1xuXHRcdFx0YXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIChtYXRjaCwgZm9ybWF0KSA9PiB7XG5cdFx0XHRcdC8vIElmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcblx0XHRcdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcudXNlQ29sb3JzID0gY3JlYXRlRGVidWcudXNlQ29sb3JzKCk7XG5cdFx0ZGVidWcuY29sb3IgPSBzZWxlY3RDb2xvcihuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXHRcdGRlYnVnLmV4dGVuZCA9IGV4dGVuZDtcblx0XHQvLyBEZWJ1Zy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcblx0XHQvLyBkZWJ1Zy5yYXdMb2cgPSByYXdMb2c7XG5cblx0XHQvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuXHRcdGlmICh0eXBlb2YgY3JlYXRlRGVidWcuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5pdChkZWJ1Zyk7XG5cdFx0fVxuXG5cdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG5cdFx0cmV0dXJuIGRlYnVnO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVzdHJveSgpIHtcblx0XHRjb25zdCBpbmRleCA9IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5pbmRleE9mKHRoaXMpO1xuXHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV4dGVuZChuYW1lc3BhY2UsIGRlbGltaXRlcikge1xuXHRcdGNvbnN0IG5ld0RlYnVnID0gY3JlYXRlRGVidWcodGhpcy5uYW1lc3BhY2UgKyAodHlwZW9mIGRlbGltaXRlciA9PT0gJ3VuZGVmaW5lZCcgPyAnOicgOiBkZWxpbWl0ZXIpICsgbmFtZXNwYWNlKTtcblx0XHRuZXdEZWJ1Zy5sb2cgPSB0aGlzLmxvZztcblx0XHRyZXR1cm4gbmV3RGVidWc7XG5cdH1cblxuXHQvKipcblx0KiBFbmFibGVzIGEgZGVidWcgbW9kZSBieSBuYW1lc3BhY2VzLiBUaGlzIGNhbiBpbmNsdWRlIG1vZGVzXG5cdCogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcblx0XHRjcmVhdGVEZWJ1Zy5zYXZlKG5hbWVzcGFjZXMpO1xuXG5cdFx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0XHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdFx0bGV0IGk7XG5cdFx0Y29uc3Qgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuXHRcdGNvbnN0IGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKCFzcGxpdFtpXSkge1xuXHRcdFx0XHQvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0bmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG5cblx0XHRcdGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGluc3RhbmNlID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzW2ldO1xuXHRcdFx0aW5zdGFuY2UuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdGNyZWF0ZURlYnVnLmVuYWJsZShjcmVhdGVEZWJ1Zy5sb2FkKCkpO1xuXG5cdHJldHVybiBjcmVhdGVEZWJ1Zztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXR1cDtcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9tcy9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLT9cXGQ/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi91dGlscy9idWZmZXItdG8tc3RyaW5nLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3V0aWxzL2J1ZmZlci10by1zdHJpbmcudHMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gZnVuY3Rpb24gKGJ1ZmZlciwgc3RhcnRJbmRleCwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0ciA9ICcnO1xuICAgIHZhciBkYXRhVmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHN0YXJ0SW5kZXgsIGxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBzdHIgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhVmlldy5nZXRVaW50OChpKSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG59O1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vdXRpbHMvaW5kZXgudHNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL3V0aWxzL2luZGV4LnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL2J1ZmZlci10by1zdHJpbmcgKi8gXCIuL3V0aWxzL2J1ZmZlci10by1zdHJpbmcudHNcIikpO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi92YXJpYWJsZS1sZW5ndGgtdmFsdWUgKi8gXCIuL3V0aWxzL3ZhcmlhYmxlLWxlbmd0aC12YWx1ZS50c1wiKSk7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL21pZGktbm90ZS1jb252ZXJ0ZXIgKi8gXCIuL3V0aWxzL21pZGktbm90ZS1jb252ZXJ0ZXIudHNcIikpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vdXRpbHMvbWlkaS1ub3RlLWNvbnZlcnRlci50c1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi91dGlscy9taWRpLW5vdGUtY29udmVydGVyLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gTm90ZU51bWJlclRvTmFtZShub3RlKSB7XG4gICAgdmFyIHN0ZXA7XG4gICAgdmFyIGFsdGVyO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXG4gICAgdmFyIG9jdGF2ZSA9IE1hdGguZmxvb3Iobm90ZSAvIDEyKSAtIDE7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZmFsbHRocm91Z2ggKi9cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gICAgc3dpdGNoIChub3RlICUgMTIpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBzdGVwID0gXCJDXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzdGVwID0gXCJEXCI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgc3RlcCA9IFwiRVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgc3RlcCA9IFwiRlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgc3RlcCA9IFwiR1wiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICBhbHRlciA9IDE7XG4gICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgIHN0ZXAgPSBcIkFcIjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgc3RlcCA9IFwiQlwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8qIGVzbGludC1lbmFibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICAgIC8qIGVzbGludC1lbmFibGUgbm8tZmFsbHRocm91Z2ggKi9cbiAgICB2YXIgbm90ZU9iaiA9IHtcbiAgICAgICAgc3RlcDogc3RlcCxcbiAgICAgICAgb2N0YXZlOiBvY3RhdmUsXG4gICAgfTtcbiAgICBpZiAoYWx0ZXIpIHtcbiAgICAgICAgbm90ZU9iai5hbHRlciA9IGFsdGVyO1xuICAgIH1cbiAgICByZXR1cm4gbm90ZU9iajtcbn1cbmV4cG9ydHMuTm90ZU51bWJlclRvTmFtZSA9IE5vdGVOdW1iZXJUb05hbWU7XG52YXIgc3RlcFRvTnVtYmVyID0ge1xuICAgIEM6IDAsXG4gICAgRDogMixcbiAgICBFOiA0LFxuICAgIEY6IDUsXG4gICAgRzogNyxcbiAgICBBOiA5LFxuICAgIEI6IDExLFxufTtcbnZhciBzdGVwcyA9IFwiQUJDREVGR1wiO1xuZnVuY3Rpb24gTm90ZU5hbWVUb051bWJlcihub3RlTmFtZSkge1xuICAgIHZhciBzdGVwO1xuICAgIHZhciBvY3RhdmU7XG4gICAgdmFyIGFsdGVyO1xuICAgIGlmICh0eXBlb2Ygbm90ZU5hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSAvXihbQS1HXSkoWyNiXSk/KC0/XFxkKykkLy5leGVjKG5vdGVOYW1lKTtcbiAgICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWx0ZXJTdHJpbmcgPSBtYXRjaGVzWzJdO1xuICAgICAgICBzdGVwID0gbWF0Y2hlc1sxXTtcbiAgICAgICAgb2N0YXZlID0gTnVtYmVyKG1hdGNoZXNbM10pO1xuICAgICAgICBpZiAoYWx0ZXJTdHJpbmcgPT09IFwiYlwiKSB7XG4gICAgICAgICAgICBhbHRlciA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFsdGVyU3RyaW5nID09PSBcIiNcIikge1xuICAgICAgICAgICAgYWx0ZXIgPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGVwID0gbm90ZU5hbWUuc3RlcDtcbiAgICAgICAgYWx0ZXIgPSBub3RlTmFtZS5hbHRlcjtcbiAgICAgICAgb2N0YXZlID0gbm90ZU5hbWUub2N0YXZlO1xuICAgIH1cbiAgICBpZiAoYWx0ZXIgPT09IC0xKSB7XG4gICAgICAgIGFsdGVyID0gMTtcbiAgICAgICAgdmFyIGluaXRpYWxTdGVwSW5kZXggPSBzdGVwcy5pbmRleE9mKHN0ZXApO1xuICAgICAgICBzdGVwID0gc3RlcHNbKHN0ZXBzLmluZGV4T2Yoc3RlcCkgKyBzdGVwcy5sZW5ndGggLSAxKSAlIHN0ZXBzLmxlbmd0aF07XG4gICAgICAgIC8vIGUuZy4gZ29pbmcgZnJvbSBBYjQgLT4gRyMzXG4gICAgICAgIGlmIChzdGVwcy5pbmRleE9mKHN0ZXApID4gaW5pdGlhbFN0ZXBJbmRleCkge1xuICAgICAgICAgICAgb2N0YXZlIC09IDE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIG51bWJlciA9IHN0ZXBUb051bWJlcltzdGVwXTtcbiAgICBpZiAoYWx0ZXIgPT09IDEpIHtcbiAgICAgICAgbnVtYmVyICs9IDE7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tYWdpYy1udW1iZXJzXG4gICAgcmV0dXJuIG51bWJlciArICgob2N0YXZlICsgMSkgKiAxMik7XG59XG5leHBvcnRzLk5vdGVOYW1lVG9OdW1iZXIgPSBOb3RlTmFtZVRvTnVtYmVyO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlLnRzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vdXRpbHMvdmFyaWFibGUtbGVuZ3RoLXZhbHVlLnRzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiB0b1ZhcmlhYmxlTGVuZ3RoVmFsdWUobnVtKSB7XG4gICAgdmFyIGJ5dGVzID0gW107XG4gICAgZG8ge1xuICAgICAgICB2YXIgYnl0ZSA9IG51bSAmIDB4N0Y7XG4gICAgICAgIG51bSA9IG51bSA+PiA3O1xuICAgICAgICBpZiAoYnl0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYnl0ZSA9IGJ5dGUgKyAweDgwO1xuICAgICAgICB9XG4gICAgICAgIGJ5dGVzLnVuc2hpZnQoYnl0ZSk7XG4gICAgfSB3aGlsZSAobnVtID4gMCk7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcbn1cbmV4cG9ydHMudG9WYXJpYWJsZUxlbmd0aFZhbHVlID0gdG9WYXJpYWJsZUxlbmd0aFZhbHVlO1xuO1xuZnVuY3Rpb24gZnJvbVZhcmlhYmxlTGVuZ3RoVmFsdWUoYnVmZmVyLCBzdGFydEluZGV4KSB7XG4gICAgaWYgKHN0YXJ0SW5kZXggPT09IHZvaWQgMCkgeyBzdGFydEluZGV4ID0gMDsgfVxuICAgIHZhciB1QXJyYXkgPSBuZXcgVWludDhBcnJheShidWZmZXIsIHN0YXJ0SW5kZXgpO1xuICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgdmFyIGluZGV4ID0gLTE7XG4gICAgdmFyIGJ5dGVzUmVhZCA9IDA7XG4gICAgZG8ge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICB2YWx1ZSA9ICh2YWx1ZSA8PCA3KSArICh1QXJyYXlbaW5kZXhdICYgMHg3Rik7XG4gICAgICAgIGJ5dGVzUmVhZCArPSAxO1xuICAgIH0gd2hpbGUgKHVBcnJheVtpbmRleF0gJiAweDgwKTtcbiAgICByZXR1cm4gW2J5dGVzUmVhZCwgdmFsdWVdO1xufVxuZXhwb3J0cy5mcm9tVmFyaWFibGVMZW5ndGhWYWx1ZSA9IGZyb21WYXJpYWJsZUxlbmd0aFZhbHVlO1xuO1xuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIH0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92TDAxSlJFbFViMjlzY3k5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NJc0luZGxZbkJoWTJzNkx5OU5TVVJKVkc5dmJITXZMaTlOU1VSSlYzSnBkR1Z5TDAxSlJFbEdhV3hsTG5Seklpd2lkMlZpY0dGamF6b3ZMMDFKUkVsVWIyOXNjeTh1TDJsdVpHVjRMblJ6SWl3aWQyVmljR0ZqYXpvdkwwMUpSRWxVYjI5c2N5OHVMMjV2WkdWZmJXOWtkV3hsY3k5a1pXSjFaeTl6Y21NdlluSnZkM05sY2k1cWN5SXNJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12TGk5dWIyUmxYMjF2WkhWc1pYTXZaR1ZpZFdjdmMzSmpMMk52YlcxdmJpNXFjeUlzSW5kbFluQmhZMnM2THk5TlNVUkpWRzl2YkhNdkxpOXViMlJsWDIxdlpIVnNaWE12YlhNdmFXNWtaWGd1YW5NaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2Ym05a1pWOXRiMlIxYkdWekwzQnliMk5sYzNNdlluSnZkM05sY2k1cWN5SXNJbmRsWW5CaFkyczZMeTlOU1VSSlZHOXZiSE12TGk5MWRHbHNjeTlpZFdabVpYSXRkRzh0YzNSeWFXNW5MblJ6SWl3aWQyVmljR0ZqYXpvdkwwMUpSRWxVYjI5c2N5OHVMM1YwYVd4ekwybHVaR1Y0TG5Seklpd2lkMlZpY0dGamF6b3ZMMDFKUkVsVWIyOXNjeTh1TDNWMGFXeHpMMjFwWkdrdGJtOTBaUzFqYjI1MlpYSjBaWEl1ZEhNaUxDSjNaV0p3WVdOck9pOHZUVWxFU1ZSdmIyeHpMeTR2ZFhScGJITXZkbUZ5YVdGaWJHVXRiR1Z1WjNSb0xYWmhiSFZsTG5SeklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lKQlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRU5CUVVNN1FVRkRSQ3hQTzBGRFZrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN096dEJRVWRCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4clJFRkJNRU1zWjBOQlFXZERPMEZCUXpGRk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1owVkJRWGRFTEd0Q1FVRnJRanRCUVVNeFJUdEJRVU5CTEhsRVFVRnBSQ3hqUVVGak8wRkJReTlFT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hwUkVGQmVVTXNhVU5CUVdsRE8wRkJRekZGTEhkSVFVRm5TQ3h0UWtGQmJVSXNSVUZCUlR0QlFVTnlTVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzFEUVVFeVFpd3dRa0ZCTUVJc1JVRkJSVHRCUVVOMlJDeDVRMEZCYVVNc1pVRkJaVHRCUVVOb1JEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3c0UkVGQmMwUXNLMFJCUVN0RU96dEJRVVZ5U0R0QlFVTkJPenM3UVVGSFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRiRVpoTzBGQlEySTdRVUZEUVR0QlFVTkJMR2RFUVVGblJDeFBRVUZQTzBGQlEzWkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkN4alFVRmpMRzFDUVVGUExFTkJRVU1zYTBSQlFVODdRVUZETjBJc1kwRkJZeXh0UWtGQlR5eERRVUZETEd0RFFVRlZPMEZCUTJoRE8wRkJRMEU3UVVGRFFTdzBSRUZCTkVRc01FSkJRVEJDTEVWQlFVVTdRVUZEZUVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4NVFrRkJlVUk3UVVGRGVrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDVRa0ZCZVVJN1FVRkRla0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMSGRFUVVGM1JDeHhRMEZCY1VNN1FVRkROMFk3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQkxHOVRRVUZ2VXp0QlFVTndVenRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJDUVVFMFFpeHBRa0ZCYVVJN1FVRkROME1zVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVTBGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzTkVKQlFUUkNMR2xDUVVGcFFqdEJRVU0zUXl4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZOQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeGhRVUZoTzBGQlEySTdRVUZEUVN4VFFVRlRMRWxCUVVrN1FVRkRZanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZVUZCWVR0QlFVTmlPMEZCUTBFc1UwRkJVeXhKUVVGSk8wRkJRMkk3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRVHRCUVVOQkxHRkJRV0U3UVVGRFlqdEJRVU5CTEZOQlFWTXNTVUZCU1R0QlFVTmlPMEZCUTBFc2RVWkJRWFZHTEdsRVFVRnBSQ3hGUVVGRk8wRkJRekZKTEd0R1FVRnJSaXd3UTBGQk1FTXNSVUZCUlR0QlFVTTVTRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4aFFVRmhPMEZCUTJJc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4RFFVRkRPMEZCUTBRN096czdPenM3T3pzN096czdRVU01VkdFN1FVRkRZanRCUVVOQk8wRkJRMEU3UVVGRFFTdzRRMEZCT0VNc1kwRkJZenRCUVVNMVJDeHBRa0ZCYVVJc2JVSkJRVThzUTBGQlF5eDFSRUZCZFVJN1FVRkRhRVE3UVVGRFFTeFRRVUZUTEcxQ1FVRlBMRU5CUVVNc2FVTkJRVk03T3pzN096czdPenM3T3p0QlExQXhRanM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHM3UVVGRlJqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTEVWQlFVVTdRVUZEUmp0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WlFVRlpMRTlCUVU4N1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1JVRkJSVHRCUVVOR08wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNXVUZCV1R0QlFVTmFPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVVN1FVRkRSanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJhVUlzYlVKQlFVOHNRMEZCUXl4dlJFRkJWVHM3UVVGRmJrTXNUMEZCVHl4WFFVRlhPenRCUVVWc1FqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUlVGQlJUdEJRVU5HTzBGQlEwRTdRVUZEUVRzN096czdPenM3T3pzN096czdRVU4wVVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeDNRa0ZCZDBJc2JVSkJRVThzUTBGQlF5eHpRMEZCU1RzN1FVRkZjRU03UVVGRFFUdEJRVU5CTEVWQlFVVTdPMEZCUlVZN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQldTeGpRVUZqTzBGQlF6RkNPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTEdsQ1FVRnBRaXh6UWtGQmMwSTdRVUZEZGtNN1FVRkRRU3hoUVVGaE8wRkJRMkk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhaUVVGWk8wRkJRMW83UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWs3TzBGQlJVbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRanRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4aFFVRmhMRk5CUVZNN1FVRkRkRUk3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVazdRVUZEU2p0QlFVTkJPMEZCUTBFN08wRkJSVUVzWVVGQllTeHJRMEZCYTBNN1FVRkRMME03UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZkQlFWY3NUMEZCVHp0QlFVTnNRaXhaUVVGWk8wRkJRMW83UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRXNOa05CUVRaRExGTkJRVk03UVVGRGRFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUVzTmtOQlFUWkRMRk5CUVZNN1FVRkRkRVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WFFVRlhMRTlCUVU4N1FVRkRiRUlzV1VGQldTeFBRVUZQTzBGQlEyNUNPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGZEJRVmNzVFVGQlRUdEJRVU5xUWl4WlFVRlpPMEZCUTFvN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenM3T3pzN096czdPenM3UVVONlVVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1kwRkJZenRCUVVONlFpeFhRVUZYTEU5QlFVODdRVUZEYkVJc1dVRkJXU3hOUVVGTk8wRkJRMnhDTEZsQlFWazdRVUZEV2p0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmxCUVZrN1FVRkRXanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVjBGQlZ5eFBRVUZQTzBGQlEyeENMRmxCUVZrN1FVRkRXanRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmRCUVZjc1QwRkJUenRCUVVOc1FpeFpRVUZaTzBGQlExbzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN096czdPenM3T3pzN096dEJRMnBMUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFRRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRXRCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVMEZCVXp0QlFVTlVPMEZCUTBFN1FVRkRRU3hMUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEVOQlFVTTdRVUZEUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFdEJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4VFFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFc1UwRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPenM3UVVGSlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1MwRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVKQlFYVkNMSE5DUVVGelFqdEJRVU0zUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkNRVUZ4UWp0QlFVTnlRanM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2NVTkJRWEZET3p0QlFVVnlRenRCUVVOQk8wRkJRMEU3TzBGQlJVRXNNa0pCUVRKQ08wRkJRek5DTzBGQlEwRTdRVUZEUVR0QlFVTkJMRFJDUVVFMFFpeFZRVUZWT3pzN096czdPenM3T3pzN08wRkRka3g2UWp0QlFVTmlMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVPMEZCUTBFN1FVRkRRVHRCUVVOQkxHMUNRVUZ0UWl4WlFVRlpPMEZCUXk5Q08wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPenM3T3pzN08wRkRWR0U3UVVGRFlqdEJRVU5CTzBGQlEwRTdRVUZEUVN3NFEwRkJPRU1zWTBGQll6dEJRVU0xUkN4VFFVRlRMRzFDUVVGUExFTkJRVU1zZFVSQlFXOUNPMEZCUTNKRExGTkJRVk1zYlVKQlFVOHNRMEZCUXl4cFJVRkJlVUk3UVVGRE1VTXNVMEZCVXl4dFFrRkJUeXhEUVVGRExEWkVRVUYxUWpzN096czdPenM3T3pzN096dEJRMUF6UWp0QlFVTmlMRGhEUVVFNFF5eGpRVUZqTzBGQlF6VkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96czdPenM3T3pzN096czdPMEZEZUVkaE8wRkJRMklzT0VOQlFUaERMR05CUVdNN1FVRkROVVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUzBGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3huUTBGQlowTXNaMEpCUVdkQ08wRkJRMmhFTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeExRVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFaUxDSm1hV3hsSWpvaWJXbGthUzEwYjI5c2N5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJazFKUkVsVWIyOXNjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0pOU1VSSlZHOXZiSE5jSWwwZ1BTQm1ZV04wYjNKNUtDazdYRzU5S1NoM2FXNWtiM2NzSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlDSXNJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpTDF3aU8xeHVYRzVjYmlCY2RDOHZJRXh2WVdRZ1pXNTBjbmtnYlc5a2RXeGxJR0Z1WkNCeVpYUjFjbTRnWlhod2IzSjBjMXh1SUZ4MGNtVjBkWEp1SUY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4b1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXpJRDBnWENJdUwybHVaR1Y0TG5SelhDSXBPMXh1SWl3aVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1MllYSWdYMTloYzNOcFoyNGdQU0FvZEdocGN5QW1KaUIwYUdsekxsOWZZWE56YVdkdUtTQjhmQ0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnWDE5aGMzTnBaMjRnUFNCUFltcGxZM1F1WVhOemFXZHVJSHg4SUdaMWJtTjBhVzl1S0hRcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdjeXdnYVNBOUlERXNJRzRnUFNCaGNtZDFiV1Z1ZEhNdWJHVnVaM1JvT3lCcElEd2dianNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeklEMGdZWEpuZFcxbGJuUnpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdjQ0JwYmlCektTQnBaaUFvVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0hNc0lIQXBLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJiY0YwZ1BTQnpXM0JkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCME8xeHVJQ0FnSUgwN1hHNGdJQ0FnY21WMGRYSnVJRjlmWVhOemFXZHVMbUZ3Y0d4NUtIUm9hWE1zSUdGeVozVnRaVzUwY3lrN1hHNTlPMXh1VDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lGd2lYMTlsYzAxdlpIVnNaVndpTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dWRtRnlJR1JsWW5Wblh6RWdQU0J5WlhGMWFYSmxLRndpWkdWaWRXZGNJaWs3WEc1MllYSWdkWFJwYkhOZk1TQTlJSEpsY1hWcGNtVW9YQ0l1TGk5MWRHbHNjMXdpS1R0Y2JuWmhjaUJrWldKMVp5QTlJR1JsWW5Wblh6RXVaR1ZtWVhWc2RDaGNJbmh0YkRKdGFXUnBPazFKUkVsR2FXeGxYQ0lwTzF4dWRtRnlJSE4wY21sdVoxUnZRMmhoY2tOdlpHVkJjbkpoZVNBOUlHWjFibU4wYVc5dUlDaHpkSElwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZWcGJuUTRRWEp5WVhrb2MzUnlMbk53YkdsMEtGd2lYQ0lwTG0xaGNDaG1kVzVqZEdsdmJpQW9ZMmh5S1NCN0lISmxkSFZ5YmlCamFISXVZMmhoY2tOdlpHVkJkQ2d3S1RzZ2ZTa3BPMXh1ZlR0Y2JuWmhjaUJ0ZEdoa1UzUnlhVzVuSUQwZ2MzUnlhVzVuVkc5RGFHRnlRMjlrWlVGeWNtRjVLRndpVFZSb1pGd2lLVHRjYm5aaGNpQnRkSEpyVTNSeWFXNW5JRDBnYzNSeWFXNW5WRzlEYUdGeVEyOWtaVUZ5Y21GNUtGd2lUVlJ5YTF3aUtUdGNiblpoY2lCRlRrUmZUMFpmVkZKQlEwdGZSVlpGVGxRZ1BTQnVaWGNnVldsdWREaEJjbkpoZVNoYk1IaEdSaXdnTUhneVJpd2dNSGd3TUYwcE8xeHVkbUZ5SUc1MWJXSmxjbFJ2UW5sMFpYTWdQU0JtZFc1amRHbHZiaUFvYm5WdExDQnRhVzVDZVhSbGN5a2dlMXh1SUNBZ0lIWmhjaUJpZVhSbGN5QTlJRnRkTzF4dUlDQWdJR1J2SUh0Y2JpQWdJQ0FnSUNBZ1lubDBaWE11ZFc1emFHbG1kQ2h1ZFcwZ0ppQXdlRVpHS1R0Y2JpQWdJQ0FnSUNBZ2JuVnRJRDBnYm5WdElENCtJRGc3WEc0Z0lDQWdmU0IzYUdsc1pTQW9iblZ0SUQ0Z01DQjhmQ0JpZVhSbGN5NXNaVzVuZEdnZ1BDQnRhVzVDZVhSbGN5azdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlZhVzUwT0VGeWNtRjVLR0o1ZEdWektUdGNibjA3WEc1MllYSWdaMlYwVG05MFpVOXVSWFpsYm5RZ1BTQm1kVzVqZEdsdmJpQW9ibTkwWlN3Z1kyaGhibTVsYkN3Z2RtVnNiMk5wZEhrcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGVnBiblE0UVhKeVlYa29XMXh1SUNBZ0lDQWdJQ0F4TkRRZ0x5b2dUbTkwWlU5dUlDb3ZJQ3NnS0dOb1lXNXVaV3dnTFNBeEtTeGNiaUFnSUNBZ0lDQWdMeThnVlc1elpYUWdkRzl3SUdKcGREc2dkbUZzZFdVZ1kyRnVJRzl1YkhrZ1ltVWdOeUJpYVhSeklHeHZibWRjYmlBZ0lDQWdJQ0FnYm05MFpTQW1JREI0TjBZc1hHNGdJQ0FnSUNBZ0lIWmxiRzlqYVhSNUlDWWdNSGczUml4Y2JpQWdJQ0JkS1R0Y2JuMDdYRzUyWVhJZ1oyVjBUbTkwWlU5bVprVjJaVzUwSUQwZ1puVnVZM1JwYjI0Z0tHNXZkR1VzSUdOb1lXNXVaV3dzSUhabGJHOWphWFI1S1NCN1hHNGdJQ0FnY21WMGRYSnVJRzVsZHlCVmFXNTBPRUZ5Y21GNUtGdGNiaUFnSUNBZ0lDQWdNVEk0SUM4cUlFNXZkR1ZQWm1ZZ0tpOGdLeUFvWTJoaGJtNWxiQ0F0SURFcExGeHVJQ0FnSUNBZ0lDQXZMeUJWYm5ObGRDQjBiM0FnWW1sME95QjJZV3gxWlNCallXNGdiMjVzZVNCaVpTQTNJR0pwZEhNZ2JHOXVaMXh1SUNBZ0lDQWdJQ0J1YjNSbElDWWdNSGczUml4Y2JpQWdJQ0FnSUNBZ2RtVnNiMk5wZEhrZ0ppQXdlRGRHTEZ4dUlDQWdJRjBwTzF4dWZUdGNiblpoY2lCblpYUlFjbTluY21GdFEyaGhibWRsUlhabGJuUWdQU0JtZFc1amRHbHZiaUFvWDJFcElIdGNiaUFnSUNCMllYSWdZMmhoYm01bGJDQTlJRjloTG1Ob1lXNXVaV3dzSUhCeWIyZHlZVzBnUFNCZllTNXdjbTluY21GdE8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1ZXbHVkRGhCY25KaGVTaGJYRzRnSUNBZ0lDQWdJREU1TWlBdktpQlFjbTluY21GdFEyaGhibWRsSUNvdklDc2dLR05vWVc1dVpXd2dMU0F4S1N4Y2JpQWdJQ0FnSUNBZ2NISnZaM0poYlZ4dUlDQWdJRjBwTzF4dWZUdGNiblpoY2lCblpYUkdhV3hsU0dWaFpHVnlJRDBnWm5WdVkzUnBiMjRnS0Y5aEtTQjdYRzRnSUNBZ2RtRnlJR1JwZG1semFXOXVjeUE5SUY5aExtUnBkbWx6YVc5dWN5d2dkSEpoWTJ0RGIzVnVkQ0E5SUY5aExuUnlZV05yUTI5MWJuUTdYRzRnSUNBZ2RtRnlJR1p2Y20xaGRDQTlJSFJ5WVdOclEyOTFiblFnUFQwOUlERWdQMXh1SUNBZ0lDQWdJQ0F3SURwY2JpQWdJQ0FnSUNBZ01UdGNiaUFnSUNBdkx5QWpJRzltSUdScGRtbHphVzl1Y3lCd1pYSWdjWFZoY25SbGNpQnViM1JsSUNneE5TQmlhWFJ6SUc5dWJIa3BYRzRnSUNBZ2RtRnlJR1JwZG1semFXOXVjMEo1ZEdWeklEMGdiblZ0WW1WeVZHOUNlWFJsY3loa2FYWnBjMmx2Ym5NZ0ppQXdlRGRHUmtZc0lESXBPMXh1SUNBZ0lIWmhjaUIwY21GamEwTnZkVzUwUW5sMFpYTWdQU0J1ZFcxaVpYSlViMEo1ZEdWektIUnlZV05yUTI5MWJuUXNJRElwTzF4dUlDQWdJSFpoY2lCMGIzUmhiRXhsYm1kMGFDQTlJRzEwYUdSVGRISnBibWN1WW5sMFpVeGxibWQwYUNBclhHNGdJQ0FnSUNBZ0lDOHZJRFFnWW5sMFpYTWdabTl5SUd4bGJtZDBhQ0JtYVdWc1pDQWdYRzRnSUNBZ0lDQWdJRFFnSzF4dUlDQWdJQ0FnSUNBdkx5QXlJR0o1ZEdWeklHWnZjaUJtYjNKdFlYUWdabWxsYkdSY2JpQWdJQ0FnSUNBZ01pQXJYRzRnSUNBZ0lDQWdJSFJ5WVdOclEyOTFiblJDZVhSbGN5NWllWFJsVEdWdVozUm9JQ3RjYmlBZ0lDQWdJQ0FnWkdsMmFYTnBiMjV6UW5sMFpYTXVZbmwwWlV4bGJtZDBhRHRjYmlBZ0lDQjJZWElnYUdWaFpHVnlJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29kRzkwWVd4TVpXNW5kR2dwTzF4dUlDQWdJSFpoY2lCcGJtUmxlQ0E5SURBN1hHNGdJQ0FnYUdWaFpHVnlMbk5sZENodGRHaGtVM1J5YVc1bkxDQnBibVJsZUNrN1hHNGdJQ0FnYVc1a1pYZ2dLejBnYlhSb1pGTjBjbWx1Wnk1aWVYUmxUR1Z1WjNSb08xeHVJQ0FnSUM4dklFeGxibWQwYUNCbWFXVnNaQ3dnVFZOQ0lHWnBjbk4wWEc0Z0lDQWdhR1ZoWkdWeUxuTmxkQ2hWYVc1ME9FRnljbUY1TG05bUtEQXNJREFzSURBc0lEWXBMQ0JwYm1SbGVDazdYRzRnSUNBZ2FXNWtaWGdnS3owZ05EdGNiaUFnSUNCb1pXRmtaWEl1YzJWMEtGVnBiblE0UVhKeVlYa3ViMllvTUN3Z1ptOXliV0YwS1N3Z2FXNWtaWGdwTzF4dUlDQWdJR2x1WkdWNElDczlJREk3WEc0Z0lDQWdhR1ZoWkdWeUxuTmxkQ2gwY21GamEwTnZkVzUwUW5sMFpYTXNJR2x1WkdWNEtUdGNiaUFnSUNCcGJtUmxlQ0FyUFNCMGNtRmphME52ZFc1MFFubDBaWE11WW5sMFpVeGxibWQwYUR0Y2JpQWdJQ0JvWldGa1pYSXVjMlYwS0dScGRtbHphVzl1YzBKNWRHVnpMQ0JwYm1SbGVDazdYRzRnSUNBZ2FXNWtaWGdnS3owZ1pHbDJhWE5wYjI1elFubDBaWE11WW5sMFpVeGxibWQwYUR0Y2JpQWdJQ0J5WlhSMWNtNGdhR1ZoWkdWeU8xeHVmVHRjYm5aaGNpQm5aWFJVY21GamEwaGxZV1JsY2lBOUlHWjFibU4wYVc5dUlDaGZZU2tnZTF4dUlDQWdJSFpoY2lCc1pXNW5kR2dnUFNCZllTNXNaVzVuZEdnN1hHNGdJQ0FnTHk4Z05DQm1iM0lnZEdobElFMVVjbXNnYUdWaFpHVnlMQ0EwSUdadmNpQjBhR1VnYkdWdVozUm9JR0oxWm1abGNseHVJQ0FnSUhaaGNpQmlkV1ptSUQwZ2JtVjNJRUZ5Y21GNVFuVm1abVZ5S0RncE8xeHVJQ0FnSUc1bGR5QlZhVzUwT0VGeWNtRjVLR0oxWm1ZcExuTmxkQ2h0ZEhKclUzUnlhVzVuTENBd0tUdGNiaUFnSUNCdVpYY2dSR0YwWVZacFpYY29ZblZtWmlrdWMyVjBWV2x1ZERNeUtEUXNJR3hsYm1kMGFDazdYRzRnSUNBZ2NtVjBkWEp1SUc1bGR5QlZhVzUwT0VGeWNtRjVLR0oxWm1ZcE8xeHVmVHRjYm5aaGNpQk5TVVJKUm1sc1pTQTlJQzhxS2lCQVkyeGhjM01nS2k4Z0tHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQm1kVzVqZEdsdmJpQk5TVVJKUm1sc1pTaGZZU2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdaR2wyYVhOcGIyNXpJRDBnWDJFdVpHbDJhWE5wYjI1ek8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1KMVptWmxjbk1nUFNCYlhUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MGNtRmphM01nUFNCN2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJXNXBWSEpoWTJ0RmRtVnVkSE1nUFNCYlhUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1a2FYWnBjMmx2Ym5NZ1BTQmthWFpwYzJsdmJuTTdYRzRnSUNBZ2ZWeHVJQ0FnSUUxSlJFbEdhV3hsTG5CeWIzUnZkSGx3WlM1d2NtOW5jbUZ0UTJoaGJtZGxJRDBnWm5WdVkzUnBiMjRnS0Y5aEtTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCdlptWnpaWFFnUFNCZllTNXZabVp6WlhRc0lIQnliMmR5WVcwZ1BTQmZZUzV3Y205bmNtRnRMQ0IwY21GamF5QTlJRjloTG5SeVlXTnJMQ0JmWWlBOUlGOWhMbU5vWVc1dVpXd3NJR05vWVc1dVpXd2dQU0JmWWlBOVBUMGdkbTlwWkNBd0lEOGdNU0E2SUY5aU8xeHVJQ0FnSUNBZ0lDQjJZWElnY0hKdlozSmhiVU5vWVc1blpVVjJaVzUwSUQwZ1oyVjBVSEp2WjNKaGJVTm9ZVzVuWlVWMlpXNTBLSHNnWTJoaGJtNWxiRG9nWTJoaGJtNWxiQ3dnY0hKdlozSmhiVG9nY0hKdlozSmhiU0I5S1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR0oxWm1abGNrbHVabThnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWREb2djSEp2WjNKaGJVTm9ZVzVuWlVWMlpXNTBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblJVZVhCbE9pQXhPVElnTHlvZ1VISnZaM0poYlVOb1lXNW5aU0FxTHl4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JwZG1semFXOXVUMlptYzJWME9pQnZabVp6WlhRc1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJR2xtSUNoMGNtRmpheUE5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl0Ym1sVWNtRmphMFYyWlc1MGN5NXdkWE5vS0dKMVptWmxja2x1Wm04cE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRW9kSEpoWTJzZ2FXNGdkR2hwY3k1MGNtRmphM01wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUwY21GamEzTmJkSEpoWTJ0ZElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWRXWm1aWEp6T2lCYlhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTBjbUZqYTNOYmRISmhZMnRkTG1KMVptWmxjbk11Y0hWemFDaGlkV1ptWlhKSmJtWnZLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc0Z0lDQWdUVWxFU1VacGJHVXVjSEp2ZEc5MGVYQmxMblJwYldWVGFXZHVZWFIxY21VZ1BTQm1kVzVqZEdsdmJpQW9YMkVwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzUxYldWeVlYUnZjaUE5SUY5aExtNTFiV1Z5WVhSdmNpd2daR1Z1YjIxcGJtRjBiM0lnUFNCZllTNWtaVzV2YldsdVlYUnZjanRjYmlBZ0lDQWdJQ0FnZG1GeUlHVjJaVzUwSUQwZ2JtVjNJRlZwYm5RNFFYSnlZWGtvVzF4dUlDQWdJQ0FnSUNBZ0lDQWdNalUxSUM4cUlFMWxkR0VnS2k4c1hHNGdJQ0FnSUNBZ0lDQWdJQ0E0T0NBdktpQlVhVzFsVTJsbmJtRjBkWEpsSUNvdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnTkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzUxYldWeVlYUnZjaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lFMWhkR2d1Ykc5bk1paGtaVzV2YldsdVlYUnZjaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJBZEc5a2J6b2dabWxuZFhKbElHOTFkQ0JvYjNjZ2RHOGdZV04wZFdGc2JIa2daR1ZoYkNCM2FYUm9JSFJvWlhObElIQmhjbUZ0WlhSbGNuTmNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklISnZZblZ6ZEd4NUxTMUpJR1J2YmlkMElISmxZV3hzZVNCMWJtUmxjbk4wWVc1a0lIUm9aVzBnWlc1MGFYSmxiSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRTUxYldKbGNpQnZaaUJ0WlhSeWIyNXZiV1VnZEdsamEzTWdjR1Z5SUhGMVlYSjBaWElnYm05MFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnTWpRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCT2RXMWlaWElnYjJZZ01TOHpNbTVrSUc1dmRHVnpJSEJsY2lCTlNVUkpJSEYxWVhKMFpYSWdibTkwWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdPQ3hjYmlBZ0lDQWdJQ0FnWFNrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjIxdWFWUnlZV05yUlhabGJuUnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUTZJR1YyWlc1MExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUlVlWEJsT2lBeU5UVWdMeW9nVFdWMFlTQXFMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnBkbWx6YVc5dVQyWm1jMlYwT2lBd0xGeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFMUpSRWxHYVd4bExuQnliM1J2ZEhsd1pTNXJaWGxUYVdkdVlYUjFjbVVnUFNCbWRXNWpkR2x2YmlBb1gyRXBJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHdGxlVk5wWjI1aGRIVnlaU0E5SUY5aExtdGxlVk5wWjI1aGRIVnlaU3dnWDJJZ1BTQmZZUzV2Wm1aelpYUXNJRzltWm5ObGRDQTlJRjlpSUQwOVBTQjJiMmxrSURBZ1B5QXdJRG9nWDJJN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsZG1WdWRDQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtGdGNiaUFnSUNBZ0lDQWdJQ0FnSURJMU5TQXZLaUJOWlhSaElDb3ZMRnh1SUNBZ0lDQWdJQ0FnSUNBZ09Ea2dMeW9nUzJWNVUybG5ibUYwZFhKbElDb3ZMRnh1SUNBZ0lDQWdJQ0FnSUNBZ01peGNiaUFnSUNBZ0lDQWdJQ0FnSUd0bGVWTnBaMjVoZEhWeVpTNXphR0Z5Y0hNc1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCdFlXcHZjaUFvTUNrZ2RuTXVJRzFwYm05eUlDZ3hLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRSFJ2Wkc4NklFRmpkSFZoYkd4NUlHWnBibVFnYldGcWIzSXZiV2x1YjNJZ2EyVjVJR1p5YjIwZ1dFMU1YRzRnSUNBZ0lDQWdJQ0FnSUNCclpYbFRhV2R1WVhSMWNtVXViVzlrWlNBOVBUMGdYQ0p0YVc1dmNsd2lJRDhnTVNBNklEQXNYRzRnSUNBZ0lDQWdJRjBwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTl0Ym1sVWNtRmphMFYyWlc1MGN5NXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1ME9pQmxkbVZ1ZEN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1YyWlc1MFZIbHdaVG9nTWpVMUlDOHFJRTFsZEdFZ0tpOHNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2FYWnBjMmx2Yms5bVpuTmxkRG9nYjJabWMyVjBMRnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0I5TzF4dUlDQWdJRTFKUkVsR2FXeGxMbkJ5YjNSdmRIbHdaUzV6WlhSVWFYUnNaU0E5SUdaMWJtTjBhVzl1SUNoMGFYUnNaU2tnZTF4dUlDQWdJQ0FnSUNBdkx5QmhaR1FnTVNCbWIzSWdiblZzYkNCMFpYSnRhVzVoZEc5eUlHSjVkR1ZjYmlBZ0lDQWdJQ0FnZG1GeUlHeGxibWQwYUNBOUlIVjBhV3h6WHpFdWRHOVdZWEpwWVdKc1pVeGxibWQwYUZaaGJIVmxLSFJwZEd4bExteGxibWQwYUNBcklERXBPMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyaGhjbk1nUFNCemRISnBibWRVYjBOb1lYSkRiMlJsUVhKeVlYa29kR2wwYkdVZ0t5QmNJbHhjTUZ3aUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUhSdmRHRnNUR1Z1WjNSb0lEMGdNaUFySUM4dklERWdZbmwwWlNCbFlXTm9JR1p2Y2lCemRHRjBkWE1nWVc1a0lITjFZblI1Y0dWY2JpQWdJQ0FnSUNBZ0lDQWdJR3hsYm1kMGFDNWllWFJsVEdWdVozUm9JQ3RjYmlBZ0lDQWdJQ0FnSUNBZ0lHTm9ZWEp6TG1KNWRHVk1aVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIWmhjaUJsZG1WdWRDQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtIUnZkR0ZzVEdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHbHVaR1Y0SUQwZ01EdGNiaUFnSUNBZ0lDQWdaWFpsYm5RdWMyVjBLRlZwYm5RNFFYSnlZWGt1YjJZb01qVTFJQzhxSUUxbGRHRWdLaThzSURNZ0x5b2dWSEpoWTJ0T1lXMWxJQ292S1N3Z2FXNWtaWGdwTzF4dUlDQWdJQ0FnSUNCcGJtUmxlQ0FyUFNBeU8xeHVJQ0FnSUNBZ0lDQmxkbVZ1ZEM1elpYUW9iR1Z1WjNSb0xDQnBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlHeGxibWQwYUM1aWVYUmxUR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQmxkbVZ1ZEM1elpYUW9ZMmhoY25Nc0lHbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ2FXNWtaWGdnS3owZ1kyaGhjbk11WW5sMFpVeGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpZFdabVpYSnpMbkIxYzJnb2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUTZJR1YyWlc1MExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUlVlWEJsT2lBeU5UVWdMeW9nVFdWMFlTQXFMeXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHUnBkbWx6YVc5dVQyWm1jMlYwT2lBd0xGeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFMUpSRWxHYVd4bExuQnliM1J2ZEhsd1pTNXViM1JsSUQwZ1puVnVZM1JwYjI0Z0tGOWhLU0I3WEc0Z0lDQWdJQ0FnSUhaaGNpQnViM1JsSUQwZ1gyRXVibTkwWlN3Z1pIVnlZWFJwYjI0Z1BTQmZZUzVrZFhKaGRHbHZiaXdnYjJabWMyVjBJRDBnWDJFdWIyWm1jMlYwTENCMGNtRmpheUE5SUY5aExuUnlZV05yTENCZllpQTlJRjloTG1Ob1lXNXVaV3dzSUdOb1lXNXVaV3dnUFNCZllpQTlQVDBnZG05cFpDQXdJRDhnTVNBNklGOWlMQ0JmWXlBOUlGOWhMblpsYkc5amFYUjVMQ0IyWld4dlkybDBlU0E5SUY5aklEMDlQU0IyYjJsa0lEQWdQeUEyTkNBNklGOWpMQ0JmWkNBOUlGOWhMbkpsYkdWaGMyVXNJSEpsYkdWaGMyVWdQU0JmWkNBOVBUMGdkbTlwWkNBd0lEOGdkbVZzYjJOcGRIa2dPaUJmWkN3Z1gyVWdQU0JmWVM1dFpYUmhMQ0J0WlhSaElEMGdYMlVnUFQwOUlIWnZhV1FnTUNBL0lIdDlJRG9nWDJVN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ1YjNSbFQyNUZkbVZ1ZENBOUlHZGxkRTV2ZEdWUGJrVjJaVzUwS0c1dmRHVXNJR05vWVc1dVpXd3NJSFpsYkc5amFYUjVLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlHNXZkR1ZPWVcxbElEMGdkWFJwYkhOZk1TNU9iM1JsVG5WdFltVnlWRzlPWVcxbEtHNXZkR1VwTzF4dUlDQWdJQ0FnSUNCdWIzUmxUbUZ0WlNBOUlGd2lYQ0lnS3lCdWIzUmxUbUZ0WlM1emRHVndJQ3NnS0c1dmRHVk9ZVzFsTG1Gc2RHVnlJRDA5UFNBeElEOWNiaUFnSUNBZ0lDQWdJQ0FnSUNjakp5QTZYRzRnSUNBZ0lDQWdJQ0FnSUNCdWIzUmxUbUZ0WlM1aGJIUmxjaUE5UFQwZ0xURWdQMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ2RpSnlBNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0p5Y3BJQ3NnYm05MFpVNWhiV1V1YjJOMFlYWmxPMXh1SUNBZ0lDQWdJQ0JwWmlBb0lTaDBjbUZqYXlCcGJpQjBhR2x6TG5SeVlXTnJjeWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRISmhZMnR6VzNSeVlXTnJYU0E5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWRXWm1aWEp6T2lCYlhTeGNiaUFnSUNBZ0lDQWdJQ0FnSUgwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdkR2hwY3k1MGNtRmphM05iZEhKaFkydGRMbUoxWm1abGNuTXVjSFZ6YUNoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsZG1WdWREb2dibTkwWlU5dVJYWmxiblFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZEZSNWNHVTZJREUwTkNBdktpQk9iM1JsVDI0Z0tpOHNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2FYWnBjMmx2Yms5bVpuTmxkRG9nYjJabWMyVjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JXVjBZVG9nWDE5aGMzTnBaMjRvZXlCdVlXMWxPaUJ1YjNSbFRtRnRaU0I5TENCdFpYUmhLU3hjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lHUmxZblZuS0NkdWIzUmxJRzl1T2lBbkxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdWIzUmxPaUJ1YjNSbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJabWMyVjBPaUJ2Wm1aelpYUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYUdGdWJtVnNPaUJqYUdGdWJtVnNMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RtVnNiMk5wZEhrNklIWmxiRzlqYVhSNUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlhabGJuUTZJRzV2ZEdWUGJrVjJaVzUwTEZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNBZ0lDQWdkbUZ5SUc1dmRHVlBabVpGZG1WdWRDQTlJR2RsZEU1dmRHVlBabVpGZG1WdWRDaHViM1JsTENCamFHRnVibVZzTENCeVpXeGxZWE5sS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJRzV2ZEdWUFptWlBabVp6WlhRZ1BTQnZabVp6WlhRZ0t5QmtkWEpoZEdsdmJqdGNiaUFnSUNBZ0lDQWdaR1ZpZFdjb0oyNXZkR1VnYjJabU9pQW5MQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnViM1JsT2lCdWIzUmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCdWIzUmxUMlptVDJabWMyVjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibTVsYkRvZ1kyaGhibTVsYkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYkdWaGMyVTZJSEpsYkdWaGMyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdFpYUmhPaUJmWDJGemMybG5iaWg3SUc1aGJXVTZJRzV2ZEdWT1lXMWxJSDBzSUcxbGRHRXBMRnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUwY21GamEzTmJkSEpoWTJ0ZExtSjFabVpsY25NdWNIVnphQ2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ2JtOTBaVTltWmtWMlpXNTBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pYWmxiblJVZVhCbE9pQXhNamdnTHlvZ1RtOTBaVTltWmlBcUx5eGNiaUFnSUNBZ0lDQWdJQ0FnSUdScGRtbHphVzl1VDJabWMyVjBPaUJ1YjNSbFQyWm1UMlptYzJWMExGeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlPMXh1SUNBZ0lFMUpSRWxHYVd4bExuQnliM1J2ZEhsd1pTNXpaWFJVWlcxd2J5QTlJR1oxYm1OMGFXOXVJQ2gwWlcxd2J5a2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2JXbGpjbTl6WldOdmJtUnpVR1Z5VVhWaGNuUmxjazV2ZEdVZ1BTQTJaVGNnTHlCMFpXMXdienRjYmlBZ0lDQWdJQ0FnZG1GeUlIUmxiWEJ2UW5sMFpYTWdQU0J1ZFcxaVpYSlViMEo1ZEdWektHMXBZM0p2YzJWamIyNWtjMUJsY2xGMVlYSjBaWEpPYjNSbExDQXpLVHRjYmlBZ0lDQWdJQ0FnTHk4Z01TQmllWFJsSUdWaFkyZ2dabTl5SUhOMFlYUjFjeUIwZVhCbElHRnVaQ0J0WlhSaElIUjVjR1VzSUdGdVpDQXhJR1p2Y2lCamIyNXpkR0Z1ZENCMllXeDFaU0F3ZURBeklHRm1kR1Z5SUcxbGRHRWdkSGx3WlZ4dUlDQWdJQ0FnSUNCMllYSWdkRzkwWVd4TVpXNW5kR2dnUFNBeklDdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSbGJYQnZRbmwwWlhNdVlubDBaVXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdkbUZ5SUdWMlpXNTBJRDBnYm1WM0lGVnBiblE0UVhKeVlYa29kRzkwWVd4TVpXNW5kR2dwTzF4dUlDQWdJQ0FnSUNCMllYSWdhVzVrWlhnZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JsZG1WdWRDNXpaWFFvVldsdWREaEJjbkpoZVM1dlppZ3lOVFVnTHlvZ1RXVjBZU0FxTHl3Z09ERWdMeW9nVTJWMFZHVnRjRzhnS2k4c0lETXBMQ0JwYm1SbGVDazdYRzRnSUNBZ0lDQWdJR2x1WkdWNElDczlJRE03WEc0Z0lDQWdJQ0FnSUdWMlpXNTBMbk5sZENoMFpXMXdiMEo1ZEdWekxDQnBibVJsZUNrN1hHNGdJQ0FnSUNBZ0lHbHVaR1Y0SUNzOUlIUmxiWEJ2UW5sMFpYTXVZbmwwWlV4bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZiVzVwVkhKaFkydEZkbVZ1ZEhNdWNIVnphQ2g3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZERvZ1pYWmxiblFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxkbVZ1ZEZSNWNHVTZJREkxTlNBdktpQk5aWFJoSUNvdkxGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdsMmFYTnBiMjVQWm1aelpYUTZJREFzWEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwN1hHNGdJQ0FnVFVsRVNVWnBiR1V1Y0hKdmRHOTBlWEJsTG5OdmNuUkNkV1ptWlhKeklEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdYM1JvYVhNZ1BTQjBhR2x6TzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVDJKcVpXTjBMbXRsZVhNb2RHaHBjeTUwY21GamEzTXBMbkpsWkhWalpTaG1kVzVqZEdsdmJpQW9jbVZrZFdOMGFXOXVMQ0IwY21GamEwNTFiV0psY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MyaGhiR3h2ZHlCamJHOXVaU0IwYnlCaGRtOXBaQ0JoWkdScGJtY2diMjF1YVZSeVlXTnJSWFpsYm5SeklIUnZJSFJvWlNCaFkzUjFZV3dnZEhKaFkydHpYRzRnSUNBZ0lDQWdJQ0FnSUNCMllYSWdkSEpoWTJ0Q2RXWm1aWEp6SUQwZ1gzUm9hWE11ZEhKaFkydHpXM1J5WVdOclRuVnRZbVZ5WFM1aWRXWm1aWEp6TG5Oc2FXTmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbUZqYTBKMVptWmxjbk11ZFc1emFHbG1kQzVoY0hCc2VTaDBjbUZqYTBKMVptWmxjbk1zSUY5MGFHbHpMbTl0Ym1sVWNtRmphMFYyWlc1MGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpXUjFZM1JwYjI1YmRISmhZMnRPZFcxaVpYSmRJRDBnZEhKaFkydENkV1ptWlhKekxuTnZjblFvWm5WdVkzUnBiMjRnS0dFc0lHSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2IyWm1jMlYwUkdsbVppQTlJR0V1WkdsMmFYTnBiMjVQWm1aelpYUWdMU0JpTG1ScGRtbHphVzl1VDJabWMyVjBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodlptWnpaWFJFYVdabUlEMDlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaExtVjJaVzUwVkhsd1pTQTlQVDBnWWk1bGRtVnVkRlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoTG1WMlpXNTBWSGx3WlNBOVBUMGdNVGt5SUM4cUlGQnliMmR5WVcxRGFHRnVaMlVnS2k4Z2ZIeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRXVaWFpsYm5SVWVYQmxJRDA5UFNBeU5UVWdMeW9nVFdWMFlTQXFMeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSXVaWFpsYm5SVWVYQmxJRDA5UFNBeE9USWdMeW9nVUhKdlozSmhiVU5vWVc1blpTQXFMeUI4ZkZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHSXVaWFpsYm5SVWVYQmxJRDA5UFNBeU5UVWdMeW9nVFdWMFlTQXFMeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUMweE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBeE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2IyWm1jMlYwUkdsbVpqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsWkhWamRHbHZianRjYmlBZ0lDQWdJQ0FnZlN3Z2UzMHBPMXh1SUNBZ0lIMDdYRzRnSUNBZ1RVbEVTVVpwYkdVdWNISnZkRzkwZVhCbExuUnZRWEp5WVhsQ2RXWm1aWElnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSFpoY2lCaWRXWm1aWEp6SUQwZ2RHaHBjeTV6YjNKMFFuVm1abVZ5Y3lncE8xeHVJQ0FnSUNBZ0lDQjJZWElnZEhKaFkydERiM1Z1ZENBOUlFOWlhbVZqZEM1clpYbHpLSFJvYVhNdWRISmhZMnR6S1M1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUhaaGNpQjBjbUZqYTB4bGJtZDBhSE1nUFNCUFltcGxZM1F1YTJWNWN5aGlkV1ptWlhKektTNXlaV1IxWTJVb1puVnVZM1JwYjI0Z0tIUnZkR0ZzY3l3Z2RISmhZMnRPZFcxaVpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhjaUJ3Y21WMlJIVnlZWFJwYjI0Z1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHOTBZV3h6VzNSeVlXTnJUblZ0WW1WeVhTQTlJR0oxWm1abGNuTmJkSEpoWTJ0T2RXMWlaWEpkTG5KbFpIVmpaU2htZFc1amRHbHZiaUFvZEc5MFlXd3NJRzFwWkdsRmRtVnVkRWx1Wm04cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBiM1JoYkNBOUlIUnZkR0ZzSUNzZ2JXbGthVVYyWlc1MFNXNW1ieTVsZG1WdWRDNXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR1JsYkhSaFZHbHRaU0E5SUcxcFpHbEZkbVZ1ZEVsdVptOHVaR2wyYVhOcGIyNVBabVp6WlhRZ0xTQndjbVYyUkhWeVlYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1GeUlHUmxiSFJoVkdsdFpVSjFabVpsY2lBOUlIVjBhV3h6WHpFdWRHOVdZWEpwWVdKc1pVeGxibWQwYUZaaGJIVmxLR1JsYkhSaFZHbHRaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc5MFlXd2dLejBnWkdWc2RHRlVhVzFsUW5WbVptVnlMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRhV1JwUlhabGJuUkpibVp2TG1SbGJIUmhWR2x0WlVKMVptWmxjaUE5SUdSbGJIUmhWR2x0WlVKMVptWmxjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y21WMlJIVnlZWFJwYjI0Z1BTQnRhV1JwUlhabGJuUkpibVp2TG1ScGRtbHphVzl1VDJabWMyVjBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQjBiM1JoYkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBzSURBcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJ2ZEdGc2N6dGNiaUFnSUNBZ0lDQWdmU3dnZTMwcE8xeHVJQ0FnSUNBZ0lDQjJZWElnYUdWaFpHVnlRMmgxYm1zZ1BTQm5aWFJHYVd4bFNHVmhaR1Z5S0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JwZG1semFXOXVjem9nZEdocGN5NWthWFpwYzJsdmJuTXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRmphME52ZFc1ME9pQjBjbUZqYTBOdmRXNTBMRnh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJSFJ5WVdOclNHVmhaR1Z5Y3lBOUlFOWlhbVZqZEM1clpYbHpLR0oxWm1abGNuTXBMbkpsWkhWalpTaG1kVzVqZEdsdmJpQW9hR1ZoWkdWeWN5d2dkSEpoWTJ0T2RXMWlaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hsWVdSbGNuTmJkSEpoWTJ0T2RXMWlaWEpkSUQwZ1oyVjBWSEpoWTJ0SVpXRmtaWElvZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGJtZDBhRG9nZEhKaFkydE1aVzVuZEdoelczUnlZV05yVG5WdFltVnlYU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdobFlXUmxjbk03WEc0Z0lDQWdJQ0FnSUgwc0lIdDlLVHRjYmlBZ0lDQWdJQ0FnZG1GeUlIUnZkR0ZzVEdWdVozUm9JRDBnYUdWaFpHVnlRMmgxYm1zdWJHVnVaM1JvTzF4dUlDQWdJQ0FnSUNCMGIzUmhiRXhsYm1kMGFDQXJQU0JQWW1wbFkzUXVhMlY1Y3loMGNtRmphMGhsWVdSbGNuTXBMbkpsWkhWalpTaG1kVzVqZEdsdmJpQW9kRzkwWVd3c0lIUnlZV05yVG5WdFltVnlLU0I3SUhKbGRIVnliaUIwYjNSaGJDQXJJSFJ5WVdOclNHVmhaR1Z5YzF0MGNtRmphMDUxYldKbGNsMHViR1Z1WjNSb095QjlMQ0F3S1R0Y2JpQWdJQ0FnSUNBZ2RHOTBZV3hNWlc1bmRHZ2dLejBnVDJKcVpXTjBMbXRsZVhNb1luVm1abVZ5Y3lrdWNtVmtkV05sS0daMWJtTjBhVzl1SUNoMGIzUmhiQ3dnZEhKaFkydE9kVzFpWlhJcElIc2djbVYwZFhKdUlIUnZkR0ZzSUNzZ2RISmhZMnRNWlc1bmRHaHpXM1J5WVdOclRuVnRZbVZ5WFRzZ2ZTd2dNQ2s3WEc0Z0lDQWdJQ0FnSUhSdmRHRnNUR1Z1WjNSb0lDczlJRVZPUkY5UFJsOVVVa0ZEUzE5RlZrVk9WQzVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJSFpoY2lCaWRXWm1JRDBnYm1WM0lFRnljbUY1UW5WbVptVnlLSFJ2ZEdGc1RHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ2RtRnlJR0Z5Y2lBOUlHNWxkeUJWYVc1ME9FRnljbUY1S0dKMVptWXBPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2IyWm1jMlYwSUQwZ01EdGNiaUFnSUNBZ0lDQWdZWEp5TG5ObGRDaG9aV0ZrWlhKRGFIVnVheXdnYjJabWMyVjBLVHRjYmlBZ0lDQWdJQ0FnYjJabWMyVjBJQ3M5SUdobFlXUmxja05vZFc1ckxteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ1QySnFaV04wTG10bGVYTW9ZblZtWm1WeWN5a3VabTl5UldGamFDaG1kVzVqZEdsdmJpQW9kSEpoWTJ0T2RXMWlaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0Z5Y2k1elpYUW9kSEpoWTJ0SVpXRmtaWEp6VzNSeVlXTnJUblZ0WW1WeVhTd2diMlptYzJWMEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5bVpuTmxkQ0FyUFNCMGNtRmphMGhsWVdSbGNuTmJkSEpoWTJ0T2RXMWlaWEpkTG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSjFabVpsY25OYmRISmhZMnRPZFcxaVpYSmRMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLRzFwWkdsRmRtVnVkRWx1Wm04cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdWc2RHRlVhVzFsUW5WbVptVnlJRDBnYldsa2FVVjJaVzUwU1c1bWJ5NWtaV3gwWVZScGJXVkNkV1ptWlhJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lYSnlMbk5sZENoa1pXeDBZVlJwYldWQ2RXWm1aWElzSUc5bVpuTmxkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJabWMyVjBJQ3M5SUdSbGJIUmhWR2x0WlVKMVptWmxjaTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEp5TG5ObGRDaHRhV1JwUlhabGJuUkpibVp2TG1WMlpXNTBMQ0J2Wm1aelpYUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGRDQXJQU0J0YVdScFJYWmxiblJKYm1adkxtVjJaVzUwTG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMHBPMXh1SUNBZ0lDQWdJQ0I5S1R0Y2JpQWdJQ0FnSUNBZ1lYSnlMbk5sZENoRlRrUmZUMFpmVkZKQlEwdGZSVlpGVGxRc0lHOW1abk5sZENrN1hHNGdJQ0FnSUNBZ0lHOW1abk5sZENBclBTQkZUa1JmVDBaZlZGSkJRMHRmUlZaRlRsUXViR1Z1WjNSb08xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1luVm1aanRjYmlBZ0lDQjlPMXh1SUNBZ0lISmxkSFZ5YmlCTlNVUkpSbWxzWlR0Y2JuMG9LU2s3WEc1bGVIQnZjblJ6TGsxSlJFbEdhV3hsSUQwZ1RVbEVTVVpwYkdVN1hHNGlMQ0pjSW5WelpTQnpkSEpwWTNSY0lqdGNibVoxYm1OMGFXOXVJRjlmWlhod2IzSjBLRzBwSUh0Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJ3SUdsdUlHMHBJR2xtSUNnaFpYaHdiM0owY3k1b1lYTlBkMjVRY205d1pYSjBlU2h3S1NrZ1pYaHdiM0owYzF0d1hTQTlJRzFiY0YwN1hHNTlYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1MllYSWdUVWxFU1VacGJHVmZNU0E5SUhKbGNYVnBjbVVvWENJdUwwMUpSRWxYY21sMFpYSXZUVWxFU1VacGJHVmNJaWs3WEc1bGVIQnZjblJ6TGsxSlJFbEdhV3hsSUQwZ1RVbEVTVVpwYkdWZk1TNU5TVVJKUm1sc1pUdGNibDlmWlhod2IzSjBLSEpsY1hWcGNtVW9YQ0l1TDNWMGFXeHpYQ0lwS1R0Y2JpSXNJaThxSUdWemJHbHVkQzFsYm5ZZ1luSnZkM05sY2lBcUwxeHVYRzR2S2lwY2JpQXFJRlJvYVhNZ2FYTWdkR2hsSUhkbFlpQmljbTkzYzJWeUlHbHRjR3hsYldWdWRHRjBhVzl1SUc5bUlHQmtaV0oxWnlncFlDNWNiaUFxTDF4dVhHNWxlSEJ2Y25SekxteHZaeUE5SUd4dlp6dGNibVY0Y0c5eWRITXVabTl5YldGMFFYSm5jeUE5SUdadmNtMWhkRUZ5WjNNN1hHNWxlSEJ2Y25SekxuTmhkbVVnUFNCellYWmxPMXh1Wlhod2IzSjBjeTVzYjJGa0lEMGdiRzloWkR0Y2JtVjRjRzl5ZEhNdWRYTmxRMjlzYjNKeklEMGdkWE5sUTI5c2IzSnpPMXh1Wlhod2IzSjBjeTV6ZEc5eVlXZGxJRDBnYkc5allXeHpkRzl5WVdkbEtDazdYRzVjYmk4cUtseHVJQ29nUTI5c2IzSnpMbHh1SUNvdlhHNWNibVY0Y0c5eWRITXVZMjlzYjNKeklEMGdXMXh1WEhRbkl6QXdNREJEUXljc1hHNWNkQ2NqTURBd01FWkdKeXhjYmx4MEp5TXdNRE16UTBNbkxGeHVYSFFuSXpBd016TkdSaWNzWEc1Y2RDY2pNREEyTmtOREp5eGNibHgwSnlNd01EWTJSa1luTEZ4dVhIUW5JekF3T1RsRFF5Y3NYRzVjZENjak1EQTVPVVpHSnl4Y2JseDBKeU13TUVORE1EQW5MRnh1WEhRbkl6QXdRME16TXljc1hHNWNkQ2NqTURCRFF6WTJKeXhjYmx4MEp5TXdNRU5ET1RrbkxGeHVYSFFuSXpBd1EwTkRReWNzWEc1Y2RDY2pNREJEUTBaR0p5eGNibHgwSnlNek16QXdRME1uTEZ4dVhIUW5Jek16TURCR1JpY3NYRzVjZENjak16TXpNME5ESnl4Y2JseDBKeU16TXpNelJrWW5MRnh1WEhRbkl6TXpOalpEUXljc1hHNWNkQ2NqTXpNMk5rWkdKeXhjYmx4MEp5TXpNems1UTBNbkxGeHVYSFFuSXpNek9UbEdSaWNzWEc1Y2RDY2pNek5EUXpBd0p5eGNibHgwSnlNek0wTkRNek1uTEZ4dVhIUW5Jek16UTBNMk5pY3NYRzVjZENjak16TkRRems1Snl4Y2JseDBKeU16TTBORFEwTW5MRnh1WEhRbkl6TXpRME5HUmljc1hHNWNkQ2NqTmpZd01FTkRKeXhjYmx4MEp5TTJOakF3UmtZbkxGeHVYSFFuSXpZMk16TkRReWNzWEc1Y2RDY2pOall6TTBaR0p5eGNibHgwSnlNMk5rTkRNREFuTEZ4dVhIUW5JelkyUTBNek15Y3NYRzVjZENjak9Ua3dNRU5ESnl4Y2JseDBKeU01T1RBd1JrWW5MRnh1WEhRbkl6azVNek5EUXljc1hHNWNkQ2NqT1Rrek0wWkdKeXhjYmx4MEp5TTVPVU5ETURBbkxGeHVYSFFuSXprNVEwTXpNeWNzWEc1Y2RDY2pRME13TURBd0p5eGNibHgwSnlORFF6QXdNek1uTEZ4dVhIUW5JME5ETURBMk5pY3NYRzVjZENjalEwTXdNRGs1Snl4Y2JseDBKeU5EUXpBd1EwTW5MRnh1WEhRbkkwTkRNREJHUmljc1hHNWNkQ2NqUTBNek16QXdKeXhjYmx4MEp5TkRRek16TXpNbkxGeHVYSFFuSTBORE16TTJOaWNzWEc1Y2RDY2pRME16TXprNUp5eGNibHgwSnlORFF6TXpRME1uTEZ4dVhIUW5JME5ETXpOR1JpY3NYRzVjZENjalEwTTJOakF3Snl4Y2JseDBKeU5EUXpZMk16TW5MRnh1WEhRbkkwTkRPVGt3TUNjc1hHNWNkQ2NqUTBNNU9UTXpKeXhjYmx4MEp5TkRRME5ETURBbkxGeHVYSFFuSTBORFEwTXpNeWNzWEc1Y2RDY2pSa1l3TURBd0p5eGNibHgwSnlOR1JqQXdNek1uTEZ4dVhIUW5JMFpHTURBMk5pY3NYRzVjZENjalJrWXdNRGs1Snl4Y2JseDBKeU5HUmpBd1EwTW5MRnh1WEhRbkkwWkdNREJHUmljc1hHNWNkQ2NqUmtZek16QXdKeXhjYmx4MEp5TkdSak16TXpNbkxGeHVYSFFuSTBaR016TTJOaWNzWEc1Y2RDY2pSa1l6TXprNUp5eGNibHgwSnlOR1JqTXpRME1uTEZ4dVhIUW5JMFpHTXpOR1JpY3NYRzVjZENjalJrWTJOakF3Snl4Y2JseDBKeU5HUmpZMk16TW5MRnh1WEhRbkkwWkdPVGt3TUNjc1hHNWNkQ2NqUmtZNU9UTXpKeXhjYmx4MEp5TkdSa05ETURBbkxGeHVYSFFuSTBaR1EwTXpNeWRjYmwwN1hHNWNiaThxS2x4dUlDb2dRM1Z5Y21WdWRHeDVJRzl1YkhrZ1YyVmlTMmwwTFdKaGMyVmtJRmRsWWlCSmJuTndaV04wYjNKekxDQkdhWEpsWm05NElENDlJSFl6TVN4Y2JpQXFJR0Z1WkNCMGFHVWdSbWx5WldKMVp5QmxlSFJsYm5OcGIyNGdLR0Z1ZVNCR2FYSmxabTk0SUhabGNuTnBiMjRwSUdGeVpTQnJibTkzYmx4dUlDb2dkRzhnYzNWd2NHOXlkQ0JjSWlWalhDSWdRMU5USUdOMWMzUnZiV2w2WVhScGIyNXpMbHh1SUNwY2JpQXFJRlJQUkU4NklHRmtaQ0JoSUdCc2IyTmhiRk4wYjNKaFoyVmdJSFpoY21saFlteGxJSFJ2SUdWNGNHeHBZMmwwYkhrZ1pXNWhZbXhsTDJScGMyRmliR1VnWTI5c2IzSnpYRzRnS2k5Y2JseHVMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJR052YlhCc1pYaHBkSGxjYm1aMWJtTjBhVzl1SUhWelpVTnZiRzl5Y3lncElIdGNibHgwTHk4Z1RrSTZJRWx1SUdGdUlFVnNaV04wY205dUlIQnlaV3h2WVdRZ2MyTnlhWEIwTENCa2IyTjFiV1Z1ZENCM2FXeHNJR0psSUdSbFptbHVaV1FnWW5WMElHNXZkQ0JtZFd4c2VWeHVYSFF2THlCcGJtbDBhV0ZzYVhwbFpDNGdVMmx1WTJVZ2QyVWdhMjV2ZHlCM1pTZHlaU0JwYmlCRGFISnZiV1VzSUhkbEoyeHNJR3AxYzNRZ1pHVjBaV04wSUhSb2FYTWdZMkZ6WlZ4dVhIUXZMeUJsZUhCc2FXTnBkR3g1WEc1Y2RHbG1JQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdWNISnZZMlZ6Y3lBbUppQW9kMmx1Wkc5M0xuQnliMk5sYzNNdWRIbHdaU0E5UFQwZ0ozSmxibVJsY21WeUp5QjhmQ0IzYVc1a2IzY3VjSEp2WTJWemN5NWZYMjUzYW5NcEtTQjdYRzVjZEZ4MGNtVjBkWEp1SUhSeWRXVTdYRzVjZEgxY2JseHVYSFF2THlCSmJuUmxjbTVsZENCRmVIQnNiM0psY2lCaGJtUWdSV1JuWlNCa2J5QnViM1FnYzNWd2NHOXlkQ0JqYjJ4dmNuTXVYRzVjZEdsbUlDaDBlWEJsYjJZZ2JtRjJhV2RoZEc5eUlDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQnVZWFpwWjJGMGIzSXVkWE5sY2tGblpXNTBJQ1ltSUc1aGRtbG5ZWFJ2Y2k1MWMyVnlRV2RsYm5RdWRHOU1iM2RsY2tOaGMyVW9LUzV0WVhSamFDZ3ZLR1ZrWjJWOGRISnBaR1Z1ZENsY1hDOG9YRnhrS3lrdktTa2dlMXh1WEhSY2RISmxkSFZ5YmlCbVlXeHpaVHRjYmx4MGZWeHVYRzVjZEM4dklFbHpJSGRsWW10cGREOGdhSFIwY0RvdkwzTjBZV05yYjNabGNtWnNiM2N1WTI5dEwyRXZNVFkwTlRrMk1EWXZNemMyTnpjelhHNWNkQzh2SUdSdlkzVnRaVzUwSUdseklIVnVaR1ZtYVc1bFpDQnBiaUJ5WldGamRDMXVZWFJwZG1VNklHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW1ZV05sWW05dmF5OXlaV0ZqZEMxdVlYUnBkbVV2Y0hWc2JDOHhOak15WEc1Y2RISmxkSFZ5YmlBb2RIbHdaVzltSUdSdlkzVnRaVzUwSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblFnSmlZZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5OMGVXeGxJQ1ltSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV6ZEhsc1pTNVhaV0pyYVhSQmNIQmxZWEpoYm1ObEtTQjhmRnh1WEhSY2RDOHZJRWx6SUdacGNtVmlkV2MvSUdoMGRIQTZMeTl6ZEdGamEyOTJaWEptYkc5M0xtTnZiUzloTHpNNU9ERXlNQzh6TnpZM056TmNibHgwWEhRb2RIbHdaVzltSUhkcGJtUnZkeUFoUFQwZ0ozVnVaR1ZtYVc1bFpDY2dKaVlnZDJsdVpHOTNMbU52Ym5OdmJHVWdKaVlnS0hkcGJtUnZkeTVqYjI1emIyeGxMbVpwY21WaWRXY2dmSHdnS0hkcGJtUnZkeTVqYjI1emIyeGxMbVY0WTJWd2RHbHZiaUFtSmlCM2FXNWtiM2N1WTI5dWMyOXNaUzUwWVdKc1pTa3BLU0I4ZkZ4dVhIUmNkQzh2SUVseklHWnBjbVZtYjNnZ1BqMGdkak14UDF4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WkdWMlpXeHZjR1Z5TG0xdmVtbHNiR0V1YjNKbkwyVnVMVlZUTDJSdlkzTXZWRzl2YkhNdlYyVmlYME52Ym5OdmJHVWpVM1I1YkdsdVoxOXRaWE56WVdkbGMxeHVYSFJjZENoMGVYQmxiMllnYm1GMmFXZGhkRzl5SUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCdVlYWnBaMkYwYjNJdWRYTmxja0ZuWlc1MElDWW1JRzVoZG1sbllYUnZjaTUxYzJWeVFXZGxiblF1ZEc5TWIzZGxja05oYzJVb0tTNXRZWFJqYUNndlptbHlaV1p2ZUZ4Y0x5aGNYR1FyS1M4cElDWW1JSEJoY25ObFNXNTBLRkpsWjBWNGNDNGtNU3dnTVRBcElENDlJRE14S1NCOGZGeHVYSFJjZEM4dklFUnZkV0pzWlNCamFHVmpheUIzWldKcmFYUWdhVzRnZFhObGNrRm5aVzUwSUdwMWMzUWdhVzRnWTJGelpTQjNaU0JoY21VZ2FXNGdZU0IzYjNKclpYSmNibHgwWEhRb2RIbHdaVzltSUc1aGRtbG5ZWFJ2Y2lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2JtRjJhV2RoZEc5eUxuVnpaWEpCWjJWdWRDQW1KaUJ1WVhacFoyRjBiM0l1ZFhObGNrRm5aVzUwTG5SdlRHOTNaWEpEWVhObEtDa3ViV0YwWTJnb0wyRndjR3hsZDJWaWEybDBYRnd2S0Z4Y1pDc3BMeWtwTzF4dWZWeHVYRzR2S2lwY2JpQXFJRU52Ykc5eWFYcGxJR3h2WnlCaGNtZDFiV1Z1ZEhNZ2FXWWdaVzVoWW14bFpDNWNiaUFxWEc0Z0tpQkFZWEJwSUhCMVlteHBZMXh1SUNvdlhHNWNibVoxYm1OMGFXOXVJR1p2Y20xaGRFRnlaM01vWVhKbmN5a2dlMXh1WEhSaGNtZHpXekJkSUQwZ0tIUm9hWE11ZFhObFEyOXNiM0p6SUQ4Z0p5VmpKeUE2SUNjbktTQXJYRzVjZEZ4MGRHaHBjeTV1WVcxbGMzQmhZMlVnSzF4dVhIUmNkQ2gwYUdsekxuVnpaVU52Ykc5eWN5QS9JQ2NnSldNbklEb2dKeUFuS1NBclhHNWNkRngwWVhKbmMxc3dYU0FyWEc1Y2RGeDBLSFJvYVhNdWRYTmxRMjlzYjNKeklEOGdKeVZqSUNjZ09pQW5JQ2NwSUN0Y2JseDBYSFFuS3ljZ0t5QnRiMlIxYkdVdVpYaHdiM0owY3k1b2RXMWhibWw2WlNoMGFHbHpMbVJwWm1ZcE8xeHVYRzVjZEdsbUlDZ2hkR2hwY3k1MWMyVkRiMnh2Y25NcElIdGNibHgwWEhSeVpYUjFjbTQ3WEc1Y2RIMWNibHh1WEhSamIyNXpkQ0JqSUQwZ0oyTnZiRzl5T2lBbklDc2dkR2hwY3k1amIyeHZjanRjYmx4MFlYSm5jeTV6Y0d4cFkyVW9NU3dnTUN3Z1l5d2dKMk52Ykc5eU9pQnBibWhsY21sMEp5azdYRzVjYmx4MEx5OGdWR2hsSUdacGJtRnNJRndpSldOY0lpQnBjeUJ6YjIxbGQyaGhkQ0IwY21samEza3NJR0psWTJGMWMyVWdkR2hsY21VZ1kyOTFiR1FnWW1VZ2IzUm9aWEpjYmx4MEx5OGdZWEpuZFcxbGJuUnpJSEJoYzNObFpDQmxhWFJvWlhJZ1ltVm1iM0psSUc5eUlHRm1kR1Z5SUhSb1pTQWxZeXdnYzI4Z2QyVWdibVZsWkNCMGIxeHVYSFF2THlCbWFXZDFjbVVnYjNWMElIUm9aU0JqYjNKeVpXTjBJR2x1WkdWNElIUnZJR2x1YzJWeWRDQjBhR1VnUTFOVElHbHVkRzljYmx4MGJHVjBJR2x1WkdWNElEMGdNRHRjYmx4MGJHVjBJR3hoYzNSRElEMGdNRHRjYmx4MFlYSm5jMXN3WFM1eVpYQnNZV05sS0M4bFcyRXRla0V0V2lWZEwyY3NJRzFoZEdOb0lEMCtJSHRjYmx4MFhIUnBaaUFvYldGMFkyZ2dQVDA5SUNjbEpTY3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJqdGNibHgwWEhSOVhHNWNkRngwYVc1a1pYZ3JLenRjYmx4MFhIUnBaaUFvYldGMFkyZ2dQVDA5SUNjbFl5Y3BJSHRjYmx4MFhIUmNkQzh2SUZkbElHOXViSGtnWVhKbElHbHVkR1Z5WlhOMFpXUWdhVzRnZEdobElDcHNZWE4wS2lBbFkxeHVYSFJjZEZ4MEx5OGdLSFJvWlNCMWMyVnlJRzFoZVNCb1lYWmxJSEJ5YjNacFpHVmtJSFJvWldseUlHOTNiaWxjYmx4MFhIUmNkR3hoYzNSRElEMGdhVzVrWlhnN1hHNWNkRngwZlZ4dVhIUjlLVHRjYmx4dVhIUmhjbWR6TG5Od2JHbGpaU2hzWVhOMFF5d2dNQ3dnWXlrN1hHNTlYRzVjYmk4cUtseHVJQ29nU1c1MmIydGxjeUJnWTI5dWMyOXNaUzVzYjJjb0tXQWdkMmhsYmlCaGRtRnBiR0ZpYkdVdVhHNGdLaUJPYnkxdmNDQjNhR1Z1SUdCamIyNXpiMnhsTG14dloyQWdhWE1nYm05MElHRWdYQ0ptZFc1amRHbHZibHdpTGx4dUlDcGNiaUFxSUVCaGNHa2djSFZpYkdsalhHNGdLaTljYm1aMWJtTjBhVzl1SUd4dlp5Z3VMaTVoY21kektTQjdYRzVjZEM4dklGUm9hWE1nYUdGamEyVnllU0JwY3lCeVpYRjFhWEpsWkNCbWIzSWdTVVU0THprc0lIZG9aWEpsWEc1Y2RDOHZJSFJvWlNCZ1kyOXVjMjlzWlM1c2IyZGdJR1oxYm1OMGFXOXVJR1J2WlhOdUozUWdhR0YyWlNBbllYQndiSGtuWEc1Y2RISmxkSFZ5YmlCMGVYQmxiMllnWTI5dWMyOXNaU0E5UFQwZ0oyOWlhbVZqZENjZ0ppWmNibHgwWEhSamIyNXpiMnhsTG14dlp5QW1KbHh1WEhSY2RHTnZibk52YkdVdWJHOW5LQzR1TG1GeVozTXBPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlGTmhkbVVnWUc1aGJXVnpjR0ZqWlhOZ0xseHVJQ3BjYmlBcUlFQndZWEpoYlNCN1UzUnlhVzVuZlNCdVlXMWxjM0JoWTJWelhHNGdLaUJBWVhCcElIQnlhWFpoZEdWY2JpQXFMMXh1Wm5WdVkzUnBiMjRnYzJGMlpTaHVZVzFsYzNCaFkyVnpLU0I3WEc1Y2RIUnllU0I3WEc1Y2RGeDBhV1lnS0c1aGJXVnpjR0ZqWlhNcElIdGNibHgwWEhSY2RHVjRjRzl5ZEhNdWMzUnZjbUZuWlM1elpYUkpkR1Z0S0Nka1pXSjFaeWNzSUc1aGJXVnpjR0ZqWlhNcE8xeHVYSFJjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBYSFJsZUhCdmNuUnpMbk4wYjNKaFoyVXVjbVZ0YjNabFNYUmxiU2duWkdWaWRXY25LVHRjYmx4MFhIUjlYRzVjZEgwZ1kyRjBZMmdnS0dWeWNtOXlLU0I3WEc1Y2RGeDBMeThnVTNkaGJHeHZkMXh1WEhSY2RDOHZJRmhZV0NBb1FGRnBlQzBwSUhOb2IzVnNaQ0IzWlNCaVpTQnNiMmRuYVc1bklIUm9aWE5sUDF4dVhIUjlYRzU5WEc1Y2JpOHFLbHh1SUNvZ1RHOWhaQ0JnYm1GdFpYTndZV05sYzJBdVhHNGdLbHh1SUNvZ1FISmxkSFZ5YmlCN1UzUnlhVzVuZlNCeVpYUjFjbTV6SUhSb1pTQndjbVYyYVc5MWMyeDVJSEJsY25OcGMzUmxaQ0JrWldKMVp5QnRiMlJsYzF4dUlDb2dRR0Z3YVNCd2NtbDJZWFJsWEc0Z0tpOWNibVoxYm1OMGFXOXVJR3h2WVdRb0tTQjdYRzVjZEd4bGRDQnlPMXh1WEhSMGNua2dlMXh1WEhSY2RISWdQU0JsZUhCdmNuUnpMbk4wYjNKaFoyVXVaMlYwU1hSbGJTZ25aR1ZpZFdjbktUdGNibHgwZlNCallYUmphQ0FvWlhKeWIzSXBJSHRjYmx4MFhIUXZMeUJUZDJGc2JHOTNYRzVjZEZ4MEx5OGdXRmhZSUNoQVVXbDRMU2tnYzJodmRXeGtJSGRsSUdKbElHeHZaMmRwYm1jZ2RHaGxjMlUvWEc1Y2RIMWNibHh1WEhRdkx5QkpaaUJrWldKMVp5QnBjMjRuZENCelpYUWdhVzRnVEZNc0lHRnVaQ0IzWlNkeVpTQnBiaUJGYkdWamRISnZiaXdnZEhKNUlIUnZJR3h2WVdRZ0pFUkZRbFZIWEc1Y2RHbG1JQ2doY2lBbUppQjBlWEJsYjJZZ2NISnZZMlZ6Y3lBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ0oyVnVkaWNnYVc0Z2NISnZZMlZ6Y3lrZ2UxeHVYSFJjZEhJZ1BTQndjbTlqWlhOekxtVnVkaTVFUlVKVlJ6dGNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQnlPMXh1ZlZ4dVhHNHZLaXBjYmlBcUlFeHZZMkZzYzNSdmNtRm5aU0JoZEhSbGJYQjBjeUIwYnlCeVpYUjFjbTRnZEdobElHeHZZMkZzYzNSdmNtRm5aUzVjYmlBcVhHNGdLaUJVYUdseklHbHpJRzVsWTJWemMyRnllU0JpWldOaGRYTmxJSE5oWm1GeWFTQjBhSEp2ZDNOY2JpQXFJSGRvWlc0Z1lTQjFjMlZ5SUdScGMyRmliR1Z6SUdOdmIydHBaWE12Ykc5allXeHpkRzl5WVdkbFhHNGdLaUJoYm1RZ2VXOTFJR0YwZEdWdGNIUWdkRzhnWVdOalpYTnpJR2wwTGx4dUlDcGNiaUFxSUVCeVpYUjFjbTRnZTB4dlkyRnNVM1J2Y21GblpYMWNiaUFxSUVCaGNHa2djSEpwZG1GMFpWeHVJQ292WEc1Y2JtWjFibU4wYVc5dUlHeHZZMkZzYzNSdmNtRm5aU2dwSUh0Y2JseDBkSEo1SUh0Y2JseDBYSFF2THlCVVZrMU1TMmwwSUNoQmNIQnNaU0JVVmlCS1V5QlNkVzUwYVcxbEtTQmtiMlZ6SUc1dmRDQm9ZWFpsSUdFZ2QybHVaRzkzSUc5aWFtVmpkQ3dnYW5WemRDQnNiMk5oYkZOMGIzSmhaMlVnYVc0Z2RHaGxJR2RzYjJKaGJDQmpiMjUwWlhoMFhHNWNkRngwTHk4Z1ZHaGxJRUp5YjNkelpYSWdZV3h6YnlCb1lYTWdiRzlqWVd4VGRHOXlZV2RsSUdsdUlIUm9aU0JuYkc5aVlXd2dZMjl1ZEdWNGRDNWNibHgwWEhSeVpYUjFjbTRnYkc5allXeFRkRzl5WVdkbE8xeHVYSFI5SUdOaGRHTm9JQ2hsY25KdmNpa2dlMXh1WEhSY2RDOHZJRk4zWVd4c2IzZGNibHgwWEhRdkx5QllXRmdnS0VCUmFYZ3RLU0J6YUc5MWJHUWdkMlVnWW1VZ2JHOW5aMmx1WnlCMGFHVnpaVDljYmx4MGZWeHVmVnh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUhKbGNYVnBjbVVvSnk0dlkyOXRiVzl1Snlrb1pYaHdiM0owY3lrN1hHNWNibU52Ym5OMElIdG1iM0p0WVhSMFpYSnpmU0E5SUcxdlpIVnNaUzVsZUhCdmNuUnpPMXh1WEc0dktpcGNiaUFxSUUxaGNDQWxhaUIwYnlCZ1NsTlBUaTV6ZEhKcGJtZHBabmtvS1dBc0lITnBibU5sSUc1dklGZGxZaUJKYm5Od1pXTjBiM0p6SUdSdklIUm9ZWFFnWW5rZ1pHVm1ZWFZzZEM1Y2JpQXFMMXh1WEc1bWIzSnRZWFIwWlhKekxtb2dQU0JtZFc1amRHbHZiaUFvZGlrZ2UxeHVYSFIwY25rZ2UxeHVYSFJjZEhKbGRIVnliaUJLVTA5T0xuTjBjbWx1WjJsbWVTaDJLVHRjYmx4MGZTQmpZWFJqYUNBb1pYSnliM0lwSUh0Y2JseDBYSFJ5WlhSMWNtNGdKMXRWYm1WNGNHVmpkR1ZrU2xOUFRsQmhjbk5sUlhKeWIzSmRPaUFuSUNzZ1pYSnliM0l1YldWemMyRm5aVHRjYmx4MGZWeHVmVHRjYmlJc0lseHVMeW9xWEc0Z0tpQlVhR2x6SUdseklIUm9aU0JqYjIxdGIyNGdiRzluYVdNZ1ptOXlJR0p2ZEdnZ2RHaGxJRTV2WkdVdWFuTWdZVzVrSUhkbFlpQmljbTkzYzJWeVhHNGdLaUJwYlhCc1pXMWxiblJoZEdsdmJuTWdiMllnWUdSbFluVm5LQ2xnTGx4dUlDb3ZYRzVjYm1aMWJtTjBhVzl1SUhObGRIVndLR1Z1ZGlrZ2UxeHVYSFJqY21WaGRHVkVaV0oxWnk1a1pXSjFaeUE5SUdOeVpXRjBaVVJsWW5Wbk8xeHVYSFJqY21WaGRHVkVaV0oxWnk1a1pXWmhkV3gwSUQwZ1kzSmxZWFJsUkdWaWRXYzdYRzVjZEdOeVpXRjBaVVJsWW5WbkxtTnZaWEpqWlNBOUlHTnZaWEpqWlR0Y2JseDBZM0psWVhSbFJHVmlkV2N1WkdsellXSnNaU0E5SUdScGMyRmliR1U3WEc1Y2RHTnlaV0YwWlVSbFluVm5MbVZ1WVdKc1pTQTlJR1Z1WVdKc1pUdGNibHgwWTNKbFlYUmxSR1ZpZFdjdVpXNWhZbXhsWkNBOUlHVnVZV0pzWldRN1hHNWNkR055WldGMFpVUmxZblZuTG1oMWJXRnVhWHBsSUQwZ2NtVnhkV2x5WlNnbmJYTW5LVHRjYmx4dVhIUlBZbXBsWTNRdWEyVjVjeWhsYm5ZcExtWnZja1ZoWTJnb2EyVjVJRDArSUh0Y2JseDBYSFJqY21WaGRHVkVaV0oxWjF0clpYbGRJRDBnWlc1MlcydGxlVjA3WEc1Y2RIMHBPMXh1WEc1Y2RDOHFLbHh1WEhRcUlFRmpkR2wyWlNCZ1pHVmlkV2RnSUdsdWMzUmhibU5sY3k1Y2JseDBLaTljYmx4MFkzSmxZWFJsUkdWaWRXY3VhVzV6ZEdGdVkyVnpJRDBnVzEwN1hHNWNibHgwTHlvcVhHNWNkQ29nVkdobElHTjFjbkpsYm5Sc2VTQmhZM1JwZG1VZ1pHVmlkV2NnYlc5a1pTQnVZVzFsY3l3Z1lXNWtJRzVoYldWeklIUnZJSE5yYVhBdVhHNWNkQ292WEc1Y2JseDBZM0psWVhSbFJHVmlkV2N1Ym1GdFpYTWdQU0JiWFR0Y2JseDBZM0psWVhSbFJHVmlkV2N1YzJ0cGNITWdQU0JiWFR0Y2JseHVYSFF2S2lwY2JseDBLaUJOWVhBZ2IyWWdjM0JsWTJsaGJDQmNJaVZ1WENJZ2FHRnVaR3hwYm1jZ1puVnVZM1JwYjI1ekxDQm1iM0lnZEdobElHUmxZblZuSUZ3aVptOXliV0YwWENJZ1lYSm5kVzFsYm5RdVhHNWNkQ3BjYmx4MEtpQldZV3hwWkNCclpYa2dibUZ0WlhNZ1lYSmxJR0VnYzJsdVoyeGxMQ0JzYjNkbGNpQnZjaUIxY0hCbGNpMWpZWE5sSUd4bGRIUmxjaXdnYVM1bExpQmNJbTVjSWlCaGJtUWdYQ0pPWENJdVhHNWNkQ292WEc1Y2RHTnlaV0YwWlVSbFluVm5MbVp2Y20xaGRIUmxjbk1nUFNCN2ZUdGNibHh1WEhRdktpcGNibHgwS2lCVFpXeGxZM1J6SUdFZ1kyOXNiM0lnWm05eUlHRWdaR1ZpZFdjZ2JtRnRaWE53WVdObFhHNWNkQ29nUUhCaGNtRnRJSHRUZEhKcGJtZDlJRzVoYldWemNHRmpaU0JVYUdVZ2JtRnRaWE53WVdObElITjBjbWx1WnlCbWIzSWdkR2hsSUdadmNpQjBhR1VnWkdWaWRXY2dhVzV6ZEdGdVkyVWdkRzhnWW1VZ1kyOXNiM0psWkZ4dVhIUXFJRUJ5WlhSMWNtNGdlMDUxYldKbGNueFRkSEpwYm1kOUlFRnVJRUZPVTBrZ1kyOXNiM0lnWTI5a1pTQm1iM0lnZEdobElHZHBkbVZ1SUc1aGJXVnpjR0ZqWlZ4dVhIUXFJRUJoY0drZ2NISnBkbUYwWlZ4dVhIUXFMMXh1WEhSbWRXNWpkR2x2YmlCelpXeGxZM1JEYjJ4dmNpaHVZVzFsYzNCaFkyVXBJSHRjYmx4MFhIUnNaWFFnYUdGemFDQTlJREE3WEc1Y2JseDBYSFJtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1aGJXVnpjR0ZqWlM1c1pXNW5kR2c3SUdrckt5a2dlMXh1WEhSY2RGeDBhR0Z6YUNBOUlDZ29hR0Z6YUNBOFBDQTFLU0F0SUdoaGMyZ3BJQ3NnYm1GdFpYTndZV05sTG1Ob1lYSkRiMlJsUVhRb2FTazdYRzVjZEZ4MFhIUm9ZWE5vSUh3OUlEQTdJQzh2SUVOdmJuWmxjblFnZEc4Z016SmlhWFFnYVc1MFpXZGxjbHh1WEhSY2RIMWNibHh1WEhSY2RISmxkSFZ5YmlCamNtVmhkR1ZFWldKMVp5NWpiMnh2Y25OYlRXRjBhQzVoWW5Nb2FHRnphQ2tnSlNCamNtVmhkR1ZFWldKMVp5NWpiMnh2Y25NdWJHVnVaM1JvWFR0Y2JseDBmVnh1WEhSamNtVmhkR1ZFWldKMVp5NXpaV3hsWTNSRGIyeHZjaUE5SUhObGJHVmpkRU52Ykc5eU8xeHVYRzVjZEM4cUtseHVYSFFxSUVOeVpXRjBaU0JoSUdSbFluVm5aMlZ5SUhkcGRHZ2dkR2hsSUdkcGRtVnVJR0J1WVcxbGMzQmhZMlZnTGx4dVhIUXFYRzVjZENvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUc1aGJXVnpjR0ZqWlZ4dVhIUXFJRUJ5WlhSMWNtNGdlMFoxYm1OMGFXOXVmVnh1WEhRcUlFQmhjR2tnY0hWaWJHbGpYRzVjZENvdlhHNWNkR1oxYm1OMGFXOXVJR055WldGMFpVUmxZblZuS0c1aGJXVnpjR0ZqWlNrZ2UxeHVYSFJjZEd4bGRDQndjbVYyVkdsdFpUdGNibHh1WEhSY2RHWjFibU4wYVc5dUlHUmxZblZuS0M0dUxtRnlaM01wSUh0Y2JseDBYSFJjZEM4dklFUnBjMkZpYkdWa1AxeHVYSFJjZEZ4MGFXWWdLQ0ZrWldKMVp5NWxibUZpYkdWa0tTQjdYRzVjZEZ4MFhIUmNkSEpsZEhWeWJqdGNibHgwWEhSY2RIMWNibHh1WEhSY2RGeDBZMjl1YzNRZ2MyVnNaaUE5SUdSbFluVm5PMXh1WEc1Y2RGeDBYSFF2THlCVFpYUWdZR1JwWm1aZ0lIUnBiV1Z6ZEdGdGNGeHVYSFJjZEZ4MFkyOXVjM1FnWTNWeWNpQTlJRTUxYldKbGNpaHVaWGNnUkdGMFpTZ3BLVHRjYmx4MFhIUmNkR052Ym5OMElHMXpJRDBnWTNWeWNpQXRJQ2h3Y21WMlZHbHRaU0I4ZkNCamRYSnlLVHRjYmx4MFhIUmNkSE5sYkdZdVpHbG1aaUE5SUcxek8xeHVYSFJjZEZ4MGMyVnNaaTV3Y21WMklEMGdjSEpsZGxScGJXVTdYRzVjZEZ4MFhIUnpaV3htTG1OMWNuSWdQU0JqZFhKeU8xeHVYSFJjZEZ4MGNISmxkbFJwYldVZ1BTQmpkWEp5TzF4dVhHNWNkRngwWEhSaGNtZHpXekJkSUQwZ1kzSmxZWFJsUkdWaWRXY3VZMjlsY21ObEtHRnlaM05iTUYwcE8xeHVYRzVjZEZ4MFhIUnBaaUFvZEhsd1pXOW1JR0Z5WjNOYk1GMGdJVDA5SUNkemRISnBibWNuS1NCN1hHNWNkRngwWEhSY2RDOHZJRUZ1ZVhSb2FXNW5JR1ZzYzJVZ2JHVjBKM01nYVc1emNHVmpkQ0IzYVhSb0lDVlBYRzVjZEZ4MFhIUmNkR0Z5WjNNdWRXNXphR2xtZENnbkpVOG5LVHRjYmx4MFhIUmNkSDFjYmx4dVhIUmNkRngwTHk4Z1FYQndiSGtnWVc1NUlHQm1iM0p0WVhSMFpYSnpZQ0IwY21GdWMyWnZjbTFoZEdsdmJuTmNibHgwWEhSY2RHeGxkQ0JwYm1SbGVDQTlJREE3WEc1Y2RGeDBYSFJoY21keld6QmRJRDBnWVhKbmMxc3dYUzV5WlhCc1lXTmxLQzhsS0Z0aExYcEJMVm9sWFNrdlp5d2dLRzFoZEdOb0xDQm1iM0p0WVhRcElEMCtJSHRjYmx4MFhIUmNkRngwTHk4Z1NXWWdkMlVnWlc1amIzVnVkR1Z5SUdGdUlHVnpZMkZ3WldRZ0pTQjBhR1Z1SUdSdmJpZDBJR2x1WTNKbFlYTmxJSFJvWlNCaGNuSmhlU0JwYm1SbGVGeHVYSFJjZEZ4MFhIUnBaaUFvYldGMFkyZ2dQVDA5SUNjbEpTY3BJSHRjYmx4MFhIUmNkRngwWEhSeVpYUjFjbTRnYldGMFkyZzdYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkRngwYVc1a1pYZ3JLenRjYmx4MFhIUmNkRngwWTI5dWMzUWdabTl5YldGMGRHVnlJRDBnWTNKbFlYUmxSR1ZpZFdjdVptOXliV0YwZEdWeWMxdG1iM0p0WVhSZE8xeHVYSFJjZEZ4MFhIUnBaaUFvZEhsd1pXOW1JR1p2Y20xaGRIUmxjaUE5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1WEhSY2RGeDBYSFJjZEdOdmJuTjBJSFpoYkNBOUlHRnlaM05iYVc1a1pYaGRPMXh1WEhSY2RGeDBYSFJjZEcxaGRHTm9JRDBnWm05eWJXRjBkR1Z5TG1OaGJHd29jMlZzWml3Z2RtRnNLVHRjYmx4dVhIUmNkRngwWEhSY2RDOHZJRTV2ZHlCM1pTQnVaV1ZrSUhSdklISmxiVzkyWlNCZ1lYSm5jMXRwYm1SbGVGMWdJSE5wYm1ObElHbDBKM01nYVc1c2FXNWxaQ0JwYmlCMGFHVWdZR1p2Y20xaGRHQmNibHgwWEhSY2RGeDBYSFJoY21kekxuTndiR2xqWlNocGJtUmxlQ3dnTVNrN1hHNWNkRngwWEhSY2RGeDBhVzVrWlhndExUdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdiV0YwWTJnN1hHNWNkRngwWEhSOUtUdGNibHh1WEhSY2RGeDBMeThnUVhCd2JIa2daVzUyTFhOd1pXTnBabWxqSUdadmNtMWhkSFJwYm1jZ0tHTnZiRzl5Y3l3Z1pYUmpMaWxjYmx4MFhIUmNkR055WldGMFpVUmxZblZuTG1admNtMWhkRUZ5WjNNdVkyRnNiQ2h6Wld4bUxDQmhjbWR6S1R0Y2JseHVYSFJjZEZ4MFkyOXVjM1FnYkc5blJtNGdQU0J6Wld4bUxteHZaeUI4ZkNCamNtVmhkR1ZFWldKMVp5NXNiMmM3WEc1Y2RGeDBYSFJzYjJkR2JpNWhjSEJzZVNoelpXeG1MQ0JoY21kektUdGNibHgwWEhSOVhHNWNibHgwWEhSa1pXSjFaeTV1WVcxbGMzQmhZMlVnUFNCdVlXMWxjM0JoWTJVN1hHNWNkRngwWkdWaWRXY3VaVzVoWW14bFpDQTlJR055WldGMFpVUmxZblZuTG1WdVlXSnNaV1FvYm1GdFpYTndZV05sS1R0Y2JseDBYSFJrWldKMVp5NTFjMlZEYjJ4dmNuTWdQU0JqY21WaGRHVkVaV0oxWnk1MWMyVkRiMnh2Y25Nb0tUdGNibHgwWEhSa1pXSjFaeTVqYjJ4dmNpQTlJSE5sYkdWamRFTnZiRzl5S0c1aGJXVnpjR0ZqWlNrN1hHNWNkRngwWkdWaWRXY3VaR1Z6ZEhKdmVTQTlJR1JsYzNSeWIzazdYRzVjZEZ4MFpHVmlkV2N1WlhoMFpXNWtJRDBnWlhoMFpXNWtPMXh1WEhSY2RDOHZJRVJsWW5WbkxtWnZjbTFoZEVGeVozTWdQU0JtYjNKdFlYUkJjbWR6TzF4dVhIUmNkQzh2SUdSbFluVm5MbkpoZDB4dlp5QTlJSEpoZDB4dlp6dGNibHh1WEhSY2RDOHZJR1Z1ZGkxemNHVmphV1pwWXlCcGJtbDBhV0ZzYVhwaGRHbHZiaUJzYjJkcFl5Qm1iM0lnWkdWaWRXY2dhVzV6ZEdGdVkyVnpYRzVjZEZ4MGFXWWdLSFI1Y0dWdlppQmpjbVZoZEdWRVpXSjFaeTVwYm1sMElEMDlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNWNkRngwWEhSamNtVmhkR1ZFWldKMVp5NXBibWwwS0dSbFluVm5LVHRjYmx4MFhIUjlYRzVjYmx4MFhIUmpjbVZoZEdWRVpXSjFaeTVwYm5OMFlXNWpaWE11Y0hWemFDaGtaV0oxWnlrN1hHNWNibHgwWEhSeVpYUjFjbTRnWkdWaWRXYzdYRzVjZEgxY2JseHVYSFJtZFc1amRHbHZiaUJrWlhOMGNtOTVLQ2tnZTF4dVhIUmNkR052Ym5OMElHbHVaR1Y0SUQwZ1kzSmxZWFJsUkdWaWRXY3VhVzV6ZEdGdVkyVnpMbWx1WkdWNFQyWW9kR2hwY3lrN1hHNWNkRngwYVdZZ0tHbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dVhIUmNkRngwWTNKbFlYUmxSR1ZpZFdjdWFXNXpkR0Z1WTJWekxuTndiR2xqWlNocGJtUmxlQ3dnTVNrN1hHNWNkRngwWEhSeVpYUjFjbTRnZEhKMVpUdGNibHgwWEhSOVhHNWNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFI5WEc1Y2JseDBablZ1WTNScGIyNGdaWGgwWlc1a0tHNWhiV1Z6Y0dGalpTd2daR1ZzYVcxcGRHVnlLU0I3WEc1Y2RGeDBZMjl1YzNRZ2JtVjNSR1ZpZFdjZ1BTQmpjbVZoZEdWRVpXSjFaeWgwYUdsekxtNWhiV1Z6Y0dGalpTQXJJQ2gwZVhCbGIyWWdaR1ZzYVcxcGRHVnlJRDA5UFNBbmRXNWtaV1pwYm1Wa0p5QS9JQ2M2SnlBNklHUmxiR2x0YVhSbGNpa2dLeUJ1WVcxbGMzQmhZMlVwTzF4dVhIUmNkRzVsZDBSbFluVm5MbXh2WnlBOUlIUm9hWE11Ykc5bk8xeHVYSFJjZEhKbGRIVnliaUJ1WlhkRVpXSjFaenRjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFxSUVWdVlXSnNaWE1nWVNCa1pXSjFaeUJ0YjJSbElHSjVJRzVoYldWemNHRmpaWE11SUZSb2FYTWdZMkZ1SUdsdVkyeDFaR1VnYlc5a1pYTmNibHgwS2lCelpYQmhjbUYwWldRZ1lua2dZU0JqYjJ4dmJpQmhibVFnZDJsc1pHTmhjbVJ6TGx4dVhIUXFYRzVjZENvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUc1aGJXVnpjR0ZqWlhOY2JseDBLaUJBWVhCcElIQjFZbXhwWTF4dVhIUXFMMXh1WEhSbWRXNWpkR2x2YmlCbGJtRmliR1VvYm1GdFpYTndZV05sY3lrZ2UxeHVYSFJjZEdOeVpXRjBaVVJsWW5WbkxuTmhkbVVvYm1GdFpYTndZV05sY3lrN1hHNWNibHgwWEhSamNtVmhkR1ZFWldKMVp5NXVZVzFsY3lBOUlGdGRPMXh1WEhSY2RHTnlaV0YwWlVSbFluVm5Mbk5yYVhCeklEMGdXMTA3WEc1Y2JseDBYSFJzWlhRZ2FUdGNibHgwWEhSamIyNXpkQ0J6Y0d4cGRDQTlJQ2gwZVhCbGIyWWdibUZ0WlhOd1lXTmxjeUE5UFQwZ0ozTjBjbWx1WnljZ1B5QnVZVzFsYzNCaFkyVnpJRG9nSnljcExuTndiR2wwS0M5YlhGeHpMRjByTHlrN1hHNWNkRngwWTI5dWMzUWdiR1Z1SUQwZ2MzQnNhWFF1YkdWdVozUm9PMXh1WEc1Y2RGeDBabTl5SUNocElEMGdNRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzVjZEZ4MFhIUnBaaUFvSVhOd2JHbDBXMmxkS1NCN1hHNWNkRngwWEhSY2RDOHZJR2xuYm05eVpTQmxiWEIwZVNCemRISnBibWR6WEc1Y2RGeDBYSFJjZEdOdmJuUnBiblZsTzF4dVhIUmNkRngwZlZ4dVhHNWNkRngwWEhSdVlXMWxjM0JoWTJWeklEMGdjM0JzYVhSYmFWMHVjbVZ3YkdGalpTZ3ZYRndxTDJjc0lDY3VLajhuS1R0Y2JseHVYSFJjZEZ4MGFXWWdLRzVoYldWemNHRmpaWE5iTUYwZ1BUMDlJQ2N0SnlrZ2UxeHVYSFJjZEZ4MFhIUmpjbVZoZEdWRVpXSjFaeTV6YTJsd2N5NXdkWE5vS0c1bGR5QlNaV2RGZUhBb0oxNG5JQ3NnYm1GdFpYTndZV05sY3k1emRXSnpkSElvTVNrZ0t5QW5KQ2NwS1R0Y2JseDBYSFJjZEgwZ1pXeHpaU0I3WEc1Y2RGeDBYSFJjZEdOeVpXRjBaVVJsWW5WbkxtNWhiV1Z6TG5CMWMyZ29ibVYzSUZKbFowVjRjQ2duWGljZ0t5QnVZVzFsYzNCaFkyVnpJQ3NnSnlRbktTazdYRzVjZEZ4MFhIUjlYRzVjZEZ4MGZWeHVYRzVjZEZ4MFptOXlJQ2hwSUQwZ01Ec2dhU0E4SUdOeVpXRjBaVVJsWW5WbkxtbHVjM1JoYm1ObGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dVhIUmNkRngwWTI5dWMzUWdhVzV6ZEdGdVkyVWdQU0JqY21WaGRHVkVaV0oxWnk1cGJuTjBZVzVqWlhOYmFWMDdYRzVjZEZ4MFhIUnBibk4wWVc1alpTNWxibUZpYkdWa0lEMGdZM0psWVhSbFJHVmlkV2N1Wlc1aFlteGxaQ2hwYm5OMFlXNWpaUzV1WVcxbGMzQmhZMlVwTzF4dVhIUmNkSDFjYmx4MGZWeHVYRzVjZEM4cUtseHVYSFFxSUVScGMyRmliR1VnWkdWaWRXY2diM1YwY0hWMExseHVYSFFxWEc1Y2RDb2dRSEpsZEhWeWJpQjdVM1J5YVc1bmZTQnVZVzFsYzNCaFkyVnpYRzVjZENvZ1FHRndhU0J3ZFdKc2FXTmNibHgwS2k5Y2JseDBablZ1WTNScGIyNGdaR2x6WVdKc1pTZ3BJSHRjYmx4MFhIUmpiMjV6ZENCdVlXMWxjM0JoWTJWeklEMGdXMXh1WEhSY2RGeDBMaTR1WTNKbFlYUmxSR1ZpZFdjdWJtRnRaWE11YldGd0tIUnZUbUZ0WlhOd1lXTmxLU3hjYmx4MFhIUmNkQzR1TG1OeVpXRjBaVVJsWW5WbkxuTnJhWEJ6TG0xaGNDaDBiMDVoYldWemNHRmpaU2t1YldGd0tHNWhiV1Z6Y0dGalpTQTlQaUFuTFNjZ0t5QnVZVzFsYzNCaFkyVXBYRzVjZEZ4MFhTNXFiMmx1S0Njc0p5azdYRzVjZEZ4MFkzSmxZWFJsUkdWaWRXY3VaVzVoWW14bEtDY25LVHRjYmx4MFhIUnlaWFIxY200Z2JtRnRaWE53WVdObGN6dGNibHgwZlZ4dVhHNWNkQzhxS2x4dVhIUXFJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBhR1VnWjJsMlpXNGdiVzlrWlNCdVlXMWxJR2x6SUdWdVlXSnNaV1FzSUdaaGJITmxJRzkwYUdWeWQybHpaUzVjYmx4MEtseHVYSFFxSUVCd1lYSmhiU0I3VTNSeWFXNW5mU0J1WVcxbFhHNWNkQ29nUUhKbGRIVnliaUI3UW05dmJHVmhibjFjYmx4MEtpQkFZWEJwSUhCMVlteHBZMXh1WEhRcUwxeHVYSFJtZFc1amRHbHZiaUJsYm1GaWJHVmtLRzVoYldVcElIdGNibHgwWEhScFppQW9ibUZ0WlZ0dVlXMWxMbXhsYm1kMGFDQXRJREZkSUQwOVBTQW5LaWNwSUh0Y2JseDBYSFJjZEhKbGRIVnliaUIwY25WbE8xeHVYSFJjZEgxY2JseHVYSFJjZEd4bGRDQnBPMXh1WEhSY2RHeGxkQ0JzWlc0N1hHNWNibHgwWEhSbWIzSWdLR2tnUFNBd0xDQnNaVzRnUFNCamNtVmhkR1ZFWldKMVp5NXphMmx3Y3k1c1pXNW5kR2c3SUdrZ1BDQnNaVzQ3SUdrckt5a2dlMXh1WEhSY2RGeDBhV1lnS0dOeVpXRjBaVVJsWW5WbkxuTnJhWEJ6VzJsZExuUmxjM1FvYm1GdFpTa3BJSHRjYmx4MFhIUmNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFJjZEZ4MGZWeHVYSFJjZEgxY2JseHVYSFJjZEdadmNpQW9hU0E5SURBc0lHeGxiaUE5SUdOeVpXRjBaVVJsWW5WbkxtNWhiV1Z6TG14bGJtZDBhRHNnYVNBOElHeGxianNnYVNzcktTQjdYRzVjZEZ4MFhIUnBaaUFvWTNKbFlYUmxSR1ZpZFdjdWJtRnRaWE5iYVYwdWRHVnpkQ2h1WVcxbEtTa2dlMXh1WEhSY2RGeDBYSFJ5WlhSMWNtNGdkSEoxWlR0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2JseDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MEtpQkRiMjUyWlhKMElISmxaMlY0Y0NCMGJ5QnVZVzFsYzNCaFkyVmNibHgwS2x4dVhIUXFJRUJ3WVhKaGJTQjdVbVZuUlhod2ZTQnlaV2Q0WlhCY2JseDBLaUJBY21WMGRYSnVJSHRUZEhKcGJtZDlJRzVoYldWemNHRmpaVnh1WEhRcUlFQmhjR2tnY0hKcGRtRjBaVnh1WEhRcUwxeHVYSFJtZFc1amRHbHZiaUIwYjA1aGJXVnpjR0ZqWlNoeVpXZGxlSEFwSUh0Y2JseDBYSFJ5WlhSMWNtNGdjbVZuWlhod0xuUnZVM1J5YVc1bktDbGNibHgwWEhSY2RDNXpkV0p6ZEhKcGJtY29NaXdnY21WblpYaHdMblJ2VTNSeWFXNW5LQ2t1YkdWdVozUm9JQzBnTWlsY2JseDBYSFJjZEM1eVpYQnNZV05sS0M5Y1hDNWNYQ3BjWEQ4a0x5d2dKeW9uS1R0Y2JseDBmVnh1WEc1Y2RDOHFLbHh1WEhRcUlFTnZaWEpqWlNCZ2RtRnNZQzVjYmx4MEtseHVYSFFxSUVCd1lYSmhiU0I3VFdsNFpXUjlJSFpoYkZ4dVhIUXFJRUJ5WlhSMWNtNGdlMDFwZUdWa2ZWeHVYSFFxSUVCaGNHa2djSEpwZG1GMFpWeHVYSFFxTDF4dVhIUm1kVzVqZEdsdmJpQmpiMlZ5WTJVb2RtRnNLU0I3WEc1Y2RGeDBhV1lnS0haaGJDQnBibk4wWVc1alpXOW1JRVZ5Y205eUtTQjdYRzVjZEZ4MFhIUnlaWFIxY200Z2RtRnNMbk4wWVdOcklIeDhJSFpoYkM1dFpYTnpZV2RsTzF4dVhIUmNkSDFjYmx4MFhIUnlaWFIxY200Z2RtRnNPMXh1WEhSOVhHNWNibHgwWTNKbFlYUmxSR1ZpZFdjdVpXNWhZbXhsS0dOeVpXRjBaVVJsWW5WbkxteHZZV1FvS1NrN1hHNWNibHgwY21WMGRYSnVJR055WldGMFpVUmxZblZuTzF4dWZWeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJSE5sZEhWd08xeHVJaXdpTHlvcVhHNGdLaUJJWld4d1pYSnpMbHh1SUNvdlhHNWNiblpoY2lCeklEMGdNVEF3TUR0Y2JuWmhjaUJ0SUQwZ2N5QXFJRFl3TzF4dWRtRnlJR2dnUFNCdElDb2dOakE3WEc1MllYSWdaQ0E5SUdnZ0tpQXlORHRjYm5aaGNpQjNJRDBnWkNBcUlEYzdYRzUyWVhJZ2VTQTlJR1FnS2lBek5qVXVNalU3WEc1Y2JpOHFLbHh1SUNvZ1VHRnljMlVnYjNJZ1ptOXliV0YwSUhSb1pTQm5hWFpsYmlCZ2RtRnNZQzVjYmlBcVhHNGdLaUJQY0hScGIyNXpPbHh1SUNwY2JpQXFJQ0F0SUdCc2IyNW5ZQ0IyWlhKaWIzTmxJR1p2Y20xaGRIUnBibWNnVzJaaGJITmxYVnh1SUNwY2JpQXFJRUJ3WVhKaGJTQjdVM1J5YVc1bmZFNTFiV0psY24wZ2RtRnNYRzRnS2lCQWNHRnlZVzBnZTA5aWFtVmpkSDBnVzI5d2RHbHZibk5kWEc0Z0tpQkFkR2h5YjNkeklIdEZjbkp2Y24wZ2RHaHliM2NnWVc0Z1pYSnliM0lnYVdZZ2RtRnNJR2x6SUc1dmRDQmhJRzV2YmkxbGJYQjBlU0J6ZEhKcGJtY2diM0lnWVNCdWRXMWlaWEpjYmlBcUlFQnlaWFIxY200Z2UxTjBjbWx1WjN4T2RXMWlaWEo5WEc0Z0tpQkFZWEJwSUhCMVlteHBZMXh1SUNvdlhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SeklEMGdablZ1WTNScGIyNG9kbUZzTENCdmNIUnBiMjV6S1NCN1hHNGdJRzl3ZEdsdmJuTWdQU0J2Y0hScGIyNXpJSHg4SUh0OU8xeHVJQ0IyWVhJZ2RIbHdaU0E5SUhSNWNHVnZaaUIyWVd3N1hHNGdJR2xtSUNoMGVYQmxJRDA5UFNBbmMzUnlhVzVuSnlBbUppQjJZV3d1YkdWdVozUm9JRDRnTUNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ3WVhKelpTaDJZV3dwTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLSFI1Y0dVZ1BUMDlJQ2R1ZFcxaVpYSW5JQ1ltSUdselRtRk9LSFpoYkNrZ1BUMDlJR1poYkhObEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUc5d2RHbHZibk11Ykc5dVp5QS9JR1p0ZEV4dmJtY29kbUZzS1NBNklHWnRkRk5vYjNKMEtIWmhiQ2s3WEc0Z0lIMWNiaUFnZEdoeWIzY2dibVYzSUVWeWNtOXlLRnh1SUNBZ0lDZDJZV3dnYVhNZ2JtOTBJR0VnYm05dUxXVnRjSFI1SUhOMGNtbHVaeUJ2Y2lCaElIWmhiR2xrSUc1MWJXSmxjaTRnZG1Gc1BTY2dLMXh1SUNBZ0lDQWdTbE5QVGk1emRISnBibWRwWm5rb2RtRnNLVnh1SUNBcE8xeHVmVHRjYmx4dUx5b3FYRzRnS2lCUVlYSnpaU0IwYUdVZ1oybDJaVzRnWUhOMGNtQWdZVzVrSUhKbGRIVnliaUJ0YVd4c2FYTmxZMjl1WkhNdVhHNGdLbHh1SUNvZ1FIQmhjbUZ0SUh0VGRISnBibWQ5SUhOMGNseHVJQ29nUUhKbGRIVnliaUI3VG5WdFltVnlmVnh1SUNvZ1FHRndhU0J3Y21sMllYUmxYRzRnS2k5Y2JseHVablZ1WTNScGIyNGdjR0Z5YzJVb2MzUnlLU0I3WEc0Z0lITjBjaUE5SUZOMGNtbHVaeWh6ZEhJcE8xeHVJQ0JwWmlBb2MzUnlMbXhsYm1kMGFDQStJREV3TUNrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVJQ0IyWVhJZ2JXRjBZMmdnUFNBdlhpZ29QenBjWEdRcktUOWNYQzAvWEZ4a1AxeGNMajljWEdRcktTQXFLRzFwYkd4cGMyVmpiMjVrY3o5OGJYTmxZM00vZkcxemZITmxZMjl1WkhNL2ZITmxZM00vZkhOOGJXbHVkWFJsY3o5OGJXbHVjejk4Ylh4b2IzVnljejk4YUhKelAzeG9mR1JoZVhNL2ZHUjhkMlZsYTNNL2ZIZDhlV1ZoY25NL2ZIbHljejk4ZVNrL0pDOXBMbVY0WldNb1hHNGdJQ0FnYzNSeVhHNGdJQ2s3WEc0Z0lHbG1JQ2doYldGMFkyZ3BJSHRjYmlBZ0lDQnlaWFIxY200N1hHNGdJSDFjYmlBZ2RtRnlJRzRnUFNCd1lYSnpaVVpzYjJGMEtHMWhkR05vV3pGZEtUdGNiaUFnZG1GeUlIUjVjR1VnUFNBb2JXRjBZMmhiTWwwZ2ZId2dKMjF6SnlrdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmlBZ2MzZHBkR05vSUNoMGVYQmxLU0I3WEc0Z0lDQWdZMkZ6WlNBbmVXVmhjbk1uT2x4dUlDQWdJR05oYzJVZ0ozbGxZWEluT2x4dUlDQWdJR05oYzJVZ0ozbHljeWM2WEc0Z0lDQWdZMkZ6WlNBbmVYSW5PbHh1SUNBZ0lHTmhjMlVnSjNrbk9seHVJQ0FnSUNBZ2NtVjBkWEp1SUc0Z0tpQjVPMXh1SUNBZ0lHTmhjMlVnSjNkbFpXdHpKenBjYmlBZ0lDQmpZWE5sSUNkM1pXVnJKenBjYmlBZ0lDQmpZWE5sSUNkM0p6cGNiaUFnSUNBZ0lISmxkSFZ5YmlCdUlDb2dkenRjYmlBZ0lDQmpZWE5sSUNka1lYbHpKenBjYmlBZ0lDQmpZWE5sSUNka1lYa25PbHh1SUNBZ0lHTmhjMlVnSjJRbk9seHVJQ0FnSUNBZ2NtVjBkWEp1SUc0Z0tpQmtPMXh1SUNBZ0lHTmhjMlVnSjJodmRYSnpKenBjYmlBZ0lDQmpZWE5sSUNkb2IzVnlKenBjYmlBZ0lDQmpZWE5sSUNkb2NuTW5PbHh1SUNBZ0lHTmhjMlVnSjJoeUp6cGNiaUFnSUNCallYTmxJQ2RvSnpwY2JpQWdJQ0FnSUhKbGRIVnliaUJ1SUNvZ2FEdGNiaUFnSUNCallYTmxJQ2R0YVc1MWRHVnpKenBjYmlBZ0lDQmpZWE5sSUNkdGFXNTFkR1VuT2x4dUlDQWdJR05oYzJVZ0oyMXBibk1uT2x4dUlDQWdJR05oYzJVZ0oyMXBiaWM2WEc0Z0lDQWdZMkZ6WlNBbmJTYzZYRzRnSUNBZ0lDQnlaWFIxY200Z2JpQXFJRzA3WEc0Z0lDQWdZMkZ6WlNBbmMyVmpiMjVrY3ljNlhHNGdJQ0FnWTJGelpTQW5jMlZqYjI1a0p6cGNiaUFnSUNCallYTmxJQ2R6WldOekp6cGNiaUFnSUNCallYTmxJQ2R6WldNbk9seHVJQ0FnSUdOaGMyVWdKM01uT2x4dUlDQWdJQ0FnY21WMGRYSnVJRzRnS2lCek8xeHVJQ0FnSUdOaGMyVWdKMjFwYkd4cGMyVmpiMjVrY3ljNlhHNGdJQ0FnWTJGelpTQW5iV2xzYkdselpXTnZibVFuT2x4dUlDQWdJR05oYzJVZ0oyMXpaV056SnpwY2JpQWdJQ0JqWVhObElDZHRjMlZqSnpwY2JpQWdJQ0JqWVhObElDZHRjeWM2WEc0Z0lDQWdJQ0J5WlhSMWNtNGdianRjYmlBZ0lDQmtaV1poZFd4ME9seHVJQ0FnSUNBZ2NtVjBkWEp1SUhWdVpHVm1hVzVsWkR0Y2JpQWdmVnh1ZlZ4dVhHNHZLaXBjYmlBcUlGTm9iM0owSUdadmNtMWhkQ0JtYjNJZ1lHMXpZQzVjYmlBcVhHNGdLaUJBY0dGeVlXMGdlMDUxYldKbGNuMGdiWE5jYmlBcUlFQnlaWFIxY200Z2UxTjBjbWx1WjMxY2JpQXFJRUJoY0drZ2NISnBkbUYwWlZ4dUlDb3ZYRzVjYm1aMWJtTjBhVzl1SUdadGRGTm9iM0owS0cxektTQjdYRzRnSUhaaGNpQnRjMEZpY3lBOUlFMWhkR2d1WVdKektHMXpLVHRjYmlBZ2FXWWdLRzF6UVdKeklENDlJR1FwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1eWIzVnVaQ2h0Y3lBdklHUXBJQ3NnSjJRbk8xeHVJQ0I5WEc0Z0lHbG1JQ2h0YzBGaWN5QStQU0JvS1NCN1hHNGdJQ0FnY21WMGRYSnVJRTFoZEdndWNtOTFibVFvYlhNZ0x5Qm9LU0FySUNkb0p6dGNiaUFnZlZ4dUlDQnBaaUFvYlhOQlluTWdQajBnYlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0cxeklDOGdiU2tnS3lBbmJTYzdYRzRnSUgxY2JpQWdhV1lnS0cxelFXSnpJRDQ5SUhNcElIdGNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXliM1Z1WkNodGN5QXZJSE1wSUNzZ0ozTW5PMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnRjeUFySUNkdGN5YzdYRzU5WEc1Y2JpOHFLbHh1SUNvZ1RHOXVaeUJtYjNKdFlYUWdabTl5SUdCdGMyQXVYRzRnS2x4dUlDb2dRSEJoY21GdElIdE9kVzFpWlhKOUlHMXpYRzRnS2lCQWNtVjBkWEp1SUh0VGRISnBibWQ5WEc0Z0tpQkFZWEJwSUhCeWFYWmhkR1ZjYmlBcUwxeHVYRzVtZFc1amRHbHZiaUJtYlhSTWIyNW5LRzF6S1NCN1hHNGdJSFpoY2lCdGMwRmljeUE5SUUxaGRHZ3VZV0p6S0cxektUdGNiaUFnYVdZZ0tHMXpRV0p6SUQ0OUlHUXBJSHRjYmlBZ0lDQnlaWFIxY200Z2NHeDFjbUZzS0cxekxDQnRjMEZpY3l3Z1pDd2dKMlJoZVNjcE8xeHVJQ0I5WEc0Z0lHbG1JQ2h0YzBGaWN5QStQU0JvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEJzZFhKaGJDaHRjeXdnYlhOQlluTXNJR2dzSUNkb2IzVnlKeWs3WEc0Z0lIMWNiaUFnYVdZZ0tHMXpRV0p6SUQ0OUlHMHBJSHRjYmlBZ0lDQnlaWFIxY200Z2NHeDFjbUZzS0cxekxDQnRjMEZpY3l3Z2JTd2dKMjFwYm5WMFpTY3BPMXh1SUNCOVhHNGdJR2xtSUNodGMwRmljeUErUFNCektTQjdYRzRnSUNBZ2NtVjBkWEp1SUhCc2RYSmhiQ2h0Y3l3Z2JYTkJZbk1zSUhNc0lDZHpaV052Ym1RbktUdGNiaUFnZlZ4dUlDQnlaWFIxY200Z2JYTWdLeUFuSUcxekp6dGNibjFjYmx4dUx5b3FYRzRnS2lCUWJIVnlZV3hwZW1GMGFXOXVJR2hsYkhCbGNpNWNiaUFxTDF4dVhHNW1kVzVqZEdsdmJpQndiSFZ5WVd3b2JYTXNJRzF6UVdKekxDQnVMQ0J1WVcxbEtTQjdYRzRnSUhaaGNpQnBjMUJzZFhKaGJDQTlJRzF6UVdKeklENDlJRzRnS2lBeExqVTdYRzRnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0cxeklDOGdiaWtnS3lBbklDY2dLeUJ1WVcxbElDc2dLR2x6VUd4MWNtRnNJRDhnSjNNbklEb2dKeWNwTzF4dWZWeHVJaXdpTHk4Z2MyaHBiU0JtYjNJZ2RYTnBibWNnY0hKdlkyVnpjeUJwYmlCaWNtOTNjMlZ5WEc1MllYSWdjSEp2WTJWemN5QTlJRzF2WkhWc1pTNWxlSEJ2Y25SeklEMGdlMzA3WEc1Y2JpOHZJR05oWTJobFpDQm1jbTl0SUhkb1lYUmxkbVZ5SUdkc2IySmhiQ0JwY3lCd2NtVnpaVzUwSUhOdklIUm9ZWFFnZEdWemRDQnlkVzV1WlhKeklIUm9ZWFFnYzNSMVlpQnBkRnh1THk4Z1pHOXVKM1FnWW5KbFlXc2dkR2hwYm1kekxpQWdRblYwSUhkbElHNWxaV1FnZEc4Z2QzSmhjQ0JwZENCcGJpQmhJSFJ5ZVNCallYUmphQ0JwYmlCallYTmxJR2wwSUdselhHNHZMeUIzY21Gd2NHVmtJR2x1SUhOMGNtbGpkQ0J0YjJSbElHTnZaR1VnZDJocFkyZ2daRzlsYzI0bmRDQmtaV1pwYm1VZ1lXNTVJR2RzYjJKaGJITXVJQ0JKZENkeklHbHVjMmxrWlNCaFhHNHZMeUJtZFc1amRHbHZiaUJpWldOaGRYTmxJSFJ5ZVM5allYUmphR1Z6SUdSbGIzQjBhVzFwZW1VZ2FXNGdZMlZ5ZEdGcGJpQmxibWRwYm1WekxseHVYRzUyWVhJZ1kyRmphR1ZrVTJWMFZHbHRaVzkxZER0Y2JuWmhjaUJqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFE3WEc1Y2JtWjFibU4wYVc5dUlHUmxabUYxYkhSVFpYUlVhVzF2ZFhRb0tTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkelpYUlVhVzFsYjNWMElHaGhjeUJ1YjNRZ1ltVmxiaUJrWldacGJtVmtKeWs3WEc1OVhHNW1kVzVqZEdsdmJpQmtaV1poZFd4MFEyeGxZWEpVYVcxbGIzVjBJQ2dwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMk5zWldGeVZHbHRaVzkxZENCb1lYTWdibTkwSUdKbFpXNGdaR1ZtYVc1bFpDY3BPMXh1ZlZ4dUtHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlITmxkRlJwYldWdmRYUWdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaFkyaGxaRk5sZEZScGJXVnZkWFFnUFNCelpYUlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJUWlhSVWFXMXZkWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BTQmtaV1poZFd4MFUyVjBWR2x0YjNWME8xeHVJQ0FnSUgxY2JpQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEhsd1pXOW1JR05zWldGeVZHbHRaVzkxZENBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBJRDBnWTJ4bFlYSlVhVzFsYjNWME8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwZ1pHVm1ZWFZzZEVOc1pXRnlWR2x0Wlc5MWREdGNiaUFnSUNCOVhHNTlJQ2dwS1Z4dVpuVnVZM1JwYjI0Z2NuVnVWR2x0Wlc5MWRDaG1kVzRwSUh0Y2JpQWdJQ0JwWmlBb1kyRmphR1ZrVTJWMFZHbHRaVzkxZENBOVBUMGdjMlYwVkdsdFpXOTFkQ2tnZTF4dUlDQWdJQ0FnSUNBdkwyNXZjbTFoYkNCbGJuWnBjbTl0Wlc1MGN5QnBiaUJ6WVc1bElITnBkSFZoZEdsdmJuTmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITmxkRlJwYldWdmRYUW9ablZ1TENBd0tUdGNiaUFnSUNCOVhHNGdJQ0FnTHk4Z2FXWWdjMlYwVkdsdFpXOTFkQ0IzWVhOdUozUWdZWFpoYVd4aFlteGxJR0oxZENCM1lYTWdiR0YwZEdWeUlHUmxabWx1WldSY2JpQWdJQ0JwWmlBb0tHTmhZMmhsWkZObGRGUnBiV1Z2ZFhRZ1BUMDlJR1JsWm1GMWJIUlRaWFJVYVcxdmRYUWdmSHdnSVdOaFkyaGxaRk5sZEZScGJXVnZkWFFwSUNZbUlITmxkRlJwYldWdmRYUXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCelpYUlVhVzFsYjNWMEtHWjFiaXdnTUNrN1hHNGdJQ0FnZlZ4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDOHZJSGRvWlc0Z2QyaGxiaUJ6YjIxbFltOWtlU0JvWVhNZ2MyTnlaWGRsWkNCM2FYUm9JSE5sZEZScGJXVnZkWFFnWW5WMElHNXZJRWt1UlM0Z2JXRmtaRzVsYzNOY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRk5sZEZScGJXVnZkWFFvWm5WdUxDQXdLVHRjYmlBZ0lDQjlJR05oZEdOb0tHVXBlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1YyaGxiaUIzWlNCaGNtVWdhVzRnU1M1RkxpQmlkWFFnZEdobElITmpjbWx3ZENCb1lYTWdZbVZsYmlCbGRtRnNaV1FnYzI4Z1NTNUZMaUJrYjJWemJpZDBJSFJ5ZFhOMElIUm9aU0JuYkc5aVlXd2diMkpxWldOMElIZG9aVzRnWTJGc2JHVmtJRzV2Y20xaGJHeDVYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWTJGamFHVmtVMlYwVkdsdFpXOTFkQzVqWVd4c0tHNTFiR3dzSUdaMWJpd2dNQ2s3WEc0Z0lDQWdJQ0FnSUgwZ1kyRjBZMmdvWlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCellXMWxJR0Z6SUdGaWIzWmxJR0oxZENCM2FHVnVJR2wwSjNNZ1lTQjJaWEp6YVc5dUlHOW1JRWt1UlM0Z2RHaGhkQ0J0ZFhOMElHaGhkbVVnZEdobElHZHNiMkpoYkNCdlltcGxZM1FnWm05eUlDZDBhR2x6Snl3Z2FHOXdablZzYkhrZ2IzVnlJR052Ym5SbGVIUWdZMjl5Y21WamRDQnZkR2hsY25kcGMyVWdhWFFnZDJsc2JDQjBhSEp2ZHlCaElHZHNiMkpoYkNCbGNuSnZjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOaFkyaGxaRk5sZEZScGJXVnZkWFF1WTJGc2JDaDBhR2x6TENCbWRXNHNJREFwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNWNibjFjYm1aMWJtTjBhVzl1SUhKMWJrTnNaV0Z5VkdsdFpXOTFkQ2h0WVhKclpYSXBJSHRjYmlBZ0lDQnBaaUFvWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwOVBTQmpiR1ZoY2xScGJXVnZkWFFwSUh0Y2JpQWdJQ0FnSUNBZ0x5OXViM0p0WVd3Z1pXNTJhWEp2YldWdWRITWdhVzRnYzJGdVpTQnphWFIxWVhScGIyNXpYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLVHRjYmlBZ0lDQjlYRzRnSUNBZ0x5OGdhV1lnWTJ4bFlYSlVhVzFsYjNWMElIZGhjMjRuZENCaGRtRnBiR0ZpYkdVZ1luVjBJSGRoY3lCc1lYUjBaWElnWkdWbWFXNWxaRnh1SUNBZ0lHbG1JQ2dvWTJGamFHVmtRMnhsWVhKVWFXMWxiM1YwSUQwOVBTQmtaV1poZFd4MFEyeGxZWEpVYVcxbGIzVjBJSHg4SUNGallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRcElDWW1JR05zWldGeVZHbHRaVzkxZENrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQU0JqYkdWaGNsUnBiV1Z2ZFhRN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamJHVmhjbFJwYldWdmRYUW9iV0Z5YTJWeUtUdGNiaUFnSUNCOVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdMeThnZDJobGJpQjNhR1Z1SUhOdmJXVmliMlI1SUdoaGN5QnpZM0psZDJWa0lIZHBkR2dnYzJWMFZHbHRaVzkxZENCaWRYUWdibThnU1M1RkxpQnRZV1JrYm1WemMxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyRmphR1ZrUTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrN1hHNGdJQ0FnZlNCallYUmphQ0FvWlNsN1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJYYUdWdUlIZGxJR0Z5WlNCcGJpQkpMa1V1SUdKMWRDQjBhR1VnYzJOeWFYQjBJR2hoY3lCaVpXVnVJR1YyWVd4bFpDQnpieUJKTGtVdUlHUnZaWE51SjNRZ0lIUnlkWE4wSUhSb1pTQm5iRzlpWVd3Z2IySnFaV04wSUhkb1pXNGdZMkZzYkdWa0lHNXZjbTFoYkd4NVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1EyeGxZWEpVYVcxbGIzVjBMbU5oYkd3b2JuVnNiQ3dnYldGeWEyVnlLVHRjYmlBZ0lDQWdJQ0FnZlNCallYUmphQ0FvWlNsN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCellXMWxJR0Z6SUdGaWIzWmxJR0oxZENCM2FHVnVJR2wwSjNNZ1lTQjJaWEp6YVc5dUlHOW1JRWt1UlM0Z2RHaGhkQ0J0ZFhOMElHaGhkbVVnZEdobElHZHNiMkpoYkNCdlltcGxZM1FnWm05eUlDZDBhR2x6Snl3Z2FHOXdablZzYkhrZ2IzVnlJR052Ym5SbGVIUWdZMjl5Y21WamRDQnZkR2hsY25kcGMyVWdhWFFnZDJsc2JDQjBhSEp2ZHlCaElHZHNiMkpoYkNCbGNuSnZjaTVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk52YldVZ2RtVnljMmx2Ym5NZ2IyWWdTUzVGTGlCb1lYWmxJR1JwWm1abGNtVnVkQ0J5ZFd4bGN5Qm1iM0lnWTJ4bFlYSlVhVzFsYjNWMElIWnpJSE5sZEZScGJXVnZkWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRdVkyRnNiQ2gwYUdsekxDQnRZWEpyWlhJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzVjYmx4dWZWeHVkbUZ5SUhGMVpYVmxJRDBnVzEwN1hHNTJZWElnWkhKaGFXNXBibWNnUFNCbVlXeHpaVHRjYm5aaGNpQmpkWEp5Wlc1MFVYVmxkV1U3WEc1MllYSWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVYRzVtZFc1amRHbHZiaUJqYkdWaGJsVndUbVY0ZEZScFkyc29LU0I3WEc0Z0lDQWdhV1lnS0NGa2NtRnBibWx1WnlCOGZDQWhZM1Z5Y21WdWRGRjFaWFZsS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdaSEpoYVc1cGJtY2dQU0JtWVd4elpUdGNiaUFnSUNCcFppQW9ZM1Z5Y21WdWRGRjFaWFZsTG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNCeGRXVjFaU0E5SUdOMWNuSmxiblJSZFdWMVpTNWpiMjVqWVhRb2NYVmxkV1VwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEYxWlhWbFNXNWtaWGdnUFNBdE1UdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tIRjFaWFZsTG14bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNCa2NtRnBibEYxWlhWbEtDazdYRzRnSUNBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCa2NtRnBibEYxWlhWbEtDa2dlMXh1SUNBZ0lHbG1JQ2hrY21GcGJtbHVaeWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1SUNBZ0lIWmhjaUIwYVcxbGIzVjBJRDBnY25WdVZHbHRaVzkxZENoamJHVmhibFZ3VG1WNGRGUnBZMnNwTzF4dUlDQWdJR1J5WVdsdWFXNW5JRDBnZEhKMVpUdGNibHh1SUNBZ0lIWmhjaUJzWlc0Z1BTQnhkV1YxWlM1c1pXNW5kR2c3WEc0Z0lDQWdkMmhwYkdVb2JHVnVLU0I3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblJSZFdWMVpTQTlJSEYxWlhWbE8xeHVJQ0FnSUNBZ0lDQnhkV1YxWlNBOUlGdGRPMXh1SUNBZ0lDQWdJQ0IzYUdsc1pTQW9LeXR4ZFdWMVpVbHVaR1Y0SUR3Z2JHVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRkYxWlhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGRjFaWFZsVzNGMVpYVmxTVzVrWlhoZExuSjFiaWdwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhGMVpYVmxTVzVrWlhnZ1BTQXRNVHRjYmlBZ0lDQWdJQ0FnYkdWdUlEMGdjWFZsZFdVdWJHVnVaM1JvTzF4dUlDQWdJSDFjYmlBZ0lDQmpkWEp5Wlc1MFVYVmxkV1VnUFNCdWRXeHNPMXh1SUNBZ0lHUnlZV2x1YVc1bklEMGdabUZzYzJVN1hHNGdJQ0FnY25WdVEyeGxZWEpVYVcxbGIzVjBLSFJwYldWdmRYUXBPMXh1ZlZ4dVhHNXdjbTlqWlhOekxtNWxlSFJVYVdOcklEMGdablZ1WTNScGIyNGdLR1oxYmlrZ2UxeHVJQ0FnSUhaaGNpQmhjbWR6SUQwZ2JtVjNJRUZ5Y21GNUtHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnZ0xTQXhLVHRjYmlBZ0lDQnBaaUFvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0ErSURFcElIdGNiaUFnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURFN0lHa2dQQ0JoY21kMWJXVnVkSE11YkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdGeVozTmJhU0F0SURGZElEMGdZWEpuZFcxbGJuUnpXMmxkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQWdJSEYxWlhWbExuQjFjMmdvYm1WM0lFbDBaVzBvWm5WdUxDQmhjbWR6S1NrN1hHNGdJQ0FnYVdZZ0tIRjFaWFZsTG14bGJtZDBhQ0E5UFQwZ01TQW1KaUFoWkhKaGFXNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2NuVnVWR2x0Wlc5MWRDaGtjbUZwYmxGMVpYVmxLVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNHZMeUIyT0NCc2FXdGxjeUJ3Y21Wa2FXTjBhV0pzWlNCdlltcGxZM1J6WEc1bWRXNWpkR2x2YmlCSmRHVnRLR1oxYml3Z1lYSnlZWGtwSUh0Y2JpQWdJQ0IwYUdsekxtWjFiaUE5SUdaMWJqdGNiaUFnSUNCMGFHbHpMbUZ5Y21GNUlEMGdZWEp5WVhrN1hHNTlYRzVKZEdWdExuQnliM1J2ZEhsd1pTNXlkVzRnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RHaHBjeTVtZFc0dVlYQndiSGtvYm5Wc2JDd2dkR2hwY3k1aGNuSmhlU2s3WEc1OU8xeHVjSEp2WTJWemN5NTBhWFJzWlNBOUlDZGljbTkzYzJWeUp6dGNibkJ5YjJObGMzTXVZbkp2ZDNObGNpQTlJSFJ5ZFdVN1hHNXdjbTlqWlhOekxtVnVkaUE5SUh0OU8xeHVjSEp2WTJWemN5NWhjbWQySUQwZ1cxMDdYRzV3Y205alpYTnpMblpsY25OcGIyNGdQU0FuSnpzZ0x5OGdaVzF3ZEhrZ2MzUnlhVzVuSUhSdklHRjJiMmxrSUhKbFoyVjRjQ0JwYzNOMVpYTmNibkJ5YjJObGMzTXVkbVZ5YzJsdmJuTWdQU0I3ZlR0Y2JseHVablZ1WTNScGIyNGdibTl2Y0NncElIdDlYRzVjYm5CeWIyTmxjM011YjI0Z1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1aFpHUk1hWE4wWlc1bGNpQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxtOXVZMlVnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV2Wm1ZZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1eVpXMXZkbVZNYVhOMFpXNWxjaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbkpsYlc5MlpVRnNiRXhwYzNSbGJtVnljeUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbVZ0YVhRZ1BTQnViMjl3TzF4dWNISnZZMlZ6Y3k1d2NtVndaVzVrVEdsemRHVnVaWElnUFNCdWIyOXdPMXh1Y0hKdlkyVnpjeTV3Y21Wd1pXNWtUMjVqWlV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYmx4dWNISnZZMlZ6Y3k1c2FYTjBaVzVsY25NZ1BTQm1kVzVqZEdsdmJpQW9ibUZ0WlNrZ2V5QnlaWFIxY200Z1cxMGdmVnh1WEc1d2NtOWpaWE56TG1KcGJtUnBibWNnUFNCbWRXNWpkR2x2YmlBb2JtRnRaU2tnZTF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25jSEp2WTJWemN5NWlhVzVrYVc1bklHbHpJRzV2ZENCemRYQndiM0owWldRbktUdGNibjA3WEc1Y2JuQnliMk5sYzNNdVkzZGtJRDBnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z0p5OG5JSDA3WEc1d2NtOWpaWE56TG1Ob1pHbHlJRDBnWm5WdVkzUnBiMjRnS0dScGNpa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnbmNISnZZMlZ6Y3k1amFHUnBjaUJwY3lCdWIzUWdjM1Z3Y0c5eWRHVmtKeWs3WEc1OU8xeHVjSEp2WTJWemN5NTFiV0Z6YXlBOUlHWjFibU4wYVc5dUtDa2dleUJ5WlhSMWNtNGdNRHNnZlR0Y2JpSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWNGNHOXlkSE1zSUZ3aVgxOWxjMDF2WkhWc1pWd2lMQ0I3SUhaaGJIVmxPaUIwY25WbElIMHBPMXh1Wlhod2IzSjBjeTVpZFdabVpYSlViMU4wY21sdVp5QTlJR1oxYm1OMGFXOXVJQ2hpZFdabVpYSXNJSE4wWVhKMFNXNWtaWGdzSUd4bGJtZDBhQ2tnZTF4dUlDQWdJSFpoY2lCemRISWdQU0FuSnp0Y2JpQWdJQ0IyWVhJZ1pHRjBZVlpwWlhjZ1BTQnVaWGNnUkdGMFlWWnBaWGNvWW5WbVptVnlMQ0J6ZEdGeWRFbHVaR1Y0TENCc1pXNW5kR2dwTzF4dUlDQWdJR1p2Y2lBb2RtRnlJR2tnUFNBd095QnBJRHdnYkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdjM1J5SUNzOUlGTjBjbWx1Wnk1bWNtOXRRMmhoY2tOdlpHVW9aR0YwWVZacFpYY3VaMlYwVldsdWREZ29hU2twTzF4dUlDQWdJSDFjYmlBZ0lDQnlaWFIxY200Z2MzUnlPMXh1ZlR0Y2JpSXNJbHdpZFhObElITjBjbWxqZEZ3aU8xeHVablZ1WTNScGIyNGdYMTlsZUhCdmNuUW9iU2tnZTF4dUlDQWdJR1p2Y2lBb2RtRnlJSEFnYVc0Z2JTa2dhV1lnS0NGbGVIQnZjblJ6TG1oaGMwOTNibEJ5YjNCbGNuUjVLSEFwS1NCbGVIQnZjblJ6VzNCZElEMGdiVnR3WFR0Y2JuMWNiazlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNobGVIQnZjblJ6TENCY0lsOWZaWE5OYjJSMWJHVmNJaXdnZXlCMllXeDFaVG9nZEhKMVpTQjlLVHRjYmw5ZlpYaHdiM0owS0hKbGNYVnBjbVVvWENJdUwySjFabVpsY2kxMGJ5MXpkSEpwYm1kY0lpa3BPMXh1WDE5bGVIQnZjblFvY21WeGRXbHlaU2hjSWk0dmRtRnlhV0ZpYkdVdGJHVnVaM1JvTFhaaGJIVmxYQ0lwS1R0Y2JsOWZaWGh3YjNKMEtISmxjWFZwY21Vb1hDSXVMMjFwWkdrdGJtOTBaUzFqYjI1MlpYSjBaWEpjSWlrcE8xeHVJaXdpWENKMWMyVWdjM1J5YVdOMFhDSTdYRzVQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pYaHdiM0owY3l3Z1hDSmZYMlZ6VFc5a2RXeGxYQ0lzSUhzZ2RtRnNkV1U2SUhSeWRXVWdmU2s3WEc1bWRXNWpkR2x2YmlCT2IzUmxUblZ0WW1WeVZHOU9ZVzFsS0c1dmRHVXBJSHRjYmlBZ0lDQjJZWElnYzNSbGNEdGNiaUFnSUNCMllYSWdZV3gwWlhJN1hHNGdJQ0FnTHk4Z1pYTnNhVzUwTFdScGMyRmliR1V0Ym1WNGRDMXNhVzVsSUc1dkxXMWhaMmxqTFc1MWJXSmxjbk5jYmlBZ0lDQjJZWElnYjJOMFlYWmxJRDBnVFdGMGFDNW1iRzl2Y2lodWIzUmxJQzhnTVRJcElDMGdNVHRjYmlBZ0lDQXZLaUJsYzJ4cGJuUXRaR2x6WVdKc1pTQnVieTFtWVd4c2RHaHliM1ZuYUNBcUwxeHVJQ0FnSUM4cUlHVnpiR2x1ZEMxa2FYTmhZbXhsSUc1dkxXMWhaMmxqTFc1MWJXSmxjbk1nS2k5Y2JpQWdJQ0J6ZDJsMFkyZ2dLRzV2ZEdVZ0pTQXhNaWtnZTF4dUlDQWdJQ0FnSUNCallYTmxJREU2WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiSFJsY2lBOUlERTdYRzRnSUNBZ0lDQWdJR05oYzJVZ01EcGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFpYQWdQU0JjSWtOY0lqdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0JqWVhObElETTZYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJIUmxjaUE5SURFN1hHNGdJQ0FnSUNBZ0lHTmhjMlVnTWpwY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWlhBZ1BTQmNJa1JjSWp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ0lDQmpZWE5sSURRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd0lEMGdYQ0pGWENJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdZMkZ6WlNBMk9seHVJQ0FnSUNBZ0lDQWdJQ0FnWVd4MFpYSWdQU0F4TzF4dUlDQWdJQ0FnSUNCallYTmxJRFU2WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3SUQwZ1hDSkdYQ0k3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ1kyRnpaU0E0T2x4dUlDQWdJQ0FnSUNBZ0lDQWdZV3gwWlhJZ1BTQXhPMXh1SUNBZ0lDQWdJQ0JqWVhObElEYzZYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHVndJRDBnWENKSFhDSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnWTJGelpTQXhNRHBjYmlBZ0lDQWdJQ0FnSUNBZ0lHRnNkR1Z5SUQwZ01UdGNiaUFnSUNBZ0lDQWdZMkZ6WlNBNU9seHVJQ0FnSUNBZ0lDQWdJQ0FnYzNSbGNDQTlJRndpUVZ3aU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJR05oYzJVZ01URTZYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHVndJRDBnWENKQ1hDSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ0x5b2daWE5zYVc1MExXVnVZV0pzWlNCdWJ5MXRZV2RwWXkxdWRXMWlaWEp6SUNvdlhHNGdJQ0FnTHlvZ1pYTnNhVzUwTFdWdVlXSnNaU0J1YnkxbVlXeHNkR2h5YjNWbmFDQXFMMXh1SUNBZ0lIWmhjaUJ1YjNSbFQySnFJRDBnZTF4dUlDQWdJQ0FnSUNCemRHVndPaUJ6ZEdWd0xGeHVJQ0FnSUNBZ0lDQnZZM1JoZG1VNklHOWpkR0YyWlN4Y2JpQWdJQ0I5TzF4dUlDQWdJR2xtSUNoaGJIUmxjaWtnZTF4dUlDQWdJQ0FnSUNCdWIzUmxUMkpxTG1Gc2RHVnlJRDBnWVd4MFpYSTdYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJ1YjNSbFQySnFPMXh1ZlZ4dVpYaHdiM0owY3k1T2IzUmxUblZ0WW1WeVZHOU9ZVzFsSUQwZ1RtOTBaVTUxYldKbGNsUnZUbUZ0WlR0Y2JuWmhjaUJ6ZEdWd1ZHOU9kVzFpWlhJZ1BTQjdYRzRnSUNBZ1F6b2dNQ3hjYmlBZ0lDQkVPaUF5TEZ4dUlDQWdJRVU2SURRc1hHNGdJQ0FnUmpvZ05TeGNiaUFnSUNCSE9pQTNMRnh1SUNBZ0lFRTZJRGtzWEc0Z0lDQWdRam9nTVRFc1hHNTlPMXh1ZG1GeUlITjBaWEJ6SUQwZ1hDSkJRa05FUlVaSFhDSTdYRzVtZFc1amRHbHZiaUJPYjNSbFRtRnRaVlJ2VG5WdFltVnlLRzV2ZEdWT1lXMWxLU0I3WEc0Z0lDQWdkbUZ5SUhOMFpYQTdYRzRnSUNBZ2RtRnlJRzlqZEdGMlpUdGNiaUFnSUNCMllYSWdZV3gwWlhJN1hHNGdJQ0FnYVdZZ0tIUjVjR1Z2WmlCdWIzUmxUbUZ0WlNBOVBUMGdYQ0p6ZEhKcGJtZGNJaWtnZTF4dUlDQWdJQ0FnSUNCMllYSWdiV0YwWTJobGN5QTlJQzllS0Z0QkxVZGRLU2hiSTJKZEtUOG9MVDljWEdRcktTUXZMbVY0WldNb2JtOTBaVTVoYldVcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVcxaGRHTm9aWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVkV3hzTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIWmhjaUJoYkhSbGNsTjBjbWx1WnlBOUlHMWhkR05vWlhOYk1sMDdYRzRnSUNBZ0lDQWdJSE4wWlhBZ1BTQnRZWFJqYUdWeld6RmRPMXh1SUNBZ0lDQWdJQ0J2WTNSaGRtVWdQU0JPZFcxaVpYSW9iV0YwWTJobGMxc3pYU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaGhiSFJsY2xOMGNtbHVaeUE5UFQwZ1hDSmlYQ0lwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZzZEdWeUlEMGdMVEU3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1pXeHpaU0JwWmlBb1lXeDBaWEpUZEhKcGJtY2dQVDA5SUZ3aUkxd2lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiSFJsY2lBOUlERTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhOMFpYQWdQU0J1YjNSbFRtRnRaUzV6ZEdWd08xeHVJQ0FnSUNBZ0lDQmhiSFJsY2lBOUlHNXZkR1ZPWVcxbExtRnNkR1Z5TzF4dUlDQWdJQ0FnSUNCdlkzUmhkbVVnUFNCdWIzUmxUbUZ0WlM1dlkzUmhkbVU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hoYkhSbGNpQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdZV3gwWlhJZ1BTQXhPMXh1SUNBZ0lDQWdJQ0IyWVhJZ2FXNXBkR2xoYkZOMFpYQkpibVJsZUNBOUlITjBaWEJ6TG1sdVpHVjRUMllvYzNSbGNDazdYRzRnSUNBZ0lDQWdJSE4wWlhBZ1BTQnpkR1Z3YzFzb2MzUmxjSE11YVc1a1pYaFBaaWh6ZEdWd0tTQXJJSE4wWlhCekxteGxibWQwYUNBdElERXBJQ1VnYzNSbGNITXViR1Z1WjNSb1hUdGNiaUFnSUNBZ0lDQWdMeThnWlM1bkxpQm5iMmx1WnlCbWNtOXRJRUZpTkNBdFBpQkhJek5jYmlBZ0lDQWdJQ0FnYVdZZ0tITjBaWEJ6TG1sdVpHVjRUMllvYzNSbGNDa2dQaUJwYm1sMGFXRnNVM1JsY0VsdVpHVjRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnZZM1JoZG1VZ0xUMGdNVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQjJZWElnYm5WdFltVnlJRDBnYzNSbGNGUnZUblZ0WW1WeVczTjBaWEJkTzF4dUlDQWdJR2xtSUNoaGJIUmxjaUE5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0J1ZFcxaVpYSWdLejBnTVR0Y2JpQWdJQ0I5WEc0Z0lDQWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRibVY0ZEMxc2FXNWxJRzV2TFcxaFoybGpMVzUxYldKbGNuTmNiaUFnSUNCeVpYUjFjbTRnYm5WdFltVnlJQ3NnS0NodlkzUmhkbVVnS3lBeEtTQXFJREV5S1R0Y2JuMWNibVY0Y0c5eWRITXVUbTkwWlU1aGJXVlViMDUxYldKbGNpQTlJRTV2ZEdWT1lXMWxWRzlPZFcxaVpYSTdYRzRpTENKY0luVnpaU0J6ZEhKcFkzUmNJanRjYms5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxlSEJ2Y25SekxDQmNJbDlmWlhOTmIyUjFiR1ZjSWl3Z2V5QjJZV3gxWlRvZ2RISjFaU0I5S1R0Y2JtWjFibU4wYVc5dUlIUnZWbUZ5YVdGaWJHVk1aVzVuZEdoV1lXeDFaU2h1ZFcwcElIdGNiaUFnSUNCMllYSWdZbmwwWlhNZ1BTQmJYVHRjYmlBZ0lDQmtieUI3WEc0Z0lDQWdJQ0FnSUhaaGNpQmllWFJsSUQwZ2JuVnRJQ1lnTUhnM1JqdGNiaUFnSUNBZ0lDQWdiblZ0SUQwZ2JuVnRJRDQrSURjN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hpZVhSbGN5NXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmllWFJsSUQwZ1lubDBaU0FySURCNE9EQTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWW5sMFpYTXVkVzV6YUdsbWRDaGllWFJsS1R0Y2JpQWdJQ0I5SUhkb2FXeGxJQ2h1ZFcwZ1BpQXdLVHRjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlZwYm5RNFFYSnlZWGtvWW5sMFpYTXBPMXh1ZlZ4dVpYaHdiM0owY3k1MGIxWmhjbWxoWW14bFRHVnVaM1JvVm1Gc2RXVWdQU0IwYjFaaGNtbGhZbXhsVEdWdVozUm9WbUZzZFdVN1hHNDdYRzVtZFc1amRHbHZiaUJtY205dFZtRnlhV0ZpYkdWTVpXNW5kR2hXWVd4MVpTaGlkV1ptWlhJc0lITjBZWEowU1c1a1pYZ3BJSHRjYmlBZ0lDQnBaaUFvYzNSaGNuUkpibVJsZUNBOVBUMGdkbTlwWkNBd0tTQjdJSE4wWVhKMFNXNWtaWGdnUFNBd095QjlYRzRnSUNBZ2RtRnlJSFZCY25KaGVTQTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtHSjFabVpsY2l3Z2MzUmhjblJKYm1SbGVDazdYRzRnSUNBZ2RtRnlJSFpoYkhWbElEMGdNRHRjYmlBZ0lDQjJZWElnYVc1a1pYZ2dQU0F0TVR0Y2JpQWdJQ0IyWVhJZ1lubDBaWE5TWldGa0lEMGdNRHRjYmlBZ0lDQmtieUI3WEc0Z0lDQWdJQ0FnSUdsdVpHVjRJQ3M5SURFN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsSUQwZ0tIWmhiSFZsSUR3OElEY3BJQ3NnS0hWQmNuSmhlVnRwYm1SbGVGMGdKaUF3ZURkR0tUdGNiaUFnSUNBZ0lDQWdZbmwwWlhOU1pXRmtJQ3M5SURFN1hHNGdJQ0FnZlNCM2FHbHNaU0FvZFVGeWNtRjVXMmx1WkdWNFhTQW1JREI0T0RBcE8xeHVJQ0FnSUhKbGRIVnliaUJiWW5sMFpYTlNaV0ZrTENCMllXeDFaVjA3WEc1OVhHNWxlSEJ2Y25SekxtWnliMjFXWVhKcFlXSnNaVXhsYm1kMGFGWmhiSFZsSUQwZ1puSnZiVlpoY21saFlteGxUR1Z1WjNSb1ZtRnNkV1U3WEc0N1hHNGlYU3dpYzI5MWNtTmxVbTl2ZENJNklpSjkiLCJcbi8qKlxuICogQHRvZG86IGhhbmRsZSByZXBlYXRzXG4gKiBAdG9kbzogcmVjb25jaWxlIGRpZmZlcmVudCBkaXZpc2lvbiBjb3VudHNcbiAqICAtIGJldHdlZW4gc3RhZmZzXG4gKiAgLSB3aXRoaW4gYSBzdGFmZlxuICogIC0gbm90IHN1cmUgdGhpcyBldmVyIGFjdHVhbGx5IGhhcHBlbnMsIGJ1dCBpcyAqdGVjaG5pY2FsbHkqIHBvc3NpYmxlXG4gKi9cblxuaW1wb3J0IHtcbiAgTm90ZVN0ZXAsXG4gIENoYW5uZWwsXG4gIElLZXlTaWduYXR1cmUsXG4gIEtleVNoYXJwcyxcbiAgSVBpdGNoLFxuICBOb3RlTmFtZVRvTnVtYmVyLFxuICBNSURJRmlsZSxcbn0gZnJvbSBcIkB0aGF5ZXMvbWlkaS10b29sc1wiO1xuXG5cbmludGVyZmFjZSBJVGltZVNpZ25hdHVyZSB7XG4gIG51bWVyYXRvcjogbnVtYmVyO1xuICBkZW5vbWluYXRvcjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVJlc3Qge1xuICBkdXJhdGlvbjogbnVtYmVyO1xuICBzdGFmZjogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSUNob3JkIHtcbiAgbm90ZXM6IElQaXRjaFtdO1xuICBzdGFmZjogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG50eXBlIE1lYXN1cmVJdGVtID0gSVJlc3QgfCBJQ2hvcmQ7XG5cbnR5cGUgTWVhc3VyZUl0ZW1NYXAgPSB7IFtzdGFmZk51bWJlcjogbnVtYmVyXTogTWVhc3VyZUl0ZW1bXSB9O1xuXG5pbnRlcmZhY2UgSU1lYXN1cmUge1xuICBudW1iZXI6IG51bWJlcjtcbiAgbm90ZXM6IE1lYXN1cmVJdGVtTWFwO1xuICBkaXZpc2lvbnM/OiBudW1iZXI7XG4gIHRpbWVTaWduYXR1cmU/OiBJVGltZVNpZ25hdHVyZTtcbiAga2V5U2lnbmF0dXJlPzogSUtleVNpZ25hdHVyZTtcbiAgdGVtcG8/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJSW5zdHJ1bWVudE1JRElJbmZvIHtcbiAgcG9ydD86IG51bWJlcjtcbiAgY2hhbm5lbD86IG51bWJlcjtcbiAgcHJvZ3JhbT86IG51bWJlcjtcbiAgdm9sdW1lPzogbnVtYmVyO1xuICBwYW4/OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBJUGFydEluc3RydW1lbnQge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG1pZGk6IElJbnN0cnVtZW50TUlESUluZm87XG59XG5cbnR5cGUgUGFydEluc3RydW1lbnRNYXAgPSB7IFtpbnN0cnVtZW50SUQ6IHN0cmluZ106IElQYXJ0SW5zdHJ1bWVudCB9O1xuXG5pbnRlcmZhY2UgSVBhcnQge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGluc3RydW1lbnRzOiBQYXJ0SW5zdHJ1bWVudE1hcDtcbn1cblxudHlwZSBQYXJ0TWFwID0geyBbcGFydElEOiBzdHJpbmddOiBJUGFydCB9O1xuXG50eXBlIE1lYXN1cmVNYXAgPSB7IFttZWFzdXJlTnVtYmVyOiBudW1iZXJdOiBJTWVhc3VyZSB9O1xuXG50eXBlIFBhcnRNZWFzdXJlTWFwID0ge1xuICBbcGFydElEOiBzdHJpbmddOiBNZWFzdXJlTWFwLFxufTtcblxuY29uc3QgZ2V0Q2hvcmROb3RlTm9kZXMgPSAoXG4gIHtcbiAgICBkb2N1bWVudCxcbiAgICBpdGVtTm9kZSxcbiAgICBzdGFmZixcbiAgfToge1xuICAgIGRvY3VtZW50OiBEb2N1bWVudCxcbiAgICBpdGVtTm9kZTogRWxlbWVudCxcbiAgICBzdGFmZjogbnVtYmVyLFxuICB9LFxuKSA9PiB7XG4gIGNvbnN0IHNpYmxpbmdzSXRlcmF0b3IgPSBkb2N1bWVudC5ldmFsdWF0ZShcbiAgICBgZm9sbG93aW5nLXNpYmxpbmc6Om5vdGVbc3RhZmYvdGV4dCgpID0gXCIke3N0YWZmfVwiXWAsXG4gICAgaXRlbU5vZGUsXG4gICAgbnVsbCxcbiAgICAod2luZG93IGFzIGFueSkuWFBhdGhSZXN1bHQuT1JERVJFRF9OT0RFX0lURVJBVE9SX1RZUEUsXG4gICAgbnVsbFxuICApO1xuXG4gIGNvbnN0IHNpYmxpbmdzOiBFbGVtZW50W10gPSBbXTtcblxuICBsZXQgbmV4dE5vdGVOb2RlID0gc2libGluZ3NJdGVyYXRvci5pdGVyYXRlTmV4dCgpIGFzIEVsZW1lbnQgfCBudWxsO1xuXG4gIHdoaWxlIChuZXh0Tm90ZU5vZGUgJiYgbmV4dE5vdGVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJjaG9yZFwiKSkge1xuICAgIHNpYmxpbmdzLnB1c2gobmV4dE5vdGVOb2RlKTtcbiAgICBcbiAgICBuZXh0Tm90ZU5vZGUgPSBzaWJsaW5nc0l0ZXJhdG9yLml0ZXJhdGVOZXh0KCkgYXMgRWxlbWVudCB8IG51bGw7XG4gIH1cblxuICByZXR1cm4gc2libGluZ3M7XG59O1xuXG5cbmNvbnN0IHJlYWRNZWFzdXJlc0Zyb21QYXJ0ID0gKHBhcnROb2RlOiBFbGVtZW50LCBkb2N1bWVudDogRG9jdW1lbnQpOiBNZWFzdXJlTWFwID0+IHtcbiAgcmV0dXJuIEFycmF5LmZyb20ocGFydE5vZGUucXVlcnlTZWxlY3RvckFsbChcIm1lYXN1cmVcIikpLnJlZHVjZShcbiAgICAobWVhc3VyZVJlZHVjdGlvbjogTWVhc3VyZU1hcCwgbWVhc3VyZU5vZGU6IEVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IG1lYXN1cmVOdW1iZXIgPSBOdW1iZXIobWVhc3VyZU5vZGUuZ2V0QXR0cmlidXRlKFwibnVtYmVyXCIpKTtcblxuICAgICAgY29uc3QgYXR0cmlidXRlc05vZGUgPSBtZWFzdXJlTm9kZS5xdWVyeVNlbGVjdG9yKFwiYXR0cmlidXRlc1wiKTtcblxuICAgICAgbGV0IHRpbWVTaWduYXR1cmU6IElUaW1lU2lnbmF0dXJlIHwgdW5kZWZpbmVkO1xuICAgICAgXG4gICAgICBsZXQgZGl2aXNpb25zOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAgIGxldCBrZXlTaWduYXR1cmU6IElLZXlTaWduYXR1cmUgfCB1bmRlZmluZWQ7XG4gICAgICBcbiAgICAgIGlmIChhdHRyaWJ1dGVzTm9kZSkge1xuICAgICAgICBjb25zdCBkaXZpc2lvbnNOb2RlOiBFbGVtZW50ID0gYXR0cmlidXRlc05vZGUucXVlcnlTZWxlY3RvcihcImRpdmlzaW9uc1wiKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkaXZpc2lvbnNOb2RlKSB7XG4gICAgICAgICAgZGl2aXNpb25zID0gTnVtYmVyKGRpdmlzaW9uc05vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aW1lU2lnbmF0dXJlTm9kZTogRWxlbWVudCA9IGF0dHJpYnV0ZXNOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJ0aW1lXCIpO1xuXG4gICAgICAgIGlmICh0aW1lU2lnbmF0dXJlTm9kZSkge1xuICAgICAgICAgIHRpbWVTaWduYXR1cmUgPSB7XG4gICAgICAgICAgICBudW1lcmF0b3I6IE51bWJlcih0aW1lU2lnbmF0dXJlTm9kZS5xdWVyeVNlbGVjdG9yKFwiYmVhdHNcIikudGV4dENvbnRlbnQpLFxuICAgICAgICAgICAgZGVub21pbmF0b3I6IE51bWJlcih0aW1lU2lnbmF0dXJlTm9kZS5xdWVyeVNlbGVjdG9yKFwiYmVhdC10eXBlXCIpLnRleHRDb250ZW50KSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qga2V5U2lnbmF0dXJlTm9kZTogRWxlbWVudCA9IGF0dHJpYnV0ZXNOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJrZXlcIik7XG5cbiAgICAgICAgaWYgKGtleVNpZ25hdHVyZU5vZGUpIHtcbiAgICAgICAgICBjb25zdCBtb2RlTm9kZTogRWxlbWVudCA9IGtleVNpZ25hdHVyZU5vZGUucXVlcnlTZWxlY3RvcihcIm1vZGVcIik7XG5cbiAgICAgICAgICBsZXQgbW9kZTogXCJtYWpvclwiIHwgXCJtaW5vclwiID0gXCJtYWpvclwiO1xuXG4gICAgICAgICAgaWYgKG1vZGVOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlU3RyaW5nID0gbW9kZU5vZGUudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmIChtb2RlU3RyaW5nID09PSBcIm1pbm9yXCIpIHtcbiAgICAgICAgICAgICAgbW9kZSA9IG1vZGVTdHJpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAga2V5U2lnbmF0dXJlID0ge1xuICAgICAgICAgICAgc2hhcnBzOiBOdW1iZXIoa2V5U2lnbmF0dXJlTm9kZS5xdWVyeVNlbGVjdG9yKFwiZmlmdGhzXCIpLnRleHRDb250ZW50KSBhcyBLZXlTaGFycHMsXG4gICAgICAgICAgICBtb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYnBtTm9kZTogRWxlbWVudCA9IG1lYXN1cmVOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJkaXJlY3Rpb24gbWV0cm9ub21lID4gcGVyLW1pbnV0ZVwiKTtcblxuICAgICAgbGV0IGJwbTogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoYnBtTm9kZSkge1xuICAgICAgICBicG0gPSBOdW1iZXIoYnBtTm9kZS50ZXh0Q29udGVudCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdGVJdGVyYXRvciA9IGRvY3VtZW50LmV2YWx1YXRlKFxuICAgICAgICBcIi4vL25vdGVbbm90KGNob3JkKV1cIixcbiAgICAgICAgbWVhc3VyZU5vZGUsXG4gICAgICAgIG51bGwsXG4gICAgICAgICh3aW5kb3cgYXMgYW55KS5YUGF0aFJlc3VsdC5PUkRFUkVEX05PREVfSVRFUkFUT1JfVFlQRSxcbiAgICAgICAgbnVsbFxuICAgICAgKTtcblxuICAgICAgbGV0IGl0ZW1Ob2RlOiBFbGVtZW50ID0gbm90ZUl0ZXJhdG9yLml0ZXJhdGVOZXh0KCkgYXMgRWxlbWVudDtcblxuICAgICAgY29uc3Qgbm90ZXNCeVN0YWZmOiBNZWFzdXJlSXRlbU1hcCA9IHt9O1xuXG4gICAgICB3aGlsZSAoaXRlbU5vZGUpIHtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSBOdW1iZXIoaXRlbU5vZGUucXVlcnlTZWxlY3RvcihcImR1cmF0aW9uXCIpLnRleHRDb250ZW50KTtcbiAgICAgICAgY29uc3Qgc3RhZmZOb2RlID0gaXRlbU5vZGUucXVlcnlTZWxlY3RvcihcInN0YWZmXCIpO1xuICAgICAgICBsZXQgc3RhZmY7XG5cbiAgICAgICAgaWYgKHN0YWZmTm9kZSkge1xuICAgICAgICAgIHN0YWZmID0gTnVtYmVyKHN0YWZmTm9kZS50ZXh0Q29udGVudCk7XG5cbiAgICAgICAgICBjb25zdCBpdGVtOiBNZWFzdXJlSXRlbSA9IHtcbiAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgc3RhZmYsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoIWl0ZW1Ob2RlLnF1ZXJ5U2VsZWN0b3IoXCJyZXN0XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBjaG9yZE5vdGVzID0gZ2V0Q2hvcmROb3RlTm9kZXMoe1xuICAgICAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICAgICAgaXRlbU5vZGUsXG4gICAgICAgICAgICAgIHN0YWZmLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNob3JkTm90ZXMudW5zaGlmdChpdGVtTm9kZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5vdGVzOiBJUGl0Y2hbXSA9IGNob3JkTm90ZXMubWFwKFxuICAgICAgICAgICAgICAobm90ZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwaXRjaE5vZGUgPSBub3RlTm9kZS5xdWVyeVNlbGVjdG9yKFwicGl0Y2hcIik7XG4gICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwOiBOb3RlU3RlcCA9IHBpdGNoTm9kZS5xdWVyeVNlbGVjdG9yKFwic3RlcFwiKS50ZXh0Q29udGVudCBhcyBOb3RlU3RlcDtcbiAgICAgICAgICAgICAgICBjb25zdCBvY3RhdmUgPSBOdW1iZXIocGl0Y2hOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJvY3RhdmVcIikudGV4dENvbnRlbnQpO1xuICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgYWx0ZXJOb2RlID0gcGl0Y2hOb2RlLnF1ZXJ5U2VsZWN0b3IoXCJhbHRlclwiKTtcbiAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHBpdGNoOiBJUGl0Y2ggPSB7XG4gICAgICAgICAgICAgICAgICBzdGVwLFxuICAgICAgICAgICAgICAgICAgb2N0YXZlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYWx0ZXJOb2RlKSB7XG4gICAgICAgICAgICAgICAgICBwaXRjaC5hbHRlciA9IE51bWJlcihhbHRlck5vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG1pZGlOdW1iZXIgPSBOb3RlTmFtZVRvTnVtYmVyKHBpdGNoKTtcbiAgICAgIFxuICAgICAgICAgICAgICAgIHBpdGNoLk1JRElOdW1iZXIgPSBtaWRpTnVtYmVyO1xuICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpdGNoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAoaXRlbSBhcyBJQ2hvcmQpLm5vdGVzID0gbm90ZXM7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgICBpZiAoIShzdGFmZiBpbiBub3Rlc0J5U3RhZmYpKSB7XG4gICAgICAgICAgICBub3Rlc0J5U3RhZmZbc3RhZmZdID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbm90ZXNCeVN0YWZmW3N0YWZmXS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbU5vZGUgPSBub3RlSXRlcmF0b3IuaXRlcmF0ZU5leHQoKSBhcyBFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBtZWFzdXJlUmVkdWN0aW9uW21lYXN1cmVOdW1iZXJdID0ge1xuICAgICAgICBudW1iZXI6IG1lYXN1cmVOdW1iZXIsXG4gICAgICAgIG5vdGVzOiBub3Rlc0J5U3RhZmYsXG4gICAgICAgIGRpdmlzaW9ucyxcbiAgICAgICAgdGltZVNpZ25hdHVyZSxcbiAgICAgICAga2V5U2lnbmF0dXJlLFxuICAgICAgICB0ZW1wbzogYnBtLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG1lYXN1cmVSZWR1Y3Rpb247XG4gICAgfSxcbiAgICB7fVxuICApO1xufTtcblxuY29uc3QgcmVhZFBhcnRzID0gKHBhcnRMaXN0Tm9kZTogRWxlbWVudCk6IFBhcnRNYXAgPT4ge1xuICByZXR1cm4gQXJyYXkuZnJvbShwYXJ0TGlzdE5vZGUucXVlcnlTZWxlY3RvckFsbChcInNjb3JlLXBhcnRcIikpLnJlZHVjZShcbiAgICAoXG4gICAgICByZWR1Y3Rpb246IFBhcnRNYXAsXG4gICAgICBwYXJ0Tm9kZTogRWxlbWVudCxcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGlkID0gcGFydE5vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICBjb25zdCBuYW1lID0gcGFydE5vZGUucXVlcnlTZWxlY3RvcihcInBhcnQtbmFtZVwiKS50ZXh0Q29udGVudDtcblxuICAgICAgY29uc3QgaW5zdHJ1bWVudHMgPSBBcnJheS5mcm9tKHBhcnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzY29yZS1pbnN0cnVtZW50XCIpKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBpbnN0cnVtZW50UmVkdWN0aW9uOiBQYXJ0SW5zdHJ1bWVudE1hcCxcbiAgICAgICAgICBpbnN0cnVtZW50Tm9kZTogRWxlbWVudCxcbiAgICAgICAgKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5zdHJ1bWVudElEID0gaW5zdHJ1bWVudE5vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgY29uc3QgaW5zdHJ1bWVudE5hbWUgPSBpbnN0cnVtZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwiaW5zdHJ1bWVudC1uYW1lXCIpLnRleHRDb250ZW50O1xuICBcbiAgICAgICAgICBjb25zdCBtaWRpSW5mbzogSUluc3RydW1lbnRNSURJSW5mbyA9IHt9O1xuICBcbiAgICAgICAgICBjb25zdCBtaWRpRGV2aWNlTm9kZSA9IHBhcnROb2RlLnF1ZXJ5U2VsZWN0b3IoYG1pZGktZGV2aWNlW2lkPVwiJHtpbnN0cnVtZW50SUR9XCJdYCk7XG4gIFxuICAgICAgICAgIGlmIChtaWRpRGV2aWNlTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcG9ydCA9IG1pZGlEZXZpY2VOb2RlLmdldEF0dHJpYnV0ZShcInBvcnRcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChwb3J0KSB7XG4gICAgICAgICAgICAgIG1pZGlJbmZvLnBvcnQgPSBOdW1iZXIocG9ydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgbWlkaUluc3RydW1lbnROb2RlID0gcGFydE5vZGUucXVlcnlTZWxlY3RvcihgbWlkaS1pbnN0cnVtZW50W2lkPVwiJHtpbnN0cnVtZW50SUR9XCJdYCk7XG5cbiAgICAgICAgICBjb25zdCBjaGFubmVsTm9kZSA9IG1pZGlJbnN0cnVtZW50Tm9kZS5xdWVyeVNlbGVjdG9yKFwibWlkaS1jaGFubmVsXCIpO1xuXG4gICAgICAgICAgaWYgKGNoYW5uZWxOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFubmVsID0gY2hhbm5lbE5vZGUudGV4dENvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICAgIG1pZGlJbmZvLmNoYW5uZWwgPSBOdW1iZXIoY2hhbm5lbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgcHJvZ3JhbU5vZGUgPSBtaWRpSW5zdHJ1bWVudE5vZGUucXVlcnlTZWxlY3RvcihcIm1pZGktcHJvZ3JhbVwiKTtcblxuICAgICAgICAgIGlmIChwcm9ncmFtTm9kZSkge1xuICAgICAgICAgICAgY29uc3QgcHJvZ3JhbSA9IHByb2dyYW1Ob2RlLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICBpZiAocHJvZ3JhbSkge1xuICAgICAgICAgICAgICBtaWRpSW5mby5wcm9ncmFtID0gTnVtYmVyKHByb2dyYW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZvbHVtZU5vZGUgPSBtaWRpSW5zdHJ1bWVudE5vZGUucXVlcnlTZWxlY3RvcihcInZvbHVtZVwiKTtcblxuICAgICAgICAgIGlmICh2b2x1bWVOb2RlKSB7XG4gICAgICAgICAgICBjb25zdCB2b2x1bWUgPSB2b2x1bWVOb2RlLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodm9sdW1lKSB7XG4gICAgICAgICAgICAgIG1pZGlJbmZvLnZvbHVtZSA9IE51bWJlcih2b2x1bWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHBhbk5vZGUgPSBtaWRpSW5zdHJ1bWVudE5vZGUucXVlcnlTZWxlY3RvcihcInBhblwiKTtcblxuICAgICAgICAgIGlmIChwYW5Ob2RlKSB7XG4gICAgICAgICAgICBjb25zdCBwYW4gPSBwYW5Ob2RlLnRleHRDb250ZW50O1xuXG4gICAgICAgICAgICBpZiAocGFuKSB7XG4gICAgICAgICAgICAgIG1pZGlJbmZvLnBhbiA9IE51bWJlcihwYW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGluc3RydW1lbnRSZWR1Y3Rpb25baW5zdHJ1bWVudElEXSA9IHtcbiAgICAgICAgICAgIGlkOiBpbnN0cnVtZW50SUQsXG4gICAgICAgICAgICBuYW1lOiBpbnN0cnVtZW50TmFtZSxcbiAgICAgICAgICAgIG1pZGk6IG1pZGlJbmZvLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4gaW5zdHJ1bWVudFJlZHVjdGlvbjtcbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG5cblxuICAgICAgY29uc3QgcGFydCA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGluc3RydW1lbnRzLFxuICAgICAgfTtcblxuICAgICAgcmVkdWN0aW9uW2lkXSA9IHBhcnQ7XG5cbiAgICAgIHJldHVybiByZWR1Y3Rpb247XG4gICAgfSxcbiAgICB7fVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1JREkgPSAoZG9jdW1lbnQ6IHN0cmluZ3xEb2N1bWVudCk6IEFycmF5QnVmZmVyID0+IHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgIGRvY3VtZW50ID0gbmV3ICh3aW5kb3cgYXMgYW55KS5ET01QYXJzZXIoKS5wYXJzZUZyb21TdHJpbmcoZG9jdW1lbnQsIFwiYXBwbGljYXRpb24veG1sXCIpIGFzIERvY3VtZW50O1xuICB9XG5cbiAgbGV0IGlzVGltZXdpc2U7XG4gIGxldCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNjb3JlLXBhcnR3aXNlXCIpO1xuICBcbiAgaWYgKHJvb3QpIHtcbiAgICBpc1RpbWV3aXNlID0gZmFsc2U7XG4gIH1cbiAgZWxzZSB7XG4gICAgcm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzY29yZS10aW1ld2lzZVwiKTtcbiAgICBpc1RpbWV3aXNlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IHdvcmtUaXRsZU5vZGU6IEVsZW1lbnQgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJ3b3JrIHdvcmstdGl0bGVcIik7XG5cbiAgbGV0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgaWYgKHdvcmtUaXRsZU5vZGUpIHtcbiAgICB0aXRsZSA9IHdvcmtUaXRsZU5vZGUudGV4dENvbnRlbnQ7XG4gIH1cblxuICBjb25zdCBwYXJ0TGlzdE5vZGUgPSByb290LnF1ZXJ5U2VsZWN0b3IoXCJwYXJ0LWxpc3RcIik7XG5cbiAgY29uc3QgcGFydHMgPSByZWFkUGFydHMocGFydExpc3ROb2RlKTtcblxuICBjb25zdCBtZWFzdXJlczogUGFydE1lYXN1cmVNYXAgPSBBcnJheS5mcm9tKHJvb3QucXVlcnlTZWxlY3RvckFsbChcInBhcnRcIikpLnJlZHVjZShcbiAgICAoXG4gICAgICBtZWFzdXJlc1JlZHVjdGlvbjogUGFydE1lYXN1cmVNYXAsXG4gICAgICBwYXJ0Tm9kZTogRWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcGFydElEID0gcGFydE5vZGUuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cbiAgICAgIG1lYXN1cmVzUmVkdWN0aW9uW3BhcnRJRF0gPSByZWFkTWVhc3VyZXNGcm9tUGFydChwYXJ0Tm9kZSwgZG9jdW1lbnQgYXMgRG9jdW1lbnQpO1xuICAgICAgXG4gICAgICByZXR1cm4gbWVhc3VyZXNSZWR1Y3Rpb247XG4gICAgfSxcbiAgICB7fVxuICApO1xuXG4gIGxldCBkaXZpc2lvbnM6IG51bWJlcjtcbiAgbGV0IHRpbWVTaWduYXR1cmU6IElUaW1lU2lnbmF0dXJlIHwgdW5kZWZpbmVkO1xuICBsZXQgdGVtcG86IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAvLyBAdG9kbzogaGFuZGxlIGRpdmlzaW9ucyBtb3JlIGludGVsbGlnZW50bHk7IGl0IGlzIHBvc3NpYmxlLCBpbiB0aGVvcnksIGZvclxuICAvLyBkaWZmZXJlbnQgbWVhc3VyZXMgdG8gaGF2ZSBkaWZmZXJlbnQgZGl2aXNpb25zLiBUaGlzIGFzc3VtZXMgdGhlIGZpcnN0IGRpdmlzaW9uXG4gIC8vIGlzIHRoZSBvbmx5IG9uZSB1c2VkIHRocm91Z2hvdXQgdGhlIE11c2ljWE1MLlxuICBmb3IgKGNvbnN0IHBhcnRJRCBpbiBtZWFzdXJlcykge1xuICAgIGlmICghbWVhc3VyZXMuaGFzT3duUHJvcGVydHkocGFydElEKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBtZWFzdXJlTnVtYmVyIGluIG1lYXN1cmVzW3BhcnRJRF0pIHtcbiAgICAgIGlmICghbWVhc3VyZXNbcGFydElEXS5oYXNPd25Qcm9wZXJ0eShtZWFzdXJlTnVtYmVyKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lYXN1cmVzW3BhcnRJRF1bbWVhc3VyZU51bWJlcl0uZGl2aXNpb25zKSB7XG4gICAgICAgIGRpdmlzaW9ucyA9IG1lYXN1cmVzW3BhcnRJRF1bbWVhc3VyZU51bWJlcl0uZGl2aXNpb25zO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVhc3VyZXNbcGFydElEXVttZWFzdXJlTnVtYmVyXS50aW1lU2lnbmF0dXJlKSB7XG4gICAgICAgIHRpbWVTaWduYXR1cmUgPSBtZWFzdXJlc1twYXJ0SURdW21lYXN1cmVOdW1iZXJdLnRpbWVTaWduYXR1cmU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWFzdXJlc1twYXJ0SURdW21lYXN1cmVOdW1iZXJdLnRlbXBvKSB7XG4gICAgICAgIHRlbXBvID0gbWVhc3VyZXNbcGFydElEXVttZWFzdXJlTnVtYmVyXS50ZW1wbztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGl2aXNpb25zICYmIHRpbWVTaWduYXR1cmUgJiYgdGVtcG8pIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZpbGU6IE1JRElGaWxlID0gbmV3IE1JRElGaWxlKHtcbiAgICBkaXZpc2lvbnMsXG4gIH0pO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIGZpbGUuc2V0VGl0bGUodGl0bGUpO1xuICB9XG5cbiAgY29uc3QgY2hhbm5lbHNCeVBhcnRzOiB7XG4gICAgW3BhcnRJRDogc3RyaW5nXTogQ2hhbm5lbCxcbiAgfSA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHBhcnRzKS5mb3JFYWNoKFxuICAgIChwYXJ0SUQpID0+IE9iamVjdC5rZXlzKHBhcnRzW3BhcnRJRF0uaW5zdHJ1bWVudHMpLmZvckVhY2goXG4gICAgICAoaW5zdHJ1bWVudElEKSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RydW1lbnQgPSBwYXJ0c1twYXJ0SURdLmluc3RydW1lbnRzW2luc3RydW1lbnRJRF07XG5cbiAgICAgICAgaWYgKGluc3RydW1lbnQubWlkaS5wcm9ncmFtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2hhbm5lbCA9IGluc3RydW1lbnQubWlkaS5jaGFubmVsIGFzIENoYW5uZWx8dW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChjaGFubmVsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjaGFubmVsID0gMSBhcyBDaGFubmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQHRvZG86IGhhbmRsZSBjaGFubmVsIGNoYW5nZXMgb24gaW5kaXZpZHVhbCBwYXJ0cyAoZG9lcyB0aGF0IGV2ZXIgaGFwcGVuPylcbiAgICAgICAgY2hhbm5lbHNCeVBhcnRzW3BhcnRJRF0gPSBjaGFubmVsO1xuXG4gICAgICAgIGZpbGUucHJvZ3JhbUNoYW5nZSh7XG4gICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgIHByb2dyYW06IGluc3RydW1lbnQubWlkaS5wcm9ncmFtLFxuICAgICAgICAgIGNoYW5uZWwsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZW1wbykge1xuICAgICAgICAgIGZpbGUuc2V0VGVtcG8odGVtcG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRpbWVTaWduYXR1cmUpIHtcbiAgICAgICAgICBmaWxlLnRpbWVTaWduYXR1cmUodGltZVNpZ25hdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICk7XG5cbiAgY29uc3Qgb2Zmc2V0QnlTdGFmZjogeyBbc3RhZmZOdW1iZXI6IG51bWJlcl06IG51bWJlciB9ID0ge307XG5cbiAgT2JqZWN0LmtleXMobWVhc3VyZXMpLmZvckVhY2goXG4gICAgKHBhcnRJRCkgPT4ge1xuICAgICAgY29uc3QgbWVhc3VyZVBhcnQgPSBtZWFzdXJlc1twYXJ0SURdO1xuXG4gICAgICBPYmplY3Qua2V5cyhtZWFzdXJlUGFydCkuZm9yRWFjaChcbiAgICAgICAgKG1lYXN1cmVOdW1iZXI6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IG5vdGVzQnlTdGFmZjogTWVhc3VyZUl0ZW1NYXAgPSBtZWFzdXJlUGFydFttZWFzdXJlTnVtYmVyXS5ub3RlcztcbiAgICAgICAgICBcbiAgICAgICAgICBPYmplY3Qua2V5cyhub3Rlc0J5U3RhZmYpLmZvckVhY2goXG4gICAgICAgICAgICAoc3RhZmZOdW1iZXI6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBub3Rlc0J5U3RhZmZbc3RhZmZOdW1iZXJdLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKG5vdGU6IE1lYXN1cmVJdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoIShub3RlLnN0YWZmIGluIG9mZnNldEJ5U3RhZmYpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEJ5U3RhZmZbbm90ZS5zdGFmZl0gPSAwO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBsZXQgbm90ZXM6IElQaXRjaFtdfHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgICAgaWYgKChub3RlIGFzIElDaG9yZCkubm90ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hvcmRcbiAgICAgICAgICAgICAgICAgICAgbm90ZXMgPSAobm90ZSBhcyBJQ2hvcmQpLm5vdGVzO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAobm90ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbm90ZXMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgICAgICAocGl0Y2g6IElQaXRjaCkgPT4gZmlsZS5ub3RlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdGU6IHBpdGNoLk1JRElOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogbm90ZS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5uZWw6IGNoYW5uZWxzQnlQYXJ0c1twYXJ0SURdLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBvZmZzZXRCeVN0YWZmW25vdGUuc3RhZmZdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhY2s6IG5vdGUuc3RhZmYsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWZmOiBub3RlLnN0YWZmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBvZmZzZXRCeVN0YWZmW25vdGUuc3RhZmZdICs9IG5vdGUuZHVyYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICk7XG5cbiAgcmV0dXJuIGZpbGUudG9BcnJheUJ1ZmZlcigpO1xufTtcbiIsImV4cG9ydCB7IGdldE1JREkgfSBmcm9tIFwiLi9YTUxUb01JRElcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=