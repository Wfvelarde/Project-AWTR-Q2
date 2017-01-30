var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're gettin members IDs")
  console.log("Wreck.body", req.body);
  var ans;

  knex('members')
    .where("username", req.body.username)
    .returning("id")
    .then(function(result) {
      console.log('This is inside knex gettin members id ', result);
      res.send(result);
    })
    .finally(function() {

    });



});

module.exports = router;
