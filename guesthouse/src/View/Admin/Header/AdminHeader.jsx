import React,{Component} from "react";
import { Link } from "react-router-dom";
import AuthenticationService from "../../../AuthenticationService";

class AdminHeader extends Component{
    render(){
        return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <ul className="navbar-nav">
                        {!AuthenticationService.isLoggedIn() && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {AuthenticationService.isLoggedIn() && <li ><Link className="nav-link"  to="/" onClick={AuthenticationService.logout}>Logout</Link></li>}
                        {true && <li ><Link className="nav-link" to="/admin">{`Hello,${AuthenticationService.getuseremail()}`}</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {true && <li ><Link className="nav-link" to="/admin">Home</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default AdminHeader;