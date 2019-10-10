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
		event.preventdefault();
		this.props.handleAddComment(this.state);
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
				</form>
			</div>
		);
	}
}

export default commentForm;
