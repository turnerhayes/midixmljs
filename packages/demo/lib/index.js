"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("html-midi-player");
const xml2midi_1 = require("@thayes/xml2midi");
const midi2xml_1 = require("@thayes/midi2xml");
const processXMLFile = (file) => {
    const midi = (0, xml2midi_1.getMIDI)(file);
    const blob = new Blob([midi]);
    console.log('midi:', midi);
    const midiPlayer = document.getElementById('midi-player');
    midiPlayer.setAttribute('src', URL.createObjectURL(blob));
};
const processMIDIFile = (file) => {
    const xml = (0, midi2xml_1.getXML)(file);
    const dialog = document
        .getElementById('xml-dialog');
    dialog.showModal();
    dialog.innerHTML = xml;
};
const onInit = () => {
    const xmlFileInput = document
        .getElementById('xml-file');
    xmlFileInput.addEventListener('change', () => {
        const file = xmlFileInput.files[0];
        const reader = new FileReader();
        const loadHandler = () => {
            const str = reader.result;
            processXMLFile(str);
            reader.removeEventListener('load', loadHandler);
        };
        reader.addEventListener('load', loadHandler);
        reader.readAsText(file);
    });
    const midiFileInput = document
        .getElementById('midi-file');
    midiFileInput.addEventListener('change', () => {
        const file = xmlFileInput.files[0];
        const reader = new FileReader();
        const loadHandler = () => {
            const buffer = reader.result;
            processMIDIFile(buffer);
            reader.removeEventListener('load', loadHandler);
        };
        reader.addEventListener('load', loadHandler);
        reader.readAsArrayBuffer(file);
    });
};
if (document.readyState === 'complete') {
    onInit();
}
else {
    const handler = () => {
        onInit();
        document.removeEventListener('DOMContentLoaded', handler);
    };
    document.addEventListener('DOMContentLoaded', handler);
}
