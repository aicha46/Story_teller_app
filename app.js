const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
var exphbs = require("express-handlebars");

const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");
//Routes
app.use("/", require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(`surver running in ${process.env.NODE_ENV} mode on ${port}`)
);
