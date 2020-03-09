const client = require('../client.js');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAll = (req, res, next) => {
    let queryString = "SELECT * from user_account"
    client.query(queryString,
        (err, users) => {
            if (err) {
                return res.status(500).json({
                    message: 'Lookup Failed'
                })
            }
            else {
                res.send(users.rows);
            }
        })
}

exports.getById = (req, res, next) => {
    let value = [req.params.userId];
    let queryString = "SELECT * from user_account \
                        WHERE id = $1";
    client.query(queryString, value,
        (err, users) => {
            if (err) {
                return res.status(500).json({
                    message: 'Lookup Failed'
                })
            }
            else {
                res.send(users.rows);
            }
        })
}

exports.getByEmail = (req, res, next) => {
    let value = [req.params.email];
    let queryString = "SELECT * from user_account \
                        WHERE email = $1";

    client.query(queryString, value,
        (err, users) => {
            if (err) {
                return res.status(500).json({
                    message: 'Lookup Failed'
                })
            }
            else {
                res.send(users.rows);
            }
        })
}

exports.signup = (req, res, next) => {

    let userEmail = [req.body.email];
    let emailQuery = "SELECT * from user_account \
                  WHERE email = $1";

    client.query(emailQuery, userEmail,
        (err, users) => {
            if (err) {
                console.log(err.stack);
                res.send(err)
            }
            else {
                if (users.rowCount > 0) {
                    return res.status(500).json({
                        error: 'Email already exists'
                    })
                } else {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        if (err) {
                            return res.status(500).json({
                                error: err
                            })
                        } else {
                            const user = {
                                id: uuid.v4(),
                                first_name: req.body.firstName,
                                last_name: req.body.lastName,
                                password: hash,
                                user_type: "C",
                                email: req.body.email,
                                billing_address: req.body.billingAddress,
                                shipping_address: req.body.shippingAddress
                            }

                            let values = [user.id, user.first_name, user.last_name, user.password, user.user_type, user.email, user.billing_address, user.shipping_address];

                            let queryString = "INSERT INTO user_account(id, first_name, last_name, password, user_type, email, billing_address, shipping_address) \
                                 VALUES ($1, $2, $3, $4, $5, $6, $7, $8);"

                            client.query(queryString, values,
                                (err) => {
                                    if (err) {
                                        console.log(err.stack);
                                        return res.status(500).json({
                                            error: err
                                        })
                                    }
                                    else {
                                        res.send('Success, User created');
                                    }
                                })
                        }
                    });
                }

            }
        })

}

exports.login = (req, res, next) => {
    let value = [req.body.email];
    let queryString = "SELECT * from user_account \
                        WHERE email = $1";

    client.query(queryString, value,
        (err, users) => {
            if (err) {
                console.log(err.stack);
                return res.status(500).json({
                    error: err
                })
            }
            else {

                if (users.rowCount < 1) {
                    return res.status(401).json({
                        message: 'Authentication failed'
                    })
                } else {
                    bcrypt.compare(req.body.password, users.rows[0].password, (err, result) => {
                        if (err) {
                            return res.status(401).json({
                                message: 'Authentication failed'
                            })
                        }
                        if (result) {

                            let token;
                            if (users.rows[0].user_type = "A") {
                                token = jwt.sign({
                                    email: users.rows[0].email,
                                    id: users.rows[0].id
                                },
                                    process.env.JWT_KEY_ADMIN,
                                    {
                                        expiresIn: "1h"
                                    }
                                )
                            } else {
                                token = jwt.sign({
                                    email: users.rows[0].email,
                                    id: users.rows[0].id
                                },
                                    process.env.JWT_KEY,
                                    {
                                        expiresIn: "1h"
                                    }
                                )
                            }

                            return res.status(200).json({
                                message: 'Authentication successful',
                                user: { firstName: users.rows[0].first_name, lastName: users.rows[0].last_name, token: token },
                            })
                        }
                        res.status(401).json({
                            message: 'Authentication failed'
                        })
                    })
                }
            }
        })
}

exports.delete = (req, res, next) => {
    let value = [req.params.email];
    let queryString = "DELETE FROM user_account \
                        WHERE email = $1";

    client.query(queryString, value,
        (err) => {
            if (err) {
                console.log(err.stack);
                return res.status(500).json({
                    message: 'Delete Failed'
                })
            }
            else {
                res.status(200).send(`User deleted with email: ${value}`)
            }
        })
}
