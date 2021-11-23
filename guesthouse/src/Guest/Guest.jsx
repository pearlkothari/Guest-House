import React from 'react'
import GuestHeader from './GuestHeader'
import Container from './Container'
import './Guest.css'
import SimpleImageSlider from "react-simple-image-slider";

function Guest() {
    const Image=[
        {url:'https://www.lnmiit.ac.in/Slider/data1/images/mittal-1.jpg'},
        {url:'https://www.lnmiit.ac.in/Slider/data1/images/mittal-1.jpg'},
        {url:'https://www.lnmiit.ac.in/Slider/data1/images/mittal-1.jpg'}
    ]
    return (
        <div classname="guest">
            <GuestHeader/>
            <div className="ImageSlider">
                <SimpleImageSlider
                        width={1200}
                        height={504}
                        images={Image}
                        showNavs={true}
                />
            </div>
            <div className='Container'>
                 <Container what={"Room Booking"}/>
                 <Container what={"Status"}/>
                 <Container what={"Feedback"}/>
            </div>
            <div className='Container'>
                <Container what={"Dining Lounge"}/>
                <Container what={"Check Availability"}/>
            </div>
        </div>
    )
}

export default Guest
