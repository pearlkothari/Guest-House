import React, { useState} from 'react';
import { Navigate } from 'react-router';
import './SubmitForm.css';


function SubmitForm() {
    const [success,setsuccess]=useState(false)

    const gender=['M','F'];

    const [about, setabout] = useState({
        name: "",
        Designation: "",
        Department: "",
        MobileNo: "",
        GuestName:"",
        GuestContact:"",
        Relation:"",
        Age:"",
        Gender:"",
        Check_In:"",
        Check_Out:""
    })

    const updateForm= (event) =>{
        setabout({
            ...about,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit=(event) =>{
        event.preventDefault();
        console.log("Submit SuccessFully");
        console.log(about);
        
        setsuccess({
            [success]:true
        })
    }
    return (
        <div className="submit">
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
                        name ="Designation" 
                        placeholder="Roll No/ Designation"
                        onChange ={updateForm} 
                        value = {about.Designation}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Department" 
                        placeholder="Department"
                        onChange ={updateForm} 
                        value = {about.Department}
                    />
                    
                    <input 
                        type ="tel" 
                        className = "form-input"
                        name ="MobileNo" 
                        placeholder="Your Mobile Number"
                        onChange ={updateForm} 
                        value = {about.MobileNo}
                    />

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="GuestName" 
                        placeholder="Guest Name"
                        onChange ={updateForm} 
                        value = {about.GuestName}
                    />

                    <input 
                        type ="tel" 
                        className = "form-input"
                        name ="GuestContact" 
                        placeholder="Guest Mobile Number"
                        onChange ={updateForm} 
                        value = {about.GuestContact}
                    />

                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Relation" 
                        placeholder="Guest Relation"
                        onChange ={updateForm} 
                        value = {about.Relation}
                    />
                    <input 
                        type ="Age" 
                        className = "form-input"
                        name ="Age" 
                        placeholder="Guest Age"
                        onChange ={updateForm} 
                        value = {about.Age}
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
                            name="Check_In"
                            placeholder="Check In"
                            onChange={updateForm}
                            value={about.Check_In}
                        />
                        <h5>Check-Out</h5>
                        <input 
                            type="date"
                            className="form-input"
                            name="Check_Out"
                            placeholder="Check Out"
                            onChange={updateForm}
                            value={about.Check_Out}
                        />
                </div>
                <button onClick={handleSubmit}>Submit</button>

                {/* {success && <Navigate to="/guest"></Navigate>} */}
            </form>
        </div>
    )
}

export default SubmitForm