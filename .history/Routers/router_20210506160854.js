const express = require("express");
const router = express.Router();
const User = require("../Models/dados");
const bcrypt = require("bcryptjs");

router.get("/", async (req, res) => {});

router.get("/vizualizar/:_id", async (req, res) => {
  try {
    await User.findById(req.params._id, (err, users) => {
      return res.json({
        error: false,
        users,
      });
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: "Error id don't find!",
    });
  }
});

router.get("/listar", async (req, res) => {
  await User.find({})
    .lean()
    .then((users) => {
      res.json({ users });
    });
});

router.put("/editar", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body, {where:{_id:req.body._id}}, async (err, users) => {
      return res.json({
        error: false,
        message: "Altered success",
        users,
      });
    });
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: "Error to update!",
    });
  }
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
