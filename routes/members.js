var express = require('express');
var router = express.Router();

var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're in members")
  console.log("Wreck.body", req.body);
  table_changes.members_update(req.body);
  res.send("Finish members");


});

module.exports = router;
