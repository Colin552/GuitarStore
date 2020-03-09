const express = require('express');
const router = express.Router();
const checkAuthAdmin = require('../middleware/check-admin');

const ProductsController = require('../controllers/products');

/* get all products. */
router.get('/', ProductsController.getAll);

/* send productId and return a single product */
router.get('/:id', ProductsController.getByID);

/* send a categoryId and get all products in a specific category */
router.get('/category/:id', ProductsController.getByCategoryID);

/* Create a product. */
router.post('/', checkAuthAdmin, ProductsController.createProduct);

/*Delete a product. */
router.delete('/:id', checkAuthAdmin, ProductsController.deleteProduct);

/* Update a product. */
router.patch('/:id', function (req, res, next) {
    res.send('Update a product');
});
module.exports = router;
