import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import landingPageLogo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="#"><img src={landingPageLogo} style={{width: '200px', height: '50px'}} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                >
                    <NavLink className="nav-link" activeStyle={{color: '#368CCD'}} to="/home">Home</NavLink>
                    <NavLink className="nav-link" activeStyle={{color: '#368CCD'}} to="/about">About Us</NavLink>
                    <NavLink className="nav-link" activeStyle={{color: '#368CCD'}} to="/services">Services</NavLink>
                    <NavLink className="nav-link" activeStyle={{color: '#368CCD'}} to="/contact">Contact Us</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;