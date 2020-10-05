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
				<form align="center" onSubmit={this.handleSubmit}>
					<div>
						<input
							placeholder="Title"
							size="101"
							type="text"
							name="author"
							onChange={this.handleOnChange}
							value={this.state.author}
						/>
					</div>

					<div>
						<textarea
							placeholder="Write your thoughts!"
							rows="10"
							cols="100"
							type="text"
							name="post"
							onChange={this.handleOnChange}
							value={this.state.post}
						/>
					</div>
					<div>
						<Link to="/">
							<button>Cancel</button>
						</Link>
						<input type="submit" />
					</div>
				</form>
			</div>
		);
	}
}

export default PostForm;

PostForm.propTypes = {
	handleToggle: PropTypes.func,
	handleAddPost: PropTypes.func
};
