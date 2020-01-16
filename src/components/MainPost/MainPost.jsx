import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPost.module.css';

import { Link } from 'react-router-dom';

const MainPost = ({ content, id, handleDeletePost, votes, comments, client, handleId }) => {
	const allComments = comments.map((comment) => {
		return <p className={styles.Comments}>{comment.content}</p>;
	});
	return (
		<div>
			<li className={styles.MainPost}>
				<h4>Title:</h4>
				<h3>Post:</h3>
				<p className={styles.Content}>{content}</p>
				<div className={styles.VotingSystem}>
					<input className={styles.UpVote} type="image" src="images/upvote-icon-17.jpg" alt="" />
					<p>{votes}</p>
					<input className={styles.DownVote} type="image" src="images/upvote-icon-17.jpg" alt="" />
				</div>
				{client ? (
					<Link to="/add_comment">
						<button className="btn btn-outline-primary" onClick={() => handleId(id)}>
							add comment
						</button>
					</Link>
				) : null}

				{client ? (
					<button onClick={() => handleDeletePost(id)} className="btn btn-outline-danger">
						X
					</button>
				) : null}
				<div className={styles.CommentSection}>
					<h6>Comments:</h6>
					<div>{allComments}</div>
				</div>
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
