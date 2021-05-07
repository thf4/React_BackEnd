const express = require("express");
const app = express();

//require("./Middleware/cors")(app);
require("./Routers/router")(app);

app.use(express.json());
app.use(express.urlencoded());

app.listen(3000);
