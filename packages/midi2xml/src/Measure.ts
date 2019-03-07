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

  public readonly timeSignature:ITimeSignature;

  public readonly keySignature:IKeySignature;

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

  constructor(
    {
      timeSignature,
      keySignature,
      startOffset,
      endOffset,
      number,
    }:
    {
      timeSignature:ITimeSignature,
      keySignature:IKeySignature,
      startOffset:number,
      endOffset:number,
      number:number,
    }
  ) {
    this.timeSignature = timeSignature;
    this.keySignature = keySignature;
    this.startOffset = startOffset;
    this.endOffset = endOffset;
    this.number = number;
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
      measureItems: this.measureItems,
    };
  }
}
