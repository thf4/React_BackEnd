const express = require("express");
const router = express.Router();
const User = require("../Models/dados");


router.get("/login/:email", (req, res)=>{
  res.send("Hellow")
})