import './Broadcast.css'
import { SideNav } from '../navbar/SideNav'
import { useEffect } from 'react'

export const Broadcast = () => {

    const token = sessionStorage.getItem("token")


    return(
        <div className="mainc">
            <SideNav/>
           <div className='title-container'>
           <h5 className='pageTitle'>Message from the Doctor !</h5>
           </div>
           <div className='presc-container'>

           </div>
        </div>
    )
}