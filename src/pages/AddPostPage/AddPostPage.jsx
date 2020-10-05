import React from 'react';
import PostForm from '../../components/PostForm/PostForm';


function AddPage(props) {
	return (
		<div>
			<h2> Create Post</h2>
			<PostForm handleAddPost={props.handleAddPost} />
		</div>
	);
}

export default AddPage;
