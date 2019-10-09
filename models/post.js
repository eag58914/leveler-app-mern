const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema(
	{ content: String },
	{
		timestamps: true
	}
);

var PostSchema = new Schema({
	author: { type: String },
	post: { type: String },
	votes: { type: Number },
	comments: [ commentSchema ]
});

module.exports = mongoose.model('Blog', PostSchema);
