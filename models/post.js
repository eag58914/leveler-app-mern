const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PostSchema = new Schema({
	author: { type: String },
	post: { type: String },
	votes: { type: Number }
});

module.exports = mongoose.model('Blog', PostSchema);
