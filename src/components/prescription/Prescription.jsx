import './Prescription.css'
import { SideNav } from '../SideNav'
import { useEffect } from 'react'

export const Prescription = () => {

    const token = sessionStorage.getItem("token")


    return(
        <div className="mainc">
            <SideNav/>
           <div className='title-container'>
           <h4 className='pageTitle'>Prescription</h4>
           </div>
           <div className='presc-container'>

           </div>
        </div>
    )
}