import React from 'react';
import { Link, Route } from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import NavBar from '../../components/NavBar/NavBar';

const HomePage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<NavBar />
		</div>
	);
};

export default HomePage;
