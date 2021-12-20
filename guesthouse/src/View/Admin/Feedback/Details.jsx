import React from 'react'
import './Details.css'
import { useLocation } from 'react-router';

function Details() {
    const location = useLocation();
    console.log(location.state.guest);
    return (
        <div className='details'>

        </div>
    )
}

export default Details
