import React, { useState} from 'react';
import './SubmitForm.css';


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
            <form onSubmit={handleSubmit}>
                <label className="Label_1">
                    Name:
                    <input type="text" name="name" value={inputs.name || ""} onChange={handleChange}/>
                </label>
                <label className="Label_1">
                    Roll No/Designation:
                    <input type="text" name="designation" value={inputs.designation || ""} onChange={handleChange} />
                </label>
                <label className="Label_1">
                    Branch/Department:
                    <input type="text" name="branch" value={inputs.branch || ""} onChange={handleChange} />
                </label>
                <label className="Label_1">
                    MobileNo:
                    <input type="tel" name="mobile" value={inputs.mobile || ""} onChange={handleChange}/>
                </label>
                <label className="Label_1">
                    Guest Name:
                    <input type="text" name="guestname" value={inputs.guestname || ""} onChange={handleChange}/>
                </label>
                <label className="Label_1">
                    Relation:
                    <input type="text" name="relation" value={inputs.relation || ""} onChange={handleChange}/>
                </label>
                <label className="Label_1">
                    Guest Mobile No:
                    <input type="text" name="guestmobile" value={inputs.guestmobile || ""} onChange={handleChange}/>
                </label>
                <label className="Label_1">
                    Number of Guests:
                    <input type="number" name="numberguests" value={inputs.numberguests || ""} onChange={handleChange}/>
                </label>
                <label className="Label_1">
                    No. of Rooms Required :
                    <input type="number" name="norooms" value={inputs.norooms || ""} onChange={handleChange}/>
                </label>
                <label className="Label_1">
                    Check-in:
                    <input type="date" name="checkin" value={inputs.checkin || ""} onChange={handleChange}/>
                </label>
                
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SubmitForm