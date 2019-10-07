import React, { Component } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignUpPage';
import userService from './utils/userServices';
import NavBar from '../src/components/NavBar/NavBar';

class App extends Component {
	state = {
		user: userService.getUser(),
		isShowing: true,
		posts: []
	};

	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
	};

	//these funciton handle all the CRUD for posts/ need to update to upload photos

	handleAddPost = ({ author, post, votes }) => {
		const url = 'http://localhost:3000/api/create';
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ author, post, votes })
		};
		handleVerbs(url, options).then((results) => {
			console.log(results);
			this.setState({
				posts: [ ...this.state.posts, results ]
			});
		});
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

//get all post,TODO: set up routes and controller to get all the post
async function getAll() {
	const url = 'http://localhost:3000/api/post_api';
}

async function handleVerbs(url, options) {
	const initalFetch = await fetch(url, options);
	const fetchJSON = await initalFetch.json();
	return await fetchJSON;
}
