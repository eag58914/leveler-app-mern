import React, { Component } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignUpPage';
import userService from './utils/userServices';
import NavBar from '../src/components/NavBar/NavBar';

import MainPostPage from './pages/MainPostPage/MainPostPage';
import AddPostPage from './pages/AddPostPage/AddPostPage';

//all post api imports
import * as postAPI from './services/post-api';

class App extends Component {
	state = {
		user: userService.getUser(),
		isShowing: true,
		posts: []
	};
	/*--Lifecycle Methods for posting--*/
	async componentDidMount() {
		const posts = await postAPI.getAll(); // this comes back as an arry of objects
		this.setState({
			posts
		});
	}

	handleShowForm = (event) => {
		this.setState({
			isShowing: !this.state.isShowing
		});
	};

	handleLogout = () => {
		userService.logout();
		this.setState({ user: null });
	};

	handleSignupOrLogin = () => {
		this.setState({ user: userService.getUser() });
	};

	//these funciton handle all the CRUD for posts/ need to update to upload photos
	handleAddPost = async (newPostData) => {
		const newPost = await postAPI.create(newPostData);
		this.setState(
			(state) => ({
				posts: [ ...state.posts, newPost ]
			}),
			() => this.props.history.push('/')
		);
	};

	// handleAddPost = ({ author, post, votes }) => {
	// 	const url = 'http://localhost:3000/api/create';
	// 	const options = {
	// 		method: 'POST',
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		},
	// 		body: JSON.stringify({ author, post, votes })
	// 	};
	// 	handleVerbs(url, options).then((results) => {
	// 		console.log(results);
	// 		this.setState({
	// 			posts: [ ...this.state.posts, results ]
	// 		});
	// 	});
	// };

	// handleDeletePost = (id) => {
	// 	const url = `http://localhost:3000/api/:${id}`;
	// 	const options = {
	// 		method: 'DELETE',
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		},
	// 		body: JSON.stringify({ id })
	// 	};
	// 	handleVerbs(url, options).then((results) => {
	// 		console.log(results);
	// 		let newState = this.state.posts.filter((item) => this.state.posts[id] !== item);
	// 		this.setState({
	// 			posts: newState
	// 		});
	// 	});
	// };

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
					<Route exact path="/" render={({ history }) => <MainPostPage posts={this.state.posts} />} />
					<Route exact path="/add_post" render={() => <AddPostPage handleAddPost={this.handleAddPost} />} />
				</Switch>
			</div>
		);
	}
}

export default App;

//get all post,TODO: set up routes and controller to get all the post
// async function getAll() {
// 	const url = '/api/posts';
// 	const initialFetch = await fetch(url);
// 	const fetchJSON = await initialFetch.json();
// 	return await fetchJSON;
// }

// async function handleVerbs(url, options) {
// 	const initalFetch = await fetch(url, options);
// 	const fetchJSON = await initalFetch.json();
// 	return await fetchJSON;
// }
