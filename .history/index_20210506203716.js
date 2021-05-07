const express = require("express");
const app = express();
const cors = require("cors");





require("./Routers/router")(app);
app.use(express.json());
app.listen(3000);
