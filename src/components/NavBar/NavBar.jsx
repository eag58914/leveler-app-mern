import React from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
	let nav = props.user ? (
	
	  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">Leveler</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link to="/add_post">Add Post</Nav.Link>
    </Nav>


    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
	
		
			<Nav.Link to="" onClick={props.handleLogout}>
				LOG OUT
			</Nav.Link>

			</Navbar>
			
	) : (
		<div>
		<Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/login">Log In</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
    </Nav.Item>
  </Nav>
		</div>
	);

	return (
		<div >
			{nav}
		</div>
	);

};

export default NavBar;
