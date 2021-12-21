import React from 'react'
import { useNavigate } from 'react-router'
import Employee_Header from '../../Employee_Header'
import './Feedback.css'


function Feedback_Employee() {

    const Guest=[
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double',Feedback:'Check',Service_Rating:'Wow',Food_Rating:'Wow',Room_Rating:'Wow',Overall_Experience:'Wow'},
        {Id:2,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double',Feedback:'Check'},
        {Id:3,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double'},
        {Id:4,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double'},
        {Id:5,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double'},
    ]
    const navigate=useNavigate();
    return (
        <div className="Info">
            <Employee_Header/>
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Email ID</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                Guest.map(
                                    guest => 
                                        <tr key={guest.Id}>
                                            <td>{guest.Id}</td>
                                            <td>{guest.Name}</td>
                                            <td>{guest.Contact_Info}</td>
                                            <td>{guest.Email_ID}</td>
                                            <button className="btn" onClick={() => navigate('./details', {state:{guest} })}>View</button>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Feedback_Employee
