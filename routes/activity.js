var express = require('express');
var router = express.Router();

var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're in activity")
  console.log("Wreck.body", req.body);
  table_changes.activity_create(req.body);
  res.send("Finish activity");


});

module.exports = router;
