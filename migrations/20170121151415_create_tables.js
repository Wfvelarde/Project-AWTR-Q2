exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('members', function(table){
    table.increments();
    table.string('username');
    table.string('password');
    table.string('email');
    table.string('first_name');
    table.string('last_name');
    table.string('avatar');
    table.integer('phone_number');
  })
  .createTable('romps', function(table){
    table.increments();
    table.string('name');
  })
  .createTable('romps_members_join', function(table){
    table.increments();
    table.string('name');
    table.integer('romps_id').references("romps", "id");
    table.integer('members_id').references("members", "id");
  })
  .createTable('schedule', function(table){
    table.increments();
    table.string('name');
    table.string('timeslot');
    table.integer('romps_id').references("romps", "id");
  })
  .createTable('time_slot', function(table){
    table.increments();
    table.string('name');
    table.string('time');
    table.integer('schedule_id').references("schedule", "id");
  })
  .createTable('vote_join', function(table){
    table.increments();
    table.string('name');
    table.integer('time_slot_id').references("time_slot", "id");
    table.integer('activity_id').references("activity", "id");
  })
  .createTable('activity', function(table){
    table.increments();
    table.string('name');
  })


};  //closes exports.up

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('members');
};
