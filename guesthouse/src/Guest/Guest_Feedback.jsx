import React from 'react';
import { useState } from 'react';
import './Feedback.css';

function Guest_Feedback() {
    const [inputs, setInputs] = useState({
        name: "",
        email:"",
        feedback:""
    })
    const [count, setCount] = useState(1);

    const [page,setPage]=useState(1);

    const updateForm = (e) => {
        const Name=e.target.name;
        setInputs ({
            
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
    return(
        <div className="Feedback">
            <h1 className="heading1">THE LNM INSTITUTE OF INFORMATION TECHNOLOGY, JAIPUR</h1>
            <h2 className="heading2">FEEDBACK FORM</h2>
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
                            name ="Email" 
                            placeholder="Email"
                            onChange ={updateForm} 
                            value = {inputs.email}
                        />
                    </div>
                    <div className="feedback">
                            <input 
                                type="text"
                                className="form-input"
                                name="feedback"
                                placeholder="Feedback"
                                onChange={updateForm}
                                value={inputs.feedback}
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
        </div>
    )
}

export default Guest_Feedback;
