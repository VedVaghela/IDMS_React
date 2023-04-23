// import React, {Component} from 'react';
// import { Navbar } from 'react-bootstrap';

// export const TopNav = () => {
//     return(
//         <Navbar className='tnav'>
//         <div className='Welcometitle'>Welcome Dr. Strange </div>
            
//         </Navbar>
//     )
// }

import React, {Component} from 'react';
import backicon from '../assets/backicon.svg'
import bbi from '../assets/bbi.png'

export const TopNav = () => {
    return(
        <div className='tnav'>
            <img src={bbi} className='bicon'/>
        {/* <svg src={backicon} className='backicon'></svg> */}
        {/* <div className='Welcometitle'>Welcome Dr. Strange </div>     */}
        </div>
    )
}