const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://leveler:Albatross1894@cluster0-jli2d.mongodb.net/myapp?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('connected', () => {
	console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

//'mongodb://localhost:27017/levler'
