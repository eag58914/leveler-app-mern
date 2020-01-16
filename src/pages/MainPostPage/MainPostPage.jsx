import React from 'react';
import MainPost from '../../components/MainPost/MainPost';
import style from './MainPostPage.module.css';

function PostPageList(props) {
	return (
		<div className={style.main_page_background}>
			<h1 className={style.allposts} align="center">
				All Posts
			</h1>
			<div align="center">
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
