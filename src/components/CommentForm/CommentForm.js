import React, { Component } from 'react';
import styles from './Comment.Form.module.css';
import { Link } from 'react-router-dom';
class commentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comment: ''
		};
	}
	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.handleAddComment(this.props.id, this.state.comment);
		this.setState({
			comment: ''
		});
	};

	render() {
		return (
			<div className={styles.CommentSubmit} align="center">
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>Comment</label>
						<input type="text" name="comment" onChange={this.handleOnChange} value={this.state.comment} />
						<input type="submit" className="btn btn-outline-primary" />
					</form>
				</div>
				<Link to="/">
					<div>
						<button class="btn btn-outline-danger">Cancel</button>
					</div>
				</Link>
			</div>
		);
	}
}

export default commentForm;
