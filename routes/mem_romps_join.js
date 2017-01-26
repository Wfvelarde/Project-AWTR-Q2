var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

var table_changes = require('../table_changes.js')

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("Hello, we're in mem_romps_join")
  console.log("Wreck.body", req.body);  //check for type
//get member id from member
  knex('members')
    .where("name", req.body.member) //is name first or last_name
    .returning("id")
    .then(function(newID) {
      console.log("we are in the mem_romps_join then statement");
      var membersID = newID;
    })  //this closes then
    .finally(function() {
      knex.destroy();
    });  //this closes finally
//get romp id from name
  knex('romps')
    .where('name', req.body.name)  //name of romp
    .returning("id")
    .then(function(newRompID) {
      console.log("this is the rompID", newRompID);
      var rompsID = newRompID;
    })  //this closes then
    .finally(function() {
      knex.destroy();
    });  //this closes finally
    console.log("these are new values", membersID, rompsID);
    var newObjBody = {
      rompID: rompsID,
      memberID: membersID
    };  //this closes newObjBody

  table_changes.members_romps_join(newObjBody);
  res.send("Finish mem_romps_join");


});

module.exports = router;
