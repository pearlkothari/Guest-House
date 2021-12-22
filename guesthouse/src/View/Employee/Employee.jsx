import React from 'react'
import AuthenticationService from '../../AuthenticationService.js'
import './Employee.css'
import Container from '../Employee/Container/Container.jsx'
import Employee_Header from './Employee_Header.jsx'
function Employee() {
    return (
        <div className='Employee'>
            <Employee_Header/>
            <div className="container_1">
                 {AuthenticationService.whatRole()==='Manager' && <Container role={'Manager'} what={"Manage Caretaker"}/>}
                 {AuthenticationService.whatRole()==='Manager' && <Container role={'Manager'} what={"Manage Guest"}/>}
                 {AuthenticationService.whatRole()==='Manager' && <Container role={'Manager'} what={"Guest Feedback"}/>}
                 {AuthenticationService.whatRole()==='Manager' && <Container role={'Manager'} what={"Manage Rooms"}/>}
                 {AuthenticationService.whatRole()==='Manager' && <Container role={'Manager'} what={"Dining Lounge Requests"}/>}

                 {AuthenticationService.whatRole()==='Caretaker' && <Container role={'Caretaker'} what={""}/>}
            </div> 
        </div>
    )
}

export default Employee
