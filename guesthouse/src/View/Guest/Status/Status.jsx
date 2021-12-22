import React from 'react'
import GuestHeader from '../Header/GuestHeader';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import AuthenticationService from "../../../AuthenticationService.js";

function Status() {
    const [Guests,setGuests]=useState([]);
    const url='http://localhost:5000/guests/';

    useEffect(() => 
        axios.get(`${url}/see/Status`,AuthenticationService.getuseremail())
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
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Age</th>
                                        <th>Relation</th>
                                        <th>Status</th>
                                        <th>Room Allocated</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(
                                    guest => 
                                        <tr key={guest.guestId}>
                                            <td>{guest.guestId}</td>
                                            <td>{guest.name}</td>
                                            <td>{guest.contactNo}</td>
                                            <td>{guest.age}</td>
                                            <td>{guest.relation}</td>
                                            <td>{guest.approved}</td>
                                            <td>{guest.roomNo}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Status;
