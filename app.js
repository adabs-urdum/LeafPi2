const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const socketIo = require("socket.io");

const info = require("./routes/info");
const power = require("./routes/power");
const brightness = require("./routes/brightness");
const hue = require("./routes/hue");
const sat = require("./routes/saturation");
const effect = require("./routes/effect");

app.use(express.static(path.join(__dirname + "/dist")));

//both index.js and things.js should be in same directory
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/templates/index.html"));
});

app.get("/tft32", function (req, res) {
  res.sendFile(path.join(__dirname + "/templates/tft32.html"));
});

app.use("/info", info);
app.use("/power", power);
app.use("/brightness", brightness);
app.use("/hue", hue);
app.use("/sat", sat);
app.use("/effect", effect);

const server = http.createServer(app);
const io = socketIo(server);

const port = process.env.PORT || 4001;

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(8000);
