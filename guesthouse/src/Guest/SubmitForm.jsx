import React, { useState} from 'react'


function SubmitForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }
    return (
        <div className="submit">
<<<<<<< HEAD
=======
            <h1>THE LNM INSTITUTE OF INFORMATION TECHNOLOGY, JAIPUR</h1>
            <h2>GUEST HOUSE REQUISTION FORM</h2>
>>>>>>> 9b9772fdd83c4c4edd7f87cd2546f4029002d9d7
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
                </label>
                <label>
                    Roll No/Designation:
                    <input type="text" name="designation" value={inputs.designation || ""} onChange={handleChange} />
                </label>
                <label>
                    Branch/Department:
                    <input type="text" name="branch" value={inputs.branch || ""} onChange={handleChange} />
                </label>
                <label>
                    MobileNo:
                    <input type="number" name="mobile" value={inputs.mobile || ""} onChange={handleChange}/>
                </label>
                <label>
                    Guest Name:
                    <input type="text" name="guestname" value={inputs.guestname || ""} onChange={handleChange}/>
                </label>
                <label>
                    Relation:
                    <input type="text" name="relation" value={inputs.relation || ""} onChange={handleChange}/>
                </label>
                <label>
                    Guest Mobile No:
                    <input type="text" name="guestmobile" value={inputs.guestmobile || ""} onChange={handleChange}/>
                </label>
                <label>
                    Number of Guests:
                    <input type="number" name="numberguests" value={inputs.numberguests || ""} onChange={handleChange}/>
                </label>
                <label>
                    Guest Mobile No:
                    <input type="text" name="guestmobile" value={inputs.guestmobile || ""} onChange={handleChange} />
                </label>
                <label>
                    No. of Rooms Required :
                    <input type="number" name="norooms" value={inputs.norooms || ""} onChange={handleChange}/>
                </label>
                <label>
                    Check-in:
                    <input type="date" name="checkin" value={inputs.checkin || ""} onChange={handleChange}/>
                </label>
                <label>
                    Check-out:
                    <input type="date" name="checkout" value={inputs.checkout || ""} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SubmitForm