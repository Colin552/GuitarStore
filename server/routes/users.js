var express = require('express');
var router = express.Router();

/* Get users listing. */
router.get('/', function(req, res, next) {
  res.send('Get all users');
});

/* Get user by ID. */
router.get('/:userId', function(req, res, next) {
  res.send('Get user by ID');
});

/* Get user by email. */
router.get('/email/:email', function(req, res, next) {
  res.send('Get user by email');
});

/* Create a new user. */
router.post('/', function(req, res, next){
  res.send('Create user');
});

/* Update a user. */
router.patch('/', function(req, res, next){
  res.send('Update user');
});

/* Update a user. */
router.delete('/', function(req, res, next){
  res.send('Delete user');
});

module.exports = router;