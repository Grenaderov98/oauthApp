class User {
  email;

  password;

  isActivated;

  activationLink;

  constructor({email, password, isActivated, activationLink}) {
    this.email = email;
    this.password = password;
    this.isActivated = isActivated || false;
    this.activationLink = activationLink;
  }
}

module.exports = User;