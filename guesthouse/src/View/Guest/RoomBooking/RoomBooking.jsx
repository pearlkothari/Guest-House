import React from 'react'
import GuestHeader from '../Header/GuestHeader'
import SubmitForm from '../Form/SubmitForm.jsx'
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
                <SubmitForm/>
            </div>
        </div>
    )
}

export default RoomBooking
