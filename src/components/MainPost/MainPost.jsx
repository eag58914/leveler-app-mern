import React from 'react';
import PropTypes from 'prop-types';

const MainPost = ({ content, user, id, handleDeletePost, votes, comments }) => {
	console.log(votes, content, user, handleDeletePost);
	return (
		<li key={id}>
			<p>{user}</p>
			<p>{content}</p>
			<button>upvote</button>
			<p>{votes}</p>
			<button>downvote</button>
			<h6>Comments</h6>
			<p>{comments}test</p>
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
	votes: PropTypes.number,
	comments: PropTypes.string
};
