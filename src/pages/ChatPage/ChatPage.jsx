import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './ChatPage.css';
import InfoBar from '../../components/InfoBar/InforBar';

let socket;
const ChatPage = ({ location }) => {
	const [ name, setName ] = useState('');
	const [ room, setRoom ] = useState('');
	const [ messages, setMessages ] = useState([]);
	const [ message, setMessage ] = useState('');
	const ENDPOINT = 'localhost:5000';
	useEffect(
		() => {
			const { name, room } = queryString.parse(location.search);

			socket = io(ENDPOINT);
			console.log(socket);

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
	useEffect(
		() => {
			socket.on('message', (message) => {
				//adding messages to messages array
				setMessages([ ...messages, message ]);
			});
		},
		[ messages ]
	);

	//function for sending messages
	const sendMessage = (e) => {
		e.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	console.log(message, messages);
	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar room={room} />

				{/* <input
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					onKeyPress={(event) => (event.key === 'Enter' ? sendMessage(event) : null)}
				/> */}
			</div>
		</div>
	);
};
export default ChatPage;

//need to figure out how to pass user name to the room and not have users type it in
