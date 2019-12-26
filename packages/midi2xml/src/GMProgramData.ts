export enum InstrumentTypes {
  Piano = 1,
  Electric = 1 << 1,
};

export interface IProgramData {
  number:number;
  name:string;
  instrumentTypes:InstrumentTypes;
};

export const programs:IProgramData[] = [
  {
    number: 1,
    name: "Acoustic Grand Piano",
    instrumentTypes: InstrumentTypes.Piano,
  },
  {
    number: 2,
    name: "Bright Acoustic Piano",
    instrumentTypes: InstrumentTypes.Piano,
  },
  {
    number: 3,
    name: "Electric Grand Piano",
    instrumentTypes: InstrumentTypes.Piano | InstrumentTypes.Electric,
  },
  {
    number: 4,
    name: "Honky-Tonk Piano",
    instrumentTypes: InstrumentTypes.Piano,
  },
  {
    number: 5,
    name: "Electric Piano 1",
    instrumentTypes: InstrumentTypes.Piano | InstrumentTypes.Electric,
  },
  {
    number: 6,
    name: "Electric Piano 2",
    instrumentTypes: InstrumentTypes.Piano | InstrumentTypes.Electric,
  },
];
