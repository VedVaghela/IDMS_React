import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';

export const DocNav = () => {
    return(
    
        <div className='nav'>
            <Link className="navop" to="/searchuser" ><i class="fa-regular fa-user fa-2xl"></i></Link>
            <Link className="navop" to="/dashboard"><i class="fa-regular fa-calendar-check fa-2xl"></i></Link>
            <Link className="navop" to="/docbroadcast"><i class="fa-regular fa-bell fa-2xl"></i></Link>
        </div>
        
    )
} 