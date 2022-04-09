const User = require('../models/user');
const userRepository = require('../repository/userRepository'); 
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const tokenService = require('./tokenService');
const ApiError = require('../extensions/apiError');

class UsersService {
  async registration(email, password) {
    const candidate = await userRepository.findByEmail(email);

    if (candidate) {
      throw ApiError.BadRequest(`User with ${email} already exist`)
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = uuid.v4();
    const user = new User({email, password: hashPassword, activationLink});
    const id = await userRepository.save(user);
    //todo sendActivationMail 
    const tokens = tokenService.generateTokens({
      id,
      email: user.email,
      isActivated: user.isActivated
    });
    await tokenService.saveToken(id, tokens.refreshToken);

    return {...tokens, user: {...user, id}};
  }
}

module.exports = new UsersService();