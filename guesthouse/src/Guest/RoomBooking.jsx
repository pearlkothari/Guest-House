import React from 'react'
import GuestHeader from './GuestHeader'
import SubmitForm from './SubmitForm'

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
            </div>
            <SubmitForm/>
        </div>
    )
}

export default RoomBooking
