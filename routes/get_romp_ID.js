var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're gettin romp IDs")
  console.log("Wreck.body", req.body);


  knex('romps')
    .where('name', req.body.name)
    .returning('id')
    .then(function(result) {
      console.log('This is inside knex gettin romp id ', result[0]);
      res.send(result);
    })
    .finally(function() {

    });



});

module.exports = router;
