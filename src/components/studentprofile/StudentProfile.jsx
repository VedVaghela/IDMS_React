import { SideNav } from "../SideNav"
import './StudentProfile.css'

export const StudentProfile = () => {
    return(
        <div className="bgcontainer">
             <SideNav/>
            <h2 className="student-title">Hello Student</h2>
        <div className="mainc-profile">
           
            <div className="profilebox">

            </div>
            <div className="profilebox">

            </div>
            <div className="prescription-box">
            <h3 className="box-title">Previous Visits</h3>
            <hr></hr>
            </div>
        </div>
        </div>       
    )
}