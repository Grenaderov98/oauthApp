class User {
  id;
  
  email;

  password;

  isActivated;

  activationLink;

  constructor({id, email, password, isActivated = true, activationLink}) {
    this.id = id;
    this.email = email;
    this.password = password;
    //todo set default false value with activation link
    this.isActivated = isActivated;
    this.activationLink = activationLink;
  }
}

module.exports = User;