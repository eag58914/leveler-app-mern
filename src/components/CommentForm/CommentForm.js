import React, { Component } from 'react';

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
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Comment</label>
					<input type="text" name="comment" onChange={this.handleOnChange} value={this.state.comment} />
					<input type="submit" className="mx-auto" />
				</form>
			</div>
		);
	}
}

export default commentForm;
