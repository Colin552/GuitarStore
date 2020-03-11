const client = require('../client.js');
const path = require('path');
const uuid = require('uuid');
const fs = require('fs');
/*Returns all products*/
exports.getAll = (req, res, next) => {
    let queryString = "SELECT product.product_name, product.price, brand.brand_name \
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
}

exports.getByID = (req, res, next) => {
    let value = [req.params.id];
    let queryString = "SELECT product.product_name, product.price, brand.brand_name \
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
}

exports.getByCategoryID = (req, res, next) => {
    let value = [req.params.id];
    let queryString = "SELECT product_category.product_id, product.product_name, product.listed, product.price, brand.brand_name \
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

                    let productObj = { id: tempProducts[i].product_id, product_name: tempProducts[i].product_name, price: tempProducts[i].price, listed: tempProducts[i].listed, brand_name: tempProducts[i].brand_name, image: base64Image }
                    productObjects.push(productObj)
                }

                res.send(productObjects);
            }
        })
}

exports.createProduct = (req, res, next) => {
    let values = [uuid.v4(), req.body.name, req.body.price, req.body.brandId, req.body.listed, req.body.description];

    let queryString = "INSERT INTO product(id, product_name, price, brand_id, listed, description) \
                       VALUES ($1, $2, $3, $4, $5, $6);"

    client.query(queryString, values,
        (err) => {
            if (err) {
                console.log(err.stack);
                return res.status(500).json({
                    message: 'Entry Failed'
                })
            }
            else {
                res.status(200).send("Product Entered");
            }
        })
}

exports.deleteProduct = (req, res, next) => {
    let value = [req.params.id];
    let queryString = "DELETE FROM product \
                        WHERE id = $1";

    client.query(queryString, value,
        (err) => {
            if (err) {
                console.log(err.stack);
                return res.status(500).json({
                    message: 'Delete Failed'
                })
            }
            else {
                res.status(200).send(`Product deleted with id: ${value}`)
            }
        })
}