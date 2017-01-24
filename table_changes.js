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
        // email: obj.email,
        // username: obj.username,
        // password: obj.password
      })   //this closes update
      .finally(function() {
        knex.destroy();
      });   //this closes finally
  },   //this closes members_update

    romps_create: function() {
      knex('romps')
        .update({
          name:"whgt"
        })   //this closes update
        .finally(function() {
          knex.destroy();
        });  //this closes finally
    },   //this closes romps_create

    activity_create: function() {
      knex('activity')
        .update({
          name: ""
        })   //this closes update
        .finally(function() {
          knex.destroy();
        })   //this closes finally
    }   //this closes activity_create


}   //this closes module.exports
