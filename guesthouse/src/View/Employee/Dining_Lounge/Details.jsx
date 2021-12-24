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

    const doSomethingWith =(e) =>{
        const update=Guests.filter(item => (item.emailId===e));
        setGuests(update);
    }
    function update(value){
        const array=value.filter(item=>(item.emailId===location.state.guest.emailId))
        setGuests(array[0]);
        // doSomethingWith(location.state.guest.emailId);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/guests/see')
        .then(res =>{
            if(res)update(res.data);
        })
    }, [])

    const handleSubmit = () =>{
        axios.post('http://localhost:5000/employee/update/dining',{emailId:Guests.emailId,reservationDate:location.state.guest.reservationDate})
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
                <h2 className="heading1">Dining Lounge Request #{location.state.guest.emailId}</h2>
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
                    </div>
                    <button className="btn btn-danger" onClick={handleSubmit}>Approve</button>
                </form>
                {success && navigate('/Employee/', {replace:true})}
            </div>
        </div>
    )
}

export default Details4;
