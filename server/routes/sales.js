var express = require('express');
var router = express.Router();
var client = require('../client.js');

router.get('/', function (req, res, next) {
    res.send('Return all products on sale');
});

router.post('/', function (req, res, next) {
    res.send('Create a product sale');
});

router.delete('/:id', function (req, res, next) {
    res.send('Delete a sale');
});

router.patch('/:id', function (req, res, next) {
    res.send('Update a sale');
});

module.exports = router;