
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trip').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('trip').insert({name: 'Coz', date: "infamy", location: "Cozumel", activity_id: 1, romps_id:1}),
        knex('trip').insert({name: 'Mi', date: "infamy", location: "Miami", activity_id: 2, romps_id:1}),
        knex('trip').insert({name: 'He', date: "infamy", location: "Hell", activity_id: 2, romps_id:2})
      ]);
    });
};
