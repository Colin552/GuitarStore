var express = require('express');
var router = express.Router();
var client = require('../client.js');

router.get('/', function (req, res, next) {
    res.send('Return all user orders');
});

router.get('/:id', function (req, res, next) {
    res.send('Return a user order by id');
});

router.get('/user/:id', function (req, res, next) {
    res.send('Return all orders from a user');
});

router.get('/user/email/:email', function (req, res, next) {
    res.send('Return all orders from a user');
});

router.post('/', function (req, res, next) {
    res.send('Create a user order');
});

router.patch('/:id', function (req, res, next) {
    res.send('Update a user order');
});

router.delete('/:id', function (req, res, next) {
    res.send('Delete a user order');
});

module.exports = router;