import React, {useState} from "react";
import drimg from './drimg.png';
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    return(
    <main className="mainclass">
        <div className="imgbox">
        <img  className="docimg" src={drimg} alt="" />
        </div>
       <div className="maincontainer">
       <h1 className="pagetitle">Welcome to Doctor's Portal</h1>
        <div className="auth-form-container" >
        <form className="LoginForm" onSubmit={handleSubmit}>
            <label htmlFor="email"> Username </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label htmlFor="password"> Password </label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button className="loginButton"type="submit"> Login</button>
        </form>
        <button className="linkbutton" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register Here</button>
        </div>
        </div>
      
    </main>
    )
}