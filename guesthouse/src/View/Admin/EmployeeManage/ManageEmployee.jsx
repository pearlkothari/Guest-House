import React from 'react'
import AdminHeader from '../Header/AdminHeader';
import SearchBar from "material-ui-search-bar";
import { useState } from 'react';
import './bootstrap.css'
function ManageEmployee() {
    const Employees=[
        {Id:1,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:2,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:3,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:4,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:5,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'},
        {Id:6,Name:'John',Contact_Info:'9128312881',Job_Role:'Admin',Email_ID:'xyz@gmail.com'}
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
        <div className='ManageEmployee'>
            <AdminHeader/>
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
                    <button className="Add_Employee" >Add Employee</button>
                    <button className="Remove_Employee" >Remove Employee</button>
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
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default ManageEmployee;
