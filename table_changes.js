var knex = require('knex');



module.exports = {
  members_update: function() {
    console.log("I'm in members_update");
    knex('members')
      .update({
        first_name: this.firstname,
        last_name: this.lastname,
        phone_number: this[],
        email: this.email,
        username: this.username,
        password: this.password
      })   //this closes update
      .finally(function() {
        knex.destroy();
      });   //this closes finally
  }   //this closes members_update


}   //this closes module.exports
