import React from 'react'
import AdminHeader from '../Header/AdminHeader';
import axios from "axios";
import { useEffect } from 'react';
import SearchBar from 'material-ui-search-bar';
import { useState } from 'react';

function ManageUser() {
    const [users,setusers]=useState([]);
    const [value, setValue] = useState();

        const handleChange = (e) => {
            setValue(e.target.value);
        };
        const url='http://localhost:5000/guests/';

        const [searchValue,setsearchValue] =useState("");

        useEffect(() => 
            axios.get(`${url}/see/user`)
            .then(res =>{
                const Data=res.data;
                setusers(Data)
            })
        ,[])
        
        const doSomethingWith =(e) =>{
            const update=users.filter(item => (item.emailId===e || item.Name==e || item.contactNo==e || item.designation==e));
            setusers(update);
        }
        return (
            /*
                Search bar 
                - Search By ID
                - Search By Name 
                - Search By Contact Info
                -Search By Room Number
            */
            <div className="Manageuser">
                <AdminHeader/>
                <div className="Subclass">
                    <div className="Searching">
                        <select name='value' onChange={handleChange}>
                            <option value="emailId">ID</option>
                            <option value="Name">Name</option>
                            <option value="contactNo">Contact Number</option>
                            <option value="designation">Designation</option>
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
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Designation</th>
                                        <th>Contact Info</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                users.map(
                                    user => 
                                        <tr>
                                            <td>{user.Name}</td>
                                            <td>{user.emailId}</td>
                                            <td>{user.designation}</td>
                                            <td>{user.contactNo}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                    </table>
    
                </div>
            </div>
        )
}

export default ManageUser
