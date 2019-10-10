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
					<p>{user}</p>
					<p>{content}</p>
					<button>upvote</button>
					<p>{votes}</p>
					<button>downvote</button>
					<h6>Comments</h6>
					<Comments comments={comments} />
					<Link to="/add_comments" />Add Comments
					{client ? (
						<button onClick={() => handleDeletePost(id)} className="button">
							Deletes
						</button>
					) : null}
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
