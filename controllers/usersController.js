const usersService = require('../service/userService');

module.exports = {
  registration: async(req, res, next) => {
    try {
      const {email, password} = req.body;
      const userData = await usersService.registration(email, password);

      return res.json(userData);
    } catch(err) {
      console.log(err);
    }
  },

  login: async(req, res, next) => {

  },

  logout: async(req, res, next) => {

  },

  activate: async(req, res, next) => {

  },

  refresh: async(req, res, next) => {

  },

  getUsers: async(req, res, next) => {

  }
};