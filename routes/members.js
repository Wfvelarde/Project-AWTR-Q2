"use strict";

var express = require('express');
var bcrypt = require('bcrypt');
var router = express.Router();

var table_changes = require('../table_changes.js')

const saltRounds = 10;

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're in members create ")
  console.log("Wreck.body", req.body);
  var pwd = req.body.password;
  console.log("unhashedPw", pwd);


  bcrypt.hash(pwd, saltRounds, function(err, hash) {
    console.log("hashedpw", hash);
    // Store hash in your password DB.
    req.body.password = hash;

    table_changes.members_update(req.body);
    res.send("Finish members");
  }); // closes bcrypt

}); //closes post

module.exports = router;
