import React from 'react'
import GuestHeader from '../Guest/Header/GuestHeader.jsx'
import Container from '../Guest/Container/Container.jsx'
import './Guest.css'
import { useEffect } from 'react'

function Guest() {
    useEffect(() => {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    },[])
    return (
        <div classnxame="Guest">
            <GuestHeader/>
            <div className='Container'>
                 <Container what={"Book Your Stay"}/>
                 <Container what={"Status"}/>
                 {/* <Container what={"Feedback"}/> */}
                <Container what={"Dining Lounge"}/>
                {/* <Container what={"Check Availability"}/> */}
                <Container what={"Feedback"}/>
            </div>
        </div>
    )
}

export default Guest;
