const express = require('../../node_modules/express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);

/*---------- Protected Routes ----------*/

module.exports = router;
