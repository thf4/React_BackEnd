const express = require("express");
const router = express.Router();
const User = require("../Models/dados");

router.get("/", (req, res) => {
  res.send("rola");
});

router.get("/contato", (req, res) => {
  res.send("Hello word");
});

router.get("/cadastrar", async (req, res) => {
  const { body = {} } = req;
  const { name, email, password } = body;
  try{
  await User.create({
    name: "thales",
    email: "aushuas@suahas",
    password: "castor",
  })
  res.send("/cadastrar")
}catch(err){
  res.status(400).send("Error")
}
});

module.exports = (app) => app.use("/", router);
