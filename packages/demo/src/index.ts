import { getMIDI } from "@thayes/xml2midi";
import { getXML } from "@thayes/midi2xml";
import { PlayerElement, VisualizerElement } from 'html-midi-player';
import { OpenSheetMusicDisplay } from "opensheetmusicdisplay";
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/atom-one-dark.css';
import "./index.css";

const highlightWorker = new Worker(new URL('./highlight-worker.ts', import.meta.url));

hljs.registerLanguage('xml', xml);

const processXMLFile = (file: string) => {
  const midi = getMIDI(file);
  const blob = new Blob([midi]);
  const midiPlayer = document
    .getElementById('midi-player') as PlayerElement;
  const visualizer = document
    .getElementById('midi-player-visualizer') as VisualizerElement;
  const url = URL.createObjectURL(blob);
  midiPlayer.src = url;
  visualizer.src = url;
};

const addCloseHandler = (dialog: HTMLDialogElement) => {
  dialog.addEventListener('click', (event: MouseEvent) => {
    if (
      (event.target as HTMLElement).classList
        .contains('dialog-close-button')
    ) {
      dialog.close();
    }
  });
};

const addOpenInNewWindowHandler = (dialog: HTMLDialogElement) => {
  dialog.addEventListener('click', (event: MouseEvent) => {
    if (
      (event.target as HTMLElement).classList
        .contains('open-in-new-window-button')
    ) {
      const dialogContent = dialog.querySelector('.dialog-body').innerHTML;
      const w = open('result-display.html', '_blank');
      w.onload = () => {
        w.postMessage(dialogContent, '*');
      };
    }
  });
};

const toggleSpinner = (
  dialog: HTMLDialogElement, force?: boolean
) => {
  dialog.querySelector('.spinner').classList.toggle('hidden', !force);
};

const processMIDIFile = (file: ArrayBuffer) => {
  const xml = getXML(file);
  const showXMLButton = document
    .getElementById('show-xml-button') as HTMLButtonElement;
  showXMLButton.disabled = false;
  showXMLButton.addEventListener('click', () => {
    const dialog = document
      .getElementById('xml-dialog') as HTMLDialogElement;
    dialog.showModal();
    setImmediate(() => {
      const displayContainer = dialog.querySelector('.dialog-body');
      toggleSpinner(dialog, true);
      const handler = (event: MessageEvent) => {
        displayContainer.innerHTML = `<pre><code>${event.data as string}</code></pre>`;
        toggleSpinner(dialog, false);
        highlightWorker.removeEventListener('message', handler);
      };
      highlightWorker.addEventListener('message', handler);
      highlightWorker.postMessage(xml);
    });
  });
  const showSheetMusicButton = document
    .getElementById('show-sheet-music-button') as HTMLButtonElement;
  showSheetMusicButton.disabled = false;
  showSheetMusicButton.addEventListener('click', () => {
    const dialog = document
      .getElementById('sheet-music-dialog') as HTMLDialogElement;
    toggleSpinner(dialog, true);
    const osmd = new OpenSheetMusicDisplay(
      dialog.querySelector('.dialog-body') as HTMLElement
    );
    dialog.showModal();
    osmd.load(xml).then(() => {
      osmd.render();
      toggleSpinner(dialog, false);
    });
  });
};

const onInit = () => {
  const xmlFileInput = document
    .getElementById('xml-file') as HTMLInputElement;

  xmlFileInput.addEventListener('change', () => {
    const file = xmlFileInput.files[0];
    const reader = new FileReader();
    const loadHandler = () => {
      const str = reader.result as string;
      processXMLFile(str);
      reader.removeEventListener('load', loadHandler);
    };
    reader.addEventListener('load', loadHandler);
    reader.readAsText(file);
  });

  const midiFileInput = document
    .getElementById('midi-file') as HTMLInputElement;

  midiFileInput.addEventListener('change', () => {
    const file = midiFileInput.files[0];
    const reader = new FileReader();
    const loadHandler = () => {
      const buffer = reader.result as ArrayBuffer;
      processMIDIFile(buffer);
      reader.removeEventListener('load', loadHandler);
    };
    reader.addEventListener('load', loadHandler);
    reader.readAsArrayBuffer(file);
  });

  for (const dialog of document.getElementsByTagName('dialog')) {
    addCloseHandler(dialog);
    addOpenInNewWindowHandler(dialog);
  }
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