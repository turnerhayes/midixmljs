import {
  KeySharps,
  IKeySignature
} from "@thayes/midi-tools";

export class KeySignatureMap {
  private readonly offsetMap:{[offset:number]: IKeySignature} = {
    0: {
      sharps: 0 as KeySharps,
      mode: "major",
    },
  };

  private sortedOffsets:number[] = [0];

  addSignature(offset:number, keySignature:IKeySignature):void {
    this.offsetMap[offset] = keySignature;
    this.sortedOffsets = Object.keys(this.offsetMap).map(Number).sort((a, b) => a - b);
  }

  getSignature(offset:number):IKeySignature {
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
