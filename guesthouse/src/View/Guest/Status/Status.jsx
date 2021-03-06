import React from 'react'
import GuestHeader from '../Header/GuestHeader';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import AuthenticationService from "../../../AuthenticationService.js";

function Status() {
    const [Guests,setGuests]=useState([]);
    const url='http://localhost:5000/guests';

    let user=AuthenticationService.getuseremail(); 
    const email={emailId:user};
    useEffect(() =>
        axios.post(`${url}/see/Status`,email)
        .then(res =>{
            const Data=res.data;
            console.log(res.data);
            setGuests(Data)
        })
    ,[])
    return (
        <div className='Status'>
            <GuestHeader/>
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>Email ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Age</th>
                                        <th>Relation</th>
                                        <th>Room Allocated</th>
                                        <th>Status</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(
                                    guest => 
                                        <tr key={guest.emailId}>
                                            <td>{guest.emailId}</td>
                                            <td>{guest.Name}</td>
                                            <td>{guest.contactNo}</td>
                                            <td>{guest.age}</td>
                                            <td>{guest.relation}</td>
                                            <td>{guest.roomNo}</td>
                                            <button className='btn'>{`${guest.approved===true?"Granted":"Waiting"}`}</button>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Status;
