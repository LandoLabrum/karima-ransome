import React, { useState, useEffect } from 'react';
import data from '../delegate';
import ScrollAnimation from 'react-animate-on-scroll';
import logo from '../media/logo.png';
import { Link } from "react-router-dom";

export default function GridList() {
    const grid = data.gridlist.items
    return <div >
        <div className="container">
        <h2 className="center" >{data.gridlist.title}</h2>
            <div className="row valign-wrapper hide-on-small-only">
            <div className="col m2">
                    <img className="responsive-img" src={logo} />
                </div>
                <div className="col m8 ">
                    <h5>{data.gridlist.description}</h5>
                    <br /> <br />
                </div>
            </div>
            <div className="row hide-on-med-and-up">
            <div className="col s4 offset-s4">
                    <img className="responsive-img" src={logo} />
                </div>
                <div className="col s12">
                    <h5>{data.gridlist.description}</h5>
                    <br /> <br />

                </div>
               
            </div>
        </div>
        <div className='container'>
            <h2 className="">Our Services</h2>
            At Nu-Birth home services, it is our mission to provide high quality services at an affordable rates that exceeds industry standards.
           <br />
           <br />
            {grid && grid.map((p, i) =>

                <ScrollAnimation animateIn="fadeIn" duration={3000}>
                    <div className='section row fade-item'>
                        <div className=''>
                            <div className={i % 2 == 0 ? "col s12 m6 l7" : "col s12 m6 push-m6 l5 push-l7 center"}>
                                <img alt={p.title} className="responsive-img" src={p.img} />
                            </div>
                            <div className={i % 2 == 0 ? "col s12 m6 l5 center" : "col s12 m6 pull-m6 pull-l4 l5 center "}>
                                <h4>{p.title}</h4>
                                <p >{p.description}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className='container'> */}
<a class="modal-trigger " href="#contactForm" className='modal-trigger btn btn-block green darken-2'>More info</a>
                    {/* </div> */}
                    <br/>
                    <hr />
                </ScrollAnimation>

            )}


        </div>
    </div>
};

// import {Fade} from 'react-reveal';
// <Fade left>
// </Fade>