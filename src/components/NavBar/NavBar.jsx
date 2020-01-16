import React from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';

const NavBar = (props) => {
	let nav = props.user ? (
		<div className="nav-bar">
			<Link to="/" className="main-icon">
				<h1>Leveler</h1>
			</Link>

			<Link to="/add_post" className="NavBar-Link">
				Add a Post
			</Link>

			{/* <Link to="/join" className="NavBar-Link">
				Join a Chat
			</Link> */}

			<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
			<span className="NavBar-welcome">{props.user.name}</span>
			<Link to="" className="NavBar-Link" onClick={props.handleLogout}>
				LOG OUT
			</Link>
		</div>
	) : (
		<div>
			<Link to="/login" className="NavBar-Link">
				LOG IN
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/signup" className="NavBar-Link">
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
