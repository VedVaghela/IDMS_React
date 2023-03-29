import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';
import './App.css';
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Dashboard} from "./components/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [currentForm, setCurrentForm] = useState("Login");

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" 
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
    
  );
}

export default App;

