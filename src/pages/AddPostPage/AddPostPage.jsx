import React from 'react';
import PostForm from '../../components/PostForm/PostForm';
import styles from './AddPostPage.module.css';

function AddPage(props) {
	return (
		<div className={styles.background}>
			<h2> Create Post</h2>
			<PostForm handleAddPost={props.handleAddPost} />
		</div>
	);
}

export default AddPage;
