
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('romps_trips', function(table){
    table.increments();
    table.integer('romps_id').references("romps", "id");
    table.integer('trip_id').references("trip", "id");
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('activity_trip');

};
