import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router';
import './Feedback.css';

function Guest_Feedback() {
    const [inputs, setInputs] = useState({
        name: "",
        email:"",
        feedback:""
    })
    const [count, setCount] = useState(false);

    const updateForm = (e) => {
        setInputs ({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCount({
            count:true
        })
        console.log(inputs);
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
                            name ="email" 
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
                    
                    <button onClick={handleSubmit}>Submit</button>

                    {count && <Navigate to="/guest"/>}

                </form>
            </div>
        </div>
    )
}

export default Guest_Feedback;
