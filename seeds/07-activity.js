
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activity').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('activity').insert({name: 'Coding Camp', time: "hell freezes over"}),
        knex('activity').insert({name: 'Smashing Head Into Wall', time: "hell freezes over"}), 
        knex('activity').insert({name: 'Disney Land', time: "hell freezes over"}),
        knex('activity').insert({name: 'SuperBowl', time: "hell freezes over"})
      ]);
    });
};
