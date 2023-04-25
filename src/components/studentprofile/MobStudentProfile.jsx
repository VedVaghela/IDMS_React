import React, {useState, useEffect} from "react";
import { SideNav } from "../SideNav"
import { TopNav } from "../TopNav"
import './StudentProfile.css'
import { Link } from "react-router-dom";

export const MobStudentProfile = () => {
    
    const token = sessionStorage.getItem("token")
    console.log(token);
    let uid = sessionStorage.getItem("id")
    console.log(uid);
    uid = uid - 2
    console.log(uid);
    useEffect(() => {
        fetch(`https://it262-proj-44tb.onrender.com/users/profile/${uid}`, {
          method: 'GET',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
          },
      
       })
          .then((res) => res.json())
          .catch((err) => {
             console.log(err.message);
          });
      },[])
          

    return(
        <div className="bgcontainer">
             <SideNav/>
             {/* <TopNav/> */}
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
            <Link to="/prescription"><i className="fa-solid fa-caret-right fa-2xl pres"></i></Link>
            </div>
            <div className="p-apmt">
            <div className="apmt-name">20-4-2023</div>
            <Link to="/prescription"><i className="fa-solid fa-caret-right fa-2xl"></i></Link>
            </div>
            <div className="p-apmt">
            <div className="apmt-name">20-4-2023</div>
            <Link to="/prescription"><i className="fa-solid fa-caret-right fa-2xl pres"></i></Link>
            </div>
            </div>
            </div>
        </div>
        </div>       
    )
}