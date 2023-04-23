import { SideNav } from "./SideNav"
import './StudentProfile.css'

export const MobStudentProfile = () => {
    return(
        <div className="bgcontainer">
             <SideNav/>
            <h2 className="student-title">Hello Student</h2>
        <div className="mainc-profile">
           
            <div className="profilebox" id="studentbox">
            Ved Vaghela
            202152343
            Age

            </div>
            <div className="profilebox" id="box2">

            </div>
            <div className="prescription-box">
            <h3 className="box-title">Previous Visits</h3>
            <hr></hr>
            <div className="apmt">
            <div className="apmt-name">Ved Vaghela</div>
                    <div className="apmt-rollno">202152343</div>
                    {/* <div className="apmt-no">1</div> */}
                </div>
            </div>
        </div>
        </div>       
    )
}