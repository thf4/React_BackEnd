const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());


require("./Routers/router")(app);

app.listen(3000);
