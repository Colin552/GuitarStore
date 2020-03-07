var express = require('express');
var router = express.Router();
var client = require('../client.js');
var uuid = require('uuid');

router.get('/', function (req, res, next) {
    let queryString = "SELECT * FROM sale"
    client.query(queryString,
      (err, sales) => {
        if (err) {
          console.log(err.stack);
        }
        else {
          res.send(sales.rows);
        }
      })
});

router.post('/', function (req, res, next) {
    let values = [uuid.v4(), req.body.product_id, req.body.regular_price, req.body.new_price, req.body.start_date, req.body.end_date];
    let queryString = "INSERT INTO sale(id, product_id, regular_price, new_price, start_date, end_date) \
                       VALUES ($1, $2, $3, $4, $5, $6);"

    client.query(queryString, values,
        (err, result) => {
            if (err) {
                console.log(err.stack);
            }
            else {
                res.send(result.rows);
            }
        })
});

router.delete('/:id', function (req, res, next) {
    let value = [req.params.id];
    let queryString = "DELETE FROM sale \
                        WHERE id = $1";
  
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

router.patch('/:id', function (req, res, next) {
    res.send('Update a sale');
});

module.exports = router;