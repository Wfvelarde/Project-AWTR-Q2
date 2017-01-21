
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('romps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('romps').insert({id: 1, name: "Bvrs"}),
        knex('romps').insert({id: 2, name: 'Cels'}),
        knex('romps').insert({id: 3, name: 'PnGwns'}),
        knex('romps').insert({id: 4, name: 'ManTz'})
      ]);
    });
};
