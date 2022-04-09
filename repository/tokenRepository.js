const knex = require('../knex/knex.js');

class TokenRepository {
  async save(userId, refreshToken) {
    await knex('tokens').insert({userId, refreshToken})
      .onConflict(['userId'])
      .merge();
  }
}

module.exports = new TokenRepository();
