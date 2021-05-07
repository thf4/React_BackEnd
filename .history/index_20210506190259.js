const express = require("express");
const app = express();
require("./Middleware/cors")(app);



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
require("./Routers/router")(app);
app.listen(3000);
