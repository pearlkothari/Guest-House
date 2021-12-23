import React, { useState} from 'react';
import { Navigate } from 'react-router';
import './SubmitForm.css';
import axios from "axios";
import AuthenticationService from '../../../AuthenticationService.js'


function SubmitForm() {
    const [success,setsuccess]=useState(false)

    let email=AuthenticationService.getuseremail();

    const [about, setabout] = useState({
        name: "",
        designation: "",
        emailId: email,
        mobileNo: "",
        Name:"",
        contactNo:"",
        relation:"",
        age:"",
        gender:"",
        checkIn:"",
        checkOut:""
    })

    const updateForm= (event) =>{
        setabout({
            ...about,
            [event.target.name]:event.target.value,
        })
    }

    const handleSubmit=(event) =>{
        event.preventDefault();
        console.log("Submit SuccessFully");
        setsuccess({
            [success]:true
        })
        axios.post("http://localhost:5000/guests/bookRoom",about)
        .then(
            alert(`Request for room reservation generated SuccessFully for Guest: ${about.Name}`)
        )
    }
    return (
        <div className="submit">
            <h5 className="heading1">THE LNM INSTITUTE OF INFORMATION TECHNOLOGY, JAIPUR</h5>
            <h6 className="heading2">GUEST HOUSE REQUISTION FORM</h6>
            <form >
                <div className="form" onSubmit={handleSubmit}>
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="name" 
                        placeholder="Name"
                        onChange ={updateForm} 
                        value = {about.name}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="designation" 
                        placeholder="Designation"
                        onChange ={updateForm} 
                        value = {about.designation}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="emailId" 
                        placeholder="EmailId"
                        onChange ={updateForm} 
                        value = {AuthenticationService.getuseremail()}
                        disabled={true}
                    />
                    
                    <input 
                        type ="tel" 
                        className = "form-input"
                        name ="mobileNo" 
                        placeholder="Your Mobile Number"
                        onChange ={updateForm} 
                        value = {about.mobileNo}
                    />

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Name" 
                        placeholder="Guest Name"
                        onChange ={updateForm} 
                        value = {about.Name}
                    />

                    <input 
                        type ="tel" 
                        className = "form-input"
                        name ="contactNo" 
                        placeholder="Guest Mobile Number"
                        onChange ={updateForm} 
                        value = {about.contactNo}
                    />

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="relation" 
                        placeholder="Guest Relation"
                        onChange ={updateForm} 
                        value = {about.relation}
                    />
                    <input 
                        type ="Age" 
                        className = "form-input"
                        name ="age" 
                        placeholder="Guest Age"
                        onChange ={updateForm} 
                        value = {about.age}
                    />
                </div>
                {/* <div className='checkin'>
                    <h5>Guest Gender</h5>
                        <select name="Gender" defaultValue={"Male"} onChange={updateForm}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                </div> */}
                <div className="checkin">
                        <h5>Check-In</h5>
                        <input 
                            type="date"
                            className="form-input"
                            name="checkIn"
                            placeholder="Check In"
                            onChange={updateForm}
                            value={about.checkIn}
                        />
                        <h5>Check-Out</h5>
                        <input 
                            type="date"
                            className="form-input"
                            name="checkOut"
                            placeholder="Check Out"
                            onChange={updateForm}
                            value={about.checkOut}
                        />
                </div>
                <button onClick={handleSubmit}>Submit</button>

                {success && <Navigate to="/guest"></Navigate>}
            </form>
        </div>
    )
}

export default SubmitForm