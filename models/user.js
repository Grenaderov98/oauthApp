class User {
  email;

  password;

  isActivated;

  activationLink;

  constructor({email, password, isActivated, activationLink}) {
    this.email = email;
    this.password = password;
    this.isActivated = isActivated;
    this.activationLink = activationLink;
  }

  async createNewUser() {
    return new User({
      email,
      password,
      isActivated,
      activationLink
    })
  }
}

module.exports = {User};