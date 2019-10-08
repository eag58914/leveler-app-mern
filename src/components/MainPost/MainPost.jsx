import React from 'react';
import PropTypes from 'prop-types';

const MainPost = ({ content, user, id, handleDelete, votes }) => {
	console.log(votes, content, user);
	return (
		<li key={id} className="post">
			<p>{content}</p>
			<p>{user}</p>
			<p>{votes}</p>
			<button onClick={() => handleDelete(id)}>Delete</button>
		</li>
	);
};

export default MainPost;

MainPost.propTypes = {
	user: PropTypes.string,
	content: PropTypes.string,
	id: PropTypes.number,
	handleDelete: PropTypes.func,
	votes: PropTypes.number
};
