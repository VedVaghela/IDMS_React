import MultiSelect from "./MultiSelect"
import nurseimg from "../assets/nurseimg.png"

export const BookAppointment = () => {
    return(
        <>
        <div className="bgdiv">
            <h2>Book Your Appointment</h2>
            <div className="bookingBox">
                <div className="dateSelect">
                    <label>Date</label>
                    <input type="date"></input>
                    <label>Symptoms</label>
                    <MultiSelect/>
                </div>
            </div>
            <button className="bookbtn">Book</button>
            <img src={nurseimg} className="nurseimg"/>
        </div>
        </>
    )
}