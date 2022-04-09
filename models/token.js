class Token {
  /** @type {User} */
  user;

  refreshToken;

  constructor({user, refreshToken}) {
    this.user = user;
    this.refreshToken = refreshToken;
  }
}

module.exports = Token;