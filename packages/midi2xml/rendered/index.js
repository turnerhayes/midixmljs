"use strict";

const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();

const port = process.env.PORT || "3500";

app.use("/node_modules/", express.static(path.join(__dirname, "node_modules")));
app.use("/static/", express.static(path.join(__dirname, "static")));
app.use("/static/project/", express.static(path.resolve(__dirname, "..")));

const indexHTML = fs.readFileSync(
  path.join(__dirname, "index.html"),
  { encoding: "utf8" }
);

app.use(
  (req, res) => {
    res.type("html").send(indexHTML);
  }
);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}`);
});
