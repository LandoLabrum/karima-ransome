import data from '../delegate.json';
import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [styleData, setstyleData] = useState(null)
    const [brandData, setbrandData] = useState(null)
    useEffect(() => {
        setstyleData(data.style);
        setbrandData(data.brand.contact);
    }, [])
    return  <div id="contact" className="modal">
            <div className="modal-content">
                <h4>Contact</h4>

                <h6 className="collection">
                <a href={"tel://+".concat(brandData && brandData.tel)} className={"collection-item ".concat(styleData && styleData.primary.background + " " + styleData.primary.color)}><i className="material-icons left">phone</i><span id="tel">{brandData && brandData.tel}</span>
                </a>
                <a href={"mailTo://+".concat(brandData && brandData.email)}  className={"collection-item ".concat(styleData && styleData.primary.background + " " + styleData.primary.color)}>
                <i className="material-icons left">email</i>{brandData && brandData.email}
                </a>
                <a href={brandData && brandData.address.link} target="_blank" rel="noreferrer" className={"collection-item ".concat(styleData && styleData.primary.background + " " + styleData.primary.color)}>
                <i className="material-icons left">map</i>{brandData && brandData.address.text}</a>
                </h6>
            </div>
            <div className="modal-footer">
                <button className="modal-close waves-effect waves-green btn-flat">X</button>
            </div>
        </div>
};

