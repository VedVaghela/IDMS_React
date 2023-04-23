
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
               


import React, { useState, useEffect } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function MultiSelection() {
    const [selectedSymptoms, setSelectedSymptoms] = useState(null);
    const [symptoms, setSymptoms] = useState([]);

    const token = sessionStorage.getItem("token")

      useEffect(() => {
        fetch('https://web-production-d445c.up.railway.app/appointments/symptom/', {
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

     
    
    const symptom_key = symptoms.map(s => s.id)
    const symptom_name = symptoms.map(s => s.name)

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div className="card flex justify-content-center">
            <MultiSelect value={selectedSymptoms} onChange={(e) => setSelectedSymptoms(e.value)} options={symptoms} optionLabel="name" display="chip" 
                placeholder="Select Symptoms" maxSelectedLabels={10} className="w-full md:w-20rem" />
        </div>
    );
}
        