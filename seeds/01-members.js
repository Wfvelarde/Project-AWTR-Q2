
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('members').insert({username: "user1", password: "password1", email: "email1", avatar: "pinky", access: 1, first_name: "Richard", last_name: 'Beese'}),
        knex('members').insert({username: "user2", password: "password2", email: "email2", avatar: "red", access: 2,first_name: "Tara", last_name: 'Mason'}),
        knex('members').insert({username: "user3", password: "password3", email: "email3", avatar: "blue", access: 3,first_name: "Will", last_name: 'Velarde'}),
        knex('members').insert({username: "user4", password: "password4", email: "email4", avatar: "greeny", access: 4,first_name: "Austin", last_name: 'Edwards'})

      ]);
    });
};
