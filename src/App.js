import React, { Component } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignUpPage';
import userService from './services/userServices';
import NavBar from '../src/components/NavBar/NavBar';

import MainPostPage from './pages/MainPostPage/MainPostPage';
import AddPostPage from './pages/AddPostPage/AddPostPage';
import AddCommentPage from './pages/AddCommentPage/AddCommentPage';

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

	handleDeletePost = async (id) => {
		console.log(id);
		await postAPI.deleteOne(id);
		this.setState(
			(state) => ({
				posts: state.posts.filter((p) => p._id !== id)
			}),
			() => this.props.history.push('/')
		);
	};

	//figuring out how to show a specific form
	// handleGetPost = async (id) =>{
	// 	console.log(id)
	// 	await postAPI.getOne(id)
	// 	this.setState(state=>({
	// 		posts: state.posts
	// 	}),
	// 	() => this.props.history.push('/')
	// 	)
	// }

	render() {
		return (
			<div className="App">
				<h1>Leveler</h1>
				<header className="App-header">
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
					<Route
						exact
						path="/"
						render={({ history }) => (
							<MainPostPage
								posts={this.state.posts}
								handleDeletePost={this.handleDeletePost}
								user={this.state.user}
							/>
						)}
					/>
					<Route exact path="/add_post" render={() => <AddPostPage handleAddPost={this.handleAddPost} />} />
					<Route exact path="/add_comment" render={() => <AddCommentPage />} />
				</Switch>
			</div>
		);
	}
}

export default App;
