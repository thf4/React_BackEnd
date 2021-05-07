const express = require("express");
const app = express();
require("./Routers/router")(app);
require("./Middleware/cors")(app);




app.use(express.json());
app.use(express.urlencoded());


app.listen(3000);
