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
                            name ="name" 
                            placeholder={location.state.guest.Feedback}
                            disabled = {true}
                        />
                        
                        <input 
                            type ="text" 
                            className = "form-input"
                            name ="email" 
                            placeholder={location.state.guest.Feedback}
                            disabled = {true}
                        />
                    </div>
                    <div className="feedback">
                            <input 
                                type="text"
                                className="form-input"
                                name="feedback"
                                placeholder={location.state.guest.Feedback}
                                disabled = {true}
                            />
                    </div>
                    <div className='Rating'>
                        <div className='Rating1'>
                            <>
                                <h5 className='head'>Service Rating:</h5>
                                <h5>{location.state.guest.Feedback}</h5>
                            </>
                            <>
                                <h5 className='head'>Food Rating:</h5>
                                <h5>{location.state.guest.Feedback}</h5>
                            </>
                        </div>
                    </div>
                    <div className='Rating'>
                            <div className='Rating1'>
                                <h5 className='head'>Room Rating:</h5>
                                <h5>{location.state.guest.Feedback}</h5>
                                <h5 className='head'>Overall Experience:</h5>
                                <h5>{location.state.guest.Feedback}</h5>
                            </div>
                    </div>
                    <button classname="btn alert-btn" onClick={()=>navigate('/Admin/Approval/', {replace:true})}>Approve</button>

                </form>
            </div>
        </div>
    )
}

export default Details3
