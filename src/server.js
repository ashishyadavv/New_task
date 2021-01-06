const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/sale.routes");


global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);




db.sequelize.sync();



app.listen(8080, () => {
  console.log("server is running at port 'http://localhost:8080'");
});