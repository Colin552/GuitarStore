const express = require('express');
const router = express.Router();
var client = require('../client.js');
const UsersController = require('../controllers/users');
const checkAuth = require('../middleware/check-auth')
const checkAuthAdmin = require('../middleware/check-admin');

/* Get users listing. */
router.get('/', checkAuthAdmin, UsersController.getAll);

/* Get user by ID. */
router.get('/:userId', checkAuthAdmin, UsersController.getById);

/* Get user by email. */
router.get('/email/:email', checkAuthAdmin, UsersController.getByEmail);

/* Create a new user. */
router.post('/signup', UsersController.signup);

/* User Login */
router.post('/login', UsersController.login);

/* Delete a user. */
router.delete('/:email', checkAuthAdmin, UsersController.delete);

/* Update a user. */
router.patch('/', function (req, res, next) {
  //console.log(req.body)
  let values = [req.body.id, req.body.first_name, req.body.last_name, req.body.address, req.body.apartment, req.body.city, req.body.province, req.body.country, req.body.postal]
  let queryString = "UPDATE user_account SET \
                    first_name = $2, last_name = $3, address = $4, apartment = $5, city = $6, province = $7, country = $8, postal = $9\
                    WHERE id = $1"
  console.log(values)
  client.query(queryString, values,
    (err) => {
      if (err) {
        console.log(err.stack);
      }
      else {
        res.status(200).send(`Update Successful`)
      }
    })
});



module.exports = router;