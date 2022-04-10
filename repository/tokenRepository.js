const knex = require('../knex/knex.js');

class TokenRepository {
  async save(userId, refreshToken) {
    await knex('tokens').insert({userId, refreshToken})
      .onConflict(['userId'])
      .merge();
  }

  async remove(refreshToken) {
    await knex('tokens').where('refreshToken', refreshToken).del();
  }
}

module.exports = new TokenRepository();
