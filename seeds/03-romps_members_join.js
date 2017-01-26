
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('romps_members_join').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('romps_members_join').insert({name: "Bvrs", romps_id: 1, members_id: 1}),
        knex('romps_members_join').insert({name: 'Cels', romps_id: 1, members_id: 2}),
        knex('romps_members_join').insert({name: 'PnGwns', romps_id: 2, members_id: 3}),
        knex('romps_members_join').insert({name: 'ManTz', romps_id: 3, members_id: 4})
      ]);
    });
};
