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
//static
app.use(express.static(path.join(__dirname, "public")));
// middleware
app.use(express.urlencoded({ extended: true })); //parse body data from post request send from client
app.use(express.json());
// route
app.get("/", (req, res) => {
  return res.render("home", { name: "Hoang Nguyen" });
});
app.get("/news", (req, res) => {
  return res.render("news", { name: "Hoang Nguyen" });
});
app.get("/search", (req, res) => {
  return res.render("search", { name: "Hoang Nguyen" });
});
app.post("/search", (req, res) => {
  const data = req.body;
  res.send("");
});
app.listen(port, () => {
  console.log(`App is running on port: ${3000}`);
});
