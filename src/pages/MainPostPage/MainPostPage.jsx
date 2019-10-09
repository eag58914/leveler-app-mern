import React from 'react';
import MainPost from '../../components/MainPost/MainPost';

function PostPageList(props) {
	return (
		<div>
			<h1>All Posts</h1>
			<div>
				{props.posts.map((item, index) => (
					<MainPost
						key={index}
						user={item.author}
						content={item.post}
						id={index}
						votes={item.votes}
						comments={item.comments}
						handleDeletePost={props.handleDeletePost}
					/>
				))}
			</div>
		</div>
	);
}

export default PostPageList;
