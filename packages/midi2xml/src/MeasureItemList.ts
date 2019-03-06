import { ITimeSignature } from "@thayes/midi-tools/lib/utils";

import { IMeasureElement } from "./IMeasureElement";
import { MeasureRest } from "./MeasureRest";
import Fraction from "fraction.js";

export class MeasureItemListNode {
  public readonly beat:number;

  public readonly element:IMeasureElement;

  public nextInBeat:MeasureItemListNode|null = null;
  
  public previousInBeat:MeasureItemListNode|null = null;

  public next:MeasureItemListNode|null = null;

  public previous:MeasureItemListNode|null = null;

  constructor(
    {
      beat,
      element,
    }: {
      beat:number,
      element:IMeasureElement,
    }
  ) {
    this.beat = beat;
    this.element = element;
  }
}

export class MeasureItemList implements Iterable<MeasureItemListNode> {
  public lastAudibleElement:MeasureItemListNode|null = null;

  private readonly timeSignature:ITimeSignature;

  private totalQuarterNotes:Fraction = new Fraction(0);

  private readonly nodes:MeasureItemListNode[] = [];

  public get lengthInQuarterNotes():number {
    return this.totalQuarterNotes.valueOf();
  }

  constructor(
    {
      timeSignature,
    }: {
      timeSignature:ITimeSignature,
    }
  ) {
    this.timeSignature = timeSignature;
  }

  public add(element:IMeasureElement):this {
    const beat = this.totalQuarterNotes.div(
      4 / this.timeSignature.denominator
    ).floor().valueOf() + 1; // Make beats 1-based
      
    this.totalQuarterNotes = this.totalQuarterNotes.add(element.noteType.fraction);
      
    const node = new MeasureItemListNode({
      beat, // TODO: calculate
      element,
    });

    if (this.nodes.length > 0) {
      this.nodes[this.nodes.length - 1].next = node;
      node.previous = this.nodes[this.nodes.length - 1];

      if (!(node.element instanceof MeasureRest)) {
        if (
          this.lastAudibleElement !== null &&
          this.lastAudibleElement.beat === node.beat 
        ) {
          node.previousInBeat = this.lastAudibleElement;
          this.lastAudibleElement.nextInBeat = node;
        }
      }
    }

    if (!(node.element instanceof MeasureRest)) {
      this.lastAudibleElement = node;
    }
    
    this.nodes.push(node);

    return this;
  }

  public get(index:number) {
    return this.nodes[index];
  }

  [Symbol.iterator]() {
    return this.nodes[Symbol.iterator]();
  }
}
