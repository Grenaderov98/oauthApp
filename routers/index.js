const Router = require('express').Router;
const {body} = require('express-validator');
const {
  getUsers,
  registration,
  login,
  logout,
  activate,
  refresh
} = require('../controllers/usersController');

const router = new Router();

router.post(
  '/registration',
  body('email').isEmail(),
  body('password').isLength({min:3, max: 32}),
  registration
);
router.post('/login', login);
router.post('/logout', logout);
router.get('/activate/:link', activate);
router.get('/refresh'), refresh;
router.get('/users', getUsers);

module.exports = router;