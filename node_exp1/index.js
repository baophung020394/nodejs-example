var express = require("express");
var bodyParser = require("body-parser");
var userRoute = require("./routes/user.route");
var authRoute = require("./routes/auth.route");
var cookieParser = require("cookie-parser");

var app = express();
var port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(express.static("public"));

app.use("/users", userRoute);
app.use("/auth", authRoute);

app.listen(port, function() {
  console.log("Server listening on port", port);
});
