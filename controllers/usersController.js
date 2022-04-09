const usersService = require('../service/userService');

module.exports = {
  registration: async(req, res, next) => {
    console.log(next);
    try {
      const {email, password} = req.body;
      const userData = await usersService.registration(email, password);

      return res.json(userData);
    } catch(err) {
      next(err);
    }
  },

  login: async(req, res, next) => {
    try {

    } catch(err) {
      next(err);
    }
  },

  logout: async(req, res, next) => {
    try {

    } catch(err) {
      next(err);
    }
  },

  activate: async(req, res, next) => {
    try {

    } catch(err) {
      next(err);
    }
  },

  refresh: async(req, res, next) => {
    try {

    } catch(err) {
      next(err);
    }
  },

  getUsers: async(req, res, next) => {
    try {

    } catch(err) {
      next(err);
    }
  }
};