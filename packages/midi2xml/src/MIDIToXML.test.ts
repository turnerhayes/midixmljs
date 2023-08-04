import { JSDOM } from 'jsdom';
import { MIDIFile, NoteNameToNumber } from '@thayes/midi-tools';

import { getXML } from './MIDIToXML';

describe('MIDIToXML', () => {
  describe('getXML', () => {
    it('should generate XML from a MIDI buffer', () => {
      const writer = new MIDIFile({ divisions: 4 }).setTitle('Test song').timeSignature({
        numerator: 4,
        denominator: 4,
      }).note({
        note: NoteNameToNumber('A4'),
        duration: 3,
        track: 1,
        offset: 0,
      });
      const xml = getXML(writer.toArrayBuffer());
      const parsedXML = new (new JSDOM()).window.DOMParser()
        .parseFromString(xml, 'application/xml');
      console.log('XML: %s', xml);
      const scorePartwiseEls = parsedXML.getElementsByTagName('score-partwise');
      expect(scorePartwiseEls).toHaveLength(1);
      const [root] = scorePartwiseEls;
      expect(root.querySelector('work > work-title')?.textContent).toBe('Test song');
      // expect(parsedXML.getElementsByTagName('score-partwise')[0]).toBe('foo');
    });
  });
});
