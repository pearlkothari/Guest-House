import React,{Component} from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../AuthenticationService";

class Employee_Header extends Component{
    render(){
        return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <ul className="navbar-nav">
                        {!AuthenticationService.isLoggedIn() && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {AuthenticationService.isLoggedIn() && <li ><Link className="nav-link"  to="/">Logout</Link></li>}
                        {true && <li ><Link className="nav-link" to="/Employee">{`Hello,${AuthenticationService.getusername()}`}</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {true && <li ><Link className="nav-link" to="/Employee">Home</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Employee_Header;