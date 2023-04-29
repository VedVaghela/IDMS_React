import React, { useState, useEffect } from "react";
import { DocNav } from "../navbar/DocNav";
import { TopNav } from "../TopNav";
import "./StudentProfile.css";
import { Link } from "react-router-dom";

export const SearchStudent = () => {
  const [pastAppointments, setPastAppointments] = useState([]);
  const [userDetail, setUserDetail] = useState({
    name: [],
    rollno: []
  })
  const [searchID, setSearchID] = useState([])

  const token = sessionStorage.getItem("token");
  console.log(token);
  let uid = sessionStorage.getItem("profile_id");
  console.log(uid);
  // uid = uid - 2
  // console.log(uid);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    var requestOptions = {
      // mode: 'no-cors',
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch(`${process.env.REACT_APP_API_URL}/users/profile/${uid}/`, requestOptions)
      .then(response => response.json())
      .then(res => {
        setUserDetail({
          name: res?.data.name,
          rollno: res?.data.rollno
        })
      })
      .then(result => console.log(result.data))
      .catch(error => console.log('error', error));
  }, []);

  //previous appointments
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      // mode: 'no-cors',
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/appointments/appointment/`,
      requestOptions
    )
      
      .then((response) => response.json())
      .then(res => setPastAppointments(res))

      .then((result) => console.log(result))
      //   .then(console.log(pastAppointments))
      .catch((error) => console.log("error", error));

    // console.log(pastAppointments.rollno);
    //   console.log(pastAppointments.map(apt => apt.date));
  }, []);


  console.log(pastAppointments?.data?.map(apmt => apmt.date));

  return (
    <div className="bgcontainer">
      <DocNav />
      {/* <TopNav/> */}
      <h2 className="student-title">Search Profile</h2>
      <div className="mainc-profile">
      <input className="inputid" type="text" value={searchID} onChange={(e) => setSearchID(e.target.value)} name="searchID" id="searchID" />
        <div className="profilebox" id="studentbox">
          {/* <h2 className="sname">{pastAppointments.name}</h2>
          <h3 className="srollno">{pastAppointments.rollno}</h3> */}
          <h2 className="sname">{userDetail.name}</h2>
          <h3 className="srollno">{userDetail.rollno}</h3>
        </div>
        <div className="profilebox" id="box2"></div>
        <div className="prescription-box">
          <h3 className="box-title">Appointments Booked</h3>
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
            {/* <div className="p-apmt">
            <div className="apmt-name">{pastAppointments.date}</div>
              <Link to="/prescription">
                <i className="fa-solid fa-caret-right fa-2xl pres"></i>
              </Link>
            </div> */}

            <ol >
             {pastAppointments?.data?.map(apmt => <li className="p-apmt" key={apmt}>  
             <div className="apmt-name">{apmt.date}</div>
             <Link to="/prescription">
                <i className="fa-solid fa-caret-right fa-2xl pres"></i>
              </Link>
               </li>)}
            </ol>

          </div>
        </div>
      </div>
    </div>
  );
};
