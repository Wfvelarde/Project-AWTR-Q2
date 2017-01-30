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

      });   //this closes finally



  },   //this closes members_update


    romps_create: function(obj) {  //rompName is a string
      knex('romps')
        .insert({
          name: obj.name //maybe this
        })   //this closes update
        .returning("id")
        .finally(function() {
        });
    },   //this closes romps_create

    members_romps_join: function(obj) {
      knex('romps_members_join')
        .insert({
          romps_id: obj.rompID,
          members_id: obj.memberID
        })   //this closes update
        .finally(function() {
        });   //this closes finally
    },   //this closes members_romps_join

    get_members: function(obj) {
//       knex('members').join('romps_members_join').join('romps')
//         .where('members', '=', 'romps_members_join', '=', 'romps' )
//         .then()
//         .finally(function() {
//         });
//
//         .then(function() {
//           return knex('members')
//           .select('romps.name as user', );
//             .innerjoin('romps_members_join', 'users.id', 'accounts.user_id')
//             .innerJoin('romps',)
//
// })
    },   //this closes get_members


    activity_create: function(obj) {
      knex('activity')
        .insert({
          name: obj.actName,
          time: obj.timeOfAct
        })   //this closes insert
        .returning('id')
        .finally(function() {
        });
    },   //this closes activity_create

    romps_trips_create: function(obj) {
      knex('romps_trips')
        .insert({
          romps_id: obj.rmpName,
          trip_id: obj.trpName
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




    activity_trip_create: function(obj) {
      knex('activity_trip')
        .insert({
          activity_id: obj.bzAct,
          trip_id: obj.bzTrip
        })   //thiscloses insert
        .finally(function() {
        });   //this closes finally
    }   //this closes schedule_create





}   //this closes module.exports
