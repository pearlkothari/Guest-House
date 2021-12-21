import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router';
import EmojiRating from 'react-emoji-rating'

import './Feedback.css';

function Guest_Feedback() {
    const [inputs, setInputs] = useState({
        name: "",
        email:"",
        feedback:"",
        Service_Rating:"",
        Food_Rating:"",
        Room_Rating:""
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
            <div className="submit">
                <h2 className="heading1">FEEDBACK FORM</h2>
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
                    <div className='Rating'>
                        <div className='Rating1'>
                            <h5>Service Rating</h5>
                            <EmojiRating 
                                    variant='emoticons' />
                        </div>
                        <div className='Rating2'>
                            <h5>Food Rating</h5>
                            <EmojiRating 
                                    variant='emoticons' />
                        </div>
                    </div>
                    <div className='Rating'>
                        <div className='Rating1'>
                                <h5>Room Rating</h5>
                                <EmojiRating 
                                        variant='emoticons' />
                            </div>
                            <div className='Rating2'>
                                <h5>Overall Experience</h5>
                                <EmojiRating 
                                        variant='emoticons' />
                        </div>
                    </div>
                    <button onClick={handleSubmit}>Submit</button>

                    {count && <Navigate to="/guest"/>}

                </form>
            </div>
        </div>
    )
}

export default Guest_Feedback;
