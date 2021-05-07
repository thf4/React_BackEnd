const express = require("express");
const app = express();

require("./Middleware/cors")(app);


app.use(express.json());
app.use(express.urlencoded({extended: false}));
require("./Routers/router")(app);
app.listen(3000);
