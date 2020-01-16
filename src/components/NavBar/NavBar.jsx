import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';

const NavBar = (props) => {
	let nav = props.user ? (
		<div className={style.navBar}>
			<Link to="/" className={style.mainIcon}>
				<h1>Leveler</h1>
			</Link>

			<Link to="/add_post" className={style.NavBarLink}>
				Add a Post
			</Link>

			{/* <Link to="/join" className="NavBar-Link">
				Join a Chat
			</Link> */}

			<input className={style.formControl} type="text" placeholder="Search" aria-label="Search" />
			<span className={style.NavBarWelcome}>{props.user.name}</span>
			<Link to="" className="NavBar-Link" onClick={props.handleLogout}>
				LOG OUT
			</Link>
		</div>
	) : (
		<div className={style.logoutDefault}>
			<Link to="/login" className={style.NavBarLink}>
				LOG IN
			</Link>
			&nbsp;&nbsp;|&nbsp;&nbsp;
			<Link to="/signup" className={style.NavBarLink}>
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
