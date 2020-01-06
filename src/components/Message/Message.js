import React from 'react';
import ReactEmoji from 'react-emoji';
import './Message.css';

const Message = ({ message: { user, text }, names }) => {
	let isSentbyCurrentUser = false;

	const trimmedName = names.trim().toLowerCase();
	if (user === trimmedName) {
		isSentbyCurrentUser = true;
	}
	return isSentbyCurrentUser ? (
		<div className="messageContainer justifyEnd">
			<p className="sentText pr-10">{trimmedName}</p>
			<div className="messageBox backgroundBlue">
				<p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
			</div>
		</div>
	) : (
		<div className="messageContainer justifyStart">
			<div className="messageBox backgroundLight ">
				<p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
			</div>
			<p className="sentText pl-10">{user}</p>
		</div>
	);
};

export default Message;
