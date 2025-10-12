const express = require("express");
const morgan = require("morgan");
const path = require("path");
const handlebars = require("express-handlebars");
const port = 3000;
const app = express();
//logger
app.use(morgan("combined"));
//view engine
const handlebarsInstance = handlebars.create({ extname: ".hbs" });
app.engine("hbs", handlebarsInstance.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
console.log("ddd", __dirname);
//static
app.use(express.static(path.join(__dirname, "public")))
// route
app.get("/", (req, res) => {
  return res.render("home", { name: "Hoang Nguyen" });
});
app.listen(port, () => {
  console.log(`App is running on port: ${3000}`);
});
