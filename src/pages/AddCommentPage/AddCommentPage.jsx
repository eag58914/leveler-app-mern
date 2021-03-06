import React from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';
const AddCommentPage = (props) => {
	return <CommentForm handleAddComment={props.handleAddComment} id={props.id} />;
};

export default AddCommentPage;
