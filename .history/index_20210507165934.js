const express = require("express");
const app = express();
const path = require("path");
const usuarios = require("./Routes/usuarios");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

require("./Middleware/cors")(app);
require("./Routers/router")(app);
app.use("/usuarios", usuarios)

app.listen(3000);
