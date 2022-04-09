const objectMapper = require('object-mapper');

const mapUserToDto = (user) => objectMapper(user, {
  email: 'email',
  password: 'password',
  isActivated: 'isActivated',
  activationLink: 'activationLink'
});

module.exports = {
  mapUserToDto
}