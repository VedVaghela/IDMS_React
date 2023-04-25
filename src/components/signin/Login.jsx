import React, {useState} from "react";
import drimg from '../../assets/drimg.png';
// import AuthContext from "./AuthContext";
// import { useContext } from "react";
import axios from "axios";
import { setAuthToken } from "../../helpers/setAuthToken";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

   
    // const { login } = useContext(AuthContext);
    // const loginSubmit = async () => {
    //     let payload = {
    //       email: email.current.value,
    //       password: password.current.value,
    //     };
    //     await login(payload);
    //   };

    const handleSubmit = (e) => {
        e.preventDefault()
        
          //reqres registered sample user
        const loginPayload = {
            "email": email,
            "password": password
        }

        const config = {
            headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            //   "Authorization": "Basic e3tiYXNpY0F1dGhVc2VybmFtZX19Ont7YmFzaWNBdXRoUGFzc3dvcmR9fQ=="
            }
          };

        axios.post("https://web-production-d445c.up.railway.app/users/login/", loginPayload, config)
        .then(response => {
        //get token from response
        const token  =  response.data.data.access;
        console.log(response.data.data.access)
        //set JWT token to local
        sessionStorage.setItem("token", token);
        console.log(token)
        console.log(email)
        //set token to axios common header
        setAuthToken(token);
        
        //redirect user to home page
      window.location.href = '/Dashboard'
    })
    .catch(err => console.log(err));
};
    

    return(
    <main className="mainclass">
        <div className="imgbox">
        <img  className="docimg" src={drimg} alt="" />
        </div>
       <div className="maincontainer">
       <h1 className="pagetitle">Welcome to Doctor's Portal</h1>
        <div className="auth-form-container" >
        <form className="LoginForm" onSubmit={handleSubmit}>
            <label htmlFor="email"> Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label htmlFor="password"> Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button className="loginButton"type="submit"> Login</button>
        </form>
        <button className="linkbutton" onClick={() => props.onFormSwitch('Register')}>Don't have an account? Register Here</button>
        </div>
        </div>
      
    </main>
    )
}
