const express = require("express");
const router = express.Router();
const http = require("http");

router.get("/:ip/:key", function (req, res) {
  const options = {
    hostname: req.params.ip,
    port: 16021,
    path: `/api/v1/${req.params.key}/`,
    method: "GET",
  };

  let chunks = [];

  const newReq = http.request(options, (newRes) => {
    newRes
      .on("data", (data) => {
        chunks.push(data);
      })
      .on("end", function () {
        chunks = Buffer.concat(chunks).toString();
        const json = JSON.parse(chunks);
        res.send(json);
      });
  });

  newReq.on("error", (error) => {
    console.log("error");
  });

  newReq.end();
});

router.post("/", function (req, res) {
  res.send("POST route on things.");
});

//export this router to use in our index.js
module.exports = router;
