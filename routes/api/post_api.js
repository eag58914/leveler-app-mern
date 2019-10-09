var express = require('express');
var router = express.Router();
var postCtrl = require('../../controllers/post');

//routes for adding and showing posts/possbily renaming later
router.get('/', postCtrl.getAllPosts);
router.post('/', postCtrl.createPost);
router.get('/:id', postCtrl.showPost);
router.delete('/:id', postCtrl.deletePost);

module.exports = router;
