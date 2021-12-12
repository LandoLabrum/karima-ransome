import React from 'react';
import data from '../delegate';
// import { Fade } from 'react-reveal';
// import { motion } from "framer-motion"
import { motion, useAnimation } from "framer-motion"
export default function GridList() {
    const grid = data.gridlist.items
    return <div className="container">
        {/* <Fade left> */}
            <h3 className="deep-purple-text text-lighten-3" >{data.gridlist.title}</h3>
            <blockquote>{data.gridlist.description}</blockquote>
        {/* </Fade> */}
        {/* <Fade right> */}
            <div className="row">
                <h3 className="deep-purple-text text-lighten-3">Our Services</h3>
                {grid && grid.map(p =>
                    <div key={p.title} className="col s12 m6">
                        <div className="card fade-item">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img alt={p.title} className="card_image" src={p.img} />
                            </div>
                            <div className="card-content deep-purple lighten-3">
                                <span className="card-title activator">{p.title}<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal secondary">
                                <h3 className="card-title text-secondary-title">{p.title}<i className="material-icons right">close</i></h3>
                                <p>{p.description}</p>
                                {/* <a className={p.action.class} href={p.action.href}>learn more</a> */}
                            </div>
                        </div>

                    </div>
                )}
            </div>
        {/* </Fade> */}
    </div>
};

// import {Fade} from 'react-reveal';
// <Fade left>
// </Fade>