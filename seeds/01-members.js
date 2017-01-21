
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('members').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('members').insert({id: 1, first_name: "Richard", last_name: 'Beese', phone_number: 5550740}),
        knex('members').insert({id: 2, first_name: "Tara", last_name: 'Mason', phone_number: 5551111}),
        knex('members').insert({id: 3, first_name: "Will", last_name: 'Velarde', phone_number: 5552222}),
        knex('members').insert({id: 4, first_name: "Austin", last_name: 'Edwards', phone_number: 5553333})

      ]);
    });
};
