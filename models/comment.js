const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
	comment: { type: String },
	votes: { type: Number }
});

module.exports = mongoose.model('Comment', commentSchema);
