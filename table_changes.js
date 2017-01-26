var knex = require('./db/knex');



module.exports = {

  members_update: function(obj) {
    console.log("I'm in members_update");
    console.log("I'm obj", obj);
    knex('members')
      .insert({
        first_name: obj.firstname,
        last_name: obj.lastname,
        phone_number: obj.phonenumber,
        email: obj.email,
        username: obj.username,
        password: obj.password
      })   //this closes update
      .finally(function() {
        knex.destroy();
      });   //this closes finally
  },   //this closes members_update


    romps_create: function(rompName) {  //rompName is a string
      knex('romps')
        .insert({
          name: rompName //maybe this
        })   //this closes update
        .finally(function() {
          knex.destroy();
        });  //this closes finally
    },   //this closes romps_create

    members_romps_join: function() {
      knex('romps_members_join')
        .insert({
          romps_id: obj.rompID,
          member_id: obj.memberID
        })   //this closes update
        .finally(function() {
          knex.destroy();
        });   //this closes finally
    },   //this closes members_romps_join


    activity_create: function() {
      knex('activity')
        .insert({
          name: obj.name
          time: obj.time
        })   //this closes insert
        .finally(function() {
          knex.destroy();
        });   //this closes finally
    },   //this closes activity_create

    trip_create: function() {
      knex('schedule')
        .insert({
          name: obj.name,
          location: obj.location,
          romps_id: obj.rompsID,
          activity_id: obj.activityID
        })   //thiscloses insert
        .finally(function() {
          knex.destry();
        });   //this closes finally
    },   //this closes schedule_create






}   //this closes module.exports
