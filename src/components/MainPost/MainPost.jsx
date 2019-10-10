import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainPost.module.css';
import Comments from '../Comments/Comments';
import { Link } from 'react-router-dom';

const MainPost = ({ content, user, id, handleDeletePost, votes, comments, client }) => {
	console.log(votes, content, user, handleDeletePost);
	return (
		<div className="card col-sm-8" align="center">
			<div className="card-body " align="center">
				<li className={styles.MainPost}>
					<h4>Title:</h4>
					<p>{user}</p>
					<h3>Post:</h3>
					<p>{content}</p>
					<div className={styles.ButtonLayout}>
						<button>upvote</button>
						<p>{votes}</p>
						<button>downvote</button>
						<Link to="/add_comment">
							<button class="btn btn-outline-primary">add comment</button>
						</Link>
						{client ? (
							<button onClick={() => handleDeletePost(id)} class="btn btn-outline-danger">
								X
							</button>
						) : null}
					</div>
					<h6>Comments</h6>
					<Comments comments={comments} />
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
	client: PropTypes.string
};
