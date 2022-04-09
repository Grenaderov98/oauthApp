const User = require('../models/user');
const userRepository = require('../repository/userRepository'); 
const bcrypt = require('bcrypt');

class UsersService {
  async registration(email, password) {
    const candidate = await userRepository.findByEmail(email);

    if (candidate) {
      throw new Error(`User with ${email} already exist`)
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const user = new User({email, password: hashPassword});
    await userRepository.save(user);


    return user;
  }
}

module.exports = new UsersService();