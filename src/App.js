import React, { Component } from 'react';
import LoginPage from './pages/LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignUpPage';
import userService from './utils/userServices';
import NavBar from '../src/components/NavBar/NavBar';
import MainPost from './components/MainPost/MainPost';
import PostForm from './components/PostForm/PostForm';

class App extends Component {
	state = {
		user: userService.getUser(),
		isShowing: true,
		posts: []
	};

	componentDidMount = () => {
		getAll().then((results) => {
			console.log('started line 17:::', results); // this comes back as an arry of objects
			this.setState({
				posts: results // we do not need to spread it becuase we are just updating the posts to hold the arry of obj
			});
		});
	};

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

	handleDeletePost = (id) => {
		let newState = this.state.posts.filter((item) => this.state.posts[id] !== item);
		this.setState({
			posts: newState
		});
	};

	render() {
		const allPosts = this.state.posts.map((item, index) => {
			return (
				<MainPost
					key={index}
					user={item.author}
					content={item.post}
					id={index}
					handleDelete={this.handleDeletePost}
					votes={item.votes}
				/>
			);
		});
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

				{this.state.user ? (
					<PostForm handleAddPost={this.handleAddPost} handleToggle={this.handleShowForm} />
				) : (
					<button onClick={this.handleShowForm}>Add Post</button>
				)}
				<ul>{allPosts}</ul>
			</div>
		);
	}
}

export default App;

//get all post,TODO: set up routes and controller to get all the post
async function getAll() {
	const url = '/api/posts';
	const initialFetch = await fetch(url);
	const fetchJSON = await initialFetch.json();
	return await fetchJSON;
}

async function handleVerbs(url, options) {
	const initalFetch = await fetch(url, options);
	const fetchJSON = await initalFetch.json();
	return await fetchJSON;
}
