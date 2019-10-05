const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/levler', { useNewUrlParser: true });

const db = mongoose.connection;

db.once('connected', () => {
	console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});
