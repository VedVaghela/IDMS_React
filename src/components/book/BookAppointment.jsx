// import MultiSelect from "./MultiSelect"
import nurseimg from "../../assets/nurseimg.png"
import React, {useState, useEffect} from "react"
// import MultiSelection from "./MultiSelection"
import { MultiSelect } from 'primereact/multiselect';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css"; 


 

export const BookAppointment = () => {

    const [date, setDate] = useState('')
    const [symptoms, setSymptoms] = useState([]) 
    const [otherSymptoms, setOtherSymptoms] = useState('')
    const [selectedSymptoms, setSelectedSymptoms] = useState(null);
    const [selected_id, setSelected_id] = useState([])

    const token = sessionStorage.getItem("token")

      useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/appointments/symptom/`, {
          method: 'GET',
          headers: {
             'Accept': 'application/json',
             'Authorization': `Bearer ${token}`
          },
      
       })
          .then((res) => res.json())
          .then((symp) => setSymptoms(symp))
          .catch((err) => {
             console.log(err.message);
          });
      },[])
          

      const handleBook = (e) => {
        e.preventDefault();

        let data = {
         "date" : date,
         "symptoms" : selected_id,
         "extra_symptoms" : otherSymptoms
        }

        fetch(`${process.env.REACT_APP_API_URL}/appointments/appointment/`, {
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

       console.log(selected_id);
       console.log(selectedSymptoms);
       console.log(date);
       
    return(
        <>
        <div className="bgdiv">
            <h2 className="BookTitle">Book Your Appointment</h2>
            <div className="bookingBox">
                <div className="dateSelect">
                    <label>Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} name="date" id="date" />
                    <label>Symptoms</label>
                    
                    {/* <MultiSelect /> */}
                    <div className="card flex justify-content-center">
                    <MultiSelect value={selectedSymptoms}
                    onChange={(e) => {setSelectedSymptoms(e.value)
                    
                    e.value.map(s => console.log(s.id));
                    setSelected_id(e.value.map(s => s.id))
                    }} 
                    options={symptoms} optionLabel="name" display="chip" 
                    placeholder="Select Symptoms" maxSelectedLabels={10} className="w-full md:w-20rem" />
                    </div>
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

