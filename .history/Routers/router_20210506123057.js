const express = require("express");
const router = express.Router();
const User = require("../Models/dados");

router.get("/", (req, res) => {
  res.send("rola");
});

router.get("/contato", (req, res) => {
  res.send("Hello word");
});

router.post("/cadastrar", async (req, res) => {
  const { body = {} } = req;
  const { name, email, password } = body;
  try {
    const users = await User.create({
      name,
      email,
      password,
    });
    
    bcrypt.genSalt(10, (err, salt) =>{
      bcrypt.hash(users.password, salt, async (err, hash)=>{
        users.password = hash;
      })
      await users.save();
      res.status(200).send("Cadastrado com sucesso!!");
    })
  } catch (err) {
    res.status(400).send("Error");
  }
});

module.exports = (app) => app.use("/", router);
