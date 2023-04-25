import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import {Login} from "./components/signin/Login";
import {Register} from "./components/signin/Register";
import {Dashboard} from "./components/dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {historys} from './historys.js'
import { BookAppointment } from "./components/book/BookAppointment";
import {Homepage} from './components/Homepage'
import { StudentProfile } from "./components/studentprofile/StudentProfile";
import { MobDashboard } from "./components/dashboard/MobDashboard";
import { MobStudentProfile } from "./components/studentprofile/MobStudentProfile";
import { MobBookAppointment } from "./components/book/MobBookAppointment";
import { MobLogin } from "./components/signin/MobLogin";
// import { AuthContextProvider } from "./components/AuthContext";


function App() {

  const [currentForm, setCurrentForm] = useState("Login");
  

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    // <AuthContextProvider>
    <BrowserRouter history={historys}>
    <Routes>
      <Route path="/" element={<Homepage/>}>
        
      </Route>
      <Route path="/signin" 
      element={<div className='App'>
      {
        currentForm === "Login" ? <MobLogin onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      </div>}>
      </Route>
      {/* <Route path="/Dashboard" element={<Dashboard/>}>
      </Route> */}
      <Route path="/dashboard" element={window.innerWidth - 600 < 0 ? (<MobDashboard/>) : (<Dashboard/>)}/>
      <Route path="/book" element={window.innerWidth - 600 < 0 ? (<MobBookAppointment/>) : (<BookAppointment/>)}>
      </Route>
      <Route path="/studentprofile" element={window.innerWidth - 600 < 0 ? (<MobStudentProfile/>) : (<StudentProfile/>)}>
      </Route>
    </Routes>
    </BrowserRouter>
    // </AuthContextProvider>
  );
}

export default App;

