import React from 'react';
import './myDining.css';
import { useState,useEffect } from 'react';
import AuthenticationService from '../../../AuthenticationService';
import axios from 'axios';
import GuestHeader from '../Header/GuestHeader';

function DiningStatus() {
    const [Guests,setGuests]=useState([]);
    const url='http://localhost:5000/guests';

    let user=AuthenticationService.getuseremail(); 
    const email={emailId:user};
    useEffect(() =>
        axios.post(`${url}/see/dining`,email)
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
                                        <th>Reservation Date</th>
                                        <th>Total Guests</th>
                                        <th>Approved</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(
                                    guest => 
                                        <tr>
                                            <td>{guest.emailId}</td>
                                            <td>{guest.reservationDate}</td>
                                            <td>{guest.totalGuests}</td>
                                            <button className='btn'>{`${guest.approved===true?"Granted":"Waiting"}`}</button>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default DiningStatus
