const express = require("express");
const app = express();
const path = require("path");

const info = require("./routes/info");
const power = require("./routes/power");
const brightness = require("./routes/brightness");
const hue = require("./routes/hue");
const sat = require("./routes/saturation");
const effect = require("./routes/effect");

app.use(express.static(path.join(__dirname + "/dist")));

//both index.js and things.js should be in same directory
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/info", info);
app.use("/power", power);
app.use("/brightness", brightness);
app.use("/hue", hue);
app.use("/sat", sat);
app.use("/effect", effect);

app.listen(8000);
