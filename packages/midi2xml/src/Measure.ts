import {
  IPitch,
  IKeySignature,
} from "@thayes/midi-tools";
import { ITimeSignature } from "@thayes/midi-tools/lib/utils";

import { MeasureNote } from "./MeasureNote";
import { MeasureChord } from "./MeasureChord";
import { IMeasureElement } from "./IMeasureElement";
import { MeasureRest } from "./MeasureRest";
import { TimeSignatureMap } from "./TimeSignatureMap";
import { KeySignatureMap } from "./KeySignatureMap";
import { MeasureItemList } from "./MeasureItemList";

export class Measure {
  private _notes:IMeasureElement[]|null = null;

  private readonly measureElementsByOffset:{[offset:number]: IMeasureElement[]} = {};

  public get timeSignature():ITimeSignature {
    return this.timeSignatureMap.getSignature(this.startOffset);
  }

  public get keySignature():IKeySignature {
    return this.keySignatureMap.getSignature(this.startOffset);
  }

  private readonly timeSignatureMap:TimeSignatureMap;

  private readonly keySignatureMap:KeySignatureMap;

  public readonly startOffset:number;

  public readonly endOffset:number;

  public readonly number:number;

  public get measureItems():MeasureItemList {
    const list = new MeasureItemList({
      timeSignature: this.timeSignature,
    });

    for (let offset of Object.keys(this.measureElementsByOffset)) {
      let element;

      if (this.measureElementsByOffset[offset][0] instanceof MeasureRest) {
        element = this.measureElementsByOffset[offset][0];
      }
      else if (this.measureElementsByOffset[offset].length > 1) {
        element = new MeasureChord({
          notes: this.measureElementsByOffset[offset],
          measureNumber: this.number,
        });
      }
      else {
        element = this.measureElementsByOffset[offset][0];
      }

      list.add(element);
    }

    return list;
  }

  public get isFull():boolean {
    return this.measureItems.lengthInQuarterNotes === 
        this.timeSignature.numerator * (4 / this.timeSignature.denominator);
  }

  constructor(
    {
      timeSignatureMap,
      keySignatureMap,
      startOffset,
      endOffset,
      number,
    }:
    {
      timeSignatureMap:TimeSignatureMap,
      keySignatureMap:KeySignatureMap,
      startOffset:number,
      endOffset:number,
      number:number,
    }
  ) {
    this.timeSignatureMap = timeSignatureMap;
    this.keySignatureMap = keySignatureMap;
    this.startOffset = startOffset;
    this.endOffset = endOffset;
    this.number = number;
  }

  public get notes():IMeasureElement[] {
    if (this._notes === null) {
      this._notes = Object.keys(this.measureElementsByOffset).sort(
        (a, b) => Number(a) - Number(b)
      ).reduce(
        (notes, offset) => {          
          const notesAtOffset:MeasureNote[] = Object.values(this.measureElementsByOffset[offset]);
  
          if (notesAtOffset.length > 1) {
            notes.push(
              new MeasureChord({
                notes: notesAtOffset,
                measureNumber: this.number,
              })
            );
          }
          else {
            notes.push(
              notesAtOffset[0]
            );
          }
  
          return notes;
        },
        []
      );
    }

    return this._notes;
  }

  public get totalQuarterNotes() {
    return this.timeSignature.numerator * (4 / this.timeSignature.denominator);
  }

  public addNote(
    {
      offset,
      note,
    }: {
      offset:number,
      note:MeasureNote,
    }
  ) {
    if (this.measureElementsByOffset[offset] === undefined) {
      this.measureElementsByOffset[offset] = [];
    }

    this.measureElementsByOffset[offset].push(note);

    this.invalidateNotesCache();
  }

  public addRest(
    {
      offset,
      rest,
    }: {
      offset:number,
      rest:MeasureRest,
    }
  ) {
    if (this.measureElementsByOffset[offset] !== undefined) {
      throw new Error(`There are already one or more notes at offset ${offset}; cannot add rest`);
    }

    this.measureElementsByOffset[offset] = [rest];

    this.invalidateNotesCache();
  }

  private invalidateNotesCache() {
    this._notes = null;
  }

  public toJSON() {
    return {
      keySignature: this.keySignature,
      timeSignature: this.timeSignature,
      notes: this.notes,
    };
  }
}
