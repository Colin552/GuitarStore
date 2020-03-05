var express = require('express');
var router = express.Router();
var client = require('../client.js');

var uuid = require('uuid');
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
  let value = [req.params.userId];
  let queryString = "SELECT * from user_account \
                      WHERE id = $1";

  console.log('fired')

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
  let value = [req.params.email];
  let queryString = "SELECT * from user_account \
                      WHERE email = $1";

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

/* Create a new user. */
router.post('/', function (req, res, next) {


  let values = [uuid.v4(), req.body.first_name, req.body.last_name, req.body.password, req.body.user_type, req.body.email, req.body.billing_address, req.body.shipping_address];

  let queryString = "INSERT INTO user_account(id, first_name, last_name, password, user_type, email, billing_address, shipping_address) \
                     VALUES ($1, $2, $3, $4, $5, $6, $7, $8);"

  client.query(queryString, values,
    (err, users) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        res.send(users.rows);
      }
    })

});

/* Update a user. */
router.patch('/', function (req, res, next) {
  res.send('Update user');
});

/* Delete a user. */
router.delete('/:email', function (req, res, next) {
  let value = [req.params.email];
  let queryString = "DELETE FROM user_account \
                      WHERE email = $1";

  client.query(queryString, value,
    (err) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        res.status(200).send(`User deleted with email: ${value}`)
      }
    })
});

module.exports = router;