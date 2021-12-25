import React, { Component } from 'react';
import './Login.css';
import AuthenticationService from '../../AuthenticationService';
import { Navigate } from 'react-router';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailId: '',
            password: '' ,
            success: false,
            what:"",
        }
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.onClicked=this.onClicked.bind(this);
    }

    componentDidMount() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    }

    handlePassword(event){
        this.setState({
            password:event.target.value
        });
    }
    handleUsername(event){
        this.setState({
            emailId:event.target.value
        });
    }
    onClicked =(e) =>{
        e.preventDefault();
        const req={emailId: this.state.emailId,password :this.state.password};
        let jobRole="";

        axios
        .post('http://localhost:5000/employee/login',req)
        .then(res =>{
            if(res.data.emailId===this.state.emailId){
                let temp="";
                jobRole=res.data.jobRole;
                if(jobRole=='Admin'){
                    temp="admin";
                }else{
                    temp="Employee";
                }
                AuthenticationService.RegisterSuccessfulLogin(res.data.emailId,jobRole);
                this.setState({
                    success:true,
                    what:temp
                })
            }
        })

        if(!this.state.success){
            axios
            .post('http://localhost:5000/guests/login',req)
            .then(res =>{
                if(res.data.emailId===this.state.emailId){
                    let temp="guest";
                    jobRole=res.data.designation;
                    AuthenticationService.RegisterSuccessfulLogin(res.data.emailId,jobRole);
                    this.setState({
                        success:true,
                        what:temp
                    })
                }
            })
            if(!this.state.success){
                alert("Invalid Email or Password!!");
            }
        }
    }
    render(){

        return (
            <div className='Login'>
                {this.state.success && <Navigate to={`/${this.state.what}`} repalce={true}/>}
                <a href='/'>
                    <img 
                        className='lnmiit_logo'
                        src="logo1.png"
                    />
                </a>
                
                <div className='Login_Container'>
                    <h5>WELCOME TO LNMIIT GUEST HOUSE</h5>
                    <h1>Sign-In</h1>
                    <form>
                        <h5>Email</h5>
                        <input type='text' placeholder="Email" onChange={this.handleUsername}/>
                        <h5>Password</h5>
                        <input type='password' palceholder="password" onChange={this.handlePassword}/>
                        <button onClick={this.onClicked}>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
