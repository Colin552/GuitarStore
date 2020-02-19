var express = require('express');
var router = express.Router();
var client = require('../client.js');
var path = require('path');

/* get all products. */
router.get('/', function (req, res, next) {
    let queryString = "SELECT product.product_name, product.price, brand.brand_name \
                        FROM product INNER JOIN brand ON product.brand_id=brand.id"


    var products;
    client.query(queryString,
        (err, TempProducts) => {
            if (err) {
                console.log(err.stack);
            }
            else {
                //res.send(TempProducts.rows);
                products = TempProducts.rows;
                res.send(products);
            }
        })


    //res.sendFile(path.join(__dirname, '../../images/test', 'stratocaster.jpg'));
});

router.post('/', function (req, res, next) {
    console.log(req.body);
    res.send('Recieved');
});


module.exports = router;