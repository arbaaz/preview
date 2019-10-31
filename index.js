require("./overrides");
const express = require("express");
const Handlebars = require("handlebars");
const templateString = require("./index.template");
const fs = require("fs");

const app = express();
const template = Handlebars.compile(templateString);

const data = fs.readFileSync("./image.jpeg");

const port = 3005;
app.get("/", (req, res) => {
  console.log(req.headers);
  res.send(template());
});

app.get("*.jpeg", (req, res) => {
  res.writeHead(200, { "Content-Type": "image/jpg" });
  res.end(data, "Base64");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
