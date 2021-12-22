import React, { useState} from 'react';
import { Navigate } from 'react-router';
import axios from "axios";
import './SubmitForm.css';


function SubmitForm2() {
    const [success,setsuccess]=useState(false)


    const [about, setabout] = useState({
        employeeId:"",
        jobRole:"",
        contactNo:"",
        Name:"",
        emailId:"",
        password:"",
    })

    const updateForm= (event) =>{
        setabout({
            ...about,
            [event.target.name]:event.target.value
        })
    }
    
    const handleSubmit=(event) =>{
        event.preventDefault();

        setsuccess({
            [success]:true
        })

        axios.post("http://localhost:5000/employee/add",about)
        .then(
            alert(`Added SuccessFully Employee Name: ${about.Name}`)
        )
    }
    return (
        <div className="submit">
            <form >
                <div className="form" onSubmit={handleSubmit}>

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="employeeId" 
                        placeholder="Employee ID"
                        onChange ={updateForm} 
                        value = {about.employeeId}
                    />
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Name" 
                        placeholder="Name"
                        onChange ={updateForm} 
                        value = {about.Name}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="jobRole" 
                        placeholder="Job Role"
                        onChange ={updateForm} 
                        value = {about.jobRole}
                    />
                    
                    <input 
                        type ="tel" 
                        className = "form-input"
                        name ="contactNo" 
                        placeholder="Employee Number"
                        onChange ={updateForm} 
                        value = {about.contactNo}
                    />

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="emailId" 
                        placeholder="Email ID"
                        onChange ={updateForm} 
                        value = {about.emailId}
                    />

                    <input 
                        type ="password" 
                        className = "form-input"
                        name ="password" 
                        placeholder="Password"
                        onChange ={updateForm} 
                        value = {about.password}
                    />

                </div>
                <button onClick={handleSubmit}>Submit</button>

                {success && <Navigate to="/admin/Manage%20Employee"></Navigate>}
            </form>
        </div>
    )
}

export default SubmitForm2