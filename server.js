const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const app = require('express')();

require('dotenv').config();
require('./config/database');

var apiRouter = require('./routes/api/post_api');
var userRouter = require('./routes/api/users');


app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'localhost:3000');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//api routes
app.use('/api', apiRouter);
app.use('/api/users', userRouter);

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = process.env.PORT || 3001;

app.listen(port, function() {
	console.log(`Express app running on port ${port}`);
});


