var express = require('express');
var router = express.Router();
var client = require('../client.js');
var uuid = require('uuid');
const fs = require('fs');
const path = require('path');

router.get('/user/:id', function (req, res, next) {
  let value = [req.params.id];
  let queryString = "SELECT product.product_name, product.price, product.description, cart_product.product_id, cart_product.quantity, brand.brand_name \
                        FROM cart_product \
                        INNER JOIN product ON product.id=cart_product.product_id \
                        INNER JOIN brand ON product.brand_id = brand.id \
                        WHERE user_id = $1"

  client.query(queryString, value,
    (err, products) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        //res.send(products.rows);
        var tempProducts = products.rows;
        var productObjects = [];

        for (i = 0; i < tempProducts.length; i++) {
          //console.log(tempProducts[i].id);
          let base64Image;

          try {
            let filePath = path.join(__dirname, '../../images/' + tempProducts[i].product_id + '/' + 'profile' + '.png');
            base64Image = fs.readFileSync(filePath, 'base64');
          }
          catch (error) {
            console.error(error)
          }

          let productObj = { id: tempProducts[i].product_id, quantity: tempProducts[i].quantity, product_name: tempProducts[i].product_name, price: tempProducts[i].price, listed: tempProducts[i].listed, brand_name: tempProducts[i].brand_name, image: base64Image }
          productObjects.push(productObj)
        }

        res.send(productObjects);
      }
    });
});

router.patch('/update', function (req, res, next) {
  
  let values = [req.body.product_id, req.body.user_id, parseInt(req.body.quantity) ]
  console.log(values)
  let queryString = "UPDATE cart_product SET quantity = $3\
                        WHERE user_id = $2 AND product_id = $1"
  client.query(queryString, values,
    (err, result) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        res.status(200).send("Cart Updated");
      }
    });
})

router.post('/', function (req, res, next) {
  let values = [req.body.user_id, req.body.product_id, req.body.quantity];
  console.log(values)
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

router.delete('/delete', function (req, res, next) {
  let values = [req.body.user_id, req.body.product_id];
  let queryString = "DELETE FROM cart_product \
                        WHERE user_id = $1 AND product_id = $2";
  console.log('hit')

  client.query(queryString, values,
    (err) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        res.status(200).send(`Deleted`)
      }
    })
});



module.exports = router;