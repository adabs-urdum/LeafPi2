const express = require("express");
const router = express.Router();
const http = require("http");

router.get("/:ip/:key/:value", (req, res) => {
  const body = JSON.stringify({
    select: req.params.value,
  });

  const options = {
    hostname: req.params.ip,
    port: 16021,
    path: `/api/v1/${req.params.key}/effects`,
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
    },
  };

  let chunks = [];

  const newReq = http.request(options, (res2) => {
    res.send("");
  });

  newReq.on("error", (error) => {
    console.log("error");
  });

  newReq.write(body);

  newReq.end();
});

//export this router to use in our index.js
module.exports = router;
