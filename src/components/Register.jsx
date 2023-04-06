import React, {useState} from "react"
import drimg from '../assets/drimg.png';
// import { renderHook } from "@testing-library/react";

export const Register = (props) => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[fname, setFirstName] = useState('')
    const[lname, setLastName] = useState('')
    const[phone, setPhone] = useState('')
   //  const[posts, setPosts] = useState([]);
    // const[rollno, setRollno] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("Accept", "application/json");

        // var raw = JSON.stringify({
        //   "email": "dharmik@gmail.com",
        //   "password": "testing321",
        //   "first_name": "ved",
        //   "last_name": "vaghela",
        //   "phone": "1234567890"
        // });
        
        // var requestOptions = {
        //   method: 'POST',
        //   headers: myHeaders,
        //   body: raw,
        //   redirect: 'follow'
        // };
        
        // fetch("https://web-production-d445c.up.railway.app/users/register/", requestOptions)
        //   .then(response => { 
        //     response.json()
        //     console.log(response.json);
        //  })
        //   .then(result => console.log(result))
        //   .catch(error => console.log('error', error));
        let data = {
         "email": email,
         "password":password,
         "first_name":fname,
         "last_name":lname,
         "phone":phone
        }
        
        fetch('https://web-production-d445c.up.railway.app/users/register/', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
         },
        //  redirect: 'follow'
      })
         .then((res) => res.json())
         .then((data)=>console.log(data))
         // .then((post) => {
         //    setPosts((posts) => [post, ...posts]);
         //    setEmail('');
         //    setPassword('');
         //    setFirstName('');
         //    setLastName('');
         //    setPhone('');
         // })
         .catch((err) => {
            console.log(err.message);
         });

            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setPhone('');

    }

    return (
        <main className="mainclass">
        <div className="imgbox">
        <img  className="docimg" src={drimg} alt="" />
        </div>
        <div className="maincontainer">
        <h1 className="pagetitle">Welcome to Doctor's Portal</h1>
        <div className="auth-form-container" >
        <form className="RegisterForm" onSubmit={handleSubmit}>
            <div className="name">
            <div className="firstname">
            <label htmlFor="FirstName">First name</label>
            <input value={fname} onChange={(e) => setFirstName(e.target.value)} name="fname" id="fname" />
            </div>
            <div className="lastname">
            <label htmlFor="LastName">Last name</label>
            <input value={lname} onChange={(e) => setLastName(e.target.value)} name="lname" id="lname" />
            </div>
            </div>
            {/* <label htmlFor="rollno">Student ID</label>
            <input value={rollno} onChange={(e) => setRollno(e.target.value)} type="number" name="rollno" id="rollno" /> */}
            <label htmlFor="email"> Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label htmlFor="phone"> Phone no</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" name="phone" />
            <label htmlFor="password"> Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button className="registerButton" type="submit"> Register</button>
        </form>
        <button className="linkbutton"onClick={() => props.onFormSwitch('Login')}>Already have an account? Login Here</button>
        </div>
        </div>      
      </main>
    )
}
