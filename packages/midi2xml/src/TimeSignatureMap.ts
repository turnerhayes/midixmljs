import {
  ITimeSignature,
} from '@thayes/midi-tools';

export class TimeSignatureMap {
  private readonly offsetMap:{[offset:number]: ITimeSignature} = {
    0: {
      numerator: 4,
      denominator: 4,
    },
  };

  private sortedOffsets:number[] = [0];

  addSignature(offset:number, timeSignature:ITimeSignature):void {
    this.offsetMap[offset] = timeSignature;
    this.sortedOffsets = Object.keys(this.offsetMap).map(Number).sort((a, b) => a - b);
  }

  getSignature(offset:number):ITimeSignature {
    if (offset in this.offsetMap) {
      return this.offsetMap[offset];
    }

    for (let index = this.sortedOffsets.length - 1; index >= 0; index--) {
      if (this.sortedOffsets[index] < offset) {
        return this.offsetMap[this.sortedOffsets[index]];
      }
    }
  }
}
