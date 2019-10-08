import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
	state = {
		author: '',
		post: '',
		votes: 1,
		isShowing: true
	};

	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		// console.log(this.state);
		this.props.handleAddPost(this.state);
		this.setState({
			author: '',
			post: '',
			votes: 1
		});
	};

	render() {
		return (
			<form className="post-form" onSubmit={this.handleSubmit}>
				<div>
					<label>Author</label>
					<input type="text" name="author" onChange={this.handleOnChange} value={this.state.author} />
				</div>
				<div>
					<label>Post</label>
					<input type="text" name="post" onChange={this.handleOnChange} value={this.state.post} />
				</div>
				<button className="button-primary" onClick={this.props.handleToggle}>
					close
				</button>
				<input type="submit" />
			</form>
		);
	}
}

export default PostForm;

PostForm.propTypes = {
	handleToggle: PropTypes.func,
	handleAddPost: PropTypes.func
};
