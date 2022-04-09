class User {
  email;

  password;

  isActivated;

  activationLink;

  constructor({email, password, isActivated = true, activationLink}) {
    this.email = email;
    this.password = password;
    //todo set default false value with activation link
    this.isActivated = isActivated;
    this.activationLink = activationLink;
  }
}

module.exports = User;