var express = require("express");
var bodyParser = require("body-parser");
var contactRoute = require("./routes/contact");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/contact", contactRoute);

app.listen(PORT, function() {
  console.log("Contacts server listening on port %s.", PORT);
});
