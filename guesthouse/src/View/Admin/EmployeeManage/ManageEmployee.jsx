import React from 'react'
import AdminHeader from '../Header/AdminHeader';
import axios from "axios";
import { useEffect } from 'react';
import SearchBar from "material-ui-search-bar";
import { useState } from 'react';
import './bootstrap.css'
import { useNavigate } from 'react-router';

function ManageEmployee() {
    const [Employees,setEmployees]=useState([]);
    
    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(value);
    };

    const url='http://localhost:5000/employee/';
    const [searchValue,setsearchValue] =useState("");

    useEffect(() => 
        axios.get(`${url}/see`)
        .then(res =>{
            const Data=res.data;
            setEmployees(Data)
        })
    ,[])

    const doSomethingWith =(e) =>{
        const update=Employees.filter(item => (item.employeeId===e || item.name===e || item.contactNo===e || item.emailId===e));
        setEmployees(update);
    }

    const deleteEmployee =(emp) =>{
        const req={emailId:emp};
        const res= axios.delete(`${url}/delete`,req)
                    .then(result=>{
                        const update=Employees.filter(item => item.emailId!=emp)
                        setEmployees(update);
                    })
        if(res){
            alert(`Employee with Employee-Id ${emp} has been deleted successfully`);
        }else{
            alert('Unexpected Error Occurred');
        }
    }
    const navigate=useNavigate();
    return (
        <div className='ManageEmployee'>
            <AdminHeader/>
            <div className="Add-Employee">
                    <div className="Searching">
                                <select name='value' onChange={handleChange}>
                                    <option value="employeeId">ID</option>
                                    <option value="name">Name</option>
                                    <option value="contactNo">Contact Number</option>
                                    <option value="emailId">Email ID</option>
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
                    <button className="Add_Employee" onClick={() => navigate('./Add_Employee',{replace:true})}>Add Employee</button>
            </div>
            {/* Id,Name,Contact_Info,Job_Role,Email_ID */}
            <table className="table">
                           
                            <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Job Role</th>
                                        <th>Email ID</th>
                                        <th>Action</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Employees.map(
                                    Employees => 
                                        <tr key={Employees.emailId}>
                                            <td>{Employees.Name}</td>
                                            <td>{Employees.contactNo}</td>
                                            <td>{Employees.jobRole}</td>
                                            <td>{Employees.emailId}</td>
                                            <td><button className="btn btn-danger" onClick={() => deleteEmployee(Employees.emailId)}>Remove Employee</button></td>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default ManageEmployee;
