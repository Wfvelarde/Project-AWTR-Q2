var knex = require('./db/knex');



module.exports = {

  members_update: function(obj) {
    console.log("I'm in members_update");
    console.log("I'm obj", obj);
    knex('members')
      .insert({
        first_name: obj.firstname,
        last_name: obj.lastname,
        email: obj.email,
        username: obj.username,
        password: obj.password
      })   //this closes insert
      .finally(function() {
      });

  },   //this closes members_update


    romps_create: function(rompName) {  //rompName is a string
      knex('romps')
        .insert({
          name: rompName.name //maybe this
        })   //this closes update
        .finally(function() {
        });
    },   //this closes romps_create

    members_romps_join: function() {
      // knex('romps_members_join')
      //   .insert({
      //     romps_id: obj.rompID,
      //     member_id: obj.memberID
      //   })   //this closes update
      //   .finally(function() {
      //   });   //this closes finally
    },   //this closes members_romps_join


    activity_create: function(obj) {
      knex('activity')
        .insert({
          name: obj.actName,
          time: obj.timeOfAct
        })   //this closes insert
        .finally(function() {
        });
    },   //this closes activity_create

    mod_activity: function() {
      // knex('activity')
      // .where("name", obj.oldActID)  //this won't work because if the name changes it won't match
      //   .update({
      //     name: obj.act
      //     time: obj.time
      //   })  //this closes update
      //   .finally(function() {
      //   });   //this closes finally
    },   //this closes mod_activity_create


    trip_create: function(obj) {
      knex('trip')
        .insert({
          name: obj.name,
          date: obj.date,
          location: obj.location,
          romps_id: obj.rompsID,
          activity_id: obj.activityID
        })   //thiscloses insert
        .finally(function() {
        });   //this closes finally
    }   //this closes schedule_create






}   //this closes module.exports
