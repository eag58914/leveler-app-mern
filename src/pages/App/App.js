import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import { Link, Route, Switch } from 'react-router-dom';
import SignupPage from './SignupPage/SignupPage';

function App() {
	return (
		<div className="App">
			<HomePage />
			<Switch>
				<Route exact path="/login" render={(props) => <LoginPage {...props} />} />
				<Route exact path="/signup" render={(props) => <SignupPage {...props} />} />
			</Switch>
		</div>
	);
}

export default App;
