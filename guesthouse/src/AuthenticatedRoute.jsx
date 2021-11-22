import React,{Component} from 'react';
import { Route } from 'react-router';
import { Navigate } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';

class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isLoggedIn()){
            return(
                <Route {...this.props}></Route>
            )
        }else{
            return(
                <Navigate to="/login"></Navigate>
            )
        }
    }
}

export default AuthenticatedRoute;