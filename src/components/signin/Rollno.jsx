import './signin.css'
import React, {useState} from "react";

export const Rollno = () => {
    const [rollNo, setRollNo] = useState('')

    const user_id = sessionStorage.getItem('user_id')
    let uid = user_id -2;
    const token = sessionStorage.getItem('token')

    const handleSubmit = (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization",  `Bearer ${token}`);

        var raw = JSON.stringify({
          "rollno": rollNo,
          "user": user_id
        });

        var requestOptions = {
          method: 'PATCH',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch(`https://it262-proj-44tb.onrender.com/users/profile/${uid}/`, requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    } 

    return(
        <main className="mainclass">
       
       <div className="maincontainer">
       <h1 className="pagetitle">Welcome</h1>
        <div className="auth-form-container" >
        <form className="LoginForm" onSubmit={handleSubmit}>
            <label htmlFor="email"> Enter Your Student ID </label>
            <input value={rollNo} onChange={(e) => setRollNo(e.target.value)} type="number" id="rollno" name="rollno" />
            <button className="loginButton"type="submit"> Continue</button>
        </form>
        <button className="linkbutton" >Don't have an account? Register Here</button>
        </div>
        </div>
      
    </main>
    )
}