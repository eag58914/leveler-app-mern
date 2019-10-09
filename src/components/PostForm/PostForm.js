import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PostForm.module.css';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			author: '',
			post: '',
			votes: 1,
			isShowing: true
		};
		this.handleShowForm = this.handleShowForm.bind(this);
	}
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

	handleShowForm() {
		this.setState((state) => ({
			isShowing: !state.isShowing
		}));
	}

	render() {
		return (
			<div>
				<form className="post-form" onSubmit={this.handleSubmit}>
					<div>
						<label>Title</label>
						<input type="text" name="title" onChange={this.handleOnChange} value={this.state.author} />
					</div>
					<div>
						<label>Post</label>
						<input type="text" name="post" onChange={this.handleOnChange} value={this.state.post} />
					</div>
					<input type="submit" />
				</form>

				<Link to="/">Home</Link>
			</div>
		);
	}
}

export default PostForm;

PostForm.propTypes = {
	handleToggle: PropTypes.func,
	handleAddPost: PropTypes.func
};
