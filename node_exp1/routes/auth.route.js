var express = require("express");
var controller = require("../controllers/auth.controller");

var router = express.Router();
// Get users
router.get("/login", controller.login);

router.post("/login", controller.postLogin);

router.get("/logout", controller.postLogout);

module.exports = router;
