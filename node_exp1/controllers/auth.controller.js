var db = require("../db");

// Get all users
module.exports.login = function(req, res) {
  res.render("auth/login");
};
