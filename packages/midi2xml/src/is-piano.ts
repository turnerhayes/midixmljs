const pianoNums = {
  // Piano
  1: true, // Acoustic Grand Piano
  2: true, // Bright Acoustic Piano
  3: true, // Electric Grand Piano
  4: true, // Honky-tonk Piano
  5: true, // Electric Piano 1
  6: true, // Electric Piano 2
  7: true, // Harpsichord
  8: true, // Clavinet
  // Organ
  17: true, // Drawbar Organ
  18: true, // Percussive Organ
  19: true, // Rock Organ
  20: true, // Church Organ
  21: true, // Reed Organ
};

export const isPiano = (programNum:number):boolean => {
  return programNum in pianoNums;
};
