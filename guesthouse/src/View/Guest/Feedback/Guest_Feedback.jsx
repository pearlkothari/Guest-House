import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router';
import axios from "axios";
import EmojiRating from 'react-emoji-rating'

import './Feedback.css';
import AuthenticationService from '../../../AuthenticationService';

function Guest_Feedback() {
    let user=AuthenticationService.getuseremail();
    const [inputs, setInputs] = useState({
        name: "",
        emailId:user,
        feedback:"",
        serviceRating:"",
        foodRating:"",
        roomRating:"",
        overallExperience:""
    })
    const [count, setCount] = useState(false);

    const updateForm = (e) => {
        setInputs ({
            ...inputs,
            [e.target.name]:e.target.value
        })
    }
    const Emotions= [
        {Angry:0},
        {Mad:0.5},
        {Whatever:1},
        {Confused:2},
        {Happy:3},
        {Wow:4},
        {Love:5}
    ]
    const handleSubmit = (event) => {
        event.preventDefault();
        setCount({
            count:true 
        })
        console.log(inputs);
        axios.post("http://localhost:5000/guests/feedback",inputs)
        .then(
            alert(`Added Feedback SuccessFully for Guest: ${inputs.name}`)
        )
        .catch(err => "error: " + err);
      }

    const handleRating =(name,event) =>{
        setInputs({
            ...inputs,
            [name]:event
        })
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
                            name ="emailId" 
                            placeholder="Email"
                            onChange ={updateForm} 
                            value = {inputs.emailId}
                            disabled={true}
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
                                    variant='emoticons' 
                                    onChange={(what)=>handleRating("serviceRating",what)}/>
                            <h5>Food Rating</h5>
                            <EmojiRating 
                                    variant='emoticons' 
                                    onChange={(what)=>handleRating("foodRating",what)}/>
                        </div>
                    </div>
                    <div className='Rating'>
                            <div className='Rating1'>
                                <h5>Room Rating</h5>
                                <EmojiRating 
                                        variant='emoticons'
                                        onChange={(what)=>handleRating("roomRating",what)}/>
                                <h5>Overall Experience</h5>
                                <EmojiRating 
                                        variant='emoticons'
                                        onChange={(what)=>handleRating("overallExperience",what)} />
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
