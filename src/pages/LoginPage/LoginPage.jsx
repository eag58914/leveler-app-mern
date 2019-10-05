import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
	state = {
		email: '',
		pw: ''
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<div>
				<header className="header-footer">Log In</header>
				<form onSubmit={this.handleSubmit}>
					<input
						type="email"
						className="form-control"
						placeholder="Email"
						value={this.state.email}
						name="email"
						onChange={this.handleChange}
					/>
					<input
						type="password"
						className="form-control"
						placeholder="Password"
						value={this.state.pw}
						name="pw"
						onChange={this.handleChange}
					/>
					<button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
				</form>
			</div>
		);
	}
}

export default LoginPage;
