import React from 'react'
import './Details.css'
import { useState,useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

function Details4() {
    const location = useLocation();
    const navigate=useNavigate();
    const [Guests,setGuests]=useState([]);
    const [success,setsuccess]=useState(false);

    function update(value){
        const array=[].concat.apply([],value);
        console.log(value);
        setGuests(array);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/guests/search/id',{emailId:location.state.guest.emailId})
        .then(res =>{
            update(res.data);
        })
    }, [])

    const handleSubmit = () =>{
        axios.post('http://localhost:5000/guests/update/dining',{emailId:Guests.emailId})
        .then(res =>{
            if(res){
                setsuccess(true);
            }
        })
        setsuccess(true);
    }
    return (
            <div className="Feedback">
            <div className="submit">
                <h2 className="heading1">Dining Lounge Request #{Guests.Name}</h2>
                <form>
                    <div className="form">
                        <input 
                            type ="text" 
                            className = "form-input"
                            name ="Name" 
                            placeholder={`Name: ${Guests.Name}`}
                            disabled = {true}
                        />
                        
                        <input 
                            type ="text" 
                            className = "form-input"
                            name ="email" 
                            placeholder={`Email : ${location.state.guest.emailId}`}
                            disabled = {true}
                        />
                        <input 
                                type="text"
                                className="form-input"
                                name="contactNo"
                                placeholder={`Contact Number: ${Guests.contactNo}`}
                                disabled = {true}
                        />
                        <input
                            type="text"
                            className='form-input'
                            name="DateOfReservation"
                            placeholder={`Date Of Reservation :${location.state.guest.reservationDate}`}
                            disabled={true}
                        />
                        <input 
                            type="text"
                            className='form-input'
                            name="roomNo"
                            placeholder={`Room Number Alloted :${Guests.roomNo}`}
                            disabled={true}
                        />
                    </div>
                    <button classname="btn btn-danger" onClick={handleSubmit}>Approve</button>
                </form>
                {success && navigate('/Employee/Manager/Dining%20Lounge%20Requests/', {replace:true})}
            </div>
        </div>
    )
}

export default Details4;
