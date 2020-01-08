var express = require('express');
var router = express.Router();

/* Get all products. */
router.get('/', function (req, res, next) {
    res.send('All Products');
});

/* Get product by id. */
router.get('/:id', function (req, res, next) {
    res.send('Get product by id');
});

/* Create a product. */
router.post('/', function (req, res, next) {
    res.send('Create product');
});

/* Update a user. */
router.patch('/', function (req, res, next) {
    res.send('Update a product');
});

module.exports = router;
