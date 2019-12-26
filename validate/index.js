const fs = require("fs");
const path = require("path");
const xmllint = require("xml.js");

console.log(xmllint);


const result = xmllint.validateXML({
  xml: fs.readFileSync(
    path.join(__dirname, "..", "packages", "midi2xml", "out.musicxml"),
    { encoding: "utf8" }
  ),
  schema: fs.readFileSync(
    path.join(__dirname, "..", "packages", "midi2xml", "src", "musicxml.xsd"),
    { encoding: "utf8" }
  ),
});

console.log(result);

