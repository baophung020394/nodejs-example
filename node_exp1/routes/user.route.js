var express = require("express");
var controller = require('../controllers/user.controller');
var validate = require('../validate/user.validate');

var router = express.Router();
// Get users
router.get("/", controller.index );

router.get("/search", controller.search);

// Cookie 
router.get('/cookie', function(req, res) {
  res.cookie('cookie-id', 12345);
  res.send('hello cookie');
})
// Get Form Create
router.get("/create", controller.getCreate);

// Route detail users
router.get("/:id", controller.detail );

// POST form Create
router.post("/create",  validate.postCreate, controller.postCreate);

module.exports = router;
