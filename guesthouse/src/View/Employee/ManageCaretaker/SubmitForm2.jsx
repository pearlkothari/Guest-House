import React, { useState} from 'react';
import { Navigate } from 'react-router';
import axios from "axios";
import './SubmitForm.css';


function SubmitForm3() {
    const [success,setsuccess]=useState(false)


    const [about, setabout] = useState({
        employeeId:"",
        jobRole:"Caretaker",
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
                        type="text"
                        className="form-input"
                        name="employeeId"
                        placeholder='Employee ID'
                        onChange={updateForm}
                        value={about.employeeId}
                        required={true}
                    />
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Name" 
                        placeholder="Name"
                        onChange ={updateForm} 
                        value = {about.Name}
                        required={true}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="jobRole" 
                        placeholder="Job Role"
                        onChange ={updateForm} 
                        value = {"Caretaker"}
                        disabled={true}
                    />
                    
                    <input 
                        type ="tel" 
                        className = "form-input"
                        name ="contactNo" 
                        placeholder="Employee Contact Number"
                        onChange ={updateForm} 
                        value = {about.contactNo}
                        required={true}
                    />

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="emailId" 
                        placeholder="Email ID"
                        onChange ={updateForm} 
                        value = {about.emailId}
                        required={true}
                    />

                    <input 
                        type ="password" 
                        className = "form-input"
                        name ="password" 
                        placeholder="Password"
                        onChange ={updateForm} 
                        value = {about.password}
                        required={true}
                    />
                    
                </div>
                <button onClick={handleSubmit}>Submit</button>
                {success && <Navigate to="/Employee/Manager/Manage%20Caretaker"></Navigate>}
            </form>
        </div>
    )
}

export default SubmitForm3