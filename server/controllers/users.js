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
                res.send(users.rows[0]);
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
                            const tempUser = {
                                id: uuid.v4(),
                                first_name: req.body.firstName,
                                last_name: req.body.lastName,
                                password: hash,
                                user_type: "C",
                                email: req.body.email,
                            }

                            let values = [tempUser.id, tempUser.first_name, tempUser.last_name, tempUser.password, tempUser.user_type, tempUser.email];

                            let queryString = "INSERT INTO user_account(id, first_name, last_name, password, user_type, email) \
                                 VALUES ($1, $2, $3, $4, $5, $6);"

                            client.query(queryString, values,
                                (err) => {
                                    if (err) {
                                        console.log(err.stack);
                                        return res.status(500).json({
                                            error: err
                                        })
                                    }
                                    else {
                                        token = jwt.sign({
                                            email: tempUser.email,
                                            id: tempUser.id
                                        },
                                            process.env.JWT_KEY,
                                            {
                                                expiresIn: "1h"
                                            }
                                        )
                                        let user;
                                        return res.status(200).json({
                                            message: 'Authentication successful',
                                            user: { id:tempUser.id, firstName: tempUser.first_name, lastName: tempUser.last_name, userType: tempUser.user_type, token }

                                        })
                                    }
                                })
                        }
                    });
                }

            }
        })

}

exports.login = (req, res, next) => {
    console.log()
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
                            console.log(err)
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
                                user: { id:users.rows[0].id, firstName: users.rows[0].first_name, lastName: users.rows[0].last_name, userType: users.rows[0].user_type, token: token },
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
