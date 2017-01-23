
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('romps').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('romps').insert({name: "Bvrs"}),
        knex('romps').insert({name: 'Cels'}),
        knex('romps').insert({name: 'PnGwns'}),
        knex('romps').insert({name: 'ManTz'})
      ]);
    });
};
