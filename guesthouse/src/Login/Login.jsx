import React, { Component } from 'react';
import './Login.css';
import AuthenticationService from '../AuthenticationService';
import { useNavigate } from 'react-router';

function Navigate(para){
    let navi=useNavigate();
    navi(para);
}
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '' ,
            success: false,
            notsuccess:false
        }
        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.onClicked=this.onClicked.bind(this);
    }

    handlePassword(event){
        this.setState({
            password:event.target.value
        });
    }
    handleUsername(event){
        this.setState({
            username:event.target.value
        });
    }
    onClicked(){
        if(this.state.username==='19ucs071@lnmiit.ac.in' && this.state.password==='pearl@123'){
            AuthenticationService.RegisterSuccessfulLogin(this.state.username,this.state.password);
            Navigate('/admin');
        }else{
            this.setState({
                success: false,
                notsuccess:true
            })
        }
    }
    render(){
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
                        <input type='text' value={this.state.username} onChange={this.handleUsername}/>
                        <h5>Password</h5>
                        <input type='password' value={this.state.password} onChange={this.handlePassword}/>

                        <button onClick={this.onClicked}>Sign In</button>
                    </form>
                    <a href='/'>forgot password?</a>
                </div>
            </div>
        )
    }
}

export default Login;
