var db = require("../db");
var shortid = require("shortid");

// Get all users
module.exports.index = function(req, res) {
  res.render("users/index", {
    users: db.get("users").value()
  });
};

// Search user by Id

module.exports.search = function(req, res) {
  var q = req.query.q;
  var matchUsers = db
    .get("users")
    .value()
    .filter(function(user) {
      return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
  // console.log(matchUsers
  res.render("users/index", {
    users: matchUsers
  });
};

// User detail
module.exports.detail = function(req, res) {
  var id = req.params.id;
  var user = db
    .get("users")
    .find({ id: id })
    .value();
  res.render("users/view", {
    user: user
  });
};
// Get view create
module.exports.getCreate = function(req, res, next) {
  console.log(req.cookies);
  res.render("users/create");
};
// Create User
module.exports.postCreate = function(req, res) {
  req.body.id = shortid.generate();

  db.get("users")
    .push(req.body)
    .write();
  res.redirect("/users");
};
