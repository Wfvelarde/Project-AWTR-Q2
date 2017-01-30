var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're gettin trips")
  console.log("Wreck.body", req.body);
  console.log("req.body.name", req.body.name)
  // var memberRomps = table_changes.get_members(req.body);
  // res.send(memberRomps);

  knex('romps_trips')
    .innerJoin('romps', 'romps.id', 'romps_trips.romps_id')
    .innerJoin('trip', 'trip.id', 'romps_trips.trip_id')
    .select('trip.name', 'trip.date', 'trip.location')
    .where('romps.name', req.body.name)
    .then(function(ans) {
      console.log("This is inside knex get_trips ", ans);
      res.send(ans);
    })
    .finally(function() {

    })
});





module.exports = router;
