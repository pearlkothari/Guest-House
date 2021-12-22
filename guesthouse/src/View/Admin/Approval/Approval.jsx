import React from 'react'
import { useNavigate } from 'react-router'
import AdminHeader from '../Header/AdminHeader'
import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import './Approval.css'

function Approval() {

    const [Guest,setGuest]=useState([]);

    const url='http://localhost:5000/employee/';

    useEffect(() => 
        axios.get(`${url}/approveGuests`)
        .then(res =>{
            const Data=res.data;
            setGuest(Data)
        })
    ,[])

    const navigate=useNavigate();
    return (
        <div className="Info">
            <AdminHeader/>
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
                                Guest.map(
                                    guest => 
                                        <tr key={guest.guestId}>
                                            <td>{guest.guestId}</td>
                                            <td>{guest.Name}</td>
                                            <td>{guest.contactNo}</td>
                                            <td>{guest.emailId}</td>
                                            <button className="btn" onClick={() => navigate('./details', {state:{guest} })}>View</button>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Approval;
