import React from 'react'
import './bootstrap.css';

function Info({Id,Name,Contact_Info,Room_No,Room_Type,GuestType}) {
    return (
        <div className="Info">
            <div className="container">
                    <table className="table">
                        <tbody>
                            {
                                <tr key={Id}>
                                    <td>{Id}</td>
                                    <td>{Name}</td>
                                    <td>{Contact_Info}</td>
                                    <td>{Room_Type}</td>
                                    <td>{GuestType}</td>
                                    <td>{Room_No}</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    )
}

export default Info
