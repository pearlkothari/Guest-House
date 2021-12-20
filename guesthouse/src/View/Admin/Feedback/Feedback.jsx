import React from 'react'
import { useNavigate } from 'react-router'
import AdminHeader from '../Header/AdminHeader'
import './Feedback.css'


function Feedback() {

    const Guest=[
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double',Feedback:'Check',Service_Rating:4.5,Food_Rating:3.9},
        {Id:2,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double'},
        {Id:3,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double'},
        {Id:4,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double'},
        {Id:5,Name:'Pearl Kothari',Contact_Info:'9919919191',Email_ID:'pearlkothari@gmail.com',Room_Type:'Double'},
    ]
    const navigate=useNavigate();
    return (
        <div className="Info">
            <AdminHeader/>
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

export default Feedback
