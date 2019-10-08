import React from 'react';
import PostForm from '../../components/PostForm/PostForm';

function AddPage(props) {
	return <PostForm handleAddPost={props.handleAddPost} />;
}

export default AddPage;
