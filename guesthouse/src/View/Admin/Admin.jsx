import React from 'react';
import './Admin.css';
import Container from '../Admin/Container/Container.jsx';
import AdminHeader from '../Admin/Header/AdminHeader.jsx';
import { useEffect } from 'react';

function Admin() {
    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    })
    return (
        <div className="Admin">
            <AdminHeader/>
            <div className="container_1">
                 <Container what={"Manage Employee"}/>
                 <Container what={"Manage Guest"}/>
                 <Container what={"Approval"}/>
                 <Container what={"Guest Feedback"}/>
            </div>
        </div>
    )
}

export default Admin;
