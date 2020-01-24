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
				{client ? (
					<div onClick={() => handleDeletePost(id)} className={styles.deletePost}>
						X
					</div>
				) : null}
				<div className={styles.VotingSystem}>
					<div className={styles.UpVote} alt="" />
					<div>{votes}</div>
					<div className={styles.DownVote} alt="" />
				</div>
				<h4>Title:</h4>
				<h3>Post:</h3>
				<p className={styles.Content}>{content}</p>

				<div className={styles.CommentSection}>
					{client ? (
						<Link to="/add_comment">
							<div className={styles.addComment} onClick={() => handleId(id)}>
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
