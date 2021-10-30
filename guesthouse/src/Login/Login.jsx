import React from 'react';
import './Login.css';
import { useSpring, animated } from "react-spring";

function Login() {
    return (
        <div className='Login'>
            <a href='/'>
                <img 
                    className='lnmiit_logo'
                    src="logo1.png"
                />
            </a>
            <h1>WELCOME TO LNMIIT GUEST HOUSE</h1>
            <div className='Login_Container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>

                    <button>Sign In</button>
                </form>
                <a href='/'>forgot password?</a>
            </div>
        </div>
    )
}

export default Login;
