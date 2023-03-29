import React, {useState} from "react"
import drimg from '../assets/drimg.png';

export const Register = (props) => {

    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')
    const[name, setName] = useState('')
    const[phone, setPhone] = useState('')
    const[rollno, setRollno] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
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
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" />
            {/* <label htmlFor="rollno">Student ID</label>
            <input value={rollno} onChange={(e) => setRollno(e.target.value)} type="number" name="rollno" id="rollno" /> */}
            <label htmlFor="email"> Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label htmlFor="phone"> Phone no</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" id="phone" name="phone" />
            <label htmlFor="password"> Password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button className="registerButton" type="submit"> Register</button>
        </form>
        <button className="linkbutton"onClick={() => props.onFormSwitch('Login')}>Already have an account? Login Here</button>
        </div>
        </div>      
      </main>
    )
}
