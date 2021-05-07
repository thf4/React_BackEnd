const express = require("express");
const app = express();
const cors = require("cors");
require("./Routers/router")(app);


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
  app.use(cors());
  next();
});

app.use(express.urlencoded({ extended: false }));


app.use(express.json());
app.listen(3000);
