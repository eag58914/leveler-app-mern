var express = require('express');
var router = express.Router;
var postCtrl = require('../../controllers/post');

//routes for adding and showing posts/possbily renaming later
router.post('/post', postCtrl.createPost);

module.exports = router;
