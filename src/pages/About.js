import React from 'react';
import Carousel from "../components/Carousel";

export default function About() {
    return (<div className='nav-helper'>
        <div className="container center">
        <h2>About</h2>
        </div>
        <Carousel/>
        <div className="container">

            
            <div className="row">
                <div className="col s12 l6">
                    <h4>Our Mission</h4>
                    <p>
                        At Nu-Birth home services, it is our mission to provide high quality services at an affordable rates that exceeds industry standards.
                    </p>
                </div>
                <div className="col s12 l6">
                    <h4>About Us</h4>
                    <p>Nu-birth Home Care Services is family owned and operated. Our care giving experience started with our mother who started at the age of 15 and was a full-time care giver up until her passing at the age of 71. We take proud in caring for those who are in need of assistance and do it with a passion.
                        Our staff are highly trained professionals with extensive knowledge who cares deeply about our clients. We focus on our clients needs on an individual bases to support them physically, mentally, and emotionally. We work together with our clients to ensure that they receive the best quality of care.
                        “We understand that we all have plans, But life happens! Let our family become your family because family matters.”</p>
                </div>
            </div>
        </div>
        </div>
    );
}