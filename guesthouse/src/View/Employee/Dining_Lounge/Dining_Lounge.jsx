import React from 'react'
import './Dining_Lounge.css';
import Employee_Header from '../Employee_Header.jsx'
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useState,useEffect } from 'react';


function Dining_Lounge() {
    const [Guests,setGuests]=useState([]);

    function update(value){
        const array=[].concat.apply([],value);
        setGuests(array);
    }
    useEffect(() => {
        axios.get('http://localhost:5000/employee/see/dining')
        .then(res =>{
            if(res){
                update(res.data);
            }
        })

    }, [])
    const navigate=useNavigate();
    return (
        <div className="Info">
            <Employee_Header/>
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>Email ID</th>
                                        <th>Reservation Date</th>
                                        <th>Total Guests</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(
                                    guest => 
                                        <tr key={guest.emailId}>
                                            <td>{guest.emailId}</td>
                                            <td>{guest.reservationDate}</td>
                                            <td>{guest.totalGuests}</td>
                                            <td><button className="btn" onClick={() => navigate('./details', {state:{guest} })}>View</button></td>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Dining_Lounge
