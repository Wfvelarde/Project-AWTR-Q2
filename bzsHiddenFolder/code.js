//this is where I'm putting experimental code



//this is the new line that I wrote




//these are more changes that I made





//get data from trip table
//define route in app.js main page
//create get_trip.js in routes folder
  //in app.js


$.post('/activity', timeAct, function(data) {
  console.log(data)
});
  //in get_trip.js
var express = require('express');
var router = express.Router();
var table_changes = require('../table_changes.js');


var trip_body = router.get('/', function(req, res) {
  trip obj
  req.body
});
  //or
router.get('/', function(req, res) {

});

module.exports = router;

  //in table_changes.j
  get_activity_data: function() {
    knex('activity')
      .where({
        romps_id: obj.rompID,
        member_id: obj.memberID
      })   //this closes update
      .finally(function() {
      });   //this closes finally
  },   //this closes members_romps_join


  //THIS IS TO SEND AN RECEIVE DATA FROM LOCAL STORAGE
//username
  localStorage.setItem('lsMemberID', 1);

  var retrievedObject = localStorage.getItem('userName');

//userRomp
  localStorage.setItem('userRomp', Bvrs);

  var retrievedObject = localStorage.getItem('userRomp');
//userAvatar
  localStorage.setItem('userAvatar', red);

  var retrievedObject = localStorage.getItem('userAvatar');
//userTrip
  localStorage.setItem('userTrip', Florida);

  var retrievedObject = localStorage.getItem('userTrip');
