import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './ChatPage.css';
import InfoBar from '../../components/InfoBar/InforBar';
import Input from '../../components/Input/Input';
import Messages from '../../components/Messages/Messages';

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
			console.log(room);

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
				<Messages messages={messages} name={name} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
		</div>
	);
};
export default ChatPage;

//need to figure out how to pass user name to the room and not have users type it in
