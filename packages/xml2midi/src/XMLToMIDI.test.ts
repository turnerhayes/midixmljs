import { MIDIFileType, MIDIReader } from "@thayes/midi-tools";

import { getMIDI } from "./XMLToMIDI";
import musicXML from "../musicxml/Tim Minchin - Not Perfect.musicxml";


const testXML = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 3.1 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="3.1">
  <work>
    <work-title>Test Music XML</work-title>
  </work>
  
  <part-list>
    <score-part id="P1">
      <part-name>Piano</part-name>
      <part-abbreviation>Pno.</part-abbreviation>
      <score-instrument id="P1-I1">
        <instrument-name>Piano</instrument-name>
      </score-instrument>
      <midi-device id="P1-I1" port="1"></midi-device>
      <midi-instrument id="P1-I1">
        <midi-channel>1</midi-channel>
        <midi-program>1</midi-program>
        <volume>78.7402</volume>
        <pan>0</pan>
      </midi-instrument>
    </score-part>
  </part-list>
  <part id="P1">
    <measure number="1" width="332.66">
      <attributes>
        <divisions>4</divisions>
        <key>
          <fifths>3</fifths>
        </key>
        <time>
          <beats>4</beats>
          <beat-type>4</beat-type>
        </time>
        <staves>2</staves>
        <clef number="1">
          <sign>G</sign>
          <line>2</line>
        </clef>
        <clef number="2">
          <sign>F</sign>
          <line>4</line>
        </clef>
      </attributes>
      <direction placement="above">
        <direction-type>
          <metronome parentheses="no" default-x="-33.86" default-y="40.00">
            <beat-unit>quarter</beat-unit>
            <per-minute>77</per-minute>
            </metronome>
          </direction-type>
        <staff>1</staff>
        <sound tempo="76.9998"/>
      </direction>
      <note default-x="108.73" default-y="-60.00">
        <pitch>
          <step>A</step>
          <octave>3</octave>
          </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">begin</beam>
      </note>
      <note default-x="108.73" default-y="-50.00">
        <chord/>
        <pitch>
          <step>C</step>
          <alter>1</alter>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="108.73" default-y="-40.00">
        <chord/>
        <pitch>
          <step>E</step>
          <octave>4</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
      </note>
      <note default-x="135.81" default-y="-75.00">
        <pitch>
          <step>E</step>
          <octave>3</octave>
        </pitch>
        <duration>2</duration>
        <voice>1</voice>
        <type>eighth</type>
        <stem>up</stem>
        <staff>1</staff>
        <beam number="1">continue</beam>
      </note>
    </measure>
  </part>
</score-partwise>
`;

describe('XMLToMIDI', () => {
  it('should output MIDI buffer', () => {
    const buffer = getMIDI(musicXML);
    const reader = new MIDIReader(buffer);
    expect(buffer).toBeInstanceOf(ArrayBuffer);
    expect(buffer.byteLength).toBe(8594);
    expect(reader.header.fileType).toBe(MIDIFileType.Format1);
    expect(reader.header.trackCount).toBe(2);
    expect(reader.header.division).toStrictEqual({
      ticks: 4,
    });
    const trackIterator = reader.readTracks();
    const tracks = [];

    for (const track of trackIterator) {
      tracks.push(track);
    }
    expect(tracks).toHaveLength(2136);
  });
});
