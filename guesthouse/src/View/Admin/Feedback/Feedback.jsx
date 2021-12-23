import React from 'react'
import { useNavigate } from 'react-router'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import AdminHeader from '../Header/AdminHeader'
import './Feedback.css'


function Feedback() {
    const [Guests,setGuests]=useState([]);
    const url='http://localhost:5000/employee/';
    useEffect(() => 
        axios.get(`${url}/see/feedback`)
        .then(res =>{
            const Data=res.data;
            setGuests(Data)
        })
        ,[])
    const navigate=useNavigate();
    return (
        <div className="Info">
            <AdminHeader/>
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(
                                    guest => 
                                        <tr>
                                            <td>{guest.name}</td>
                                            <td>{guest.emailId}</td>
                                            <td><button className="btn" onClick={() => navigate('./details', {state:{guest} })}>View</button></td>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Feedback
