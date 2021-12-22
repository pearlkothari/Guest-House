import React from 'react'
import './Details.css'
import { useLocation, useNavigate } from 'react-router';

function Details3() {
    const location = useLocation();
    const navigate=useNavigate();
    // console.log(location.state.guest);
    return (
            <div className="Feedback">
            <div className="submit">
                <h2 className="heading1">Approval Request #{location.state.guest.Id}</h2>
                <form>
                    <div className="form">
                        <input 
                            type ="text" 
                            className = "form-input"
                            name ="Name" 
                            placeholder={location.state.guest.Name}
                            disabled = {true}
                        />
                        
                        <input 
                            type ="text" 
                            className = "form-input"
                            name ="email" 
                            placeholder={location.state.guest.emailId}
                            disabled = {true}
                        />
                        <input 
                                type="text"
                                className="form-input"
                                name="contactNo"
                                placeholder={location.state.guest.contactNo}
                                disabled = {true}
                            />
                        <input 
                                type="text"
                                className="form-input"
                                name="Designation"
                                placeholder={location.state.guest.designation}
                                disabled = {true}
                            />
                        <input 
                                type="text"
                                className="form-input"
                                name="Relation"
                                placeholder={location.state.relation}
                                disabled = {true}
                            />
                        <input 
                                type="text"
                                className="form-input"
                                name="Age"
                                placeholder={location.state.guest.age}
                                disabled = {true}
                            />
                        <input 
                                type="text"
                                className="form-input"
                                name="checkIn"
                                placeholder={location.state.guest.checkIn}
                                disabled = {true}
                            />
                        <input 
                                type="text"
                                className="form-input"
                                name="checkOut"
                                placeholder={location.state.guest.checkOut}
                                disabled = {true}
                            />
                    </div>
                    
                    <button classname="btn alert-btn" onClick={()=>navigate('/Admin/Approval/', {replace:true})}>Approve</button>

                </form>
            </div>
        </div>
    )
}

export default Details3
