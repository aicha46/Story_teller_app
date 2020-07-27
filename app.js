const path = require("path");
const express = require("express");
const express_session = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");
const morgan = require("morgan");
var exphbs = require("express-handlebars");

const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });
//passprt config
require("./config/passport")(passport);

connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(
  express_session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false, //that mean dnt create a session if theres nothing
  })
);

//add passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/", require("./routes/index"));

app.use("/auth", require("./routes/auth"));

app.use(express.static(path.join(__dirname, "public")));
const port = process.env.PORT || 3000;
app.listen(
  port,
  console.log(`surver running in ${process.env.NODE_ENV} mode on ${port}`)
);
