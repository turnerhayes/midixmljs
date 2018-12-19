/* eslint-disable */

!(function() {
  "use strict";

  const tabs = Array.from(document.querySelectorAll("#tablist li"));

  tabs.forEach(
    (tab) => tab.addEventListener(
      "click",
      (event) => {
        const tabName = event.target.dataset.tab;

        tabs.forEach(
          (tab) => {
            if (tab.dataset.tab === tabName) {
              tab.classList.add("selected");
            }
            else {
              tab.classList.remove("selected");
            }
          }
        );

        Array.from(document.querySelectorAll(".tab")).forEach(
          (tab) => {
            if (tab.classList.contains(tabName)) {
              tab.classList.remove("hidden");
            }
            else {
              tab.classList.add("hidden");
            }
          }
        );
      }
    )
  )

  fetch("./main.xml").then(
    (response) => response.text()
  ).then(
    (xml) => {
      const codeDisplay = document.getElementById("xml-display");
      codeDisplay.innerText = xml;

      const ed = CodeMirror.fromTextArea(
        codeDisplay
      );
      
      // hljs.highlightBlock(codeDisplay);
      
      const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("container");

      osmd.setLogLevel("info");
      
      osmd.load(xml)
        .then(
            () => {
              osmd.render();
              const spinner = document.querySelector(".spinner");

              if (spinner) {
                spinner.parentNode.removeChild(spinner);
              }
            }
        ).catch(
          (err) => console.error(err)
        );
    }
  );
}());
