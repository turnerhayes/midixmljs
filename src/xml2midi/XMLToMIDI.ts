
/**
 * TODO:
 * @todo: handle repeats
 * @todo: reconcile different division counts
 *  - between staffs
 *  - within a staff
 *  - not sure this ever actually happens, but is *technically* possible
 */


import NoteStep from "./NoteStep";
import Channel from "./Channel";
import IKeySignature, { KeySharps } from "./IKeySignature";
import IPitch from "./IPitch";
import MIDIFile from "./MIDIFile";
import { NoteNameToNumber } from "./midi-note-converter";


interface ITimeSignature {
  numerator: number;
  denominator: number;
}

interface IRest {
  duration: number;
  staff: number;
}

interface IChord {
  notes: IPitch[];
  staff: number;
  duration: number;
}

type MeasureItem = IRest | IChord;

type MeasureItemMap = { [staffNumber: number]: MeasureItem[] };

interface IMeasure {
  number: number;
  notes: MeasureItemMap;
  divisions?: number;
  timeSignature?: ITimeSignature;
  keySignature?: IKeySignature;
  tempo?: number;
}

interface IInstrumentMIDIInfo {
  port?: number;
  channel?: number;
  program?: number;
  volume?: number;
  pan?: number;
}

interface IPartInstrument {
  id: string;
  name: string;
  midi: IInstrumentMIDIInfo;
}

type PartInstrumentMap = { [instrumentID: string]: IPartInstrument };

interface IPart {
  id: string;
  name: string;
  instruments: PartInstrumentMap;
}

type PartMap = { [partID: string]: IPart };

type MeasureMap = { [measureNumber: number]: IMeasure };

type PartMeasureMap = {
  [partID: string]: MeasureMap,
};

const getChordNoteNodes = (
  {
    document,
    itemNode,
    staff,
  }: {
    document: Document,
    itemNode: Element,
    staff: number,
  },
) => {
  const siblingsIterator = document.evaluate(
    `following-sibling::note[staff/text() = "${staff}"]`,
    itemNode,
    null,
    (window as any).XPathResult.ORDERED_NODE_ITERATOR_TYPE,
    null
  );

  const siblings: Element[] = [];

  let nextNoteNode = siblingsIterator.iterateNext() as Element | null;

  while (nextNoteNode && nextNoteNode.querySelector("chord")) {
    siblings.push(nextNoteNode);
    
    nextNoteNode = siblingsIterator.iterateNext() as Element | null;
  }

  return siblings;
};


const readMeasuresFromPart = (partNode: Element, document: Document): MeasureMap => {
  return Array.from(partNode.querySelectorAll("measure")).reduce(
    (measureReduction: MeasureMap, measureNode: Element) => {
      const measureNumber = Number(measureNode.getAttribute("number"));

      const attributesNode = measureNode.querySelector("attributes");

      let timeSignature: ITimeSignature | undefined;
      
      let divisions: number | undefined;

      let keySignature: IKeySignature | undefined;
      
      if (attributesNode) {
        const divisionsNode: Element = attributesNode.querySelector("divisions");
        
        if (divisionsNode) {
          divisions = Number(divisionsNode.textContent);
        }
        
        const timeSignatureNode: Element = attributesNode.querySelector("time");

        if (timeSignatureNode) {
          timeSignature = {
            numerator: Number(timeSignatureNode.querySelector("beats").textContent),
            denominator: Number(timeSignatureNode.querySelector("beat-type").textContent),
          };
        }

        const keySignatureNode: Element = attributesNode.querySelector("key");

        if (keySignatureNode) {
          const modeNode: Element = keySignatureNode.querySelector("mode");

          let mode: "major" | "minor" = "major";

          if (modeNode) {
            const modeString = modeNode.textContent;

            if (modeString === "minor") {
              mode = modeString;
            }
          }

          keySignature = {
            sharps: Number(keySignatureNode.querySelector("fifths").textContent) as KeySharps,
            mode,
          };
        }
      }

      const bpmNode: Element = measureNode.querySelector("direction metronome > per-minute");

      let bpm: number | undefined;

      if (bpmNode) {
        bpm = Number(bpmNode.textContent);
      }

      const noteIterator = document.evaluate(
        ".//note[not(chord)]",
        measureNode,
        null,
        (window as any).XPathResult.ORDERED_NODE_ITERATOR_TYPE,
        null
      );

      let itemNode: Element = noteIterator.iterateNext() as Element;

      const notesByStaff: MeasureItemMap = {};

      while (itemNode) {
        const duration = Number(itemNode.querySelector("duration").textContent);
        const staffNode = itemNode.querySelector("staff");
        let staff;

        if (staffNode) {
          staff = Number(staffNode.textContent);

          const item: MeasureItem = {
            duration,
            staff,
          };
          
          if (!itemNode.querySelector("rest")) {
            const chordNotes = getChordNoteNodes({
              document,
              itemNode,
              staff,
            });

            chordNotes.unshift(itemNode);

            const notes: IPitch[] = chordNotes.map(
              (noteNode) => {
                const pitchNode = itemNode.querySelector("pitch");
      
                const step: NoteStep = pitchNode.querySelector("step").textContent as NoteStep;
                const octave = Number(pitchNode.querySelector("octave").textContent);
      
                const alterNode = pitchNode.querySelector("alter");
      
                const pitch: IPitch = {
                  step,
                  octave,
                };
      
                if (alterNode) {
                  pitch.alter = Number(alterNode.textContent);
                }

                const midiNumber = NoteNameToNumber(pitch);
      
                pitch.MIDINumber = midiNumber;
      
                return pitch;
              }
            );

            (item as IChord).notes = notes;
          }


          if (!(staff in notesByStaff)) {
            notesByStaff[staff] = [];
          }

          notesByStaff[staff].push(item);
        }

        itemNode = noteIterator.iterateNext() as Element;
      }

      measureReduction[measureNumber] = {
        number: measureNumber,
        notes: notesByStaff,
        divisions,
        timeSignature,
        keySignature,
        tempo: bpm,
      };

      return measureReduction;
    },
    {}
  );
};

const readParts = (partListNode: Element): PartMap => {
  return Array.from(partListNode.querySelectorAll("score-part")).reduce(
    (
      reduction: PartMap,
      partNode: Element,
    ) => {
      const id = partNode.getAttribute("id");
      const name = partNode.querySelector("part-name").textContent;

      const instruments = Array.from(partNode.querySelectorAll("score-instrument")).reduce(
        (
          instrumentReduction: PartInstrumentMap,
          instrumentNode: Element,
        ) => {
          const instrumentID = instrumentNode.getAttribute("id");
          const instrumentName = instrumentNode.querySelector("instrument-name").textContent;
  
          const midiInfo: IInstrumentMIDIInfo = {};
  
          const midiDeviceNode = partNode.querySelector(`midi-device[id="${instrumentID}"]`);
  
          if (midiDeviceNode) {
            const port = midiDeviceNode.getAttribute("port");
            
            if (port) {
              midiInfo.port = Number(port);
            }
          }

          const midiInstrumentNode = partNode.querySelector(`midi-instrument[id="${instrumentID}"]`);

          const channelNode = midiInstrumentNode.querySelector("midi-channel");

          if (channelNode) {
            const channel = channelNode.textContent;

            if (channel) {
              midiInfo.channel = Number(channel);
            }
          }

          const programNode = midiInstrumentNode.querySelector("midi-program");

          if (programNode) {
            const program = programNode.textContent;

            if (program) {
              midiInfo.program = Number(program);
            }
          }

          const volumeNode = midiInstrumentNode.querySelector("volume");

          if (volumeNode) {
            const volume = volumeNode.textContent;

            if (volume) {
              midiInfo.volume = Number(volume);
            }
          }

          const panNode = midiInstrumentNode.querySelector("pan");

          if (panNode) {
            const pan = panNode.textContent;

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
        },
        {}
      );


      const part = {
        id,
        name,
        instruments,
      };

      reduction[id] = part;

      return reduction;
    },
    {}
  );
};

export default (document: string|Document): ArrayBuffer => {
  if (typeof document === "string") {
    document = new (window as any).DOMParser().parseFromString(document, "application/xml") as Document;
  }

  let isTimewise;
  let root = document.querySelector("score-partwise");
  
  if (root) {
    isTimewise = false;
  }
  else {
    root = document.querySelector("score-timewise");
    isTimewise = true;
  }

  const workTitleNode: Element = root.querySelector("work work-title");

  let title: string | undefined;

  if (workTitleNode) {
    title = workTitleNode.textContent;
  }

  const partListNode = root.querySelector("part-list");

  const parts = readParts(partListNode);

  const measures: PartMeasureMap = Array.from(root.querySelectorAll("part")).reduce(
    (
      measuresReduction: PartMeasureMap,
      partNode: Element) => {
      const partID = partNode.getAttribute("id");

      measuresReduction[partID] = readMeasuresFromPart(partNode, document as Document);
      
      return measuresReduction;
    },
    {}
  );

  let divisions: number;
  let timeSignature: ITimeSignature | undefined;
  let tempo: number | undefined;

  // @todo: handle divisions more intelligently; it is possible, in theory, for
  // different measures to have different divisions. This assumes the first division
  // is the only one used throughout the MusicXML.
  for (const partID in measures) {
    if (!measures.hasOwnProperty(partID)) {
      continue;
    }

    for (const measureNumber in measures[partID]) {
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

  const file: MIDIFile = new MIDIFile({
    divisions,
  });

  if (title) {
    file.setTitle(title);
  }

  const channelsByParts: {
    [partID: string]: Channel,
  } = {};

  Object.keys(parts).forEach(
    (partID) => Object.keys(parts[partID].instruments).forEach(
      (instrumentID) => {
        const instrument = parts[partID].instruments[instrumentID];

        if (instrument.midi.program === undefined) {
          return;
        }

        let channel = instrument.midi.channel as Channel|undefined;

        if (channel === undefined) {
          channel = 1 as Channel;
        }

        // @todo: handle channel changes on individual parts (does that ever happen?)
        channelsByParts[partID] = channel;

        file.programChange({
          offset: 0,
          program: instrument.midi.program,
          channel,
        });

        if (tempo) {
          file.setTempo(tempo);
        }

        if (timeSignature) {
          file.timeSignature(timeSignature);
        }
      }
    )
  );

  const offsetByStaff: { [staffNumber: number]: number } = {};

  Object.keys(measures).forEach(
    (partID) => {
      const measurePart = measures[partID];

      Object.keys(measurePart).forEach(
        (measureNumber: string) => {
          const notesByStaff: MeasureItemMap = measurePart[measureNumber].notes;
          
          Object.keys(notesByStaff).forEach(
            (staffNumber: string) => {
              notesByStaff[staffNumber].forEach(
                (note: MeasureItem) => {
                  if (!(note.staff in offsetByStaff)) {
                    offsetByStaff[note.staff] = 0;
                  }

                  let notes: IPitch[]|undefined;

                  if ((note as IChord).notes) {
                    // chord
                    notes = (note as IChord).notes;
                  }

                  if (notes) {
                    notes.forEach(
                      (pitch: IPitch) => file.note({
                        note: pitch.MIDINumber,
                        duration: note.duration,
                        channel: channelsByParts[partID],
                        offset: offsetByStaff[note.staff],
                        track: note.staff,
                        meta: {
                          staff: note.staff,
                          measureNumber,
                        },
                      })
                    );
                  }
                  
                  offsetByStaff[note.staff] += note.duration;
                }
              )
            }
          );
        }
      );
    }
  );

  return file.toArrayBuffer();
};
