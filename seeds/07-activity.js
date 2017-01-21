
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activity').insert({id: 1, name: 'Coding Camp'}),
        knex('activity').insert({id: 2, name: 'Smashing Head Into Wall'}),  //oops same thing as Coding Camp
        knex('activity').insert({id: 3, name: 'Disney Land'}),
        knex('activity').insert({id: 4, name: 'SuperBowl'})
      ]);
    });
};
