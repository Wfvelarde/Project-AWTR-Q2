
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activity').insert({name: 'Coding Camp'}),
        knex('activity').insert({name: 'Smashing Head Into Wall'}),  //oops same thing as Coding Camp
        knex('activity').insert({name: 'Disney Land'}),
        knex('activity').insert({name: 'SuperBowl'})
      ]);
    });
};
