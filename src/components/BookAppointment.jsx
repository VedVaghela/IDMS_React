import MultiSelect from "./MultiSelect"
import nurseimg from "../assets/nurseimg.png"
import React, {useState} from "react"
// import {selected} from "./MultiSelect";

export const BookAppointment = (props) => {

    const [date, setDate] = useState('')
    const [symptoms, setSymptoms] = useState([]) 
    const [otherSymptoms, setOtherSymptoms] = useState('')

    const token = sessionStorage.getItem("token")

    const handleBook = (e) => {
        e.preventDefault();

        // setSymptoms({selected})

        let data = {
         "date" : date,
         "symptoms" : symptoms,
         "extra_symptoms" : otherSymptoms
        }

        fetch('https://web-production-d445c.up.railway.app/appointments/appointment/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
               'Content-type': 'application/json',
               'Accept': 'application/json',
               'Authorization': `Bearer ${token}`
            },
         })
            .then((res) => res.json())
            .then((data)=>console.log(data))
            .catch((err) => {
               console.log(err.message);
            });
   
               setDate('');
               setSymptoms([]);
               setOtherSymptoms('');
              
   
       }
        
       console.log(props.selected)
    

    return(
        <>
        <div className="bgdiv">
            <h2 className="BookTitle">Book Your Appointment</h2>
            <div className="bookingBox">
                <div className="dateSelect">
                    <label>Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name="date" id="date" />
                    <label>Symptoms</label>
                    <MultiSelect />
                    <label>Other</label>
                    <input type="text" value={otherSymptoms} onChange={(e) => setOtherSymptoms(e.target.value)} name="otherSymptoms" id="otherSymptoms"/>
                </div>
            </div>
            <button className="bookbtn" onClick={handleBook}>Book</button>
            <img src={nurseimg} className="nurseimg" alt="nurseimage"/>
        </div>
        </>
    )
}