import React from 'react'

function SubmitForm() {
    return (
        <div className="submit">
            <h1>THE LNM INSTITUTE OF INFORMATION TECHNOLOGY, JAIPUR</h1>
            <h2>GUEST HOUSE REQUISTION FORM</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Roll No/Designation:
                    <input type="text" name="designation" />
                </label>
                <label>
                    Branch/Department:
                    <input type="text" name="branch" />
                </label>
                <label>
                    MobileNo:
                    <input type="number" name="mobile" />
                </label>
                <label>
                    Guest Name:
                    <input type="text" name="guest-name" />
                </label>
                <label>
                    Relation:
                    <input type="text" name="relation" />
                </label>
                <label>
                    Guest Mobile No:
                    <input type="text" name="guest-mobile" />
                </label>
                <label>
                    Number of Guests:
                    <input type="number" name="number-guests" />
                </label>
                <label>
                    Guest Mobile No:
                    <input type="text" name="guest-mobile" />
                </label>
                <label>
                    No. of Rooms Required :
                    <input type="number" name="no-rooms" />
                </label>
                <label>
                    Check-in:
                    <input type="date" name="check-in" />
                </label>
                <label>
                    Check-out:
                    <input type="date" name="check-out" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SubmitForm
