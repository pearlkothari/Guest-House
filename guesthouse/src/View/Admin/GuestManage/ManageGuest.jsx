import React from 'react'
import AdminHeader from '../Header/AdminHeader';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';
import './bootstrap.css'

function ManageGuest() {

        const data=[
            {Id:1,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
            {Id:2,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
            {Id:3,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
            {Id:4,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'},
            {Id:5,Name:'Pearl',Contact_Info:'9521074578',Room_no:'001',Room_Type:'Single',GuestType:'General'}
        ]
        const [value, setValue] = useState();

        const handleChange = (e) => {
            setValue(e.target.value);
            console.log(value);
        };

        const [searchValue,setsearchValue] =useState("");
        
        const doSomethingWith =(e) =>{
        console.log(searchValue);
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
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Room Type</th>
                                        <th>Guest Type</th>
                                        <th>Room Number</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                data.map(
                                    guest => 
                                        <tr key={guest.Id}>
                                            <td>{guest.Id}</td>
                                            <td>{guest.Name}</td>
                                            <td>{guest.Contact_Info}</td>
                                            <td>{guest.GuestType}</td>
                                            <td>{guest.Room_Type}</td>
                                            <td>{guest.Room_no}</td>
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
