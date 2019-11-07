const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema(
	{ content: String },
	{ vote: Number },
	{
		timestamps: true
	}
);

var PostSchema = new Schema({
	author: { type: String },
	category: { type: String },
	post: { type: String },
	votes: { type: Number },
	comments: [ commentSchema ]
});

module.exports = mongoose.model('Blog', PostSchema);
