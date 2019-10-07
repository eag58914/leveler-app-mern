const Post = require('../models/post');

module.exports = {
	createPost,
	getAllPosts
};

function createPost(req, res) {
	Post.create(req.body)
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((error) => res.status(500).json(error.message));
}

function getAllPosts(req, res) {
	Post.find({}).then((posts) => ({}.catch((error) => res.status(500).json(error.message))));
}
