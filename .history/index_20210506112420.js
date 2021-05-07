const express = require("express");
const app = express();

require('./Routers/router')(app);

app.listen(3000)