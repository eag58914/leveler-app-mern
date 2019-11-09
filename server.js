const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
require('./config/database');
const app = express();

var apiRouter = require('./routes/api/post_api');
var userRouter = require('./routes/api/users');
// var imageRouter = require('./routes/api/images_uploader');

app.use(cors());
app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//api route, hopefully works
app.use('/api', apiRouter);

//app.use('/api/images', imageRouter);

app.use('/api/users', userRouter);

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
	console.log(`Express app running on port ${port}`);
});

console.log('listening on port ', port);
