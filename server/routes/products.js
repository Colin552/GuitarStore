var express = require('express');
var router = express.Router();
var client = require('../client.js');
var path = require('path');
var fs = require('fs')
/* get all products. */
router.get('/', function (req, res, next) {

    let queryString =   "SELECT product.product_name, product.price, brand.brand_name \
                        FROM product INNER JOIN brand ON product.brand_id=brand.id"

    client.query(queryString,
        (err, products) => {
            if (err) {
                console.log(err.stack);
            }
            else {
                res.send(products.rows);
            }
        })
});

/* send productId and return a single product */
router.get('/:id', function (req, res, next) {
    let value = [req.params.id];
    let queryString =   "SELECT product.product_name, product.price, brand.brand_name \
                        FROM product INNER JOIN brand ON product.brand_id=brand.id \
                        WHERE product.id = $1";
    
    client.query(queryString, value,
        (err, products) => {
            if (err) {
                console.log(err.stack);
            }
            else {
                res.send(products.rows);
            }
        })
        
});

/* send a categoryId and get all products in a specific category */
router.get('/category/:id', function (req, res, next) {
    let value = [req.params.id];
    let queryString =   "SELECT product_category.product_id, product.product_name, product.price, brand.brand_name \
                        FROM product_category \
                        INNER JOIN product \
                        ON product_category.product_id=product.id \
                        INNER JOIN brand \
                        ON product.brand_id=brand.id \
                        WHERE category_id = $1"
    
    client.query(queryString, value,
        (err, products) => {
            if (err) {
                console.log(err.stack);
            }
            else {
                //res.send(products.rows);
                var tempProducts = products.rows;
                var productObjects = [];
                
                

                for(i = 0; i < tempProducts.length; i++){ 
                    //console.log(tempProducts[i].id);
                    let filePath = path.join(__dirname, '../../images/' + tempProducts[i].product_id + '/' + 'profile' + '.png');
                    let base64Image;

                    try {
                        base64Image = fs.readFileSync(filePath, 'base64');
                    }
                    catch(error){
                        console.error(error)
                    }
                    
                    let productObj = {product_name: tempProducts[i].product_name, price: tempProducts[i].price, brand_name: tempProducts[i].brand_name, image: base64Image}
                    productObjects.push(productObj)
                }

                res.send(productObjects);
            }
        })
        
});

/* Create a product. */
router.post('/', function (req, res, next) {
    res.send('Create product');
});

/* Update a product. */
router.patch('/:id', function (req, res, next) {
    res.send('Update a product');
});

/*Delete a product. */
router.delete('/:id', function (req, res, next) {
    res.send('Delete a product');
});

module.exports = router;
