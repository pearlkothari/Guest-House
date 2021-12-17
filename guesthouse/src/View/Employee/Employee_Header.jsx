import React,{Component} from "react";
import { Link } from "react-router-dom";

class GuestHeader extends Component{
    render(){
        return(
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <ul className="navbar-nav">
                        {true && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {true && <li ><Link className="nav-link"  to="/logout">Logout</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {true && <li ><Link className="nav-link" to="/admin">Home</Link></li>}
                        {true && <li ><Link className="nav-link" to="/admin">Services</Link></li>}
                        {true && <li ><Link className="nav-link" to="/admin">Contacts</Link></li>}
                        {true && <li ><Link className="nav-link" to="/admin">Feedback</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default GuestHeader;