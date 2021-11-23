import React from 'react';
import './Admin.css';
import './Container.jsx';
import Container from './Container.jsx';
import AdminHeader from './AdminHeader';

function Admin() {
    return (
        
        <div className="Admin">
            <AdminHeader/>
            <div className="container_1">
                 <Container what={"ManageEmployee"}/>
                 <Container what={"ManageGuest"}/>
                 <Container what={"Approval"}/>
                 <Container what={"Feedback"}/>
            </div>
        </div>
    )
}

export default Admin;
