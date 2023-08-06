import 'highlight.js/styles/atom-one-dark.css';

onmessage = (event: MessageEvent) => {
  console.log('event data:', event.data);
  if (typeof event.data === 'string') {
    document.body.innerHTML = event.data;
  }
};
