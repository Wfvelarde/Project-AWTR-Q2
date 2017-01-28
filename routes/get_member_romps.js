var express = require('express');
var router = express.Router();

var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're gettin members")
  console.log("Wreck.body", req.body);
  var memberRomps = table_changes.get_members(req.body);
  res.send(memberRomps);


});

module.exports = router;
