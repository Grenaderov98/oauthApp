const Router = require('express').Router;
const {
  getUsers,
  registration,
  login,
  logout,
  activate,
  refresh
} = require('../controllers/usersController');

const router = new Router();

router.post('/registration', registration);
router.post('/login', login);
router.post('/logout', logout);
router.get('/activate/:link', activate);
router.get('/refresh'), refresh;
router.get('/users', getUsers);

module.exports = router;