import React from 'react';
import PropTypes from 'prop-types';

const MainPost = ({ content, user, id, handleDeletePost, votes }) => {
	console.log(votes, content, user, handleDeletePost);
	return (
		<li key={id}>
			<p>{content}</p>
			<p>{user}</p>
			<p>{votes}</p>
			{user ? <button onClick={() => handleDeletePost(id)}>Delete</button> : null}
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
