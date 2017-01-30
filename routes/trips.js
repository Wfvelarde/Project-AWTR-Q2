var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're trippin")
  console.log("Wreck.body", req.body);
  knex('trip')
    .insert({
      name: req.body.name,
      date: req.body.date,
      location: req.body.location,
      romps_id: req.body.rompsID,
    })   //thiscloses insert
    .returning('id')
    .then(function(ans) {
      res.send(ans);
    })
    .finally(function() {
      console.log("This is the end of trips.js knex");

    });   //this closes finally


});

module.exports = router;
