const express = require("express");
const router = express.Router();
const User = require("../Models/dados");

router.get("/login", (req, res) => {
  res.render("usuarios/login");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/usuarios/login",
    failureFlash: true,
  })(req, res, next);
  req.flash("success_msg", "Successful Login"); 
});



module.exports = router;
