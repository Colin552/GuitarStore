var express = require('express');
var router = express.Router();
var client = require('../client.js');
var uuid = require('uuid');

router.get('/user/:id', function (req, res, next) {
    let value = [req.params.id];
    let queryString = "SELECT * from cart_product \
                        WHERE user_id = $1";
  
    client.query(queryString, value,
      (err, users) => {
        if (err) {
          console.log(err.stack);
        }
        else {
          res.send(users.rows);
        }
      });
});

router.post('/', function (req, res, next) {
    let values = [uuid.v4(), req.body.product_id, req.body.regular_price, req.body.new_price, req.body.start_date, req.body.end_date];
    let queryString = "INSERT INTO cart_product(user_id, product_id, quantity) \
                       VALUES ($1, $2, $3);"

    client.query(queryString, values,
        (err, result) => {
            if (err) {
                console.log(err.stack);
            }
            else {
                res.send(result.rows);
            }
        });
});

router.delete('/:user_id/:product_id', function (req, res, next) {
    let value = [req.params.id];
    let queryString = "DELETE FROM cart_product \
                        WHERE user_id = $1 AND product_id = $2";
  
    client.query(queryString, value,
      (err) => {
        if (err) {
          console.log(err.stack);
        }
        else {
          res.status(200).send(`Sale deleted with id: ${value}`)
        }
      })
});

module.exports = router;