import './signin.css'
import React, {useState} from "react";

export const Rollno = () => {
    const [rollNo, setRollNo] = useState('')
    const [medicalHistory, setMedicalHistory] = useState('')

    const profile_id = sessionStorage.getItem('profile_id')
    // let uid = user_id -2;
    const token = sessionStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization",  `Bearer ${token}`);

        var raw = JSON.stringify({
          "rollno": rollNo,
          "medical_history": medicalHistory
        });

        var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`http://127.0.0.1:8000/users/profile/${profile_id}/`, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    } 
    console.log(profile_id);
    return(
        <main className="mainclass">
       
       <div className="maincontainer">
       <h1 className="pagetitle">Welcome</h1>
        <div className="auth-form-container" >
        <form className="LoginForm" onSubmit={handleSubmit}>
            <label htmlFor="email"> Enter Your Student ID </label>
            <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="number" id="rollno" name="rollno" />
            <label className="select-option">Medical History</label>
            <input type="text" className="MedicalHistory" value={medicalHistory} onChange={(e) => setMedicalHistory(e.target.value)} name="medicalHistory" id="medicalHistory"/>
            <button className="loginButton"type="submit"> Continue</button>
        </form>
        <button className="linkbutton" >Don't have an account? Register Here</button>
        </div>
        </div>
      
    </main>
    )
}