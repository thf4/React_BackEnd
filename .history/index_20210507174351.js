const express = require("express");
const app = express();
const path = require("path");
const usuarios = require("./Routers/users");
const flash = require("connect-flash");


app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());
app.use(flash());
require("./Middleware/flash")(app);
require("./Middleware/cors")(app);
require("./Routers/router")(app);
app.use("/users", usuarios);

app.listen(3000);
