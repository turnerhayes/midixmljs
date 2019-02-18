#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var jsdom_1 = require("jsdom");
var commander_1 = __importDefault(require("commander"));
var XMLToMIDI_1 = require("./XMLToMIDI");
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
var filePathArg;
commander_1.default.option("-o, --out [output path]", "Path to file where the resulting MIDI file should be written\n  If the path is omitted, it will write to the same filename, but with the extension replaced by \".midi\" and in the current working directory.\n  If this option is omitted entirely, it will write the MIDI file to stdout.").arguments("<filename>").action(function (filename) {
    filePathArg = filename;
}).parse(process.argv);
if (!filePathArg) {
    commander_1.default.outputHelp();
    process.exit(0);
}
var filePath = path_1.resolve(process.cwd(), filePathArg);
var outPath = commander_1.default.out;
if (outPath === true) {
    outPath = path_1.basename(filePath).replace(/\.[^.]+$/, "") + ".midi";
}
if (typeof outPath === "string") {
    outPath = path_1.resolve(process.cwd(), outPath);
}
new Promise(function (resolve, reject) { return fs_1.readFile(filePath, {
    encoding: "utf8",
}, function (err, text) {
    if (err) {
        return reject(err);
    }
    return resolve(text);
}); }).then(function (text) {
    global.window = new jsdom_1.JSDOM().window;
    return XMLToMIDI_1.getMIDI(text);
}).then(function (file) { return __awaiter(_this, void 0, void 0, function () {
    var writePromise;
    return __generator(this, function (_a) {
        if (outPath && typeof outPath === "string") {
            return [2 /*return*/, new Promise(function (resolve, reject) { return fs_1.writeFile(outPath, Buffer.from(file), function (err) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve();
                }); })];
        }
        else {
            writePromise = new Promise(function (resolve, reject) {
                process.stdout.once("error", reject);
                process.stdout.once("drain", resolve);
            });
            process.stdout.write(Buffer.from(file));
            return [2 /*return*/, writePromise];
        }
        return [2 /*return*/];
    });
}); }).then(function () { return process.exit(0); }).catch(function (err) {
    console.error(err);
    process.exit(1);
});
