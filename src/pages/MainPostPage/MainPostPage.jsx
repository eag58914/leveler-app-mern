import React from 'react';
import MainPost from '../../components/MainPost/MainPost';


function PostPageList(props) {
	return (
		<div>
			<h1>
				All Posts
			</h1>
			<div>
				{props.posts.map((item, index) => (
					<MainPost
						key={item._id}
						content={item.post}
						id={item._id}
						votes={item.votes}
						comments={item.comments}
						handleDeletePost={props.handleDeletePost}
						handleId={props.handleId}
						client={props.user}
					/>
				))}
			</div>
		</div>
	);
}

export default PostPageList;
