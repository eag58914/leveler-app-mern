var express = require('express');
var router = express.Router();
var postCtrl = require('../../controllers/post');

//routes for adding and showing posts/possbily renaming later
router.get('/', postCtrl.getAllPosts);
router.post('/', postCtrl.createPost);
router.get('/:id', postCtrl.showPost);
router.delete('/:id', postCtrl.deletePost);
router.post('/comment', postCtrl.addComment);

//working on updating posts

router.put('/:id', postCtrl.update);

module.exports = router;
