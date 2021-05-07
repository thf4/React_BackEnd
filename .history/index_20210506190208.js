const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
require("./Middleware/cors")(app);

require("./Routers/router")(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000);
