const usersService = require('../service/userService');
const {validationResult} = require('express-validator');
const ApiError = require('../extensions/apiError');

module.exports = {
  registration: async(req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const {email, password} = req.body;
      const userData = await usersService.registration(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

      return res.json(userData);
    } catch(err) {
      next(err);
    }
  },

  login: async(req, res, next) => {
    try {
      const {email, password} = req.body;
      const userData = await usersService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});

      return res.json(userData);
    } catch(err) {
      next(err);
    }
  },

  logout: async(req, res, next) => {
    try {
      const {refreshToken} = req.cookies;
      const token = await usersService.logout(refreshToken);
      res.clearCookie('refreshToken'); 

      return res.json(token);
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