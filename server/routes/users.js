const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth')
const checkAuthAdmin = require('../middleware/check-admin');

/* Get users listing. */
router.get('/', checkAuthAdmin, UsersController.getAll);

/* Get user by ID. */
router.get('/:userId', checkAuthAdmin, UsersController.getById);

/* Get user by email. */
router.get('/email/:email', checkAuthAdmin, UsersController.getByEmail);

/* Create a new user. */
router.post('/signup', UsersController.signup);

/* User Login */
router.post('/login', UsersController.login);

/* Delete a user. */
router.delete('/:email', checkAuthAdmin, UsersController.delete);

/* Update a user. */
router.patch('/', function (req, res, next) {
  res.send('Update user');
});



module.exports = router;