import React from 'react'

function SubmitForm() {
    return (
        <div className="submit">
            <div className="Form">
                <p>1.Name</p>
                <input type="text"></input>
                <p>Roll No./Designation</p>
                <input type="text"></input>
            </div>
            <div className="Form">
                <p>2.Branch/Department</p>
                <input type="text"></input>
                <p>Mobile No.</p>
                <input type="text"></input>
            </div>
            <div className="Form">
                <p>3.Guest Name</p>
                <input type="text"></input>
                <p>Relation</p>
                <input type="text"></input>
            </div>
            <div className="Form">
                <p>4. Guest Mobile No.</p>
                <input type="text"></input>
            </div>
            <div className="Form">
                <p>5.	No. of Persons</p>
                <p>Male</p>
                <input type="text"></input>
                <p>Female</p>
                <input type="text"></input>
            </div>
        </div>
    )
}

export default SubmitForm
