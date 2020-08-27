import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Form, FormControl, Button, Row, Grid, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                
             
                <Navbar className="mt-1" collapseOnSelect expand="md" bg="dark" variant="dark">
                     <div className="navbar-collapse collapse dual-nav ml-3">
                            <ul className="nav navbar-nav d-flex">
                                <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/JonasSnitt/"><i className="fa fa-facebook"></i></a></li>
                                <li className="nav-item ml-2"><a className="nav-link" href="https://www.instagram.com/jonas_snitt/?hl=en"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            </div>
                        <Nav className="socialMedia">
                        <li className="nav-item fb-ikon">
                            <a className="nav-link" href="https://www.facebook.com/JonasSnitt/"><i className="fa fa-facebook"></i></a></li>
                        <li className="nav-item inst-ikon">
                            <a className="nav-link" href="https://www.instagram.com/jonas_snitt/?hl=en"><i className="fa fa-instagram"></i></a></li>
                        </Nav>
                        
                        
                    <Navbar.Brand className="mx-auto coco" as={Link} to="/">JONAS SNITT</Navbar.Brand>
                    
               <Navbar.Toggle className="" aria-controls="responsive-navbar-nav ml-auto" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                    <Nav className="text-center ml-auto">
                    <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
                        <Nav.Link as={Link} href="/Music+Videos" to="/Music+Videos">Music + Videos</Nav.Link>
                        <Nav.Link as={Link} href="/About" to="/About">About</Nav.Link>
                        <Nav.Link as={Link} href="/Contact" to="/Contact">Contact</Nav.Link>
                        </Nav> 
                       
                    </Navbar.Collapse>
            
            </Navbar>
            </React.Fragment>

        );
    }
}
{/* 
<React.Fragment>
                
             
<Navbar className="mt-1" collapseOnSelect expand="md" bg="dark" variant="dark">
     <div className="navbar-collapse collapse dual-nav ml-3">
            <ul className="nav navbar-nav d-flex">
                <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/JonasSnitt/"><i className="fa fa-facebook"></i></a></li>
                <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/jonas_snitt/?hl=en"><i className="fa fa-instagram"></i></a></li>
            </ul>
        </div>
       
    <Navbar.Brand className="mx-auto coco" href="/">JONAS SNITT</Navbar.Brand>
    
<Navbar.Toggle className="" aria-controls="responsive-navbar-nav ml-auto" />
<Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="text-center ml-auto mr-3">
    <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/Music+Videos">Music + Videos</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
    </Nav>
    </Navbar.Collapse>

</Navbar>
</React.Fragment>
*/}
export default CustomNavbar;

