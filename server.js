const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors');

const socketio = require('socket.io');
const http = require('http');
const app = require('express')();

require('dotenv').config();
require('./config/database');

var apiRouter = require('./routes/api/post_api');
var userRouter = require('./routes/api/users');
var chatRoomRouter = require('./routes/api/chat_api');
const profile = require('./routes/api/profile');

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', 'localhost:5000');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});
app.use(cors());
app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//api routes
app.use('/api', apiRouter);
app.use('/join', chatRoomRouter);
app.use('/api/profile', profile);

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

//socket connection and functions

const { addUser, removeUser, getUser, getUsersInRoom } = require(`./controllers/chat_room_user.js`);
const server = http.createServer(app);
const io = socketio(server);

server.listen(socketPort, () => {
	console.log(`Socketserver is running on ${socketPort}`);
});

io.on('connect', (socket) => {
	socket.on('join', ({ name, room }, callback) => {
		const { error, user } = addUser({ id: socket.id, name, room });

		if (error) return callback(error);

		socket.join(user.room);

		socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.` });
		socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

		io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

		callback();
	});

	socket.on('sendMessage', (message, callback) => {
		const user = getUser(socket.id);

		io.to(user.room).emit('message', { user: user.name, text: message });

		callback();
	});

	socket.on('disconnect', () => {
		const user = removeUser(socket.id);

		if (user) {
			io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
			io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
		}
	});
});
