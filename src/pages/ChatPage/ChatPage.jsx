import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
const ChatPage = ({ location }) => {
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');
	const ENDPOINT = 'localhost:5000';
	useEffect(
		() => {
			const data = queryString.parse(location.search);

			socket = io(ENDPOINT);

			setName(name);
			setRoom(room);
			socket.emit('join', { name, room }, () => {});
			return () => {
				socket.emit('disconnect');
				socket.off();
			};
		},
		[ ENDPOINT, location.search ]
	);
	return <h1>Chat</h1>;
};
export default ChatPage;

//need to figure out how to pass user name to the room and not have users type it in

//Okay, so the server are running and there is request to the socker server to the front end, however, it is being denied due to cors
