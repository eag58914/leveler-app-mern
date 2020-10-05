import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	let nav = props.user ? (
		<div>
			<Link to="/">
				<h1>Leveler</h1>
			</Link>

			<Link to="/add_post">
				Add a Post
			</Link>

			{/* <Link to="/join" className="NavBar-Link">
				Join a Chat
			</Link> */}

			<input  type="text" placeholder="Search" aria-label="Search" />
			<span>{props.user.name}</span>
			<Link to="" className="NavBar-Link" onClick={props.handleLogout}>
				LOG OUT
			</Link>
		</div>
	) : (
		<div>
			<Link to="/login">
				LOG IN
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/signup">
				SIGN UP
			</Link>
		</div>
	);

	return (
		<div className="navBar" align="center">
			{nav}
		</div>
	);
};

export default NavBar;
