import React, { useState, useEffect } from "react";
import { SideNav } from "../navbar/SideNav";
import { TopNav } from "../TopNav";
import "./StudentProfile.css";
import { Link } from "react-router-dom";

export const MobStudentProfile = () => {
  const [pastAppointments, setPastAppointments] = useState({
    date: [],
    name: [],
    rollno: [],
    prescription_id: [],
    prev: []
  });

  const token = sessionStorage.getItem("token");
  console.log(token);
  let uid = sessionStorage.getItem("profile_id");
  console.log(uid);
  // uid = uid - 2
  // console.log(uid);
  useEffect(() => {
    //     fetch(`https://it262-proj-44tb.onrender.com/users/profile/${uid}`, {
    //       method: 'GET',
    //       headers: {
    //          'Accept': 'application/json',
    //          'Content-Type': 'application/json',
    //          'Authorization': `Bearer ${token}`
    //       },
    //    })
    //       .then((res) => res.json())
    //       .catch((err) => {
    //          console.log(err.message);
    //       });
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
      mode: 'no-cors',
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`https://it262-proj-44tb.onrender.com/users/profile/${uid}/`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);

  //previous appointments
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      mode: 'no-cors',
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://it262-proj-44tb.onrender.com/appointments/appointment/`,
      requestOptions
    )
      
      .then((response) => response.json())
        // if(response.status === 404){
        // setPastAppointments({
        //     prev: 0
        // })
        //  }
        
    //   .then((res) =>{
    //     setPastAppointments({
    //       date: res?.date,
    //       name: res?.student_data.name,
    //       rollno: res?.student_data.rollno,
    //       prev: 1
    //     })}
    
    //     )
      .then((result) => console.log(result))
      //   .then(console.log(pastAppointments))
      .catch((error) => console.log("error", error));

    // console.log(pastAppointments.rollno);
    //   console.log(pastAppointments.map(apt => apt.date));
  }, []);

  //prescription ids
  // useEffect(()=>{
  //     var myHeaders = new Headers();
  //     myHeaders.append("Accept", "application/json");
  //     myHeaders.append("Authorization", `Bearer ${token}` );
  //     var requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow'
  //     };

  //     fetch("https://it262-proj-44tb.onrender.com/appointments/prescription/", requestOptions)
  //       .then(response => response.text())
  //       .then(result => console.log(result))
  //       .catch(error => console.log('error', error));
  // },[])

//   console.log(pastAppointments.prev);

  return (
    <div className="bgcontainer">
      <SideNav />
      {/* <TopNav/> */}
      <h2 className="student-title">Your Profile</h2>
      <div className="mainc-profile">
        <div className="profilebox" id="studentbox">
          {/* <h2 className="sname">{pastAppointments.name}</h2>
          <h3 className="srollno">{pastAppointments.rollno}</h3> */}
          <h2 className="sname">Ved Vaghela</h2>
          <h3 className="srollno">202152343</h3>
        </div>
        <div className="profilebox" id="box2"></div>
        <div className="prescription-box">
          <h3 className="box-title">Previous Visits</h3>
          <hr></hr>
          <div className="plistbox">
            {/* <div className="p-apmt">
            <div className="apmt-name">{pastAppointments.date}</div>
            <Link to="/prescription"><i className="fa-solid fa-caret-right fa-2xl pres"></i></Link>
            </div>
            <div className="p-apmt">
            <div className="apmt-name">20-4-2023</div>
            <Link to="/prescription"><i className="fa-solid fa-caret-right fa-2xl"></i></Link>
            </div>
            <div className="p-apmt">
            <div className="apmt-name">20-4-2023</div>
            <Link to="/prescription"><i className="fa-solid fa-caret-right fa-2xl pres"></i></Link>
            </div> */}            
            <div className="p-apmt">
            <div className="apmt-name">{pastAppointments.date}</div>
              <Link to="/prescription">
                <i className="fa-solid fa-caret-right fa-2xl pres"></i>
              </Link>
            </div>

            <ol >
        
            </ol>

          </div>
        </div>
      </div>
    </div>
  );
};
