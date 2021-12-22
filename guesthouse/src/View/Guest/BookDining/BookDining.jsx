import React from 'react'
import './BookDining.css'
import { useState } from 'react';
import { Navigate } from 'react-router';
import axios from "axios";

function BookDining() {

    const [success,setsuccess]=useState(false);

    const [about,setabout] = useState({
        guestId:"",
        reservationDate:"",
        totalGuests:""
    })

    const updateForm = (event) =>{
        setabout({
            ...about,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) =>{
        setsuccess(true);
        axios.post("http://localhost:5000/guests/bookDining",about)
        .then(
            alert(`Booked dining SuccessFully for Guest: ${about.guestId}`)
        )
    }

    return (
        <div className='submit'>
            <h1>Dining Lounge Reservation</h1>
            <form>
                <div className='form' onSubmit={handleSubmit}>
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="guestId" 
                        placeholder="Guest emailId"
                        onChange ={updateForm} 
                        value = {about.guestId}
                    />
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="totalGuests" 
                        placeholder="Total Number Of Guest"
                        onChange ={updateForm} 
                        value = {about.totalGuests}
                    />
                    
                </div>
                <div className="Reservation_Date">
                        <h5>Reservation Date</h5>
                        <input 
                            type="date"
                            className="form-input"
                            name="ReservationDate"
                            onChange={updateForm}
                            value={about.reservationDate}
                        />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {success && <Navigate to="/guest"/>}
        </div>
    )
}

export default BookDining
