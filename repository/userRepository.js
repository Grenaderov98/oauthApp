const knex = require('../knex/knex.js');
const User = require('../models/user');
const {mapUserToDto} = require('./mapping');

class UserRepository {
  async findById(userId) {
    const userDTO = await knex.select('*')
      .from('users')
      .where('id', userId)
      .first();

    if (!userDTO) {
      return;
    }

    return new User(userDTO);
  }

  async findByEmail(userEmail) {
    const userDTO = await knex.select('*')
      .from('users')
      .where('email', userEmail)
      .first();

    if (!userDTO) {
      return null;
    }

    return new User(userDTO);
  }

  async save(user) {
    const userDto = mapUserToDto(user);

    const [row] = await knex('users').insert(userDto)
      .onConflict(['email'])
      .merge()
      .returning('*');

    return row.id;
  }
}

module.exports = new UserRepository();
