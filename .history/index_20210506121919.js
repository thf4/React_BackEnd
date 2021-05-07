const express = require("express");
const app = express();


express.json()
express.urlencoded()
require("./Routers/router")(app);

app.listen(3000);
