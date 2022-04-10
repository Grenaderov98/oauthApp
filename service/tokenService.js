const jwt = require('jsonwebtoken');
const tokenRepository = require('../repository/tokenRepository');

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_ACCESS, {expiresIn: '30m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_REFRESH, {expiresIn: '30d'});

    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(userId, refreshToken) {
    await tokenRepository.save(userId, refreshToken);
  }

  async removeToken(refreshToken) {
    await tokenRepository.remove(refreshToken);
  }
}

module.exports = new TokenService;