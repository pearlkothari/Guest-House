import React,{Component} from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../../AuthenticationService.js";

class GuestHeader extends Component{
    render(){
        return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <ul className="navbar-nav">
                        {!AuthenticationService.isLoggedIn() && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {AuthenticationService.isLoggedIn() && <li ><Link className="nav-link"  to="/" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        {true && <li ><Link className="nav-link"  to="/guest">{`Hello, ${AuthenticationService.getuseremail()}`}</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {true && <li ><Link className="nav-link" to="/guest">Home</Link></li>}
                        {true && <li ><Link className="nav-link" to="/guest">Services</Link></li>}
                        {true && <li ><Link className="nav-link" to="/guest">Contacts</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default GuestHeader;