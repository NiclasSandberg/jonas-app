import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button, Row, Grid, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    state = {}
    render() {
        return (
            <Navbar className="mt-1" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container expand="lg">
                
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
               <Navbar.Brand className="brandTitle" href="#home">JONAS SNITT</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav ">
                    <Nav className="ml-auto">
                    <Nav.Link href="#deets">Home</Nav.Link>
                        <Nav.Link href="#deets">Media</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">About</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">Pictures</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        );
    }
}

export default CustomNavbar;

