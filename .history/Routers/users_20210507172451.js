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

router.get("/login", async (req, res) => {
  try {
    await User.findById({ email }, () => {
      return res.json({
        error: false,
        message: "Email ja cadastrado !",
      });
    }).lean();
  } catch (err) {
    res.status(400).send("Error");
    return res.status(400).json({
      error: true,
      message: "Erro too create!",
    });
  }
});

module.exports = router;
