var knex = require('knex');



module.exports = {
  members_update: function() {
    console.log("I'm in members_update");
    // knex('members')
    //   .update({
    //     first_name: this.firstname,
    //     last_name: this.lastname,
    //     phone_number: this[],
    //     email: this.email,
    //     username: this.username,
    //     password: this.password
    //   })   //this closes update
    //   .finally(function() {
    //     knex.destroy();
      // });   //this closes finally
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
