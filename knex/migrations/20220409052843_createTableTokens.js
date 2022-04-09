
exports.up = async(knex) => {
  return knex.schema.createTable('tokens', (table) => {
    table.integer('userId').primary();
    table.string('refreshToken').notNullable();

    table.foreign('userId')
      .references('users.id')
      .onUpdate('restrict')
      .onDelete('restrict');
  })  
};

exports.down = function(knex) {
  return knex.schema.dropTable('tokens');
};
