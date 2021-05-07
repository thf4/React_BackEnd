const flash = require("connect-flash");

const mensage = (req, res, next) =>{
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
};
app.use(flash())
module.exports = app => app.use(mensage);