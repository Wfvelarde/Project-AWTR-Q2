var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log(table_changes.romps_create);
  console.log("Hello, we're in romps")
  console.log("Wreck.body", req.body.name);
  knex('romps')
    .insert({
      name: req.body.name //maybe this
    })   //this closes update
    .returning("id")
    .then(function(ans) {
      res.send(ans);
    })
    .finally(function() {
      console.log("This is the romp ID in knex ");
    });
  // table_changes.romps_create(req.body);
  // res.send("End of romps create");


});

module.exports = router;
