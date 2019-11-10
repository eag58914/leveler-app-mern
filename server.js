const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

require('dotenv').config();
require('./config/database');
const app = express();

var apiRouter = require('./routes/api/post_api');
var userRouter = require('./routes/api/users');
var chatRoomRouter = require('./routes/api/chat_api');
// var imageRouter = require('./routes/api/images_uploader');

app.use(cors());
app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//api routes
app.use('/api', apiRouter);
app.use('/join', chatRoomRouter);

//app.use('/api/images', imageRouter);

app.use('/api/users', userRouter);

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
const socketPort = process.env.PORT || 5000;

app.listen(port, function() {
	console.log(`Express app running on port ${port}`);
});

//socket connection
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
	console.log('We have a new connection!');

	socket.on('disconnect', () => {
		console.log('User has left :(');
	});
});

server.listen(socketPort, () =>
	console.log(`socket.io app running on port ${port}
	`)
);
