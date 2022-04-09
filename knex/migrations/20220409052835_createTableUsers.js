
exports.up = async(knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.boolean('isActivated').notNullable();
    table.string('activationLink').notNullable();

    table.unique('email');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
