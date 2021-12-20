import React from 'react'
import GuestHeader from '../Header/GuestHeader';
function Status() {
    const guest=[
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9898988989',Age:'23',Relation:'Someone',Status:'false',Room_Allocated:'Not Yet'},
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9898988989',Age:'23',Relation:'Someone',Status:'false',Room_Allocated:'Not Yet'},
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9898988989',Age:'23',Relation:'Someone',Status:'false',Room_Allocated:'Not Yet'},
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9898988989',Age:'23',Relation:'Someone',Status:'false',Room_Allocated:'Not Yet'},
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9898988989',Age:'23',Relation:'Someone',Status:'false',Room_Allocated:'Not Yet'},
        {Id:1,Name:'Pearl Kothari',Contact_Info:'9898988989',Age:'23',Relation:'Someone',Status:'false',Room_Allocated:'Not Yet'},
    ]
    return (
        <div className='Status'>
            <GuestHeader/>
            <table className="table">
                            <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Age</th>
                                        <th>Relation</th>
                                        <th>Status</th>
                                        <th>Room Allocated</th>
                                    </tr>
                            </thead>
                            <tbody>
                            {
                                guest.map(
                                    guest => 
                                        <tr key={guest.Id}>
                                            <td>{guest.Id}</td>
                                            <td>{guest.Name}</td>
                                            <td>{guest.Contact_Info}</td>
                                            <td>{guest.Age}</td>
                                            <td>{guest.Relation}</td>
                                            <td>{guest.Status}</td>
                                            <td>{guest.Room_Allocated}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                </table>
        </div>
    )
}

export default Status;
