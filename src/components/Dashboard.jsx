import { SideNav } from "./SideNav"
import dr from "../assets/dr.png"
import { TopNav } from "./TopNav"
import mimg from "../assets/myimg.jpg"

export const Dashboard = () => {
    return(
        <div className="mainc">
       <TopNav/>
        <SideNav/>
        
        <div className="dashboard-container">
            <img className="dbimg" src = {dr} />
            
            <div className="container1">
                <div className="profile">
                    <h5 className="upapt">Upcoming Appointment</h5>
                    <hr></hr>
                    <div className="nadetail">
                        <p>202152343 | Ved Vaghela</p>
                        <div className="symptoms">
                            Symptoms
                            <p>ACHHE MARKS DE DENA PLEASE </p>
                        </div>
                    </div>
                    <div className="cardimg">
                        <img className="imgincard"src={mimg}/>
                    </div>
                </div>
                <div className="databox">
                    
                </div>
                <div className="appointmentsbox">
                <h3 className="todayapt">Today's Appointments</h3>
                <hr></hr>
                <div className="apmt">
                    <div className="apmt-rollno">202152343</div>
                    <div className="apmt-name">Ved Vaghela</div>
                    <div className="apmt-no">1</div>
                </div>
                <div className="apmt">
                <div className="apmt-rollno">202152318</div>
                    <div className="apmt-name">Krish Patel</div>
                    <div className="apmt-no">2</div>
                </div>
                <div className="apmt">
                <div className="apmt-rollno">202152311</div>
                    <div className="apmt-name">Deepak Gohil</div>
                    <div className="apmt-no">3</div>
                </div>
                <div className="apmt">
                <div className="apmt-rollno">202152309</div>
                    <div className="apmt-name">Dharmik Jethva</div>
                    <div className="apmt-no">4</div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}