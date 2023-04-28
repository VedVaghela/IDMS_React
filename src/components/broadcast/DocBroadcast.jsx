import './Broadcast.css'
import { SideNav } from '../navbar/SideNav'
import { useEffect, useState } from 'react'
import { DocNav } from '../navbar/DocNav'

export const DocBroadcast = () => {

    const[tag, setTag] = useState('')
    const [message, setMessage] = useState('');

    const token = sessionStorage.getItem("token")

    const handleSubmit = (e) => {
        e.preventDefault();


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);        

        var raw = JSON.stringify({
          "tag": tag,
          "message": message
        });     

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };      

        fetch("http://127.0.0.1:8000/notifications/notification/", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));     

    }

    return(
        <div className="mainc">
            <DocNav/>
           <div className='title-container'>
           <h5 className='pageTitle'>Message from the Doctor !</h5>
           </div>
           <div className='presc-container'>
            <form onSubmit={handleSubmit}>
                <label>Type:</label>
                <input className="inputs" type="text" value={tag} onChange={(e) => setTag(e.target.value)} name="btag" id="btag " />
                <label>Enter Your Message:</label>
                <input className="bmessage" type="text" value={message} onChange={(e) => setMessage(e.target.value)} name="bmessage" id="bmessage" />
                <button className="broadcastButton" type="submit"> Send</button>
            </form>
           </div>
        </div>
    )
}