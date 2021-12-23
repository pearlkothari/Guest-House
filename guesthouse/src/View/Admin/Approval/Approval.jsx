import React from 'react'
import { useNavigate } from 'react-router'
import AdminHeader from '../Header/AdminHeader'
import { useState } from 'react'
import axios from "axios";
import { useEffect } from 'react';
import './Approval.css'

function Approval() {

    const [Guests,setGuests]=useState([]);

    const url='http://localhost:5000/employee';

    function update(value){
        const array=[].concat.apply([],value);
        setGuests(array);
        // setGuests(value);
        // for(let i=0;i<value.length;i++){
        //     // setGuests(value[i])
        //     console.log(value[i]);
        // }
    }
    useEffect(() => 
        axios.get(`${url}/approveGuests`)
        .then(res =>{
            if(res){
                update(res.data);
            }
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
                                        <th>Contact Info</th>
                                        <th>Email ID</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(guest =>
                                        <tr>
                                            <td>{guest.Name}</td>
                                            <td>{guest.contactNo}</td>
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

export default Approval;
