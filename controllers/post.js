const Post = require('../models/post');

module.exports = {
	createPost
};

function createPost(req, res) {
	Post.create(req.body)
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((error) => res.status(500).json(error.message));
}
