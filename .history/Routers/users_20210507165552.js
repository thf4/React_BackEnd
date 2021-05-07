const express = require("express");
const router = express.Router();
const User = require("../Models/dados");


router.post("/login", (req, res)=>{
  res.render("Hellow")
})