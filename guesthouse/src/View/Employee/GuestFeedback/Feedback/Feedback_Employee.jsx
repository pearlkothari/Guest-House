import React from 'react'
import { useNavigate } from 'react-router'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import Employee_Header from '../../Employee_Header'
import './Feedback.css'


function Feedback_Employee() {
    const [Guests,setGuests]=useState([]);
    const url='http://localhost:5000/guests/';
    useEffect(() => 
        axios.get(`${url}/see`)
        .then(res =>{
            const Data=res.data;
            setGuests(Data)
        })
        ,[])
    const navigate=useNavigate();
    return (
        <div className="Info">
            <Employee_Header/>
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Email ID</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(
                                    guest => 
                                        <tr key={guest.guestId}>
                                            <td>{guest.guestsId}</td>
                                            <td>{guest.name}</td>
                                            <td>{guest.contactNo}</td>
                                            <td>{guest.emailID}</td>
                                            <button className="btn" onClick={() => navigate('./details', {state:{guest} })}>View</button>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Feedback_Employee
