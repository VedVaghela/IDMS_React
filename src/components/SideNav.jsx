import React, {Component} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';

export const SideNav = () => {
    return(
    //     <Navbar className="nav" >
    //     <Navbar.Brand href="#home">IDMS</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="ml-auto">
    //             <Nav.Link href="#features">Features</Nav.Link>
    //             <Nav.Link href="#pricing">Pricing</Nav.Link>
    //             <Nav.Link href="#deets">More details</Nav.Link>
    //             <Nav.Link eventKey={2} href="#memes">
    //                 Good stuff
    //             </Nav.Link>
    //         </Nav>
    //     </Navbar.Collapse>
    // </Navbar>
    
        <div className='nav'>
            <a className="navop" href="#section">Appointments</a>
            <a className="navop" href="#section">Profile</a>
            <a className="navop" href="#section">Prescriptions</a>
            <a className="navop" href="#section">Notice</a>
        </div>
        
    )
} 