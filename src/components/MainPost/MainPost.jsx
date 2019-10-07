import React from 'react';
import PropTypes from 'prop-types';

const MainPost = ({ content, user, id }) => {
	return (
		<li key={id} className="post">
			<p>{content}</p>
			<p>{user}</p>
		</li>
	);
};

export default MainPost;

MainPost.propTypes = {
	user: PropTypes.string,
	content: PropTypes.string,
	id: PropTypes.number
};
