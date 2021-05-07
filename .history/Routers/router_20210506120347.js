const express = require('express');
const router = express.Router();
const User = require("../Models/dados")

router.get("/", (req, res) => {
  res.send("rola");
});

router.get("/contato", (req, res)=>{
  res.send("Hello word");
})

router.get("/cadastrar", async (req, res) =>{
  const { body={} } = req;
  const { name, email, password } = body;
  await User
});

module.exports = (app) => app.use("/", router);