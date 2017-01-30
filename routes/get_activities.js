var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're gettin trips")
  console.log("Wreck.body", req.body);


  knex('activity_trip')
    .innerJoin('trip', 'trip.id', 'activity_trip.trip_id')
    .innerJoin('activity', 'activity.id', 'activity_trip.activity_id')
    .select('activity.name', 'activity.time')
    .where('activity.name', req.body.name)
    .then(function(ans) {
      console.log("This is inside knex get_activities ", ans);
      res.send(ans);
    })
    .finally(function() {

    })
});





module.exports = router;
