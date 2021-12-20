import React from 'react'
import GuestHeader from '../Guest/Header/GuestHeader'
import SubmitForm from '../Guest/Form/SubmitForm.jsx'
import './RoomBooking.css'

function RoomBooking() {
    
    return (
        <div className="form-class">
            <GuestHeader/>
            <div className="container_1">
                {/* <img 
                    className='lnmiit_logo'
                    src="logo1.png"
                /> */}
                <h1 className="heading1">THE LNM INSTITUTE OF INFORMATION TECHNOLOGY, JAIPUR</h1>
                <h2 className="heading2">GUEST HOUSE REQUISTION FORM</h2>
                <SubmitForm/>
            </div>
        </div>
    )
}

export default RoomBooking
