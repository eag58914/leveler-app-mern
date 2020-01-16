import React, { Component } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import styles from './SignUpPage.module.css';

class SignupPage extends Component {
	constructor(props) {
		super(props);
		this.state = { message: '' };
	}

	updateMessage = (msg) => {
		this.setState({ message: msg });
	};

	render() {
		return (
			<div>
				<SignUpForm {...this.props} updateMessage={this.updateMessage} />
				<p>{this.state.message}</p>
			</div>
		);
	}
}
export default SignupPage;
