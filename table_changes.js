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



    romps_create: function() {
      knex('romps')
        .update({
          name:obj.name
        })   //this closes update
        .finally(function() {
          knex.destroy();
        });  //this closes finally
    },   //this closes romps_create

    members_romps_join: function() {
      knex('romps_members_join')
        .insert({
          name: obj.name,
          romps_id: obj.rompID,
          member_id: obj.memberID
        })   //this closes update
        .finally(function() {
          knex.destroy();
        });   //this closes finally
    },   //this closes members_romps_join

    time_slot_create: function() {
      knex('time_slot')
        .insert({
          name: obj.name,
          time: obj.time,
          schedule_id: obj.scheduleID
        })   //this closes insert
        .finally(function() {
          knex.destry();
        });   //this closes finally
    },   //this closes time_slot_create


    activity_create: function() {
      knex('activity')
        .insert({
          name: obj.name
        })   //this closes insert
        .finally(function() {
          knex.destroy();
        });   //this closes finally
    },   //this closes activity_create

    schedule_create: function() {
      knex('schedule')
        .insert({
          name: obj.name,
          timeslot: obj.time,
          romps_id: obj.rompsID
        })   //thiscloses insert
        .finally(function() {
          knex.destry();
        });   //this closes finally
    },   //this closes schedule_create

    vote_join_create: function() {
      knex('vote_join')
        .insert({
          name: obj.name,
          activity_id: obj.activityID,
          time_slot_id: obj.timeslotID
        })   //this closes insert
        .finally(function() {
          knex.destry();
        });   //this closes finally
    }   //this closes vote_join




}   //this closes module.exports
