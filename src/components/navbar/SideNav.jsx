import React, {Component} from 'react';
import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';

export const SideNav = () => {
    return(
    
        <div className='nav'>
            <Link className="navop" to="/book" ><i class="fa-regular fa-calendar-check fa-2xl"></i></Link>
            <Link className="navop" to="/studentprofile"><i class="fa-regular fa-user fa-2xl"></i></Link>
            <Link className="navop" to="/broadcast"><i class="fa-regular fa-bell fa-2xl"></i></Link>
        </div>
        
    )
} 