var express = require('express');
var router = express.Router();

var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(table_changes.romps_create);
  console.log("Hello, we're in romps")
  console.log("Wreck.body", req.body);
  table_changes.romps_create(req.body);
  res.send("Finish romps");


});

module.exports = router;
