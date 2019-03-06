import * as path from 'path';
import * as fs from 'fs';
import { JSDOM } from 'jsdom';

import { getMIDI } from './XMLToMIDI';

const xml:string = fs.readFileSync(
  path.resolve(__dirname, '..', 'musicxml', 'Tim Minchin - Rock N Roll Nerd.musicxml'),
  {
    encoding: 'utf8',
  }
);

(global as any).window = new JSDOM().window;

getMIDI(xml);
