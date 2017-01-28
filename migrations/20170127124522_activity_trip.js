
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('activity_trip', function(table){
    table.increments();
    table.integer('activity_id').references("activity", "id");
    table.integer('trip_id').references("trip", "id");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('activity_trip');

};
