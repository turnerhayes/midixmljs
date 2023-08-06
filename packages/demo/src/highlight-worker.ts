import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';

import 'highlight.js/styles/atom-one-dark.css';

hljs.registerLanguage('xml', xml);

onmessage = (event: MessageEvent) => {
  const text = event.data as string;
  self.postMessage(hljs.highlight(text, { language: 'xml' }).value);
};