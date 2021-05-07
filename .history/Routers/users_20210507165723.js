const express = require("express");
const router = express.Router();
const User = require("../Models/dados");


router.get("/login", (req, res)=>{
  res.render("Hellow")
})


module.exports = Usuarios