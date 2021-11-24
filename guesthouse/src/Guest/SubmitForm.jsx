import React, { useState} from 'react';
import './SubmitForm.css';


function SubmitForm() {
    const [inputs, setInputs] = useState({
        name: [],
        Designation: [],
        Department: [],
        MobileNo: [],
        Guest_Names:[] ,
        Relations:[],
        Guest_Mobile_No:[],
        Number_of_Guest:[],
        No_of_Rooms_Required:[],
        Check_In:[]
    })
    const [count, setCount] = useState(1);

    const [page,setPage]=useState(1);

    const updateForm = (e) => {
        if(e.target.name==='No_of_Guest'){
            count=e.target.value;
        }
        setInputs ({
            ...inputs,
            [e.target.name]: [...e.target.value],
        })
        // console.log(e.target)
        // console.log(form)
    }
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
                <div className="form">
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="name" 
                        placeholder="Name"
                        onChange ={updateForm} 
                        value = {inputs.name}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Roll No/ Designation" 
                        placeholder="Roll No/ Designation"
                        onChange ={updateForm} 
                        value = {inputs.Designation}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Department" 
                        placeholder="Department"
                        onChange ={updateForm} 
                        value = {inputs.Department}
                    />

                    <input 
                        type ="tel" 
                        className = "form-input"
                        name ="phone" 
                        placeholder="Phone XXX-XXX-XXXX"
                        onChange ={updateForm} 
                        value = {inputs.MobileNo}
                    />
                    
                    <input 
                        type ="number" 
                        className = "form-input"
                        name ="Number_of_Guest" 
                        placeholder="Number of Guest"
                        onChange ={updateForm} 
                        value = {inputs.Number_of_Guest}
                    />
                    
                    <input 
                        type ="text" 
                        className = "form-input"
                        name ="Relation" 
                        placeholder="Relation"
                        onChange ={updateForm} 
                        value = {inputs.Relations}
                    />

                    <input 
                        type ="number" 
                        className = "form-input"
                        name ="Number_of_Rooms_Required" 
                        placeholder="Number of Rooms"
                        onChange ={updateForm} 
                        value = {inputs.No_of_Rooms_Required}
                    />
                </div>
                <div className="checkin">
                        <h5>Check-In</h5>
                        <input 
                            type="date"
                            className="form-input"
                            name="check_in_date"
                            placeholder="Check in date"
                            onChange={updateForm}
                            value={inputs.Check_In}
                        />
                </div>
                {/* {[...Array(page)].map((el, index) => (
                    <div className="Guest_ID">
                        Guest {index+1}:
                        <input
                            type=""
                    </div>
                ))} */}
                <button onClick={handleSubmit}>Submit</button>

                {/* <button 
                    className = "prevBtn"
                    type = "submit" 
                    onClick = {() => setCount(page -1)} //decrease the page count
                    disabled = {page <= 1} //don't do anytying when the page is the first page
                > PREV </button>

                {/* NEXT button */}
                {/* <button 
                    className = "nextBtn"
                    type = "submit" 
                    onClick = {() => setCount(page +1)}
                    disabled = {page >= count} //at the last page, disable the next button
                > NEXT </button> */}
            </form>
        </div>
    )
}

export default SubmitForm