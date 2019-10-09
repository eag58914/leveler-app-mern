const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* image schema to uplod to mongodb */

var ImageSchema = new Schema({
	imageName: {
		type: String,
		default: 'none',
		required: true
	},
	imageData: {
		type: String,
		required: true
	}
});

module.exports('Image', ImageSchema);
