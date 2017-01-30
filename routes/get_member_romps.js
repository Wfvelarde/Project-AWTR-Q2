var express = require('express');
var router = express.Router();
var knex = require('../db/knex');


var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're gettin members romps")
  console.log("Wreck.body", req.body);
  // var memberRomps = table_changes.get_members(req.body);
  // res.send(memberRomps);

  knex('romps_members_join')
    .innerJoin('members', 'members.id', 'romps_members_join.members_id')
    .innerJoin('romps', 'romps.id', 'romps_members_join.romps_id')
    .distinct('romps.name')
    .select('romps.name')
    .where('members.id', req.body.id)
    .then(function(ans) {
      console.log("This is inside knex get_member_romps ", ans);
      res.send(ans);
  })
});





module.exports = router;
