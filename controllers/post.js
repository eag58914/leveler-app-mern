const Post = require('../models/post');

module.exports = {
	createPost,
	getAllPosts,
	deletePost
};

function createPost(req, res) {
	Post.create(req.body)
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((error) => res.status(500).json(error.message));
}

function getAllPosts(req, res) {
	Post.find({})
		.then((posts) => {
			res.status(201).json(posts);
		})
		.catch((error) => res.status(500).json(error.message));
}

function deletePost(req, res) {
	console.log(req.params.id);
	Post.findByIdAndRemove(req.params.id)
		.then((post) => {
			res.status(200).json(post);
		})
		.catch((error) => res.status(500).json(error.message));
}

//need to  figure  out eidt functionality
// function edit(req,res){
//     Post.findByIdAndUpdate(req.params.id).then(post=>{
//         res.status(200).json(post)
//     }).catch(error =>res.status(500).json(error.message))
// }
