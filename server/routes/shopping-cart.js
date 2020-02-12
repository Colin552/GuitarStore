var express = require('express');
var router = express.Router();
var client = require('../client.js');

router.get('/user/:id', function (req, res, next) {
    res.send('Return all shopping cart items from a user');
});

router.post('/', function (req, res, next) {
    res.send('Add a product to a users shopping cart');
});

router.delete('/', function (req, res, next) {
    res.send('Remove a product from a users shopping cart');
});

module.exports = router;