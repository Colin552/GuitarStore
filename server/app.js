require('dotenv/config');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var productsRouter = require('./routes/products')
var usersRouter = require('./routes/users');
var salesRouter = require('./routes/sales');
var shoppingCartRouter = require('./routes/shopping-cart');
var userOrderRouter = require('./routes/user-orders');
var client = require('./client');

client.connect();

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/sales', salesRouter);
app.use('/shopping-cart', shoppingCartRouter);
app.use('/user-order', userOrderRouter);

app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;
