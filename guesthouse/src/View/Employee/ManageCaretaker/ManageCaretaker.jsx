import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from 'react';
import Employee_Header from '../Employee_Header.jsx'
import SearchBar from 'material-ui-search-bar';
import './ManageCaretaker.css'
import { useNavigate } from 'react-router';

function ManageCaretaker() {
    const [Employees,setEmployees]=useState([]);
    const [value, setValue] = useState();
    const url='http://localhost:5000/employee';

    const [Id,setId]=useState(0);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    function update(value){
        let max_val=0;
        for(let i=0;i<value.length;i++){
            max_val=Math.max(parseInt(value[i].employeeId),max_val);
        }
        setId(max_val+1);
    }

    const [searchValue,setsearchValue] =useState("");
    useEffect(() => 
        axios.get(`${url}/see/caretaker`)
        .then(res =>{
            const Data=res.data;
            setEmployees(Data)
        }),
        axios.get(`${url}/see`)
        .then(res =>{
            update(res.data);
        })
        ,[])
    const doSomethingWith =(e) =>{
        const update=Employees.filter(item => (item.employeeId===e || item.name===e || item.contactNo===e || item.emailId===e));
        setEmployees(update);
    }
    const deleteEmployee =(emp) =>{
        const req={emailId:emp};
        const res= axios.delete(`${url}/delete`+emp)
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
                    <button className="Add_Employee" onClick={() => navigate('./Add_Employee',{state:`${Id}`})}>Add Employee</button>

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

export default ManageCaretaker
