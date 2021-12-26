import React from 'react'
import Employee_Header from '../Employee_Header';
import axios from "axios";
import { useEffect } from 'react';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';
import './bootstrap.css'

function ManageGuestEmployee() {
        const [Guests,setGuests]=useState([]);
        const [value, setValue] = useState();
        const url='http://localhost:5000/guests/';

        const handleChange = (e) => {
            setValue(e.target.value);
            console.log(value);
        };

        const [searchValue,setsearchValue] =useState("");
        useEffect(() => 
            axios.get(`${url}/see`)
            .then(res =>{
                const Data=res.data;
                console.log(res.data);
                setGuests(Data)
            })
        ,[])
        const doSomethingWith =(e) =>{
            const update=Guests.filter(item => (item.emailId===e || item.Name===e || item.contactNo==e || item.roomNo===e));
            setGuests(update);
        }
        return (
            /*
                Search bar 
                - Search By ID
                - Search By Name 
                - Search By Contact Info
                -Search By Room Number
            */
            <div className="ManageGuest">
                <Employee_Header/>
                <div className="Subclass">
                    <div className="Searching">
                        <select name='value' onChange={handleChange}>
                            <option value="emailId">ID</option>
                            <option value="Name">Name</option>
                            <option value="contactNo">Contact Number</option>
                            <option value="guestType">Guest Type</option>
                            <option value="roomNo">Room Number</option>
                        </select>   
                        <SearchBar value={searchValue}
                                    onChange={(newValue) => setsearchValue(newValue)}
                                    onRequestSearch={doSomethingWith}
                                    style={{
                                        width: "800px",
                                        minWidth: "300px"
                                    }}
                                />
                    </div>
                    <table className="table">
                            <thead>
                                    <tr>
                                        <th>Email ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Guest Type</th>
                                        <th>Check-In</th>
                                        <th>Check-Out</th>
                                        <th>Room Number</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guests.map(
                                    guest => 
                                        <tr>
                                            <td>{guest.emailId}</td>
                                            <td>{guest.Name}</td>
                                            <td>{guest.contactNo}</td>
                                            <td>{guest.guestType}</td>
                                            <td>{guest.checkIn}</td>
                                            <td>{guest.checkOut}</td>
                                            <td>{guest.roomNo}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                    </table>
    
                </div>
            </div>
        )
}

export default ManageGuestEmployee
