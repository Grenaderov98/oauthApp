
exports.up = async(knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.boolean('isActivated');
    table.string('activationLink');

    table.unique('email');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
