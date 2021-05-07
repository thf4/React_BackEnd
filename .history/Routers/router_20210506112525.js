const express = require('express');
const router = express.Router();


router.get("/", (req, res) => {
  res.send("bitch");
});

router.get("/contato", (req, res)=>{
  res.send("Hello word");
})


module.exports = (app) => app.use("/", router);