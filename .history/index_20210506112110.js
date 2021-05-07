const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("bitch");
});

app.listen(3000)