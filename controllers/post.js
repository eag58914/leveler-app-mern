const Post = require('../models/post');

module.exports = {
	createPost,
	getAllPosts,
	deletePost,
	showPost,
	addComment,
	update
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

async function deletePost(req, res) {
	const deletedPost = await Post.findByIdAndRemove(req.params.id);

	res.status(200).json(deletedPost);
}
async function showPost(req, res) {
	const post = await Post.findById(req.params.id);
	res.status(201).json(post);
}
async function addComment(req, res) {
	const post = await Post.findById(req.body.id);
	const newComment = await post.comments.push(req.body);
	post.save();
	res.status(201).json(newComment);
}

async function update(req, res) {
	const updatedPosts = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.status(200).json(updatedPosts);
}

//need to  figure  out edit functionality
// function edit(req,res){
//     Post.findByIdAndUpdate(req.params.id).then(post=>{
//         res.status(200).json(post)
//     }).catch(error =>res.status(500).json(error.message))
// }
