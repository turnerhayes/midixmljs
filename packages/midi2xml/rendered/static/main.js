(function() {
  "use strict";
  
  async function init() {
    const response = await fetch("/static/project/out.musicxml");

    const text = await response.text();

    const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("container");

    await osmd.load(text);

    osmd.render();
  }
  
  if (document.readyState === "complete") {
    init();
  }
  else {
    document.addEventListener(
      "DOMContentLoaded",
      () => {
        init();
      }
    );
  }
}());
