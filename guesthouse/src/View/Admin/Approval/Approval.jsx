import React from 'react'
import { useNavigate } from 'react-router'
import AdminHeader from '../Header/AdminHeader'
import './Approval.css'

function Approval() {

    const Guest=[
        {guestId:1,Name:'Pearl Kothari',contactNo:'9919919191',emailID:'pearlkothari@gmail.com',Room_Type:'Double'},
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

export default Approval;
