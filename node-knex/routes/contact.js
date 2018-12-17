var express = require("express");
var Contact = require("../models/contact");
var router = express.Router();

router.get("/", function(req, res) {
  Contact.fetchAll().then(function(contacts) {
    res.json({ contacts });
  });
});

// Get contact by id
router.get("/:id", function(req, res) {
    Contact
    .where("id", req.params.id)
    .fetch()
    .then(function(contacts) {
      res.json({ contacts });
    });
  });
  
// Test create contact
router.post("/create", function(req, res) {
  new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    emailAddress: req.body.emailAddress
  })
    .save()
    .then(function(saved) {
      res.json({ saved });
    });
});

// Test update contact
router.put("/:id", function(req, res) {
  Contact.where("id", req.params.id)
    .fetch()
    .then(function(contact) {
      contact
        .save({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          emailAddress: req.body.emailAddress
        })
        .then(function(saved) {
          res.json({ saved });
        });
    });
});

// Test delete contact
router.delete("/:id", function(req, res) {
  Contact.where("id", req.params.id)
    .destroy()
    .then(function(destroyed) {
      res.json({ destroyed });
    });
});

module.exports = router;
