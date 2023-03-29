import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Dashboard} from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {historys} from './historys.js'
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
      <Route path="/" element="Home">
        
      </Route>
      <Route path="/signin" 
      element={<div className='App'>
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      </div>}>
      </Route>
      <Route path="/Dashboard" element={<Dashboard/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    // </AuthContextProvider>
  );
}

export default App;

