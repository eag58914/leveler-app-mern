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
	Id:{ type:Number},
	author: { type: String },
	category: { type: String },
	post: { type: String },
	votes: { type: Number },
	status:{type: String},
	comments: [commentSchema ]
});

module.exports = mongoose.model('Blog', PostSchema);
