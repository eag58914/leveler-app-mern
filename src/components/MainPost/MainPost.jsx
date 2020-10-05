import React from 'react';
import PropTypes from 'prop-types';


import { Link } from 'react-router-dom';

const MainPost = ({ content, id, handleDeletePost, votes, comments, client, handleId }) => {
	const allComments = comments.map((comment) => {
		return <p>{comment.content}</p>;
	});
	return (
		<div>
			<li>
				{client ? (
					<div onClick={() => handleDeletePost(id)}>
						X
					</div>
				) : null}
				<div>
					<div alt="" />
					<div>{votes}</div>
					<div alt="" />
				</div>
				<h4>Title:</h4>
				<h3>Post:</h3>
				<p>{content}</p>

				<div>
					{client ? (
						<Link to="/add_comment">
							<div onClick={() => handleId(id)}>
								add comment
							</div>
						</Link>
					) : null}
				</div>
				<h6>Comments:</h6>
				<div>{allComments}</div>
			</li>
		</div>
	);
};

export default MainPost;

MainPost.propTypes = {
	user: PropTypes.string,
	content: PropTypes.string,
	id: PropTypes.number,
	handleDelete: PropTypes.func,
	votes: PropTypes.number,
	comments: PropTypes.string,
	client: PropTypes.string,
	handleId: PropTypes.func
};
