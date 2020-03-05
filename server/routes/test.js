var express = require('express');
var router = express.Router();
var client = require('../client.js');
var path = require('path');
var fs = require('fs')
//const readFile = util.promisify(fs.readFile);

/* get all products. */
router.get('/', function (req, res, next) {
    
});

router.post('/', function (req, res, next) {

    let products = [];

    for(i = 0; i < req.body.length; i++){ 
        let filePath = path.join(__dirname, '../../images/' + req.body[i] + '/' + 'profile' + '.png');
        let base64Image = fs.readFileSync(filePath, 'base64');
        let productObj = {id: req.body[i], base64Image};
        products.push(productObj);
    }

    res.send(products);
});


module.exports = router;