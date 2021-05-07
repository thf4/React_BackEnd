const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

require("./Middleware/cors")(app);
require("./Routers/router")(app);
require("./Routers/users")(app);

app.listen(3000);
