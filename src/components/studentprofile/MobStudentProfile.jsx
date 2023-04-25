import { SideNav } from "../SideNav"
import { TopNav } from "../TopNav"
import './StudentProfile.css'

export const MobStudentProfile = () => {
    return(
        <div className="bgcontainer">
             <SideNav/>
             <TopNav/>
            <h2 className="student-title">Your Profile</h2>
        <div className="mainc-profile">
           
            <div className="profilebox" id="studentbox">
                <h2 className="sname">Ved Vaghela</h2>
                <h3 className="srollno">202152343</h3>
            </div>
            <div className="profilebox" id="box2">

            </div>
            <div className="prescription-box">
            <h3 className="box-title">Previous Visits</h3>
            <hr></hr>
            <div className="plistbox">
            <div className="p-apmt">
            <div className="apmt-name">20-4-2023</div>
            <i class="fa-solid fa-caret-right fa-2xl"></i>
            </div>
            <div className="p-apmt">
            <div className="apmt-name">20-4-2023</div>
            <i class="fa-solid fa-caret-right fa-2xl"></i>
            </div>
            <div className="p-apmt">
            <div className="apmt-name">20-4-2023</div>
            <i class="fa-solid fa-caret-right fa-2xl"></i>
            </div>
            </div>
            </div>
        </div>
        </div>       
    )
}