import React from 'react'
import './Details.css'
import { useLocation, useNavigate } from 'react-router';

function Details() {
    const location = useLocation();
    const navigate=useNavigate();
    // console.log(location.state.guest);
    return (
            <div className="Feedback">
            <div className="submit">
                <h2 className="heading1">FEEDBACK FORM #{location.state.guest.name}</h2>
                <form>
                    <div className="form">
                        <input 
                            type ="text" 
                            className = "form-input"
                            name ="name" 
                            placeholder={location.state.guest.name}
                            disabled = {true}
                        />
                        
                        <input 
                            type ="text" 
                            className = "form-input"
                            name ="email" 
                            placeholder={location.state.guest.emailId}
                            disabled = {true}
                        />
                    </div>
                    <div className="feedback">
                            <input 
                                type="text"
                                className="form-input"
                                name="feedback"
                                placeholder={location.state.guest.feedback}
                                disabled = {true}
                            />
                    </div>
                    <div className='Rating'>
                        <div className='Rating1'>
                            <>
                                <h5 className='head'>Service Rating:</h5>
                                <h5>{location.state.guest.serviceRating}</h5>
                            </>
                            <>
                                <h5 className='head'>Food Rating:</h5>
                                <h5>{location.state.guest.foodRating}</h5>
                            </>
                        </div>
                    </div>
                    <div className='Rating'>
                            <div className='Rating1'>
                                <h5 className='head'>Room Rating:</h5>
                                <h5>{location.state.guest.roomRating}</h5>
                                <h5 className='head'>Overall Experience:</h5>
                                <h5>{location.state.guest.overallExperience}</h5>
                            </div>
                    </div>
                    <button onClick={()=>navigate('/admin/Guest%20Feedback', {replace:true})}>Go Back</button>

                </form>
            </div>
        </div>
    )
}

export default Details
