var express = require('express');
var router = express.Router();
var client = require('../client.js');
var uuid = require('uuid');

router.get('/', function (req, res, next) {
    let queryString = "SELECT * from user_order"
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

router.get('/:id', function (req, res, next) {
    let value = [req.params.id];
    let queryString = "SELECT * from user_order \
                        WHERE id = $1";
  
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

router.get('/user/:id', function (req, res, next) {
    let value = [req.params.id];
    let queryString = "SELECT * from user_order \
                        WHERE user_id = $1";
  
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


router.post('/', function (req, res, next) {
    let values = [uuid.v4(), req.body.user_id, ];

});

router.patch('/:id', function (req, res, next) {
    res.send('Update a user order');
});

router.delete('/:id', function (req, res, next) {
    res.send('Delete a user order');
});

module.exports = router;