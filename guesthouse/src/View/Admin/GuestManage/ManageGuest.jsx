import React from 'react'
import AdminHeader from '../Header/AdminHeader';
import axios from "axios";
import { useEffect } from 'react';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';
import './bootstrap.css'

function ManageGuest() {
    const [Guests,setGuests]=useState([]);
    const [value, setValue] = useState();

        const handleChange = (e) => {
            setValue(e.target.value);
            console.log(value);
        };
        const url='http://localhost:5000/guests/';

        const [searchValue,setsearchValue] =useState("");

        useEffect(() => 
        axios.get(`${url}/see`)
        .then(res =>{
            const Data=res.data;
            setGuests(Data)
        })
        ,[])
        
        const doSomethingWith =(e) =>{
            const update=Guests.filter(item => (item.guestId===e || item.name===e || item.contactNo===e || item.RoomNo===e));
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
                <AdminHeader/>
                <div className="Subclass">
                    <div className="Searching">
                        <select name='value' onChange={handleChange}>
                            <option value="ID">ID</option>
                            <option value="Name">Name</option>
                            <option value="Room_Type">Room Type</option>
                            <option value="Room_Number">Room Number</option>
                            <option value="Contact_Info">Contact Number</option>
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
                                        <th>Room Number</th>
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
                                            <td>{guest.guestType}</td>
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

export default ManageGuest
