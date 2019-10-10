import React from 'react';
import MainPost from '../../components/MainPost/MainPost';

function PostPageList(props) {
	return (
		<div>
			<h3 align="center">All Posts</h3>
			<div align="center">
				{props.posts.map((item, index) => (
					<MainPost
						key={item._id}
						user={item.author}
						content={item.post}
						id={item._id}
						votes={item.votes}
						comments={item.comments}
						handleDeletePost={props.handleDeletePost}
						client={props.user}
					/>
				))}
			</div>
		</div>
	);
}

export default PostPageList;
