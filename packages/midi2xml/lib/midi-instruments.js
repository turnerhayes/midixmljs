"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstrumentName = void 0;
const instruments = {
    "1": {
        "name": "Acoustic Grand Piano",
    },
    "2": {
        "name": "Bright Acoustic Piano",
    },
    "3": {
        "name": "Electric Grand Piano",
    },
    "4": {
        "name": "Honky-tonk Piano",
    },
    "5": {
        "name": "Electric Piano 1",
    },
    "6": {
        "name": "Electric Piano 2",
    },
    "7": {
        "name": "Harpsichord",
    },
    "8": {
        "name": "Clavi",
    },
    "9": {
        "name": "Celesta",
    },
    "10": {
        "name": "Glockenspiel",
    },
    "11": {
        "name": "Music Box",
    },
    "12": {
        "name": "Vibraphone",
    },
    "13": {
        "name": "Marimba",
    },
    "14": {
        "name": "Xylophone",
    },
    "15": {
        "name": "Tubular Bells",
    },
    "16": {
        "name": "Dulcimer",
    },
    "17": {
        "name": "Drawbar Organ",
    },
    "18": {
        "name": "Percussive Organ",
    },
    "19": {
        "name": "Rock Organ",
    },
    "20": {
        "name": "Church Organ",
    },
    "21": {
        "name": "Reed Organ",
    },
    "22": {
        "name": "Accordion",
    },
    "23": {
        "name": "Harmonica",
    },
    "24": {
        "name": "Tango Accordion",
    },
    "25": {
        "name": "Acoustic Guitar (nylon)",
    },
    "26": {
        "name": "Acoustic Guitar (steel)",
    },
    "27": {
        "name": "Electric Guitar (jazz)",
    },
    "28": {
        "name": "Electric Guitar (clean)",
    },
    "29": {
        "name": "Electric Guitar (muted)",
    },
    "30": {
        "name": "Overdriven Guitar",
    },
    "31": {
        "name": "Distortion Guitar",
    },
    "32": {
        "name": "Guitar harmonics",
    },
    "33": {
        "name": "Acoustic Bass",
    },
    "34": {
        "name": "Electric Bass (finger)",
    },
    "35": {
        "name": "Electric Bass (pick)",
    },
    "36": {
        "name": "Fretless Bass",
    },
    "37": {
        "name": "Slap Bass 1",
    },
    "38": {
        "name": "Slap Bass 2",
    },
    "39": {
        "name": "Synth Bass 1",
    },
    "40": {
        "name": "Synth Bass 2",
    },
    "41": {
        "name": "Violin",
    },
    "42": {
        "name": "Viola",
    },
    "43": {
        "name": "Cello",
    },
    "44": {
        "name": "Contrabass",
    },
    "45": {
        "name": "Tremolo Strings",
    },
    "46": {
        "name": "Pizzicato Strings",
    },
    "47": {
        "name": "Orchestral Harp",
    },
    "48": {
        "name": "Timpani",
    },
    "49": {
        "name": "String Ensemble 1",
    },
    "50": {
        "name": "String Ensemble 2",
    },
    "51": {
        "name": "SynthStrings 1",
    },
    "52": {
        "name": "SynthStrings 2",
    },
    "53": {
        "name": "Choir Aahs",
    },
    "54": {
        "name": "Voice Oohs",
    },
    "55": {
        "name": "Synth Voice",
    },
    "56": {
        "name": "Orchestra Hit",
    },
    "57": {
        "name": "Trumpet",
    },
    "58": {
        "name": "Trombone",
    },
    "59": {
        "name": "Tuba",
    },
    "60": {
        "name": "Muted Trumpet",
    },
    "61": {
        "name": "French Horn",
    },
    "62": {
        "name": "Brass Section",
    },
    "63": {
        "name": "SynthBrass 1",
    },
    "64": {
        "name": "SynthBrass 2",
    },
    "65": {
        "name": "Soprano Sax",
    },
    "66": {
        "name": "Alto Sax",
    },
    "67": {
        "name": "Tenor Sax",
    },
    "68": {
        "name": "Baritone Sax",
    },
    "69": {
        "name": "Oboe",
    },
    "70": {
        "name": "English Horn",
    },
    "71": {
        "name": "Bassoon",
    },
    "72": {
        "name": "Clarinet",
    },
    "73": {
        "name": "Piccolo",
    },
    "74": {
        "name": "Flute",
    },
    "75": {
        "name": "Recorder",
    },
    "76": {
        "name": "Pan Flute",
    },
    "77": {
        "name": "Blown Bottle",
    },
    "78": {
        "name": "Shakuhachi",
    },
    "79": {
        "name": "Whistle",
    },
    "80": {
        "name": "Ocarina",
    },
    "81": {
        "name": "Lead 1 (square)",
    },
    "82": {
        "name": "Lead 2 (sawtooth)",
    },
    "83": {
        "name": "Lead 3 (calliope)",
    },
    "84": {
        "name": "Lead 4 (chiff)",
    },
    "85": {
        "name": "Lead 5 (charang)",
    },
    "86": {
        "name": "Lead 6 (voice)",
    },
    "87": {
        "name": "Lead 7 (fifths)",
    },
    "88": {
        "name": "Lead 8 (bass + lead)",
    },
    "89": {
        "name": "Pad 1 (new age)",
    },
    "90": {
        "name": "Pad 2 (warm)",
    },
    "91": {
        "name": "Pad 3 (polysynth)",
    },
    "92": {
        "name": "Pad 4 (choir)",
    },
    "93": {
        "name": "Pad 5 (bowed)",
    },
    "94": {
        "name": "Pad 6 (metallic)",
    },
    "95": {
        "name": "Pad 7 (halo)",
    },
    "96": {
        "name": "Pad 8 (sweep)",
    },
    "97": {
        "name": "FX 1 (rain)",
    },
    "98": {
        "name": "FX 2 (soundtrack)",
    },
    "99": {
        "name": "FX 3 (crystal)",
    },
    "100": {
        "name": "FX 4 (atmosphere)",
    },
    "101": {
        "name": "FX 5 (brightness)",
    },
    "102": {
        "name": "FX 6 (goblins)",
    },
    "103": {
        "name": "FX 7 (echoes)",
    },
    "104": {
        "name": "FX 8 (sci-fi)",
    },
    "105": {
        "name": "Sitar",
    },
    "106": {
        "name": "Banjo",
    },
    "107": {
        "name": "Shamisen",
    },
    "108": {
        "name": "Koto",
    },
    "109": {
        "name": "Kalimba",
    },
    "110": {
        "name": "Bag pipe",
    },
    "111": {
        "name": "Fiddle",
    },
    "112": {
        "name": "Shanai",
    },
    "113": {
        "name": "Tinkle Bell",
    },
    "114": {
        "name": "Agogo",
    },
    "115": {
        "name": "Steel Drums",
    },
    "116": {
        "name": "Woodblock",
    },
    "117": {
        "name": "Taiko Drum",
    },
    "118": {
        "name": "Melodic Tom",
    },
    "119": {
        "name": "Synth Drum",
    },
    "120": {
        "name": "Reverse Cymbal",
    },
    "121": {
        "name": "Guitar Fret Noise",
    },
    "122": {
        "name": "Breath Noise",
    },
    "123": {
        "name": "Seashore",
    },
    "124": {
        "name": "Bird Tweet",
    },
    "125": {
        "name": "Telephone Ring",
    },
    "126": {
        "name": "Helicopter",
    },
    "127": {
        "name": "Applause",
    },
    "128": {
        "name": "Gunshot",
    },
};
function getInstrumentName({ instrumentId }) {
    instrumentId += 1;
    console.log({
        instrumentId,
    });
    if (!(instrumentId in instruments)) {
        return undefined;
    }
    return instruments[instrumentId].name;
}
exports.getInstrumentName = getInstrumentName;
