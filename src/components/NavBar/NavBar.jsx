import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	let nav = props.user ? (
		<div>
			<span className="NavBar-welcome">Welcome, {props.user.name}</span>
			&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<Link to="/add_post" className="NavBar-Link">
				Add a Post
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<Link to="/join" className="NavBar-Link">
				Join a Chat
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
			<Link to="" className="NavBar-link" onClick={props.handleLogout}>
				LOG OUT
			</Link>
		</div>
	) : (
		<div>
			<Link to="/login" className="NavBar-link">
				LOG IN
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/signup" className="NavBar-link">
				SIGN UP
			</Link>
		</div>
	);

	return (
		<div className="NavBar" align="center">
			{nav}
		</div>
	);
};

export default NavBar;
