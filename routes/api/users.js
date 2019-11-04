const express = require('../../node_modules/express/node_modules');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/* Protected Routes */
module.exports = router;
