import React from 'react'
import AdminHeader from '../AdminHeader'


function Feedback(GuestName, RoomNo, feedback) {
    return (
        <div className="Info">
            <div className="container">
                    <table className="table">
                        <tbody>
                            {
                                <tr key={GuestName}>
                                    <td>{GuestName}</td>
                                    <td>{RoomNo}</td>
                                    <td>{feedback}</td>
                                </tr>
                            }

                        </tbody>
                    </table>

                </div>
        </div>
    )
}

export default Feedback
