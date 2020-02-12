var express = require('express');
var router = express.Router();
var client = require('../client.js');

/* Get users listing. */
router.get('/', function (req, res, next) {
  let queryString = "SELECT * from user_account"
  client.query(queryString,
    (err, users) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        res.send(users.rows);
      }
    })
});

/* Get user by ID. */
router.get('/:userId', function (req, res, next) {
  let value = [req.params.id];
  let queryString = "SELECT * from user_account \
                      WHERE product.id = $1";

  client.query(queryString, value,
    (err, users) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        res.send(users.rows);
      }
    })
});

/* Get user by email. */
router.get('/email/:email', function (req, res, next) {
  res.send('Get user by email');
});

/* Create a new user. */
router.post('/', function (req, res, next) {
  res.send('Create user');
});

/* Update a user. */
router.patch('/', function (req, res, next) {
  res.send('Update user');
});

/* Delete a user. */
router.delete('/', function (req, res, next) {
  res.send('Delete user');
});

module.exports = router;