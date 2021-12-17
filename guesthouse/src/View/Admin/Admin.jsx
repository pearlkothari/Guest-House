import React from 'react';
import './Admin.css';
import Container from './Container.jsx';
import AdminHeader from './AdminHeader';

function Admin() {
    return (
        <div className="Admin">
            <AdminHeader/>
            <div className="container_1">
                 <Container what={"Manage Employee"}/>
                 <Container what={"Manage Guest"}/>
                 <Container what={"Approval"}/>
                 <Container what={"Feedback"}/>
            </div>
        </div>
    )
}

export default Admin;
