import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import Employee_Header from '../Employee_Header.jsx'
import SearchBar from 'material-ui-search-bar';
import './ManageCaretaker.css'

function ManageCaretaker() {
    const [Employees,setEmployees]=useState([]);
    const [value, setValue] = useState();
    const url='http://localhost:5000/employee/';

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    const [searchValue,setsearchValue] =useState("");
    useEffect(() => 
        axios.get(`${url}/see/caretaker`)
        .then(res =>{
            const Data=res.data;
            setEmployees(Data)
        })
        ,[])
    const doSomethingWith =(e) =>{
        const update=Employees.filter(item => (item.employeeId===e || item.name===e || item.contactNo===e || item.emailId===e));
        setEmployees(update);
    }
    return (
        <div className='ManageEmployee'>
            <Employee_Header/>
            <div className="Add-Employee">
                    <div className="Searching">
                                <select name='value' onChange={handleChange}>
                                    <option value="ID">ID</option>
                                    <option value="Name">Name</option>
                                    <option value="Contact_Number">Contact Number</option>
                                    <option value="Email_Id">Email ID</option>
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
            </div>
            {/* Id,Name,Contact_Info,Job_Role,Email_ID */}
            <table className="table">
                           
                            <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Job Role</th>
                                        <th>Email ID</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Employees.map(
                                    Employees => 
                                        <tr key={Employees.Id}>
                                            <td>{Employees.Id}</td>
                                            <td>{Employees.Name}</td>
                                            <td>{Employees.Contact_Info}</td>
                                            <td>{Employees.Job_Role}</td>
                                            <td>{Employees.Email_ID}</td>
                                            <button className="btn" >Remove Employee</button>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
                <button className="Add_Employee" >Add Employee</button>
        </div>
    )
}

export default ManageCaretaker
