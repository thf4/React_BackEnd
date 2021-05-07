const express = require("express");
const router = express.Router();
const User = require("../Models/dados");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {
  await User.find({})
    .lean()
    .then((users) => {
      res.json({ users });
    });
});

router.get("/vizualizar", async (req, res) => {
  await res.send("Hello word");
});

router.get("/listar", (req, res) => {});

router.post("/cadastrar", async (req, res) => {
  const { body = {} } = req;
  const { name, email, password } = body;
  try {
    const users = await User.create({
      name,
      email,
      password,
    });

    const hash = bcrypt.hashSync(users.password, 10);
    users.password = hash;
    await users.save();
    return res.json({
      error: false,
      message: "Cadastrado com Sucesso",
    });
    //res.status(200).send("Cadastrado com sucesso!!");
  } catch (err) {
    res.status(400).send("Error");
    return res.status(400).json({
      error: true,
      message: "Erro ao se cadastrar",
    });
  }
});

module.exports = (app) => app.use("/", router);
