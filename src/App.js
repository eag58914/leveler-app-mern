import React, { Component } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignUpPage';
import userService from './utils/userServices';
import NavBar from '../src/components/NavBar/NavBar';

class App extends Component {
	state = {
		user: userService.getUser()
	};

	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					Leveler
					<NavBar user={this.state.user} handleLogout={this.handleLogout} />
				</header>
				<Switch>
					<Route
						path="/login"
						render={({ history }) => (
							<LoginPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
						)}
					/>
					<Route
						path="/signup"
						render={({ history }) => (
							<SignupPage history={history} handleSignupOrLogin={this.handleSignupOrLogin} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
