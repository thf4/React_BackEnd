const express = require("express");
const router = express.Router();
const User = require("../Models/dados");


router.post("/login/:email", (req, res)=>{
  res.send("Hellow")
})