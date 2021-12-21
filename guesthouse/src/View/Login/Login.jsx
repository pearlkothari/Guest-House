import React, { Component } from 'react';
import './Login.css';
import AuthenticationService from '../../AuthenticationService';
import { Navigate } from 'react-router';

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
            username:event.target.value
        });
    }
    onClicked =(e) =>{
        if(this.state.username==='19ucs071' &&  this.state.password==="123"){
            e.preventDefault();
            AuthenticationService.RegisterSuccessfulLogin(this.state.username,this.state.password,'Guest');
            this.setState({
                success:true,
                notsuccess:false
            })
        }else{
            alert("Inavlid Username or Password");
            this.setState({
                success:false,
                notsuccess:true
            })
        }
    }
    render(){

        return (
            <div className='Login'>
                {this.state.success && <Navigate to="/guest" repalce={true}/>}
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
