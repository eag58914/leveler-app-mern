import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPost.module.css';

import { Link } from 'react-router-dom';

const MainPost = ({ content, user, id, handleDeletePost, votes, comments, client, handleId }) => {
	const allComments = comments.map((comment) => {
		return <p className={styles.Comments}>{comment.content}</p>;
	});
	return (
		<div className="card col-sm-8" align="center">
			<div className="card-body " align="center">
				<li className={styles.MainPost}>
					<h4>Title:</h4>
					<p>{user}</p>
					<h3>Post:</h3>
					<p className={styles.Content}>{content}</p>
					<div className={styles.ButtonLayout}>
						<input className={styles.UpVote} type="image" src="images/upvote-icon-17.jpg" alt="" />
						<p>{votes}</p>
						<input className={styles.DownVote} type="image" src="images/upvote-icon-17.jpg" alt="" />
						<Link to="/add_comment">
							<button className="btn btn-outline-primary" onClick={() => handleId(id)}>
								add comment
							</button>
						</Link>
						{client ? (
							<button onClick={() => handleDeletePost(id)} class="btn btn-outline-danger">
								X
							</button>
						) : null}
					</div>
					<h6>Comments:</h6>
					<div>{allComments}</div>
				</li>
			</div>
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
