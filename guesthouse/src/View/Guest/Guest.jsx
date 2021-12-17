import React from 'react'
import GuestHeader from './GuestHeader'
import Container from './Container'
import './Guest.css'
import SimpleImageSlider from "react-simple-image-slider";

function Guest() {
    const Image=[
        {url:'https://admissions.lnmiit.ac.in/assets/img/gallery/big/360%20VIEW%20OF%20LNMIIT.jpg'},
        {url:'https://educationiconnect.com/wp-content/uploads/2019/03/LNM-Institute-of-Information-Technology-Fee-Structure.jpg'},
    ]
    return (
        <div classname="Guest">
            <GuestHeader/>
            <div className="ImageSlider">
                <SimpleImageSlider
                        width={1450}
                        height={500}
                        images={Image}
                        showNavs={true}
                        loop={true}
                        autoPlay={true}
                />
            </div>
            <div className='Container'>
                 <Container what={"Book Your Stay"}/>
                 <Container what={"Status"}/>
                 {/* <Container what={"Feedback"}/> */}
            </div>
            <div className='Container'>
                <Container what={"Dining Lounge"}/>
                <Container what={"Check Availability"}/>
            </div>
        </div>
    )
}

export default Guest;
