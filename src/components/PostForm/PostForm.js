import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
				<form className="post-form" align="center" onSubmit={this.handleSubmit}>
					<div>
						<label>Title</label>
						<input
							type="text"
							name="author"
							onChange={this.handleOnChange}
							value={this.state.author}
							className="col-sm-4"
						/>
					</div>
					<div>
						<label>Post</label>
						<input
							type="text"
							name="post"
							onChange={this.handleOnChange}
							value={this.state.post}
							className=" col-sm-8"
						/>
					</div>
					<input type="submit" className="mx-auto" />
				</form>

				<Link to="/">
					<div className="button" align="center">
						<button>Cancel</button>
					</div>
				</Link>
			</div>
		);
	}
}

export default PostForm;

PostForm.propTypes = {
	handleToggle: PropTypes.func,
	handleAddPost: PropTypes.func
};
