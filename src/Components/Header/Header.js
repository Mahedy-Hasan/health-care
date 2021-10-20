import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className='header'>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Doctor Hub</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/service">Service</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/about">About</Link>
                        <Link to="/login">Login </Link>
                        <Link to="/registration">Registration</Link>
                        <div className="mx-5">
                        <span className="text-white m-2">{user?.displayName} </span>
                        {user?.email &&  <Button onClick={logout} variant="outline-dark text-white mx-2 ">Logout</Button>}
                        </div>


                        {/* <Nav.Link as={link} href="/home">Home</Nav.Link>
                        <Nav.Link as={link} href="/service">Service</Nav.Link>
                        <Nav.Link as={link} href="/blog">Blog</Nav.Link> 
                        <Nav.Link as={link} href="/about">About</Nav.Link> 
                        <Nav.Link as={link} href="/Login">Login</Nav.Link> 
                        <Nav.Link as={link} href="/">Registration</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>

            {/* <Link to="/home">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Login </Link>
            <Link to="/registration">Registration</Link>
            <span>{user?.displayName} </span>
           {user?.email && <button onClick={logout}>Log out</button>} */}
        </div>
    );
};

export default Header;