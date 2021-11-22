import React from 'react'
import './bootstrap.css';

function Info({Id,Name,Contact_Info,Job_Role,Email_ID}) {
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
                                    <td>{Job_Role}</td>
                                    <td>{Email_ID}</td>
                                    <button >Remove</button>
                                </tr>
                            }

                        </tbody>
                    </table>

                </div>
        </div>
    )
}

export default Info
