var express = require("express");
var controller = require('../controllers/auth.controller');

var router = express.Router();
// Get users
router.get("/login", controller.login );

module.exports = router;