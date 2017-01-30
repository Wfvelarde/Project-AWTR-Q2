var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're in mem_romps_join");
  console.log("Wreck.body", req.body);
//get member id from member_id in obj

  table_changes.romps_trips_create(req.body);

  res.send("Finish mem_romps_join");


});

module.exports = router;
