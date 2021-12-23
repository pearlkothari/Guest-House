import React from 'react'
import Employee_Header from '../Employee_Header.jsx';

function ManageRooms() {

    return (
        <div className='Rooms'>
            <Employee_Header/>
            <div className='Employee_Rooms'>
                <table>
                    <thead>
                        <th></th>
                    </thead>
                </table>
            </div>
        </div>
    )
}

export default ManageRooms
