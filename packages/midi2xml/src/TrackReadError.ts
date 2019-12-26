export class TrackReadError extends Error {
  public readonly trackNumber:number;

  public readonly trackData:object;

  constructor(message:string, trackNumber:number, trackData?:object, stack?:string) {
    super(message);

    this.trackNumber = trackNumber;
    this.trackData = trackData;
    this.stack = stack;
  }
}
